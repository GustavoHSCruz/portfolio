import { identity } from "../data/content";
import { useSettings } from "../lib/settings";

export function SiteFooter() {
	const { s } = useSettings();
	return (
		<footer className="site-foot">
			<div className="col">
				{identity.fullName}, {s.location}
			</div>
		</footer>
	);
}
