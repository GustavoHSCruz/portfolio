/**
 * Busca a versão de cada projeto e o estado dos PRs em projetos de terceiros,
 * e grava tudo em `src/data/releases.json`.
 *
 * Roda antes do build, nunca no navegador: a página continua estática, sem
 * chamada a terceiro em tempo de execução e sem mexer no CSP. Os números são os
 * do último deploy, não os de agora; para atualizar, basta rebuildar.
 *
 * Se uma busca falhar (rede, rate limit do GitHub), o valor anterior do JSON
 * fica. Um build sem internet sai com a última versão conhecida em vez de quebrar.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const FILE = resolve(root, "src/data/releases.json");
const AUTHOR = "GustavoHSCruz";

const PROJECTS = {
	steamprofiler: { kind: "deployed-commit", url: "https://steamprofiler.org/version.json", repo: "GustavoHSCruz/SteamProfiler.Front" },
	vpngo: { kind: "github-release", repo: "GustavoHSCruz/VPNGo" },
	"vpngo-gui": { kind: "github-release", repo: "GustavoHSCruz/VPNGo-gui" },
};

const CONTRIBUTIONS = ["rehan-remade/universal-modder", "ran-j/PS2Recomp", "guilhermeSDB/Orbe"];

const previous = JSON.parse(await readFile(FILE, "utf8").catch(() => "{}"));

async function getJson(url) {
	const headers = { Accept: "application/json", "User-Agent": "gcruz-portfolio-build" };
	if (process.env.GITHUB_TOKEN && url.startsWith("https://api.github.com/")) {
		headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
	}
	const res = await fetch(url, { headers, signal: AbortSignal.timeout(10_000) });
	if (!res.ok) throw new Error(`${url} -> ${res.status}`);
	return res.json();
}

async function project(src) {
	if (src.kind === "github-release") {
		const r = await getJson(`https://api.github.com/repos/${src.repo}/releases/latest`);
		return { version: r.tag_name, date: r.published_at.slice(0, 10), url: r.html_url };
	}
	const v = await getJson(src.url);
	if (typeof v.commit !== "string" || !/^[0-9a-f]{40}$/.test(v.commit)) throw new Error(`${src.url}: no commit`);
	return { commit: v.commit.slice(0, 7), url: `https://github.com/${src.repo}/commit/${v.commit}` };
}

/** PRs aceitos e abertos; fechado sem merge não conta. */
async function pulls(repo) {
	const q = encodeURIComponent(`type:pr author:${AUTHOR} repo:${repo}`);
	const r = await getJson(`https://api.github.com/search/issues?q=${q}&per_page=100`);
	let merged = 0;
	let open = 0;
	for (const it of r.items) {
		if (it.state === "open") open++;
		else if (it.pull_request?.merged_at) merged++;
	}
	return { merged, open };
}

async function keep(label, task, fallback) {
	try {
		const value = await task();
		console.log(`  ${label.padEnd(30)} ${JSON.stringify(value)}`);
		return value;
	} catch (err) {
		console.warn(`  ${label.padEnd(30)} kept previous (${err.message})`);
		return fallback;
	}
}

const next = { projects: { ...previous.projects }, contributions: { ...previous.contributions } };
for (const [id, src] of Object.entries(PROJECTS)) {
	next.projects[id] = await keep(id, () => project(src), next.projects[id]);
}
for (const repo of CONTRIBUTIONS) {
	next.contributions[repo] = await keep(repo, () => pulls(repo), next.contributions[repo]);
}

await writeFile(FILE, `${JSON.stringify(next, null, "\t")}\n`, "utf8");
