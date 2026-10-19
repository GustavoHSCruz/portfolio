import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Lang } from "../data/types";
import { ui } from "../data/ui";

type Theme = "light" | "dark";

type Settings = {
	lang: Lang;
	theme: Theme;
	toggleTheme: () => void;
	s: Record<string, string>;
};

const Ctx = createContext<Settings | null>(null);

/**
 * O idioma é a URL, não estado guardado.
 *
 * `/` é inglês e `/pt/` é português, cada um com o seu HTML pré-renderizado.
 * Antes disso o idioma vivia em `localStorage`, o que significava que o conteúdo
 * em português não existia para nenhum crawler: só aparecia depois de um clique,
 * dentro do JS. Com duas URLs viram duas páginas indexáveis, e some junto o risco
 * de mismatch de hidratação, porque servidor e cliente derivam o idioma da mesma
 * fonte (o caminho) em vez de fontes diferentes.
 */
export function langFromPath(pathname: string): Lang {
	return pathname.startsWith("/pt") ? "pt" : "en";
}

export function pathForLang(lang: Lang): string {
	return lang === "pt" ? "/pt/" : "/";
}

function readTheme(): Theme | null {
	try {
		const v = localStorage.getItem("theme");
		return v === "light" || v === "dark" ? v : null;
	} catch {
		return null;
	}
}

export function SettingsProvider({ lang, children }: { lang: Lang; children: ReactNode }) {
	// Começa igual ao que o `theme.js` já pintou, para hidratar sem divergência.
	const [theme, setTheme] = useState<Theme>(() => {
		if (typeof document === "undefined") return "dark";
		const applied = document.documentElement.dataset.theme;
		if (applied === "light" || applied === "dark") return applied;
		return readTheme() ?? "dark";
	});

	useEffect(() => {
		document.documentElement.dataset.theme = theme;
	}, [theme]);

	const value = useMemo<Settings>(
		() => ({
			lang,
			theme,
			toggleTheme: () =>
				setTheme((t) => {
					const next = t === "dark" ? "light" : "dark";
					try {
						localStorage.setItem("theme", next);
					} catch {
						/* preferência não persiste; a página continua correta */
					}
					return next;
				}),
			s: ui[lang],
		}),
		[lang, theme],
	);

	return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useSettings(): Settings {
	const v = useContext(Ctx);
	if (!v) throw new Error("useSettings precisa estar dentro de <SettingsProvider>");
	return v;
}
