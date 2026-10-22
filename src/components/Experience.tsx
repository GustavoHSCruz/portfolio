import { jobs } from "../data/content";
import type { Job } from "../data/types";
import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

/** O primeiro e o último ano da fase, a partir dos períodos "2021 – 2023". */
function span(list: Job[]) {
	const first = list[list.length - 1].period.split(" – ")[0];
	const last = list[0].period.split(" – ")[1];
	return `${first} – ${last}`;
}

export function Experience() {
	const { lang, s } = useSettings();
	const phases = [
		{ key: "software", title: s.phaseSoftware },
		{ key: "infra", title: s.phaseInfra },
	] as const;

	return (
		<section className="sec">
			<SectionHead id="experience" title={s.experienceTitle} />
			{phases.map(({ key, title }) => {
				const list = jobs[lang].filter((j) => j.phase === key);
				return (
					<div className="phase" key={key}>
						<h3 className="phase-head">
							<span>{title}</span>
							<span>{span(list)}</span>
						</h3>
						<ul className="jobs">
							{list.map((j) => (
								<li className="job" key={`${j.org}-${j.period}`}>
									<span className="per">{j.period}</span>
									<div>
										<b>{j.role}</b> <span className="org">{s.at} {j.org}</span>
										<p>{j.line}</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				);
			})}
		</section>
	);
}
