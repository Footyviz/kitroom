# FootyViz Design System (snapshot)

> **Reference only — do not import, link, or compile from `design_specs/`.**
> This is a versioned copy of the Claude-produced design system used as
> the visual source of truth for component work. The original lives at
> `~/UndergroundSecretLaboratory/FootyViz/FootyViz Design System/`. The
> two large `brand-logo*.html` files are intentionally omitted (~7 MB).
>
> **Accent note:** This README mentions a "signal lime `#C6F24E`" accent.
> The actual tokens.css and every preview use straw yellow `#E8BE56`.
> Treat the lime mention as stale; the canonical accent is straw.
> The signal lime `#E8FF5A` survives as `--toggle-on` for user-valued
> switches only.

---

# FootyViz Design System

> Data-first football companion. The UI disappears. The visualizations speak.

---

## What is FootyViz?

FootyViz is a **data visualization platform for football (soccer)** that turns every match into an educational, insight-rich experience. Its flagship feature is a **live-match companion**: a second-screen experience that augments what a fan is already watching on TV (or in the stadium) with real-time data, spatial visualizations, and narrative context.

The product's core promise: **make mainstream fans smarter about football, without asking them to work for it.**

Key technical bet: **3D and WebGPU-powered visualizations** are the main attraction. The role of the UI is to get out of the way so those visualizations can breathe.

### Products covered by this system

| Product | Surface | Role |
|---|---|---|
| **Live Match Companion** | iOS / Android phone app | Primary — second-screen while watching TV |
| **Live Match Companion (Tablet)** | iPad / Android tablet, landscape | Secondary — larger second-screen, more data simultaneously |
| **Match Explorer** | Web dashboard | Pre-match / post-match deep dives, archive, comparisons |

A marketing website, broadcast graphics package, and embeddable widgets are explicitly **out of scope** for this first version.

---

## Sources & Provenance

This design system was generated **from scratch** — no codebase, Figma, brand book, or logo was provided as input. All visual, type, and tone decisions are proposals to be validated and iterated on.

Stated constraints from the client:

- Clean, minimalist user experiences
- Black & white color scheme with very purposeful use of other colors
- 3D graphics technologies like WebGPU for the graphs
- Visualizations are the main attraction — UI must recede
- Aesthetic reference: **Claude's UX** (but swap Claude's tan accent for a different one)
- Tone: **journalistic / neutral**
- Audience: **mainstream fans who want to learn**
- Icons: **Lucide** (thin, minimal)
- Motion: **subtle — short fades + ease-out**
- Dual-mode (light + dark, equal priority)
- Overall: *"the UX to disappear in favor of data, not add any cognitive load for the user but still serve its purpose."*

---

## Index — what's in this folder

```
/
├── README.md                    ← you are here
├── SKILL.md                     ← agent-skill manifest (usable in Claude Code)
├── colors_and_type.css          ← all CSS vars + semantic type classes
├── assets/
│   ├── logo-wordmark.svg        ← primary wordmark
│   ├── logo-mark.svg            ← glyph-only
│   ├── logo-lockup.svg          ← mark + wordmark
│   ├── pitch-grid.svg           ← reusable pitch backdrop
│   └── icons/                   ← team crest placeholders & misc
├── preview/                     ← cards that render in the Design System tab
│   ├── type-*.html
│   ├── color-*.html
│   ├── spacing-*.html
│   ├── component-*.html
│   └── brand-*.html
└── ui_kits/
    ├── mobile_companion/
    │   ├── README.md
    │   ├── index.html           ← click-thru prototype
    │   └── *.jsx                ← per-component files
    ├── tablet_companion/
    └── web_dashboard/
```

---

## CONTENT FUNDAMENTALS

### Voice

**Journalistic. Neutral. Data-forward.** Think *The Athletic* or *FiveThirtyEight* minus the winks. We report what happened and what's happening; we don't hype, and we don't pander. The verbs are concrete ("completed", "recovered", "advanced"); the adjectives are earned or absent.

We are **not** a fan account. No "🚀", no "UNREAL goal", no "you won't BELIEVE what happened next". The copy should read like a clean beat writer's notebook.

### Person

**Third person for play-by-play. Second person for product UI.**

- *Match data:* "Haaland has completed 14 of 17 passes in the final third."
- *Product UI:* "You have 3 saved matches. Resume where you left off?"

### Casing

- **Sentence case** everywhere except proper nouns.
- **UPPERCASE** only for: timestamps ("LIVE", "HT", "FT"), tiny metadata captions (with letterspacing), and stat labels in the viz chrome ("xG", "xT", "PPDA").
- **Title Case is forbidden.** It reads promotional.

### Abbreviations & units

- Use the football community's real shorthand: `xG`, `xT`, `xA`, `PPDA`, `npxG`. Never spell these out in-place — provide a hover/long-press glossary.
- Time: `73'` for match minute, `73+4'` for stoppage.
- Distance in metres. Speed in km/h. Never imperial.

### Emoji

**No.** Exception: flag emoji are acceptable as compact nationality markers beside a player name when a crest isn't available. That's it.

### Unicode characters as icons

- `'` prime (U+2032) for match minutes — *never* apostrophe
- `·` middle dot (U+00B7) as separator in metadata rows
- `→` for possession / pass direction chips
- `−` true minus (U+2212) for negative deltas, not hyphen

### Examples

Good:
> **Arsenal 2 – 1 Chelsea · 73'**
> Saka advanced 11m before releasing the pass. xT +0.08.

Good:
> **You haven't opened a match since Sunday.** Man City v Liverpool kicks off in 47 minutes.

Bad:
> 🔥 **ARSENAL ON FIRE** 🔥 Saka with an ABSOLUTE ROCKET 🚀

Bad:
> Welcome Back! We're Thrilled You're Here.

### Numbers

- **Always tabular-num.** We use Geist Mono for every numeric readout so columns line up.
- **One decimal** for xG, xT, possession % ("1.8", "62.4%"). Two decimals only when the metric genuinely varies at that resolution.
- **Large integers** get a thin space as thousand separator, not a comma: `12 438 passes`. Matches European convention and reads cleaner in a data UI.

---

## VISUAL FOUNDATIONS

### Philosophy

> The UI is the frame. The data is the painting. When in doubt, remove something.

Every visual decision defers to the visualization. The chrome should be so quiet that when a 3D xG plot loads, it becomes the only thing the eye sees.

### Color

- **Monochrome-dominant.** 95% of the UI is black, white, and a warm-leaning neutral scale (`--neutral-50` through `--neutral-1000`). We chose a *slightly warm* off-white (`#FAFAF7`) and a near-true-black (`#08080706`) rather than a cool grey — it feels less clinical, more editorial.
- **One accent:** signal lime `#C6F24E`. Evokes pitch line paint and stadium floodlights. Used **only** for: the live indicator pulse, the currently-selected item, the primary series in a multi-series chart, and the CTA button. It does **not** appear in body copy, hover states, borders, or illustrations.
- **Data series** `--series-1` through `--series-6` for visualizations. These are allowed to be colorful — they are the point.
- **Semantic states:** positive (green), negative (red), warning (amber), info (blue). Used only where they carry real meaning (red/yellow card, VAR, goal/miss).
- **No gradients** in UI chrome. Gradients are reserved for 3D viz rendering contexts (e.g. heat maps, pitch-elevation shading).

### Type

- **Geist** (sans) — primary UI, all copy, all headings, all editorial moments.
- **Geist Mono** — all numerics, all stat readouts, timestamps, coordinates, match minutes. This is non-negotiable: numbers live in mono.
- Sans-serif only. No serif face in the system.
- Tracking is tight on display sizes (`-0.02em`), normal on body. Caps-level captions use `0.08em` letterspacing.

### Spacing

4px base unit. Tokens: `--space-1` (4px) → `--space-24` (96px). Components breathe — default panel padding is 20–24px. A live-match companion on a phone still prioritizes whitespace over density; information density is concentrated *inside* the viz, not the chrome.

### Backgrounds

- **No imagery in chrome.** No stadium photos, no player portraits used decoratively.
- **No repeating patterns** or textures in UI.
- **One subtle exception:** a very faint pitch-grid SVG at 3–5% opacity may appear as a full-bleed backdrop on an empty state or a "pre-match" screen. Otherwise backgrounds are flat neutrals.
- **3D viz canvases** render on `--neutral-1000` in dark mode, `--neutral-50` in light. WebGPU graphs have their own internal atmosphere — they do not bleed into the surrounding UI.

### Animation

- **Philosophy:** subtle, short, informative. Animation exists to communicate change, not to delight.
- **Duration:** `--dur-fast` (160ms) for hover/state, `--dur-base` (240ms) for panel/sheet enters, `--dur-slow` (420ms) for data transitions (xG bar growing, pass trail drawing).
- **Easing:** `--ease` = `cubic-bezier(0.22, 1, 0.36, 1)` — a soft ease-out. No bounces, no springs, no overshoot.
- **Live data:** never "pop in". New events slide in with 8–12px travel and fade. The live dot is the only looping animation (1.6s breathing).
- **3D viz:** camera moves are the exception — they're allowed to be cinematic (800–1200ms) because they *are* the content.

### Hover states

- **Interactive text:** color shifts from `--fg-muted` → `--fg`. No underlines except on true inline links inside body copy.
- **Buttons:** background shifts one step (e.g. `--neutral-100` → `--neutral-150`). No scale, no shadow change.
- **Cards:** border shifts `--border-subtle` → `--border`. Cursor changes. No lift.
- **Accent CTA:** darkens slightly (lime → darker lime). No glow.

### Press / active states

- **Buttons:** `transform: scale(0.98)` held for press-duration only. Background darkens one more step.
- **List rows:** background deepens to `--bg-inset`.
- **No ripple.** No material ink. This is not Material.

### Borders

- **1px, always.** Borders are the primary way we separate space — shadows are secondary.
- **Three border strengths:** `--border-subtle` for same-elevation dividers, `--border` for default card/panel edge, `--border-strong` for focused/selected items.
- **Pitch-line borders:** in data contexts we occasionally use a 1px `--accent` border to mark the "live" or "focus" element. This is the one place where accent touches chrome.

### Shadows

- **Used sparingly.** Prefer borders + a shift in bg tone.
- Four tokens: `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-pop` (popovers only).
- Shadows are **cool-tinted and soft** — no hard 0/0/8/rgba(0,0,0,0.3) dev-tools drops.
- Dark mode shadows are heavier but the elevation *system* is the same.

### Corner radii

- **Most things:** `--radius-md` (8px) — cards, panels, inputs.
- **Buttons / chips:** `--radius-lg` (14px). Capsules (`--radius-full`) for player/team chips only.
- **Pitch viz frame:** `--radius-sm` (4px) — closer to architectural.
- **Modals / sheets:** `--radius-xl` (20px) on top edges only (for bottom sheets).

### Layout

- **Fixed chrome:** the bottom tab bar on mobile, the top match-status header on tablet, and the left nav on web dashboard.
- **Safe-area aware:** every mobile screen respects iOS/Android safe-area insets.
- **Content max width** on web: 1200px, centered.
- **The viz always gets priority.** Sidebars collapse to icon rail when a 3D viz is open.

### Transparency & blur

- **Yes** for persistent chrome over content (mobile tab bar, sticky headers): `backdrop-filter: blur(20px)` + 85% bg. This lets the viz peek through.
- **Never** for cards, panels, or pop-ups in the default state. Transparency is load-bearing — it signals "content lives behind this".

### Imagery (when present)

- Team crests: official PNGs from data provider, sized 20/28/40/56/72. Never recolored.
- Player photos: **cut-out on neutral**, grayscale by default, in-color only on the active/selected player. No dramatic lighting, no atmospheric backgrounds.
- Kit/jersey colors: used at tiny sizes as identity chips (8px dots).
- No stock photography. No stadium photos. No crowds.

### Cards

- 1px `--border` + `--bg-elev` background.
- `--radius-md` (8px).
- `--shadow-sm` by default; rises to `--shadow-md` on hover *only when interactive*.
- Padding: `--space-5` (20px) standard.
- Title is `.fv-caption` (uppercase, 11px, tracked).
- Empty cards are allowed — negative space is a feature.

### Cognitive-load rules of thumb

- **One primary action per screen.** If you want to add a second, it becomes the new primary.
- **Never more than three colors visible** on any screen outside a viz.
- **A label or a glyph — not both.** Choose the clearer one.
- **Numbers are rounded consistently.** If xG shows 1.8 on the summary, it shows 1.8 everywhere.
- **Every chart has a one-line explanation** within reach (tap the `?`) — never in the chart itself.

---

## ICONOGRAPHY

### System: Lucide

FootyViz uses [**Lucide**](https://lucide.dev) as its sole icon set. Lucide's thin, geometric, 1.5px-stroke style matches our minimal aesthetic and is what we'd draw ourselves if we had time.

- **Load:** via CDN script tag `https://unpkg.com/lucide@latest`, or import individual SVGs.
- **Default stroke-width:** 1.5 (not Lucide's default 2 — we want it quieter).
- **Default size:** 20px in UI chrome, 16px in dense data contexts, 24px in primary actions.
- **Color:** `currentColor`, inherits from text. Never filled.
- **Hit target:** minimum 44×44 even when the glyph is 20×20.

### Custom icons

We extend Lucide only where football-specific glyphs are required:

- **Team crest placeholder** (a generic shield) — when crests aren't available
- **Pitch** / **formation grid** — used as section headers in tactical views
- **Football** (the ball itself) — reserved for live-goal indicators

These live in `assets/icons/` and are drawn in the same 24×24 frame / 1.5px stroke as Lucide.

### Emoji & Unicode

- **Emoji:** forbidden in product chrome. Acceptable only as a user-provided nationality flag beside a player name when a proper flag SVG isn't available.
- **Unicode symbols** we use as glyphs: `'` (prime, minute), `·` (middle dot, separator), `→` (direction), `−` (true minus), `●` (live dot). These are type, not icons, and render in Geist Mono.

### Team crests

Team crests come from the data provider. We:
- Display them at fixed sizes (20 / 28 / 40 / 56 / 72)
- Never recolor or restyle
- Always pair with the 3-letter club code (`MCI`, `LIV`, `ARS`) in Geist Mono as a fallback

---

## Caveats

- **No brand assets were provided.** Logo, mark, and iconography are generated proposals — please provide authoritative versions when ready.
- **Geist is a brand-friendly but opinionated choice.** If you want a licensed face (Söhne, National 2) or free alts (Space Grotesk, Instrument Sans, General Sans), flag it and I'll swap.
- **Signal lime `#C6F24E`** was chosen as a stadium-floodlight accent replacing Claude's tan. Easy to change in `--accent`.
- **Pitch / pass-network visualizations are SVG stand-ins** for the real WebGPU renders. The chrome around them is what's locked in.
- **Team crests + player photos** are placeholders. Licensing is your call — the system assumes you get crests from your data provider.
- **No sample slide deck was requested or created.**
- **UI kits mock three surfaces.** Tablet is a single-screen static HTML (not interactive); mobile + web dashboard are clickable.

---

## Where to iterate — a clear ask

I made dozens of opinionated calls without your input. **Please help me pressure-test the most consequential ones:**

1. **The accent color** — is signal lime right, or would you rather try electric cyan / blood orange / pitch-paint white-on-black?
2. **The type pairing** — Geist + Geist Mono (sans only, no serif). Happy? Or want to try something more distinctive?
3. **The logo** — the mark is a placeholder concept (center circle + data trajectory). Do you want me to iterate on 3–5 alternatives?
4. **The copy voice** — is "journalistic / neutral" landing, or do you want more personality?
5. **The density** — I erred toward breathing room. A live-match view *could* carry more data per screen without adding cognitive load if the hierarchy is right. Want to see a denser variant?

Tell me which of these to explore first.

