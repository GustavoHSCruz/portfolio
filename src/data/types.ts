export type Lang = "pt" | "en";

export type Job = {
	role: string;
	org: string;
	/** Contexto do cliente quando o nome não pode ser dito. */
	context?: string;
	period: string;
	/** `software` ou `infra`: a página agrupa a trajetória por fase, não só por data. */
	phase: "software" | "infra";
	/** Uma linha só, o que fica na página. O resumo e os pontos ficam para o CV. */
	line: string;
	summary: string;
	/** Resultados. Número, quando existe, vem dentro da frase. */
	points: string[];
};

export type Project = {
	/** Mesma chave de `releases.json`, que `tools/fetch-releases.mjs` preenche no build. */
	id: string;
	name: string;
	blurb: string;
	href?: string;
	/** Rótulo do projeto sem versão pública, como "privado · cliente piloto". */
	note?: string;
};

/** Versão publicada (`version`) ou commit no ar (`commit`), resolvida no build. */
export type Release = { version?: string; date?: string; commit?: string; url: string };

/** PRs aceitos e abertos num projeto de terceiro, contados no build. */
export type PullCount = { merged: number; open: number };

/** O que `tools/fetch-releases.mjs` grava em `releases.json`. */
export type BuildData = { projects: Record<string, Release>; contributions: Record<string, PullCount> };

export type Contribution = { repo: string; name: string; href: string };

export type Degree = { degree: string; org: string; done: string };
