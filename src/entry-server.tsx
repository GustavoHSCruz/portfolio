import { renderToString } from "react-dom/server";
import App from "./App";
import type { Lang } from "./data/types";

/** Usado só pelo pré-render, no build. Não entra no bundle do navegador. */
export function render(lang: Lang): string {
	return renderToString(<App lang={lang} />);
}

export { seo, personJsonLd, SITE } from "./data/seo";
