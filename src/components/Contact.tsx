import { identity } from "../data/content";
import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

export function Contact() {
	const { s } = useSettings();

	return (
		<section className="sec">
			<SectionHead id="contact" title={s.contactTitle} />
			<p className="contact">
				<a href={`mailto:${identity.email}`}>{s.contactEmail}</a>
				<a href={identity.linkedin}>{s.contactLinkedin}</a>
				<a href={identity.github}>{s.contactGithub}</a>
				<a href={identity.calendly}>{s.contactCall}</a>
			</p>
		</section>
	);
}
