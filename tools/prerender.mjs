/**
 * Pré-render: gera HTML pronto para `/` (inglês) e `/pt/` (português).
 *
 * Por que existe: sem isto o HTML servido é `<div id="root"></div>` e o conteúdo
 * só aparece depois do JS rodar. Buscador moderno até executa JS, mas a maior
 * parte dos crawlers de IA não executa. Para eles, a página estava em branco.
 *
 * Roda depois do build do cliente e do build SSR. Não edita fonte: transforma a
 * saída em `build/`.
 */
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { dirname, resolve } from "node:path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const OUT = resolve(root, "build");
const SSR = resolve(root, ".ssr/entry-server.js");

const { render, seo, personJsonLd, SITE } = await import(pathToFileURL(SSR).href);

const template = await readFile(resolve(OUT, "index.html"), "utf8");
const langs = ["en", "pt"];

function head(lang) {
	const me = seo[lang];
	const alternates = langs
		.map((l) => `    <link rel="alternate" hreflang="${seo[l].htmlLang}" href="${SITE}${seo[l].path}" />`)
		.join("\n");

	return `    <title>${me.title}</title>
    <meta name="description" content="${me.description}" />
    <link rel="canonical" href="${SITE}${me.path}" />
${alternates}
    <link rel="alternate" hreflang="x-default" href="${SITE}/" />
    <meta property="og:type" content="profile" />
    <meta property="og:locale" content="${me.locale}" />
    <meta property="og:site_name" content="Gustavo Cruz" />
    <meta property="og:title" content="${me.title}" />
    <meta property="og:description" content="${me.description}" />
    <meta property="og:url" content="${SITE}${me.path}" />
    <meta property="og:image" content="${SITE}/og.png" />
    <meta property="og:image:type" content="image/png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="Gustavo Cruz, Backend Software Engineer" />
    <meta property="profile:first_name" content="Gustavo" />
    <meta property="profile:last_name" content="Cruz" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${me.title}" />
    <meta name="twitter:description" content="${me.description}" />
    <meta name="twitter:image" content="${SITE}/og.png" />
    <script type="application/ld+json">${JSON.stringify(personJsonLd(lang))}</script>`;
}

for (const lang of langs) {
	const me = seo[lang];
	let html = template;

	// tudo que é por idioma é reescrito; o resto do template do Codex fica intacto
	html = html.replace(/<html[^>]*>/, `<html lang="${me.htmlLang}">`);
	html = html.replace(/\n?\s*<title>[\s\S]*?<\/title>/g, "");
	html = html.replace(/\n?\s*<meta\s+(?:name|property)="(?:description|og:[^"]+|twitter:[^"]+|theme-color)"[^>]*>/g, "");
	html = html.replace(/\n?\s*<link\s+rel="canonical"[^>]*>/g, "");
	html = html.replace(/\n?\s*<!--[\s\S]*?-->/g, "");

	const markup = render(lang);
	html = html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
	html = html.replace("</head>", `${head(lang)}\n    <meta name="theme-color" content="#0f1115" />\n  </head>`);

	// os assets são absolutos (/assets/...), então /pt/ usa os mesmos arquivos
	const dir = lang === "en" ? OUT : resolve(OUT, "pt");
	await mkdir(dir, { recursive: true });
	await writeFile(resolve(dir, "index.html"), html, "utf8");
	console.log(`  ${me.path.padEnd(6)} ${me.htmlLang.padEnd(6)} ${(html.length / 1024).toFixed(1)} kB`);
}

await rm(resolve(root, ".ssr"), { recursive: true, force: true });
console.log("pre-render ok");
