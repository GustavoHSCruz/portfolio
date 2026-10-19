import { identity } from "../data/content";
import { useSettings } from "../lib/settings";

export function SiteHeader() {
	const { lang, toggleTheme, s } = useSettings();

	return (
		<header className="site-head">
			<div className="col site-head-inner">
				<a className="brand" href={lang === "pt" ? "/pt/" : "/"}>
					<img src={identity.avatar} alt="" width={24} height={24} />
					{identity.name}
				</a>

				<nav className="site-nav" aria-label={s.navLabel}>
					<a href="#experiencia">{s.navExperience}</a>
					<a href="#projetos">{s.navProjects}</a>
					<a href="#formacao">{s.navEducation}</a>
					<a href="#contato">{s.navContact}</a>
				</nav>

				<div className="tools">
					{/* Links, não botões: um crawler segue href, não segue onClick. */}
					<a
						className="tool-btn"
						href="/pt/"
						hrefLang="pt-BR"
						lang="pt-BR"
						aria-current={lang === "pt" ? "page" : undefined}
						data-on={lang === "pt" ? "true" : "false"}
					>
						PT
					</a>
					<a
						className="tool-btn"
						href="/"
						hrefLang="en"
						lang="en"
						aria-current={lang === "en" ? "page" : undefined}
						data-on={lang === "en" ? "true" : "false"}
					>
						EN
					</a>
					<button
						type="button"
						className="tool-btn"
						onClick={toggleTheme}
						aria-label={s.themeToggle}
						title={s.themeToggle}
					>
						{/* Os dois ícones sempre no markup, alternados por CSS via data-theme.
						    Escolher em React quebrava a hidratação: o theme.js aplica o tema
						    antes do React montar, então o SSR podia ter renderizado o outro. */}
						<svg className="t-moon" viewBox="0 0 20 20" width="13" height="13" aria-hidden="true">
							<path d="M16.5 12.4A7 7 0 0 1 7.6 3.5a7 7 0 1 0 8.9 8.9Z" fill="currentColor" />
						</svg>
						<svg className="t-sun" viewBox="0 0 20 20" width="13" height="13" aria-hidden="true">
							<g fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
								<circle cx="10" cy="10" r="3.6" />
								<path d="M10 1.6v2.2M10 16.2v2.2M18.4 10h-2.2M3.8 10H1.6M15.9 4.1l-1.6 1.6M5.7 14.3l-1.6 1.6M15.9 15.9l-1.6-1.6M5.7 5.7 4.1 4.1" />
							</g>
						</svg>
					</button>
				</div>
			</div>
		</header>
	);
}
