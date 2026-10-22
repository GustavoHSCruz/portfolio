import releases from "../data/releases.json";
import type { BuildData } from "../data/types";
import { projects } from "../data/work";
import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

const known = (releases as BuildData).projects;

function monthYear(date: string, lang: string) {
	return new Date(`${date}T12:00:00Z`).toLocaleDateString(lang === "pt" ? "pt-BR" : "en-US", {
		month: "short",
		year: "numeric",
		timeZone: "UTC",
	});
}

export function Projects() {
	const { lang, s } = useSettings();

	return (
		<section className="sec">
			<SectionHead id="projects" title={s.projectsTitle} />
			<ul className="rows">
				{projects[lang].map((p) => {
					const r = known[p.id];
					return (
						<li className="proj" key={p.id}>
							<div className="proj-top">
								{p.href ? <a href={p.href}>{p.name}</a> : <span className="name">{p.name}</span>}
								{r?.version ? (
									<span className="ver">
										<a className="tag" href={r.url}>
											{r.version}
										</a>
										{r.date ? ` · ${monthYear(r.date, lang)}` : ""}
									</span>
								) : r?.commit ? (
									<span className="ver">
										<i>{s.live}</i> · <a href={r.url}>{r.commit}</a>
									</span>
								) : (
									<span className="note">{p.note}</span>
								)}
							</div>
							<p>{p.blurb}</p>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
