import type { Lang } from "./types";

export const SITE = "https://gcruz.geg.dev.br";

export const seo: Record<Lang, { title: string; description: string; locale: string; htmlLang: string; path: string }> = {
	en: {
		title: "Gustavo Cruz | Senior Backend Software Engineer",
		description:
			"Senior backend software engineer specialised in C# and .NET. Nine years in technology, five of them building and running production systems, currently at DXC Technology.",
		locale: "en_US",
		htmlLang: "en",
		path: "/",
	},
	pt: {
		title: "Gustavo Cruz | Engenheiro de Software Backend Sênior",
		description:
			"Engenheiro de software backend sênior especializado em C# e .NET. Nove anos em tecnologia, cinco deles construindo e sustentando sistemas em produção, hoje na DXC Technology.",
		locale: "pt_BR",
		htmlLang: "pt-BR",
		path: "/pt/",
	},
};

/**
 * JSON-LD `Person`. É o que buscador e assistente leem para responder
 * "quem é Gustavo Cruz" sem precisar interpretar o texto da página.
 * Só entra aqui o que está afirmado no site e é verificável.
 */
export function personJsonLd(lang: Lang) {
	const isPt = lang === "pt";
	return {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Gustavo Henrique de Souza e Cruz",
		alternateName: "Gustavo Cruz",
		url: `${SITE}${seo[lang].path}`,
		image: `${SITE}/og.png`,
		jobTitle: isPt ? "Engenheiro de Software Sênior" : "Senior Software Engineer",
		description: seo[lang].description,
		email: "mailto:gustavo_cruz08@hotmail.com",
		nationality: { "@type": "Country", name: "Brazil" },
		address: { "@type": "PostalAddress", addressCountry: "BR" },
		worksFor: { "@type": "Organization", name: "DXC Technology", url: "https://dxc.com" },
		alumniOf: [
			{ "@type": "CollegeOrUniversity", name: "Anhanguera Educacional" },
			{ "@type": "CollegeOrUniversity", name: "UNOPAR" },
		],
		hasCredential: [
			{
				"@type": "EducationalOccupationalCredential",
				credentialCategory: isPt ? "Pós-graduação" : "Postgraduate",
				name: isPt ? "Segurança da Informação" : "Information Security",
				recognizedBy: { "@type": "Organization", name: "Anhanguera Educacional" },
			},
			{
				"@type": "EducationalOccupationalCredential",
				credentialCategory: isPt ? "Pós-graduação" : "Postgraduate",
				name: isPt ? "Desenvolvimento Back-End" : "Back-End Development",
				recognizedBy: { "@type": "Organization", name: "Anhanguera Educacional" },
			},
			{
				"@type": "EducationalOccupationalCredential",
				credentialCategory: "MBA",
				name: isPt ? "Gestão de Tecnologia da Informação" : "IT Management",
				recognizedBy: { "@type": "Organization", name: "Anhanguera Educacional" },
			},
			{
				"@type": "EducationalOccupationalCredential",
				credentialCategory: isPt ? "Graduação" : "Bachelor's degree",
				name: isPt ? "Engenharia da Computação" : "Computer Engineering",
				recognizedBy: { "@type": "Organization", name: "UNOPAR" },
			},
		],
		knowsAbout: [
			"C#",
			".NET",
			"Backend development",
			"Clean Architecture",
			"CQRS",
			"Domain-Driven Design",
			"PostgreSQL",
			"MySQL",
			"Redis",
			"RabbitMQ",
			"Docker",
			"Linux",
			"Application security",
			"CI/CD",
		],
		knowsLanguage: [
			{ "@type": "Language", name: "Portuguese", alternateName: "pt-BR" },
			{ "@type": "Language", name: "English", alternateName: "en" },
		],
		sameAs: [
			"https://github.com/GustavoHSCruz",
			"https://www.linkedin.com/in/gusttavocruz/",
		],
	};
}
