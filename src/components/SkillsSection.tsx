import { useApp } from "../contexts/AppContext";
import { skillsData } from "../data/portfolio-data";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export function SkillsSection() {
	const { t, language } = useApp();
	const skills = skillsData[language];

	const getSkillColor = (level: number) => {
		if (level >= 90) return "text-green-600";
		if (level >= 80) return "text-blue-600";
		if (level >= 70) return "text-yellow-600";
		return "text-gray-600";
	};

	const getProgressColor = (level: number) => {
		if (level >= 90) return "bg-green-600";
		if (level >= 80) return "bg-blue-600";
		if (level >= 70) return "bg-yellow-600";
		return "bg-gray-600";
	};

	return (
		<section id="skills" className="py-20 bg-muted/30">
			<div className="container mx-auto px-6">
				<div className="max-w-6xl mx-auto">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							{t.nav.skills}
						</h2>
						<div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6"></div>
						<p className="text-lg text-muted-foreground">
							{language === "en"
								? "Technical competencies developed throughout my career"
								: "Competências técnicas desenvolvidas ao longo da carreira"}
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
						{skills.categories.map((category, index) => (
							<Card
								key={index}
								className="border-border/50 hover:border-blue-600/50 transition-colors duration-300"
							>
								<CardHeader className="pb-4">
									<CardTitle className="flex items-center gap-3">
										<span className="text-2xl">{category.icon}</span>
										<span>{category.title}</span>
									</CardTitle>
								</CardHeader>
								<CardContent className="space-y-6">
									{category.skills.map((skill, skillIndex) => (
										<div key={skillIndex} className="space-y-2">
											<div className="flex items-center justify-between">
												<div className="flex items-center gap-3">
													<span className="font-medium">{skill.name}</span>
													<span
														className={`text-sm ${getSkillColor(skill.level)}`}
													>
														{skill.level}%
													</span>
												</div>
												<span className="text-sm text-muted-foreground">
													{skill.years}
												</span>
											</div>
											<div className="w-full bg-muted rounded-full h-2">
												<div
													className={`h-2 rounded-full transition-all duration-500 ${getProgressColor(
														skill.level
													)}`}
													style={{ width: `${skill.level}%` }}
												></div>
											</div>
										</div>
									))}
								</CardContent>
							</Card>
						))}
					</div>

					<Card className="border-border/50">
						<CardHeader>
							<CardTitle className="flex items-center gap-3">
								<span className="text-2xl">🧠</span>
								<span>
									{language === "en"
										? "Soft Skills"
										: "Habilidades Comportamentais"}
								</span>
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
								{skills.softSkills.map((skill, index) => (
									<div key={index} className="text-center">
										<Badge
											variant="secondary"
											className="w-full py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-foreground border-0"
										>
											{skill}
										</Badge>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					<div
						className="grid gap-8 mt-12 justify-items-center"
						style={{
							gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
						}}
					>
						{skills.stats.map((stat, index) => (
							<div key={index} className="text-center">
								<div
									className={`text-3xl font-bold mb-2 ${
										index === 0
											? "text-blue-600"
											: index === 1
											? "text-purple-600"
											: index === 2
											? "text-green-600"
											: "text-orange-600"
									}`}
								>
									{stat.value}
								</div>
								<div className="text-sm text-muted-foreground">
									{stat.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
