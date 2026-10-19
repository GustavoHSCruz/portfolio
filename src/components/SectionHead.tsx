export function SectionHead({ n, title, lead }: { n: string; title: string; lead?: string }) {
	return (
		<div className="section-head reveal">
			<span className="section-n">{n}</span>
			<h2 className="section-title">{title}</h2>
			{lead && <p className="section-lead">{lead}</p>}
		</div>
	);
}
