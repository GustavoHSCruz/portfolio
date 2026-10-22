# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four audiences, none of them dominant:

- Recruiters and tech leads hiring in Brazil (CLT or PJ), usually reading in Portuguese.
- Foreign companies hiring remotely, reading in English and judging seniority fast.
- Freelance or consulting clients who want a system or product built.
- Other developers who arrive through SteamProfiler, vpngo or the open source work.

They all arrive with the same question: can this person own a product from the first decision to production?

## Product Purpose

Personal portfolio of Gustavo Cruz (he prefers the short name in public; no full legal name on the site), Senior Software Engineer at DXC Technology, Londrina area, Brazil. Nine years in tech, five building software. Success is a visitor who gets in touch through whichever channel suits them: email, LinkedIn, GitHub or a booked call.

## Positioning

He builds whole products, with a view of construction from start to finish: the business rule, the architecture, the infrastructure it runs on, and what happens after the deploy. Four years in infrastructure before development and a postgraduate in information security back that up; SteamProfiler, vpngo and LuraLead are the proof.

## Operating Context

- Visitors come from the GitHub profile, LinkedIn, the CV and project links (steamprofiler.org, the vpngo repo).
- Read on desktop during hiring screens and on phones from LinkedIn.
- English is the primary language (he works for a multinational and targets international roles); Portuguese stays as the regional version. Light and dark theme both stay; he prefers dark, others may not.

## Capabilities and Constraints

- Stack: Vite + React 18, prerendered to static HTML at build time, served by nginx in a read-only Docker container behind Cloudflare, with a strict CSP (`script-src 'self'`, `style-src 'self'`, no third-party origins except the GitHub avatar).
- Must stay static. No Next.js, no React Server Components, no Server Actions, no `react-server-dom-*`, no Node server answering requests. A friend's site on the same `geg.dev.br` infra was taken down over CVE-2025-55182. If React moves to 19, only patched releases (19.0.3 / 19.1.4 / 19.2.3 or later).
- Fonts and assets are self-hosted from the bundle; every asset gets a provenance row in `ASSETS.md` in the same commit.
- Content lives in `src/data/*.ts` (PT and EN side by side); SEO and JSON-LD in `src/data/seo.ts`; `public/llms.txt` mirrors the summary.
- A blog is planned: he wants to become part of the developer content-creator community. The site must have room for writing later without a redesign.
- Open decision: the single primary action. For now contact as a whole (email, LinkedIn, GitHub, call) carries equal weight.
- The CV is withheld from the site until the PDFs are revised: the current ones (`src/public/cv/`) stop at 2025, state an age and expose a phone number.

## Evidence on Hand

- Work history with measured results (`src/data/content.ts`): container memory 1.5 GB to 400 MB, slowest queries 40% faster, chunked upload fixing freezes above 80 MB.
- Projects (`src/data/work.ts`): SteamProfiler (live, steamprofiler.org; cold profile 2 s, warm 15 ms), LuraLead (law firm SaaS in development with a pilot client), vpngo (per-app WireGuard routing, CLI + desktop GUI, Linux tested, macOS/Windows pending device testing).
- Contributing: universal-modder, PS2Recomp, Orbe (Arch PKGBUILD); PR counts are fetched at build time.
- Education: Computer Engineering (UNOPAR 2022), MBA in IT Management (2023), postgraduates in Back-End Development and Information Security (Anhanguera 2024).
- CV PDFs in PT and EN under `src/public/cv/`, outdated and not linked (see Constraints). Real photo via the GitHub avatar.
- No testimonials, client logos or press exist; do not invent them. DXC's client is described, never named.

## Brand Commitments

- Visitors should feel good and welcome; the site is personal, not a corporate CV.
- Feedback from this session: loud and flashy reads wrong ("muito BOOM"), bare and plain reads ugly; the target is professional and calm with real craft.
- The real photo stays, without emphasis.
- Education stays: it is part of his career and gives context and weight.

## Product Principles

1. Show the whole arc: every project is told from decision to production, not as a feature list.
2. Numbers only when measured, and inside the sentence that explains them.
3. Every audience finds a way to reach him within one screen, in their language.
4. Opening mixes who he is, the path that got him here and a glimpse of the products; the full products come after.
5. The site is itself evidence: fast, static, secure, nothing borrowed from a third party at runtime.

## Accessibility & Inclusion

Keyboard navigable with a skip link, both themes readable, reduced-motion respected; PT and EN content parity.
