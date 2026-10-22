import { education } from "../data/work";
import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

export function Education() {
	const { lang, s } = useSettings();

	return (
		<section className="sec">
			<SectionHead id="education" title={s.educationTitle} />
			<ul className="rows">
				{education[lang].map((d) => (
					<li className="item" key={d.degree}>
						<span className="name">{d.degree}</span>
						<span>
							{d.org} · {d.done}
						</span>
					</li>
				))}
			</ul>
		</section>
	);
}
