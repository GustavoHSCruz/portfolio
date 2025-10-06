import { ArrowDown, Github, Linkedin, Mail, User } from "lucide-react";
import { useApp } from "../contexts/AppContext";
import { Button } from "./ui/button";
import { ImageWithFallback } from "@/components/figma/ImageWithFallback";

export function HeroSection() {
	const { t } = useApp();
	return (
		<section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-background to-blue-950/10">
			<div className="container mx-auto px-6 py-20">
				<div className="max-w-4xl mx-auto text-center">
					<div className="mb-8">
						<div className="relative w-32 h-32 mx-auto mb-6">
							{/* Photo placeholder - replace with actual photo */}
							<div className="w-full h-full rounded-full bg-gradient-to-br from-blue-600 to-purple-600 p-1">
								<div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
									{
                  <ImageWithFallback
                    src={t.hero.picture}
                    alt="Gustavo Cruz"
                    className="w-full h-full object-cover rounded-full"
                  />
}
									<User className="h-16 w-16 text-muted-foreground" />
								</div>
							</div>
						</div>
						<h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
							{t.hero.title}
						</h1>
						<div className="text-xl md:text-2xl text-blue-600 mb-6">
							{t.hero.role}
						</div>
						<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
							{t.hero.tagline}
							<br />
							{t.hero.description}
						</p>
					</div>

					<div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
						<Button
							asChild
							size="lg"
							className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
						>
							<a href="#contact">
								<Mail className="mr-2 h-4 w-4" />
								{t.hero.contactButton}
							</a>
						</Button>
						<div className="flex gap-4">
							<Button asChild variant="outline" size="lg">
								<a
									href={`https://github.com/${t.hero.githubLink}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									{t.hero.github}
								</a>
							</Button>
							<Button asChild variant="outline" size="lg">
								<a
									href={`https://www.linkedin.com/in/${t.hero.linkedinLink}`}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="mr-2 h-4 w-4" />
									{t.hero.linkedin}
								</a>
							</Button>
						</div>
					</div>

					<div className="animate-bounce">
						<ArrowDown className="mx-auto h-6 w-6 text-muted-foreground" />
					</div>
				</div>
			</div>

			{/* Background decoration */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-1/4 right-1/4 w-72 h-72 bg-blue-600/5 rounded-full blur-3xl"></div>
				<div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-purple-600/5 rounded-full blur-3xl"></div>
			</div>
		</section>
	);
}
