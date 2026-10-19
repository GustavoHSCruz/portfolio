import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import type { Lang } from "./data/types";
import { SettingsProvider, useSettings } from "./lib/settings";
import { useReveal } from "./lib/useReveal";

function Page() {
	const { s } = useSettings();
	useReveal();
	return (
		<>
			<a className="skip" href="#experiencia">
				{s.skipToContent}
			</a>
			<SiteHeader />
			<main>
				<Hero />
				<Experience />
				<Projects />
				<Education />
				<Contact />
			</main>
			<SiteFooter />
		</>
	);
}

export default function App({ lang }: { lang: Lang }) {
	return (
		<SettingsProvider lang={lang}>
			<Page />
		</SettingsProvider>
	);
}
