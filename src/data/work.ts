import type { Degree, Lang, Project } from "./types";

export const projects: Record<Lang, Project[]> = {
	pt: [
		{
			id: "steamprofiler",
			name: "SteamProfiler",
			status: "No ar",
			href: "https://steamprofiler.org",
			hrefLabel: "steamprofiler.org",
			blurb:
				"Consulta qualquer perfil público da Steam e monta um catálogo por jogo, com conquistas, avaliações, requisitos e DLCs.",
			points: [
				"Catálogo da loja, jogadores online agora e série histórica mudam em ritmos completamente diferentes. Cada um tem a própria validade de cache, em vez de um tempo único para tudo.",
				"Perfil frio carrega em 2 segundos, quente em 15 milissegundos. Pedidos para o mesmo perfil esperam por uma consulta só, então uma rajada de visitantes não vira uma rajada de chamadas na Steam.",
			],
		},
		{
			id: "luralead",
			name: "LuraLead",
			status: "Em desenvolvimento, com cliente piloto",
			blurb:
				"SaaS de gestão para escritórios de advocacia, construído com arquitetura limpa, CQRS e eventos de domínio.",
			points: [
				"Leitura e escrita seguem caminhos separados, então relatório pesado não disputa banco com o que está gravando.",
				"Cinco verificações de segurança automáticas no pipeline, cobrindo segredo, código, dependência, imagem e aplicação em execução. Nenhuma delas pode reprovar o build: portão de segurança que trava release é portão desligado na primeira sexta à noite.",
			],
		},
	],
	en: [
		{
			id: "steamprofiler",
			name: "SteamProfiler",
			status: "Live",
			href: "https://steamprofiler.org",
			hrefLabel: "steamprofiler.org",
			blurb:
				"Looks up any public Steam profile and builds a per game catalogue with achievements, reviews, requirements and DLCs.",
			points: [
				"Store catalogue, live player counts and historical series change at completely different rates. Each one carries its own cache validity, rather than a single expiry for everything.",
				"A cold profile loads in 2 seconds, a warm one in 15 milliseconds. Requests for the same profile wait on a single lookup, so a burst of visitors never becomes a burst of calls to Steam.",
			],
		},
		{
			id: "luralead",
			name: "LuraLead",
			status: "In development, with a pilot client",
			blurb:
				"Management SaaS for law firms, built on clean architecture, CQRS and domain events.",
			points: [
				"Reads and writes travel separate paths, so a heavy report never contends with the writes feeding it.",
				"Five automated security checks in the pipeline, covering secrets, code, dependencies, image and the running application. None of them can fail the build: a security gate that blocks a release is a gate switched off on the first Friday night.",
			],
		},
	],
};

export const education: Record<Lang, Degree[]> = {
	pt: [
		{ degree: "Pós-graduação em Segurança da Informação", org: "Anhanguera", done: "2024" },
		{ degree: "Pós-graduação em Desenvolvimento Back-End", org: "Anhanguera", done: "2024" },
		{ degree: "MBA em Gestão de Tecnologia da Informação", org: "Anhanguera", done: "2023" },
		{ degree: "Engenharia da Computação", org: "UNOPAR", done: "2022" },
	],
	en: [
		{ degree: "Postgraduate in Information Security", org: "Anhanguera", done: "2024" },
		{ degree: "Postgraduate in Back-End Development", org: "Anhanguera", done: "2024" },
		{ degree: "MBA in IT Management", org: "Anhanguera", done: "2023" },
		{ degree: "Computer Engineering", org: "UNOPAR", done: "2022" },
	],
};
