import { useEffect } from "react";

/**
 * Revelação no scroll que falha aberta.
 *
 * O elemento NUNCA é escondido preventivamente. Não existe classe global que
 * apague a página esperando o observer. Só o que já nasce fora da primeira
 * dobra é observado, e ao entrar recebe uma classe que dispara um keyframe
 * partindo do invisível. Se o JS não rodar, se o IntersectionObserver não
 * existir, ou se o usuário pedir menos movimento, o conteúdo está lá e nada
 * acontece.
 *
 * A primeira versão disto adicionava `js-reveal` no <html> e escondia todos os
 * alvos de uma vez. Bastaria o JS morrer entre adicionar a classe e observar
 * para a página ficar em branco. O Codex apontou, e ele estava certo.
 */
export function useReveal() {
	useEffect(() => {
		if (typeof IntersectionObserver === "undefined") return;
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

		const targets = Array.from(document.querySelectorAll<HTMLElement>(".reveal")).filter(
			// O que já está visível no carregamento não anima: animar isso causaria
			// um piscar em cima de conteúdo que o leitor já enxerga.
			(el) => el.getBoundingClientRect().top > window.innerHeight * 0.92,
		);
		if (!targets.length) return;

		const io = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (!entry.isIntersecting) continue;
					entry.target.classList.add("is-in");
					io.unobserve(entry.target);
				}
			},
			{ rootMargin: "0px 0px -6% 0px", threshold: 0.04 },
		);

		targets.forEach((t) => io.observe(t));
		return () => io.disconnect();
	}, []);
}
