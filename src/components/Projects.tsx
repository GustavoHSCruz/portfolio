import { projects } from "../data/work";
import { useSettings } from "../lib/settings";
import { ArrowUpRight } from "./icons";
import { SectionHead } from "./SectionHead";

export function Projects() {
	const { lang, s } = useSettings();

	return (
		<section className="col section" id="projetos">
			<SectionHead n="02" title={s.projectsTitle} lead={s.projectsLead} />

			{projects[lang].map((p) => (
				<article className="card reveal" key={p.id}>
					<div className="card-top">
						<h3 className="card-title">{p.name}</h3>
						{p.status && (
							<span className={`pill ${p.href ? "is-live" : ""}`}>{p.status}</span>
						)}
					</div>

					<p className="card-body">{p.blurb}</p>

					<ul className="points">
						{p.points.map((point) => (
							<li key={point}>{point}</li>
						))}
					</ul>

					{p.href && (
						<a className="card-link" href={p.href} target="_blank" rel="noopener noreferrer">
							{p.hrefLabel}
							<ArrowUpRight />
						</a>
					)}
				</article>
			))}
		</section>
	);
}
