import type { Lang } from "./types";

export const ui: Record<Lang, Record<string, string>> = {
	pt: {
		skipToContent: "Pular para o conteúdo",
		navLabel: "Seções do site",
		navExperience: "Experiência",
		navProjects: "Projetos",
		navEducation: "Formação",
		navContact: "Contato",
		themeToggle: "Alternar tema",

		role: "Engenheiro de Software Sênior",
		location: "Brasil",
		heroPre: "Engenheiro de software backend focado em ",
		heroAccent: "sistemas em produção",
		heroPost: ".",
		heroBlurb:
			"Cinco anos em C# e .NET, hoje na DXC Technology. Meu trabalho fica onde arquitetura, infraestrutura e segurança se encontram, nos problemas que só aparecem com o sistema sob carga real.",

		experienceTitle: "Experiência",
		experienceLead: "Nove anos em tecnologia, cinco deles em desenvolvimento backend.",
		projectsTitle: "Projetos",
		projectsLead: "O que eu construí por fora do horário de trabalho.",
		educationTitle: "Formação",
		educationLead: "Graduação, MBA e duas especializações.",
		contactTitle: "Contato",
		contactLead: "Aberto a conversa sobre oportunidades e projetos.",

		contactEmail: "Email",
		contactCall: "Agendar conversa",
		contactCallValue: "30 min, na minha agenda",
		contactLinkedin: "LinkedIn",
		contactGithub: "GitHub",
	},
	en: {
		skipToContent: "Skip to content",
		navLabel: "Site sections",
		navExperience: "Experience",
		navProjects: "Projects",
		navEducation: "Education",
		navContact: "Contact",
		themeToggle: "Toggle theme",

		role: "Senior Software Engineer",
		location: "Brazil",
		heroPre: "Backend software engineer focused on ",
		heroAccent: "systems in production",
		heroPost: ".",
		heroBlurb:
			"Five years in C# and .NET, currently at DXC Technology. My work sits where architecture, infrastructure and security meet, on the problems that only surface once a system is under real load.",

		experienceTitle: "Experience",
		experienceLead: "Nine years in technology, five of them in backend development.",
		projectsTitle: "Projects",
		projectsLead: "What I have built outside working hours.",
		educationTitle: "Education",
		educationLead: "A degree, an MBA and two specialisations.",
		contactTitle: "Contact",
		contactLead: "Open to conversations about opportunities and projects.",

		contactEmail: "Email",
		contactCall: "Schedule a call",
		contactCallValue: "30 min, on my calendar",
		contactLinkedin: "LinkedIn",
		contactGithub: "GitHub",
	},
};
