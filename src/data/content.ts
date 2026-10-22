import type { Job, Lang } from "./types";

export const identity = {
	name: "Gustavo Cruz",
	fullName: "Gustavo Henrique de Souza e Cruz",
	avatar: "https://avatars.githubusercontent.com/u/66931989?v=4",
	email: "gustavo_cruz08@hotmail.com",
	calendly: "https://calendly.com/gustavo_cruz08",
	github: "https://github.com/GustavoHSCruz",
	githubHandle: "GustavoHSCruz",
	linkedin: "https://www.linkedin.com/in/gusttavocruz/",
	linkedinHandle: "in/gusttavocruz",
} as const;

export const jobs: Record<Lang, Job[]> = {
	pt: [
		{
			role: "Engenheiro de Software Sênior",
			org: "DXC Technology",
			context: "Operadora logística de grande porte",
			period: "jan/2026 · atual",
			summary:
				"Respondo pela manutenção e pela evolução dos sistemas críticos da operação, do entendimento da regra de negócio até a entrega em produção.",
			points: [
				"Interlocutor técnico das demandas que chegam dos clientes atendidos pela operação, traduzindo necessidade de negócio em mudança de sistema.",
				"Represento a engenharia em reuniões gerenciais de projeto, onde escopo, risco e prioridade são decididos.",
			],
		},
		{
			role: "Desenvolvedor .NET Pleno",
			org: "Concent Sistemas",
			period: "jun/2023 · ago/2025",
			summary:
				"Responsável pela sustentação e pela evolução de sistemas corporativos em homologação e produção. Ponto focal para mudanças em banco de produção, revisão e aprovação de pull requests, e diagnóstico de performance.",
			points: [
				"Reduzi o consumo de memória dos containers de 1,5 GB para 400 MB.",
				"Cortei 40% no tempo de resposta das consultas ao banco nos processos mais lentos.",
				"Troquei o upload inteiro por envio em partes, que resolveu o travamento em arquivos acima de 80 MB.",
			],
		},
		{
			role: "Desenvolvedor Full Stack Júnior",
			org: "Orthodontic",
			period: "abr/2021 · jan/2023",
			summary:
				"Sistemas de gestão para uma rede de franquias, incluindo a intranet da empresa.",
			points: [
				"Dois sistemas completos, do CRUD ao relatório gerencial.",
			],
		},
		{
			role: "Analista de Infraestrutura e Aplicações Pleno",
			org: "Tata Consultancy Services",
			period: "mai/2019 · mar/2021",
			summary:
				"Estabilidade de ambientes e troubleshooting avançado para operações internacionais, incluindo configuração de rede e manutenção do parque de TI.",
			points: [
				"Acompanhei a conta na transição entre consultorias e integrei a equipe desde o início do novo contrato.",
				"Atendimento a operações internacionais, em inglês.",
			],
		},
		{
			role: "Analista de Infraestrutura e Aplicações",
			org: "Atos",
			period: "fev/2018 · mai/2019",
			summary:
				"Diagnóstico e resolução de incidentes em sistema, rede, hardware e software, em ambientes corporativos nacionais e internacionais.",
			points: [
				"Migração de parque Windows, da instalação e da configuração até a validação e os testes.",
			],
		},
	],
	en: [
		{
			role: "Senior Software Engineer",
			org: "DXC Technology",
			context: "Large logistics operator",
			period: "Jan 2026 · present",
			summary:
				"I own the maintenance and the evolution of the operation's critical systems, from the business rule through to production.",
			points: [
				"Technical counterpart for the demands raised by the clients that the operation serves, turning a business need into a system change.",
				"I represent engineering in project management meetings, where scope, risk and priority get decided.",
			],
		},
		{
			role: ".NET Developer",
			org: "Concent Sistemas",
			period: "Jun 2023 · Aug 2025",
			summary:
				"Responsible for supporting and evolving corporate systems in staging and production. Focal point for production database changes, pull request review and approval, and performance diagnosis.",
			points: [
				"Cut container memory usage from 1.5 GB down to 400 MB.",
				"Cut database query response time by 40% on the slowest processes.",
				"Replaced whole file upload with chunked transfer, fixing freezes on files above 80 MB.",
			],
		},
		{
			role: "Junior Full Stack Developer",
			org: "Orthodontic",
			period: "Apr 2021 · Jan 2023",
			summary: "Management systems for a franchise network, including the company intranet.",
			points: [
				"Two complete systems, from CRUD to management reporting.",
			],
		},
		{
			role: "Infrastructure and Applications Analyst",
			org: "Tata Consultancy Services",
			period: "May 2019 · Mar 2021",
			summary:
				"Environment stability and advanced troubleshooting for international operations, including network configuration and estate maintenance.",
			points: [
				"Stayed with the account through the transition between consultancies, joining the team from the start of the new contract.",
				"Supported international operations, in English.",
			],
		},
		{
			role: "Infrastructure and Applications Analyst",
			org: "Atos",
			period: "Feb 2018 · May 2019",
			summary:
				"Diagnosis and resolution of incidents across systems, network, hardware and software, in national and international corporate environments.",
			points: [
				"Windows estate migration, from installation and configuration through to validation and testing.",
			],
		},
	],
};
