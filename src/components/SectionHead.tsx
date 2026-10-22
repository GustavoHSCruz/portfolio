/** Título de seção: pequeno e discreto. A lista abaixo é que carrega o peso. */
export function SectionHead({ id, title }: { id: string; title: string }) {
	return (
		<h2 className="sec-title" id={id}>
			{title}
		</h2>
	);
}
