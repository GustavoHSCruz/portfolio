// Configuration for API vs Static data
export const USE_API = false; // Set to true to use API, false for static data

// Language configuration
export type Language = "en" | "pt";

export const translations = {
	en: {
		// Navigation
		nav: {
			about: "About",
			experience: "Experience",
			projects: "Projects",
			skills: "Skills",
			contact: "Contact",
		},

		// Hero Section
		hero: {
			title: "Gustavo Cruz",
			picture: "https://cdn.geg.dev.br/public/gcruz/images/Foto.png",
			role: "C# / .NET Developer - Computer Engineer",
			tagline:
				".NET Developer focused on clean code, performance and security.",
			description:
				"Specialist in scalable backend architecture and software engineering best practices.",
			contactButton: "Get In Touch",
			github: "GitHub",
			githubLink: "gustavoHSCruz/",
			linkedin: "LinkedIn",
			linkedinLink: "gusttavocruz/",
		},

		// About Section
		about: {
			title: "About Me",
			paragraphs: [
				"I'm a backend developer with <strong>experience since 2021</strong>, specialized in <strong>C# and .NET</strong>. My journey started in technical support in 2018, evolved to full-stack development with PHP and finally specialized in backend with focus on quality and architecture.",
				"I recently worked as <strong>C#/.NET Developer III at Concent Sistemas</strong>, where I applied Clean Architecture principles, CQRS and microservices to create robust and scalable solutions.",
				"My passion is writing clean code, implementing secure solutions and optimizing performance, always seeking software engineering best practices.",
			],
			highlights: [
				{
					title: "Clean Architecture",
					description:
						"Expert in DDD, CQRS and SOLID patterns for maintainable and scalable code.",
				},
				{
					title: "Security",
					description:
						"Implementation of JWT authentication, encryption and security best practices.",
				},
				{
					title: "Performance",
					description:
						"Query optimization, caching and monitoring for high performance.",
				},
				{
					title: "Quality",
					description:
						"Automated testing, code review and CI/CD for reliable deliveries.",
				},
			],
			badges: [
				"MBA in IT Management",
				"Post-graduate in Information Security",
				"Post-graduate in Backend Development",
			],
		},

		// Experience Section
		experience: {
			title: "Professional Experience",
			subtitle:
				"My professional journey building robust and scalable solutions",
			jobs: [
				{
					title: "C#/.NET Developer III",
					company: "Concent Sistemas",
					period: "2023 - Aug 2025",
					location: "On-site",
					description:
						"Development of corporate systems using .NET and clean architecture. Implementation of CQRS, RabbitMQ integration and creation of scalable APIs.",
					technologies: [
						"C#",
						".NET",
						"Entity Framework",
						"CQRS",
						"RabbitMQ",
						"MySQL",
						"Docker",
						"DDD",
						"AWS",
						"Redis",
					],
					achievements: [
						"CQRS architecture implementation in main system",
						"40% reduction in API response time",
						"RabbitMQ messaging integration",
						"Automated testing implementation",
						"Mentorship of junior developers",
					],
				},
				{
					title: "PHP Full Stack Developer",
					company: "Orthodontic",
					period: "2021 - 2023",
					location: "Remote",
					description:
						"Development of complete web applications for orthodontic franchise management. Creation of 2 main management systems for franchise operations.",
					technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Git"],
					achievements: [
						"Development of 2 complete franchise management systems",
						"Integration with payment gateways",
						"Legacy application performance optimization",
						"Standardization of development processes",
					],
				},
			],
		},

		// Education Section
		education: {
			title: "Academic Background",
			subtitle:
				"Continuous and specialized education in technology and management",
			degrees: [
				{
					degree: "Post-graduate in Information Security",
					institution: "Anhanguera",
					year: "2024",
					type: "Specialization",
					description:
						"Focus on cryptography, risk management, security auditing and ISO 27001 compliance.",
					highlights: [
						"Advanced Cryptography",
						"Risk Management",
						"Security Auditing",
						"ISO 27001 Compliance",
					],
				},
				{
					degree: "Post-graduate in Backend Development",
					institution: "Anhanguera",
					year: "2024",
					type: "Specialization",
					description:
						"Deep dive into distributed architectures, microservices, performance and scalability.",
					highlights: [
						"Microservices",
						"Distributed Architectures",
						"Performance",
						"Scalability",
					],
				},
				{
					degree: "MBA in IT Management",
					institution: "Anhanguera",
					year: "2023",
					type: "MBA",
					description:
						"Strategic IT project management, technical leadership and corporate governance.",
					highlights: [
						"Project Management",
						"Technical Leadership",
						"IT Governance",
						"Digital Strategy",
					],
				},
				{
					degree: "Computer Engineering",
					institution: "Unopar",
					year: "2022",
					type: "Bachelor's",
					description:
						"Solid foundation in algorithms, data structures, system architecture and software engineering.",
					highlights: [
						"Algorithms",
						"Data Structures",
						"System Architecture",
						"Software Engineering",
					],
				},
			],
			// certifications: [
			// 	"Microsoft Certified: Azure Developer Associate",
			// 	"AWS Certified Solutions Architect",
			// 	"Oracle Certified Professional Java SE",
			// 	"Scrum Master Certified (SMC)",
			// ],
			// certificationsTitle: "Certifications",
			// certificationsSubtitle: "Relevant professional certifications",
		},

		// Contact Section
		contact: {
			title: "Get In Touch",
			subtitle: "Let's talk about opportunities and challenging projects",
			info: {
				title: "Contact Information",
				email: "gustavo_cruz08@hotmail.com",
				phone: "+55 (43) 98857-2527",
				location: "Londrina, PR - Brazil",
				labels: {
					email: "Email",
					phone: "Phone",
					location: "Location",
				},
			},
			social: {
				title: "Social Networks",
				github: "@gustavoHSCruz",
				linkedin: "/in/gusttavocruz",
				labels: {
					github: "GitHub",
					linkedin: "LinkedIn",
				},
			},
			form: {
				title: "Send a Message",
				name: "Name",
				namePlaceholder: "Your full name",
				email: "Email",
				emailPlaceholder: "your@email.com",
				subject: "Subject",
				subjectPlaceholder: "Message subject",
				message: "Message",
				messagePlaceholder: "Describe your proposal or question...",
				send: "Send Message",
			},
			buttons: {
				downloadCV: "Download CV",
				downloadCVEnglish: "CV English",
				downloadCVPortuguese: "CV Português",
				whatsapp: "WhatsApp",
				WhatsappNumber: "5543988572527",
				scheduleCall: "Schedule Call",
				// viewPortfolio: "View Full Portfolio",
			},
			cta: {
				title: "Ready for the Next Challenge",
				description:
					"I'm always looking for new challenging projects where I can apply my backend development and software architecture experience to create innovative solutions.",
			},
		},

		// Footer
		footer: {
			copyright: "All rights reserved.",
			madeWith: "Made with",
			and: "and lots of coffee ☕",
			techStack: "Built with React, TypeScript and Tailwind CSS",
		},
	},

	pt: {
		// Navigation
		nav: {
			about: "Sobre",
			experience: "Experiência",
			projects: "Projetos",
			skills: "Habilidades",
			contact: "Contato",
		},

		// Hero Section
		hero: {
			title: "Gustavo Cruz",
			picture: "https://avatars.githubusercontent.com/u/66931989?s=400&u=175edc510964dd4809a7f10a6f47c081b0055c58&v=4",
			role: "Desenvolvedor C# / .NET  - Engenheiro da Computação",
			tagline:
				"Desenvolvedor .NET focado em código limpo, performance e segurança.",
			description:
				"Especialista em arquitetura backend escalável e boas práticas de engenharia de software.",
			contactButton: "Entre em Contato",
			github: "GitHub",
			githubLink: "gustavoHSCruz/",
			linkedin: "LinkedIn",
			linkedinLink: "gusttavocruz/",
		},

		// About Section
		about: {
			title: "Sobre Mim",
			paragraphs: [
				"Sou desenvolvedor backend com <strong>experiência desde 2021</strong>, especializado em <strong>C# e .NET</strong>. Minha jornada começou no suporte técnico em 2018, evoluindo para desenvolvimento full-stack com PHP e finalmente me especializando em backend com foco em qualidade e arquitetura.",
				"Trabalhei recentemente como <strong>Desenvolvedor C#/.NET III na Concent Sistemas</strong>, onde apliquei princípios de Clean Architecture, CQRS e microserviços para criar soluções robustas e escaláveis.",
				"Minha paixão é escrever código limpo, implementar soluções seguras e otimizar performance, sempre buscando as melhores práticas de engenharia de software.",
			],
			highlights: [
				{
					title: "Arquitetura Limpa",
					description:
						"Especialista em DDD, CQRS e padrões SOLID para código maintível e escalável.",
				},
				{
					title: "Segurança",
					description:
						"Implementação de autenticação JWT, criptografia e boas práticas de segurança.",
				},
				{
					title: "Performance",
					description:
						"Otimização de consultas, caching e monitoramento para alta performance.",
				},
				{
					title: "Qualidade",
					description:
						"Testes automatizados, code review e CI/CD para entregas confiáveis.",
				},
			],
			badges: [
				"MBA em Gestão de TI",
				"Pós em Segurança da Informação",
				"Pós em Backend Development",
			],
		},

		// Experience Section
		experience: {
			title: "Experiência Profissional",
			subtitle:
				"Minha trajetória profissional construindo soluções robustas e escaláveis",
			jobs: [
				{
					title: "Desenvolvedor C#/.NET III",
					company: "Concent Sistemas",
					period: "2023 - Ago 2025",
					location: "Presencial",
					description:
						"Desenvolvimento de sistemas corporativos utilizando .NET e arquitetura limpa. Implementação de CQRS, integração com RabbitMQ e criação de APIs escaláveis.",
					technologies: [
						"C#",
						".NET",
						"Entity Framework",
						"CQRS",
						"RabbitMQ",
						"MySQL",
						"Docker",
						"DDD",
						"AWS",
						"Redis",
					],
					achievements: [
						"Implementação de arquitetura CQRS em sistema principal",
						"Redução de 40% no tempo de resposta das APIs",
						"Integração de mensageria com RabbitMQ",
						"Implementação de testes automatizados",
						"Mentoria de desenvolvedores juniores",
					],
				},
				{
					title: "Desenvolvedor PHP Full Stack",
					company: "Orthodontic",
					period: "2021 - 2023",
					location: "Remoto",
					description:
						"Desenvolvimento de aplicações web completas para gestão de franqueadora ortodôntica. Criação de 2 sistemas principais de gestão para operações da franquia.",
					technologies: ["PHP", "MySQL", "jQuery", "Bootstrap", "Git"],
					achievements: [
						"Desenvolvimento de 2 sistemas completos de gestão da franquia",
						"Implementação de integrações com gateways de pagamento",
						"Otimização de performance em aplicações legacy",
						"Padronização de processos de desenvolvimento",
					],
				},
			],
		},

		// Education Section
		education: {
			title: "Formação Acadêmica",
			subtitle: "Formação contínua e especializada em tecnologia e gestão",
			degrees: [
				{
					degree: "Pós-graduação em Segurança da Informação",
					institution: "Anhanguera",
					year: "2024",
					type: "Especialização",
					description:
						"Foco em criptografia, gestão de riscos, auditoria de segurança e conformidade com normas ISO 27001.",
					highlights: [
						"Criptografia Avançada",
						"Gestão de Riscos",
						"Auditoria de Segurança",
						"Conformidade ISO 27001",
					],
				},
				{
					degree: "Pós-graduação em Desenvolvimento Backend",
					institution: "Anhanguera",
					year: "2024",
					type: "Especialização",
					description:
						"Aprofundamento em arquiteturas distribuídas, microserviços, performance e escalabilidade.",
					highlights: [
						"Microserviços",
						"Arquiteturas Distribuídas",
						"Performance",
						"Escalabilidade",
					],
				},
				{
					degree: "MBA em Gestão de TI",
					institution: "Anhanguera",
					year: "2023",
					type: "MBA",
					description:
						"Gestão estratégica de projetos de TI, liderança técnica e governança corporativa.",
					highlights: [
						"Gestão de Projetos",
						"Liderança Técnica",
						"Governança de TI",
						"Estratégia Digital",
					],
				},
				{
					degree: "Engenharia da Computação",
					institution: "Unopar",
					year: "2022",
					type: "Graduação",
					description:
						"Formação sólida em algoritmos, estruturas de dados, arquitetura de sistemas e engenharia de software.",
					highlights: [
						"Algoritmos",
						"Estruturas de Dados",
						"Arquitetura de Sistemas",
						"Engenharia de Software",
					],
				},
			],
			// certifications: [
			// 	"Microsoft Certified: Azure Developer Associate",
			// 	"AWS Certified Solutions Architect",
			// 	"Oracle Certified Professional Java SE",
			// 	"Scrum Master Certified (SMC)",
			// ],
			// certificationsTitle: "Certificações",
			// certificationsSubtitle: "Certificações profissionais relevantes",
		},

		// Contact Section
		contact: {
			title: "Entre em Contato",
			subtitle: "Vamos conversar sobre oportunidades e projetos desafiadores",
			info: {
				title: "Informações de Contato",
				email: "gustavo_cruz08@hotmail.com",
				phone: "+55 (43) 98857-2527",
				location: "Londrina, PR - Brasil",
				labels: {
					email: "Email",
					phone: "Telefone",
					location: "Localização",
				},
			},
			social: {
				title: "Redes Sociais",
				github: "@gustavoHSCruz",
				linkedin: "/in/gusttavocruz",
				labels: {
					github: "GitHub",
					linkedin: "LinkedIn",
				},
			},
			form: {
				title: "Envie uma Mensagem",
				name: "Nome",
				namePlaceholder: "Seu nome completo",
				email: "Email",
				emailPlaceholder: "seu@email.com",
				subject: "Assunto",
				subjectPlaceholder: "Assunto da mensagem",
				message: "Mensagem",
				messagePlaceholder: "Descreva sua proposta ou dúvida...",
				send: "Enviar Mensagem",
			},
			buttons: {
				downloadCV: "Download CV",
				downloadCVEnglish: "CV Inglês",
				downloadCVPortuguese: "CV Português",
				whatsapp: "WhatsApp",
				WhatsappNumber: "5543988572527",
				scheduleCall: "Agendar Conversa",
				// viewPortfolio: "Ver Portfólio Completo",
			},
			cta: {
				title: "Pronto para o Próximo Desafio",
				description:
					"Estou sempre em busca de novos projetos desafiadores onde possa aplicar minha experiência em desenvolvimento backend e arquitetura de software para criar soluções inovadoras.",
			},
		},

		// Footer
		footer: {
			copyright: "Todos os direitos reservados.",
			madeWith: "Feito com",
			and: "e muito café ☕",
			techStack: "Desenvolvido com React, TypeScript e Tailwind CSS",
		},
	},
};

// Projects data (same for both languages, descriptions will be handled separately)
export const projectsData = {
	en: [
		{
			title: "SaaS aimed at lawyers and law firms",
			description:
				"A complete legal practice management system developed with clean architecture, CQRS, domain events, and detailed logging. Designed for high scalability, performance, and simplified maintenance.",
			longDescription: `This project is a complete legal management system, built with a strong focus on scalability, maintainability, and security.

				It follows the principles of Clean Architecture, ensuring a clear separation of concerns between domain, application, and infrastructure layers. The implementation of CQRS (Command Query Responsibility Segregation) improves performance and data handling by isolating read and write operations.

				The system also leverages domain events to handle asynchronous processes and includes comprehensive logging for every critical action, enhancing traceability and reliability.

				Overall, it provides a solid foundation for a professional-grade legal management platform — ready to scale, evolve, and integrate new features without sacrificing performance or stability.`,
			technologies: [
				"C#",
				".NET 10",
				"CQRS",
				"RabbitMQ",
				"PostgreSQL",
				"Docker",
				"Kubernetes",
				"Redis",
				"Self-hosted",
			],
			features: [
				"CQRS and Event Sourcing implementation",
				"Asynchronous communication with RabbitMQ",
				"Distributed cache with Redis",
				"Containerization with Docker",
			],
			metrics: {
				label: "1 Pilot Client Launched",
			},
			status: "In development",
		},
	],
	pt: [
		{
			title: "SaaS voltado para advogados e escritórios de advocacia",
			description:
				"Sistema completo de gestão advocatícia, desenvolvido com arquitetura limpa, CQRS, eventos de domínio e registro detalhado de logs. Projetado para alta escalabilidade, desempenho e manutenção simplificada.",
			longDescription: `O projeto é um sistema completo de gestão advocatícia, desenvolvido com foco em escalabilidade, segurança e manutenibilidade.

A aplicação foi construída com arquitetura limpa (Clean Architecture), separando claramente as camadas de domínio, aplicação e infraestrutura. O uso de CQRS (Command Query Responsibility Segregation) garante uma melhor organização das operações de leitura e escrita, permitindo um alto desempenho e maior controle sobre fluxos de dados.

Além disso, o sistema faz uso de eventos de domínio para tratar processos assíncronos e melhorar a rastreabilidade de ações, com registro de logs detalhados em cada operação crítica. Essa abordagem proporciona robustez, auditabilidade e flexibilidade para evolução futura do projeto.

O resultado é uma base sólida para um sistema jurídico profissional, preparada para crescer e integrar novas funcionalidades sem comprometer a estabilidade.`,
			technologies: [
				"C#",
				".NET 10",
				"CQRS",
				"RabbitMQ",
				"PostgreSQL",
				"Docker",
				"Kubernetes",
				"Redis",
				"Self-hosted",
			],
			features: [
				"Implementação de CQRS e Event Sourcing",
				"Comunicação assíncrona com RabbitMQ",
				"Cache distribuído com Redis",
				"Containerização com Docker",
			],
			metrics: {
				label: "1 Cliente Piloto Lançado",
			},
			status: "Em desenvolvimento",
		},
	],
};

// Skills data (same structure for both languages)
export const skillsData = {
	en: {
		categories: [
			{
				title: "Languages & Frameworks",
				icon: "🔧",
				skills: [
					{ name: "C# / .NET", level: 95, years: "3+ years" },
					{ name: "ASP.NET Core", level: 90, years: "3+ years" },
					{ name: "Entity Framework", level: 85, years: "3+ years" },
					{ name: "PHP", level: 80, years: "2+ years" },
				],
			},
			{
				title: "Architecture & Patterns",
				icon: "🏗️",
				skills: [
					{ name: "Clean Architecture", level: 90, years: "2+ years" },
					{ name: "CQRS / MediatR", level: 85, years: "2+ years" },
					{ name: "Domain-Driven Design", level: 80, years: "2+ years" },
					{ name: "SOLID Principles", level: 95, years: "3+ years" },
				],
			},
			{
				title: "Databases",
				icon: "🗄️",
				skills: [
					{ name: "MySQL", level: 90, years: "3+ years" },
					{ name: "PostgreSQL", level: 75, years: "1+ year" },
					{ name: "Redis (Cache)", level: 70, years: "2+ year" },
				],
			},
			{
				title: "DevOps & Infrastructure",
				icon: "⚙️",
				skills: [
					{ name: "Docker", level: 80, years: "3+ years" },
					{ name: "AWS", level: 75, years: "2+ years" },
					{ name: "CI/CD", level: 75, years: "2+ years" },
					{ name: "Linux", level: 70, years: "5+ years" },
				],
			},
			{
				title: "Security",
				icon: "🔒",
				skills: [
					{ name: "JWT / OAuth", level: 85, years: "2+ years" },
					{ name: "Cryptography", level: 80, years: "2+ years" },
					{ name: "Security Best Practices", level: 90, years: "2+ years" },
					{ name: "Secure APIs", level: 85, years: "2+ years" },
				],
			},
			{
				title: "Tools & Others",
				icon: "🛠️",
				skills: [
					{ name: "Git / GitHub", level: 90, years: "4+ years" },
					{ name: "RabbitMQ", level: 75, years: "2+ year" },
					{ name: "Swagger / OpenAPI", level: 85, years: "2+ years" },
					{ name: "AutoMapper", level: 80, years: "2+ years" },
				],
			},
		],
		softSkills: [
			"Technical Leadership",
			"Mentoring",
			"Code Review",
			"Technical Documentation",
			"Problem Solving",
			"Teamwork",
			"Technical Communication",
			"Project Management",
		],
		stats: [
			{ value: "4+", label: "Years of Experience" },
			{ value: "4", label: "Specializations" },
		],
	},
	pt: {
		categories: [
			{
				title: "Linguagens & Frameworks",
				icon: "🔧",
				skills: [
					{ name: "C# / .NET", level: 95, years: "3+ anos" },
					{ name: "ASP.NET Core", level: 90, years: "3+ anos" },
					{ name: "Entity Framework", level: 85, years: "3+ anos" },
					{ name: "PHP", level: 80, years: "2+ anos" },
				],
			},
			{
				title: "Arquitetura & Padrões",
				icon: "🏗️",
				skills: [
					{ name: "Clean Architecture", level: 90, years: "2+ anos" },
					{ name: "CQRS / MediatR", level: 85, years: "2+ anos" },
					{ name: "Domain-Driven Design", level: 80, years: "2+ anos" },
					{ name: "SOLID Principles", level: 95, years: "3+ anos" },
				],
			},
			{
				title: "Banco de Dados",
				icon: "🗄️",
				skills: [
					{ name: "MySQL", level: 90, years: "3+ anos" },
					{ name: "PostgreSQL", level: 75, years: "1+ ano" },
					{ name: "Redis (Cache)", level: 70, years: "1+ ano" },
				],
			},
			{
				title: "DevOps & Infraestrutura",
				icon: "⚙️",
				skills: [
					{ name: "Docker", level: 80, years: "3+ anos" },
					{ name: "AWS", level: 75, years: "2+ ano" },
					{ name: "CI/CD", level: 75, years: "2+ anos" },
					{ name: "Linux", level: 70, years: "5+ anos" },
				],
			},
			{
				title: "Segurança",
				icon: "🔒",
				skills: [
					{ name: "JWT / OAuth", level: 85, years: "2+ anos" },
					{ name: "Criptografia", level: 80, years: "2+ anos" },
					{ name: "Security Best Practices", level: 90, years: "2+ anos" },
					{ name: "APIs Seguras", level: 85, years: "2+ anos" },
				],
			},
			{
				title: "Ferramentas & Outros",
				icon: "🛠️",
				skills: [
					{ name: "Git / GitHub", level: 90, years: "4+ anos" },
					{ name: "RabbitMQ", level: 75, years: "2+ anos" },
					{ name: "Swagger / OpenAPI", level: 85, years: "2+ anos" },
					{ name: "AutoMapper", level: 80, years: "2+ anos" },
				],
			},
		],
		softSkills: [
			"Liderança Técnica",
			"Mentoria",
			"Code Review",
			"Documentação Técnica",
			"Resolução de Problemas",
			"Trabalho em Equipe",
			"Comunicação Técnica",
			"Gestão de Projetos",
		],
		stats: [
			{ value: "4+", label: "Anos de Experiência" },
			{ value: "4", label: "Especializações" },
		],
	},
};
