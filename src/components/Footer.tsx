import { Github, Heart, Linkedin, Mail } from "lucide-react";
import { useApp } from "../contexts/AppContext";

export function Footer() {
	const { t } = useApp();
	const currentYear = new Date().getFullYear();

	return (
		<footer className="bg-muted/50 border-t border-border">
			<div className="container mx-auto px-6 py-12">
				<div className="flex flex-col items-center text-center space-y-6">
					{/* Logo and Name */}
					<div className="flex items-center space-x-3">
						<div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
							<span className="text-white font-bold">GC</span>
						</div>
						<span className="text-xl font-bold">Gustavo Cruz</span>
					</div>

					{/* Social Links */}
					<div className="flex space-x-6">
						<a
							href="https://github.com/gustavoHSCruz"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-lg border border-border hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300 group"
						>
							<Github className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
						</a>
						<a
							href="https://linkedin.com/in/gusttavocruz"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-lg border border-border hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300 group"
						>
							<Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
						</a>
						<a
							href="mailto:gustavo_cruz08@hotmail.com"
							className="p-3 rounded-lg border border-border hover:border-blue-600/50 hover:bg-blue-600/10 transition-all duration-300 group"
						>
							<Mail className="h-5 w-5 text-muted-foreground group-hover:text-blue-600 transition-colors" />
						</a>
					</div>

					{/* Quick Links */}
					<div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
						<a href="#about" className="hover:text-blue-600 transition-colors">
							{t.nav.about}
						</a>
						<a
							href="#experience"
							className="hover:text-blue-600 transition-colors"
						>
							{t.nav.experience}
						</a>
						<a
							href="#projects"
							className="hover:text-blue-600 transition-colors"
						>
							{t.nav.projects}
						</a>
						<a href="#skills" className="hover:text-blue-600 transition-colors">
							{t.nav.skills}
						</a>
						<a
							href="#contact"
							className="hover:text-blue-600 transition-colors"
						>
							{t.nav.contact}
						</a>
					</div>

					{/* Divider */}
					<div className="w-full h-px bg-border"></div>

					{/* Copyright */}
					<div className="flex flex-col sm:flex-row items-center gap-2 text-sm text-muted-foreground">
						<span>
							© {currentYear} Gustavo Cruz. {t.footer.copyright}
						</span>
						<div className="flex items-center gap-1">
							<span>{t.footer.madeWith}</span>
							<Heart className="h-4 w-4 text-red-500 fill-current" />
							<span>{t.footer.and}</span>
						</div>
					</div>

					{/* Tech Stack Info */}
					<div className="text-xs text-muted-foreground/70">
						{t.footer.techStack}
					</div>
				</div>
			</div>
		</footer>
	);
}
