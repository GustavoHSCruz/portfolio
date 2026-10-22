import { identity } from "../data/content";
import { useSettings } from "../lib/settings";

export function SiteFooter() {
	const { s } = useSettings();
	return (
		<footer className="foot">
			{identity.name} · {s.location}
		</footer>
	);
}
