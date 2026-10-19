import { education } from "../data/work";
import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

export function Education() {
	const { lang, s } = useSettings();

	return (
		<section className="col section" id="formacao">
			<SectionHead n="03" title={s.educationTitle} lead={s.educationLead} />
			<ul className="degrees reveal">
				{education[lang].map((d) => (
					<li key={d.degree}>
						<span>{d.degree}</span>
						<span className="org">
							{d.org}, {d.done}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
}
