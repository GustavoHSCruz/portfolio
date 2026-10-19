import { jobs } from "../data/content";
import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

export function Experience() {
	const { lang, s } = useSettings();
	const list = jobs[lang];

	return (
		<section className="col section" id="experiencia">
			<SectionHead n="01" title={s.experienceTitle} lead={s.experienceLead} />

			<div className="timeline">
				{list.map((job, i) => (
					<article
						className={`tl-item card reveal${i === 0 ? " is-current" : ""}`}
						key={`${job.org}-${job.period}`}
					>
						<div className="card-top">
							<h3 className="card-title">{job.role}</h3>
							<span className="card-meta">{job.period}</span>
						</div>
						<p className="card-org">
							{job.org}
							{job.context ? `, ${job.context}` : ""}
						</p>

						<p className="card-body">{job.summary}</p>

						{job.points.length > 0 && (
							<ul className="points">
								{job.points.map((p) => (
									<li key={p}>{p}</li>
								))}
							</ul>
						)}
					</article>
				))}
			</div>
		</section>
	);
}
