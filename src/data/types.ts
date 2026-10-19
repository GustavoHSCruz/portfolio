export type Lang = "pt" | "en";

export type Job = {
	role: string;
	org: string;
	/** Contexto do cliente quando o nome não pode ser dito. */
	context?: string;
	period: string;
	summary: string;
	/** Resultados. Número, quando existe, vem dentro da frase. */
	points: string[];
};

export type Project = {
	id: string;
	name: string;
	blurb: string;
	points: string[];
	href?: string;
	hrefLabel?: string;
	status?: string;
};

export type Degree = { degree: string; org: string; done: string };
