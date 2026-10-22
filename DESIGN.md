---
name: Gustavo Cruz
description: A calm, text-first developer homepage that reads like a well-kept project page.
colors:
  ink-bg: "#0b0b0c"
  ink-fg: "#ececee"
  ink-body: "#cfcfd4"
  ink-muted: "#8e8e96"
  ink-line: "#222226"
  ink-underline: "#55555d"
  ink-select: "#2f3b33"
  release-green: "#4ade80"
  paper-bg: "#fbfbfa"
  paper-fg: "#18181b"
  paper-body: "#3f3f46"
  paper-muted: "#6b6b73"
  paper-line: "#e4e4e7"
  paper-underline: "#c4c4cc"
  paper-select: "#d6efdc"
  release-green-paper: "#15803d"
typography:
  display:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  display-mobile:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "28px"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  body:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.65
  title:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.65
  body-small:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 500
    lineHeight: 1.65
  meta:
    fontFamily: "Schibsted Grotesk Variable, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.65
  release-mono:
    fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace"
    fontSize: "13px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  focus: "3px"
  skip: "6px"
  control: "8px"
  avatar: "50%"
spacing:
  label-gap: "10px"
  row-tight: "12px"
  row: "16px"
  headline-gap: "22px"
  phase: "40px"
  section: "72px"
  footer: "96px"
  column: "760px"
components:
  text-link:
    textColor: "{colors.ink-fg}"
  nav-link:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  section-label:
    textColor: "{colors.ink-muted}"
    typography: "{typography.label}"
  release-tag:
    textColor: "{colors.release-green}"
    typography: "{typography.release-mono}"
  project-row:
    typography: "{typography.title}"
    padding: "16px 0"
  list-row:
    typography: "{typography.title}"
    padding: "12px 0"
  theme-toggle:
    textColor: "{colors.ink-muted}"
    rounded: "{rounded.control}"
    size: "32px"
  skip-link:
    backgroundColor: "{colors.ink-fg}"
    textColor: "{colors.ink-bg}"
    rounded: "{rounded.skip}"
    padding: "8px 12px"
---

# Design System: Gustavo Cruz

## Overview

**Creative North Star: "The Well-Kept Project Page"**

The site reads like the README of a project someone actually maintains: one narrow column of text, set in a grotesk with a newspaper voice, ordered as a list of facts. Who he is takes two paragraphs. Then come the products with their real versions, then the path from infrastructure to software, then the ways to reach him. Nothing is staged. Hierarchy comes from weight, size and contrast within one family. There are no panels, cards or hero devices.

The palette is ink and grey in two themes, near-black (dark, the default) and off-white, with body text a step below full contrast. Exactly one colour exists, a muted green, and it appears only where the data is real and current: a release version, the word "live", the focus ring. The page is calm but not bare. The craft is in the rhythm: hairline rules between entries, quiet underlines that firm up on hover, tabular figures on every date, and generous 72px pauses between sections.

The system rejects the centred hero with buttons over a row of equal cards, and anything loud ("muito BOOM"). It equally rejects a plain, untended page.

**Key Characteristics:**
- One 760px column, left-aligned, text first.
- Ink and grey only; green belongs to real release data.
- One grotesk family for all prose; system mono only for versions and hashes.
- Hairline dividers between entries instead of containers.
- Underlined links with a quiet underline that firms up on hover.
- Dark and light themes are equal citizens, switched by `data-theme`.

## Colors

Two tonal grey ladders, one per theme, plus a single green reserved for release data.

### Primary
- **Release Green** (`release-green` in dark, `release-green-paper` in light; token `--tag`): Version tags, the "live" marker on deployed projects, and the keyboard focus ring. It never decorates headings, backgrounds or buttons.

### Neutral
- **Ink Black / Paper White** (`ink-bg` / `paper-bg`; `--bg`): The page ground. No other surface colour exists.
- **Ink / Paper Foreground** (`ink-fg` / `paper-fg`; `--fg`): Headline, names, link text, and the hover state of every muted element.
- **Body Grey** (`ink-body` / `paper-body`; `--body`): Running prose (intro paragraphs, project and job descriptions), one step under full contrast.
- **Muted Grey** (`ink-muted` / `paper-muted`; `--muted`): Section labels, nav, role line, dates, organisation names, secondary row values, footer.
- **Hairline** (`ink-line` / `paper-line`; `--line`, `--avatar-ring`): 1px dividers between rows, under phase headings, above the footer; the ring around the avatar; the underline on links inside release metadata.
- **Quiet Underline** (`ink-underline` / `paper-underline`; `--underline`): Resting underline colour for every prose link.
- **Selection Tint** (`ink-select` / `paper-select`; `--select`): Text selection background, a green-tinted grey that stays faint.

### Named Rules
**The Real-Data Green Rule.** Green marks only something true right now: a published version, a live deployment, or keyboard focus. If the value is not fetched from a real release or deploy, it is grey.

**The One-Step-Down Rule.** Prose sits at `--body`, not `--fg`. Full contrast is kept for names, headings and links so they stand out without extra weight or colour.

## Typography

**Display Font:** Schibsted Grotesk Variable (with ui-sans-serif, system-ui, sans-serif)
**Body Font:** Schibsted Grotesk Variable (same stack)
**Label/Mono Font:** ui-monospace, SFMono-Regular, Menlo, Consolas, monospace (release data only)

**Character:** A sturdy, slightly editorial grotesk that carries everything from the headline to the footer. The system mono is a small, quiet technical register used only where the content is machine output.

### Hierarchy
- **Display** (600, 34px, 1.2, -0.02em, balanced wrap; 28px under 560px): The single page headline. Used once.
- **Body** (400, 18px, 1.65, max 62ch): Intro paragraphs.
- **Title** (600, 17px): Project names, job roles, person name in the header. List rows in Contributing, Education and Writing use the same 17px at weight 400.
- **Body Small** (400, 16px, 1.6, max 68ch, pretty wrap): Project and job descriptions under a title; also secondary row values. Phase headings use 16px at weight 500 in `--fg`.
- **Label** (500, 15px, muted): Section labels. Nav links, the role line, job periods and project notes share the 15px size at weight 400.
- **Meta** (400, 14px, muted): Phase date spans and the footer.
- **Release Mono** (500, 13px, 1.4, muted, no wrap): Versions, dates beside them, commit hashes.

### Named Rules
**The Label-Is-The-Heading Rule.** A section's heading is its small muted label (15px, 500). Nothing sits above it: no kickers or eyebrows, and no oversized section titles. The list under the label carries the weight.

**The Mono-For-Machines Rule.** Monospace appears only on release versions and commit hashes. Dates, counts and periods stay in the grotesk with `font-variant-numeric: tabular-nums`.

## Layout

One column, `min(760px, 100% - 40px)`, centred on the page and left-aligned inside. Page padding is 72px top and 56px bottom (32px top under 560px). The header row (48px avatar, name and role on the left; nav, EN/PT and theme toggle on the right) sits 72px above the headline (48px on mobile) and wraps instead of collapsing into a menu.

Vertical rhythm: 72px between sections (56px on mobile), 96px before the footer, 40px between experience phases, 22px under the headline, 10px from a section label to its list. Rows use 12px vertical padding for simple lists, 14px for jobs and 16px for projects.

Rows are flex lines with the primary value on the left and the secondary value pushed to the right, baseline-aligned. Under 560px they stack, with the secondary value left-aligned underneath. Jobs use a two-column grid (120px period, 1fr content, 20px gap) that becomes a single column on mobile. There is one breakpoint, at 560px.

## Elevation & Depth

The system is flat. There are no drop shadows and no layered surfaces. Structure comes from 1px hairlines and from tonal contrast between `--fg`, `--body` and `--muted`. The only `box-shadow` is a 1px ring (`0 0 0 1px var(--avatar-ring)`) that keeps the avatar's edge visible against the ground.

### Named Rules
**The Hairline-Not-Container Rule.** Entries are separated by a 1px `--line` rule between siblings (never above the first), not boxed in cards or tinted panels.

## Shapes

The page is mostly rectilinear text with almost no visible shapes. The one round element is the avatar (a circle at 48px). Interactive chrome has small radii: the theme toggle's hit area at 8px, the skip link at 6px, and the focus outline at 3px. Lines are always 1px solid.

## Components

### Links
Quiet and underlined, so they read as prose rather than buttons.
- **Prose link:** `--fg` text, 1px underline in `--underline`, offset 0.22em. On hover the underline turns `--fg` (160ms ease-out; no transition under reduced motion).
- **Link inside release metadata:** inherits the muted mono colour, with the underline in `--line`; on hover the underline takes the current colour. A version tag link takes Release Green.
- **Focus (all interactive elements):** 2px solid Release Green outline, 3px offset, 3px radius.

### Navigation
- Header nav and the EN/PT switch: 15px, `--muted`, no underline, 18px gap (10px between EN and PT). Hover and `aria-current="page"` turn `--fg`. Language choice is a pair of real links, not a toggle button.
- **Theme toggle:** a 32px borderless square with an 8px radius and a 15px inline SVG (moon in dark, sun in light, both always in the markup and swapped by CSS). Muted at rest and `--fg` on hover.

### Section Label
A 15px/500 muted `h2` placed 10px above its list. It is the section heading, not a kicker.

### Project Row (signature)
Name (17px/600, linked when public) on the left; on the right, baseline-aligned, either a Release Mono line (green version tag, " · " and month-year, or green "live", " · " and a commit hash) or a 15px muted note for private work. A 16px Body Small description follows, 4px below.

### List Row
Contributing, Education and Writing entries: 17px primary text on the left, a 16px muted tabular secondary value on the right, 12px vertical padding, hairline between rows.

### Experience Phase
A 16px/500 `--fg` phase heading with a 14px muted year span on the right and a hairline beneath. Jobs follow on the period/content grid: period at 15px muted tabular, then role at 17px/600, the organisation in muted, and a 16px Body Small line.

### Skip Link
Inverted (`--fg` ground, `--bg` text), 8px 12px padding, 6px radius. Hidden off-screen and dropped to 16px from the top on focus.

## Do's and Don'ts

### Do:
- **Do** keep every surface in the single 760px column, left-aligned, with 72px between sections.
- **Do** use Release Green only on fetched release data (versions, "live") and the focus ring.
- **Do** separate entries with a 1px `--line` hairline between siblings.
- **Do** set prose in `--body` and keep `--fg` for names, headings and links.
- **Do** use `font-variant-numeric: tabular-nums` on dates, periods and counts.
- **Do** keep Schibsted Grotesk for all prose and reserve system mono for versions and hashes.
- **Do** define every new colour for both themes under `:root[data-theme]`.

### Don't:
- **Don't** build a centred hero with buttons over a row of equal cards.
- **Don't** put kickers or eyebrows above headings; the small muted label is the heading.
- **Don't** use green, or any new hue, for decoration, emphasis or buttons.
- **Don't** box entries in cards, tinted panels or drop shadows.
- **Don't** set dates, counts or prose in monospace.
