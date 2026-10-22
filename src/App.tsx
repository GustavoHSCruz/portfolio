import { Contact } from "./components/Contact";
import { Contributing } from "./components/Contributing";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Intro } from "./components/Intro";
import { Projects } from "./components/Projects";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Writing } from "./components/Writing";
import type { Lang } from "./data/types";
import { SettingsProvider, useSettings } from "./lib/settings";

function Page() {
	const { s } = useSettings();
	return (
		<div className="page">
			<a className="skip" href="#content">
				{s.skipToContent}
			</a>
			<SiteHeader />
			<main id="content">
				<Intro />
				<Projects />
				<Experience />
				<Contributing />
				<Education />
				<Writing />
				<Contact />
			</main>
			<SiteFooter />
		</div>
	);
}

export default function App({ lang }: { lang: Lang }) {
	return (
		<SettingsProvider lang={lang}>
			<Page />
		</SettingsProvider>
	);
}
