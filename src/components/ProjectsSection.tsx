import {
	Database,
	ExternalLink,
	Github,
	Shield,
	Users,
	Zap,
} from "lucide-react";
import React from "react";
import { useApp } from "../contexts/AppContext";
import { projectsData } from "../data/portfolio-data";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function ProjectsSection() {
	const { t, language } = useApp();
	const projects = projectsData[language];
	const icons = [Users, Shield, Zap, Database];

	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t.nav.projects}
						</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
						<p className="text-lg text-muted-foreground">
							{language === "en"
								? "Robust technical solutions demonstrating expertise in architecture and development"
								: "Soluções técnicas robustas que demonstram expertise em arquitetura e desenvolvimento"}
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{projects.map((project, index) => (
							<Card
								key={index}
								className="border-border/50 hover:border-blue-600/50 transition-all duration-300 hover:shadow-lg group"
							>
								<CardHeader className="pb-4">
									<div className="flex items-start justify-between">
										<div className="flex-1">
											<CardTitle className="text-xl mb-2 group-hover:text-blue-600 transition-colors">
												{project.title}
											</CardTitle>
											<div className="flex items-center gap-2 mb-3">
												{React.createElement(icons[index], {
													className: "h-4 w-4 text-green-600",
												})}
												<span className="text-sm text-green-600">
													{project.metrics.label}
												</span>
												<div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
												<span className="text-sm text-muted-foreground">
													{project.status}
												</span>
											</div>
										</div>
										<div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
											<Button
												size="sm"
												variant="outline"
												className="h-8 w-8 p-0"
											>
												<Github className="h-4 w-4" />
											</Button>
											<Button
												size="sm"
												variant="outline"
												className="h-8 w-8 p-0"
											>
												<ExternalLink className="h-4 w-4" />
											</Button>
										</div>
									</div>
								</CardHeader>

								<CardContent className="space-y-6">
									<>
										{project.longDescription
											.split(/\n\s*\n/) // split on blank lines
											.map((para) => para.trim())
											.filter(Boolean)
											.map((para, pIndex) => (
												<p
													key={pIndex}
													className="text-muted-foreground leading-relaxed"
												>
													{para}
												</p>
											))}
									</>

									<div>
										<h4 className="font-semibold mb-3">
											{language === "en"
												? "Key Features:"
												: "Principais Features:"}
										</h4>
										<ul className="space-y-2">
											{project.features.map((feature, fIndex) => (
												<li
													key={fIndex}
													className="flex items-start gap-2 text-sm text-muted-foreground"
												>
													<div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>

									<div>
										<h4 className="font-semibold mb-3">
											{language === "en" ? "Tech Stack:" : "Stack Tecnológico:"}
										</h4>
										<div className="flex flex-wrap gap-2">
											{project.technologies.map((tech, techIndex) => (
												<Badge
													key={techIndex}
													variant="secondary"
													className="bg-blue-600/10 text-blue-600 hover:bg-blue-600/20"
												>
													{tech}
												</Badge>
											))}
										</div>
									</div>
								</CardContent>
							</Card>
						))}
					</div>

					<div className="text-center mt-12">
						<Button
						asChild
							size="lg"
							variant="outline"
							className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
						>
							<a href={`https://github.com/${t.hero.githubLink}`} target="_blank" rel="noopener noreferrer">
							<Github className="mr-2 h-4 w-4" />
							{language === "en"
								? "View More Projects on GitHub"
								: "Ver Mais Projetos no GitHub"}
								</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
