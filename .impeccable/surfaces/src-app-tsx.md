---
version: 1
slug: "src-app-tsx"
primary_target: "src/App.tsx"
related_targets: []
---

# Home (/, /pt/)

Scope: the whole one-page portfolio. Mode: Experience (the work leads), executed in the familiar register the user chose in a safer re-roll.

Audience, job, action: recruiters (BR and remote), freelance clients and other devs decide whether Gustavo owns products end to end; they reach him through email, LinkedIn, GitHub or a booked call (no CV link until the PDFs are current).

Constraints: static prerender only (see PRODUCT.md); release data fetched at build time, never in the browser.

Unresolved: blog engine and post format; PT copy review with the user.

## Direction contract

THESIS: A calm, text-first developer homepage that reads like a well-kept project page: who he is in two paragraphs, then the products with their live versions, then the path. Refuses the centred hero with buttons over a row of equal cards.

OWN-WORLD: One 760px column on near-black (#0b0b0c) or off-white (#fbfbfa); body text a step under full contrast; section labels small and muted, never kickers above headings; hairline rules between entries; links underlined with a quiet underline; the only colour is a muted green on real release data (version tags, "live"). Grotesk with a newspaper voice for text, system mono only for versions and hashes.

STORY: Visitor learns he builds whole products, sees them shipping right now with real versions, then sees how infra led to software, what he contributes and studied, and reaches him in one click.

FIRST VIEWPORT: Top row: 48px photo, name and role left, nav and EN/PT and theme right. Below: headline "I build whole products, start to finish." at ~34px, two short paragraphs with SteamProfiler and vpngo as inline links, then the Projects list beginning above the fold.

FORM: Merge of grounded "Release Notes" (safer list position 1) and the canon minimal dev homepage, chosen by the user; experience regrouped as "Building software" and "Running infrastructure". seed:b10388db0e0b9335

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
