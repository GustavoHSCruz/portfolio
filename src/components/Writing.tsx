import { useSettings } from "../lib/settings";
import { SectionHead } from "./SectionHead";

/** Lugar do blog. Quando os textos existirem, a lista entra aqui no mesmo formato de linha. */
export function Writing() {
	const { s } = useSettings();

	return (
		<section className="sec">
			<SectionHead id="writing" title={s.writingTitle} />
			<ul className="rows">
				<li className="item">
					<span className="name">{s.writingSoon}</span>
					<span>2026</span>
				</li>
			</ul>
		</section>
	);
}
