import releases from "../data/releases.json";
import type { BuildData } from "../data/types";
import { contributions } from "../data/work";
import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

const counts = (releases as BuildData).contributions;

export function Contributing() {
	const { s } = useSettings();

	const label = (n: number, many: string, one: string) => `${n} ${n === 1 ? one : many}`;

	return (
		<section className="sec">
			<SectionHead id="contributing" title={s.contributingTitle} />
			<ul className="rows">
				{contributions.map((c) => {
					const pr = counts[c.repo];
					const parts = pr
						? [pr.merged && label(pr.merged, s.merged, s.mergedOne), pr.open && label(pr.open, s.open, s.openOne)].filter(Boolean)
						: [];
					return (
						<li className="item" key={c.repo}>
							<a href={c.href} title={c.repo}>
								{c.name}
							</a>
							<span>{parts.join(" · ")}</span>
						</li>
					);
				})}
			</ul>
		</section>
	);
}
