import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import { langFromPath } from "./lib/settings";
import "@fontsource-variable/plus-jakarta-sans";
import "@fontsource-variable/inter";
import "./styles/app.css";

// O HTML já vem renderizado do build, então hidratamos em vez de montar do zero.
// O idioma sai do caminho, a mesma fonte que o prerender usou: sem divergência.
hydrateRoot(
	document.getElementById("root")!,
	<StrictMode>
		<App lang={langFromPath(window.location.pathname)} />
	</StrictMode>,
);
