import type { Contribution, Degree, Lang, Project } from "./types";

export const projects: Record<Lang, Project[]> = {
	pt: [
		{
			id: "steamprofiler",
			name: "SteamProfiler",
			href: "https://steamprofiler.org",
			blurb: "Sua biblioteca da Steam em escala. Site, API e uma extensão que leva a análise para a loja da Steam.",
		},
		{
			id: "vpngo",
			name: "vpngo",
			href: "https://github.com/GustavoHSCruz/VPNGo",
			blurb: "Manda os apps que você escolher por uma saída WireGuard própria, enquanto o resto segue na sua rede.",
		},
		{
			id: "vpngo-gui",
			name: "vpngo-gui",
			href: "https://github.com/GustavoHSCruz/VPNGo-gui",
			blurb: "App de desktop para os perfis e rotas do vpngo, feito para andar sozinho.",
		},
		{
			id: "luralead",
			name: "LuraLead",
			note: "privado · cliente piloto",
			blurb: "SaaS de gestão para escritórios de advocacia, em desenvolvimento com o primeiro cliente.",
		},
	],
	en: [
		{
			id: "steamprofiler",
			name: "SteamProfiler",
			href: "https://steamprofiler.org",
			blurb: "Your Steam library, drawn to scale. Web app, API and a browser extension for the Steam store.",
		},
		{
			id: "vpngo",
			name: "vpngo",
			href: "https://github.com/GustavoHSCruz/VPNGo",
			blurb: "Routes the apps you choose through their own WireGuard exit while everything else stays on your network.",
		},
		{
			id: "vpngo-gui",
			name: "vpngo-gui",
			href: "https://github.com/GustavoHSCruz/VPNGo-gui",
			blurb: "A desktop app for vpngo profiles and routes, built to stand on its own.",
		},
		{
			id: "luralead",
			name: "LuraLead",
			note: "private · pilot client",
			blurb: "Management SaaS for law firms, in development with its first client.",
		},
	],
};

const pulls = (repo: string) => `https://github.com/${repo}/pulls?q=is%3Apr+author%3AGustavoHSCruz`;

/** Os números de PR vêm de `releases.json`, contados no build. */
export const contributions: Contribution[] = [
	{ repo: "rehan-remade/universal-modder", name: "universal-modder", href: pulls("rehan-remade/universal-modder") },
	{ repo: "ran-j/PS2Recomp", name: "PS2Recomp", href: pulls("ran-j/PS2Recomp") },
	{ repo: "guilhermeSDB/Orbe", name: "Orbe", href: pulls("guilhermeSDB/Orbe") },
];

export const education: Record<Lang, Degree[]> = {
	pt: [
		{ degree: "Pós-graduação em Segurança da Informação", org: "Anhanguera", done: "2024" },
		{ degree: "Pós-graduação em Desenvolvimento Back-End", org: "Anhanguera", done: "2024" },
		{ degree: "MBA em Gestão de Tecnologia da Informação", org: "Anhanguera", done: "2023" },
		{ degree: "Engenharia da Computação", org: "UNOPAR", done: "2022" },
	],
	en: [
		{ degree: "Postgraduate, Information Security", org: "Anhanguera", done: "2024" },
		{ degree: "Postgraduate, Back-End Development", org: "Anhanguera", done: "2024" },
		{ degree: "MBA, IT Management", org: "Anhanguera", done: "2023" },
		{ degree: "Computer Engineering", org: "UNOPAR", done: "2022" },
	],
};

