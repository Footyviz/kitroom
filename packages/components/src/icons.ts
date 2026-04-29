/**
 * FootyViz icon sprite — TypeScript surface.
 *
 * `iconSpriteHtml` is the same SVG block as `icons.svg` (next to this
 * file) inlined as a string, suitable for injecting once into the page
 * (e.g. into <body> on app boot, or as a Storybook decorator). After
 * injection, <fv-icon name="pitch"> emits <svg><use href="#icon-pitch"/></svg>
 * which references the corresponding <symbol> inside the sprite.
 *
 * `iconNames` is the canonical list of available icons. Use the
 * `IconName` type to constrain consumer call sites to known icons.
 *
 * Maintenance: this file is hand-kept in sync with icons.svg. Add a new
 * icon by editing both — append the <symbol> to icons.svg, mirror it in
 * the template literal below, and add the name to `iconNames`.
 */

export const iconNames = [
  // Brand · 24-unit grid · 1.5 stroke
  'pitch',
  'ball',
  'goal',
  'xg',
  'heat-map',
  'key-pass',
  'formation',
  'on-target',
  'whistle',
  'card',
  'sub',
  'live',
  // Utility · same stroke language
  'search',
  'calendar',
  'clock',
  'filter',
  'compare',
  'star',
  'trophy',
  'bell',
  'settings',
  'share',
] as const;

export type IconName = (typeof iconNames)[number];

export const iconSpriteHtml = `<svg xmlns="http://www.w3.org/2000/svg" style="display:none" aria-hidden="true">
  <symbol id="icon-pitch" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2.5" y="4" width="19" height="16" rx="1"/>
    <line x1="12" y1="4" x2="12" y2="20"/>
    <circle cx="12" cy="12" r="2.5"/>
    <path d="M2.5 8 L6 8 L6 16 L2.5 16"/>
    <path d="M21.5 8 L18 8 L18 16 L21.5 16"/>
  </symbol>
  <symbol id="icon-ball" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <polygon points="12,7 15.7,9.7 14.3,14 9.7,14 8.3,9.7" fill="currentColor" stroke="none"/>
    <path d="M12 3 L12 7 M20.5 9 L15.7 9.7 M19 18.5 L14.3 14 M5 18.5 L9.7 14 M3.5 9 L8.3 9.7"/>
  </symbol>
  <symbol id="icon-goal" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 6 L3 19"/>
    <path d="M21 6 L21 19"/>
    <path d="M3 6 L21 6"/>
    <path d="M3 19 L21 19" opacity="0.4"/>
    <path d="M5 8 L5 17 M8 8 L8 17 M11 8 L11 17 M14 8 L14 17 M17 8 L17 17" opacity="0.35" stroke-width="1"/>
    <path d="M5 11 L19 11 M5 14 L19 14" opacity="0.35" stroke-width="1"/>
    <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none"/>
  </symbol>
  <symbol id="icon-xg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 19 L20 19"/>
    <path d="M6 19 A6 6 0 0 1 18 19" opacity="0.45"/>
    <circle cx="7.5" cy="17" r="1.4" fill="currentColor" stroke="none"/>
    <path d="M7.5 17 Q 13 5, 18.5 9" stroke-dasharray="1.5 2"/>
    <path d="M18.5 9 L16.8 6.3 M18.5 9 L15.7 9.6"/>
  </symbol>
  <symbol id="icon-heat-map" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="16" rx="1.5"/>
    <rect x="5" y="6" width="4.3" height="4.3" fill="currentColor" opacity="0.12" stroke="none"/>
    <rect x="9.7" y="6" width="4.3" height="4.3" fill="currentColor" opacity="0.35" stroke="none"/>
    <rect x="14.4" y="6" width="4.3" height="4.3" fill="currentColor" opacity="0.7" stroke="none"/>
    <rect x="5" y="10.7" width="4.3" height="4.3" fill="currentColor" opacity="0.22" stroke="none"/>
    <rect x="9.7" y="10.7" width="4.3" height="4.3" fill="currentColor" opacity="0.55" stroke="none"/>
    <rect x="14.4" y="10.7" width="4.3" height="4.3" fill="currentColor" opacity="0.4" stroke="none"/>
    <rect x="5" y="15.4" width="4.3" height="3" fill="currentColor" opacity="0.08" stroke="none"/>
    <rect x="9.7" y="15.4" width="4.3" height="3" fill="currentColor" opacity="0.2" stroke="none"/>
    <rect x="14.4" y="15.4" width="4.3" height="3" fill="currentColor" opacity="0.3" stroke="none"/>
  </symbol>
  <symbol id="icon-key-pass" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="5" cy="18" r="1.6" fill="currentColor" stroke="none"/>
    <path d="M5 18 Q 10 5, 19 8"/>
    <path d="M14.5 5.5 L19 8 L17 12.5"/>
  </symbol>
  <symbol id="icon-formation" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1" opacity="0.5"/>
    <line x1="3" y1="12" x2="21" y2="12" opacity="0.35"/>
    <circle cx="12" cy="19.2" r="1" fill="currentColor" stroke="none"/>
    <circle cx="6"  cy="15" r="1" fill="currentColor" stroke="none"/>
    <circle cx="10" cy="15" r="1" fill="currentColor" stroke="none"/>
    <circle cx="14" cy="15" r="1" fill="currentColor" stroke="none"/>
    <circle cx="18" cy="15" r="1" fill="currentColor" stroke="none"/>
    <circle cx="8"  cy="9.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="9.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="16" cy="9.5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="7"  cy="5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="12" cy="5" r="1" fill="currentColor" stroke="none"/>
    <circle cx="17" cy="5" r="1" fill="currentColor" stroke="none"/>
  </symbol>
  <symbol id="icon-on-target" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9" opacity="0.4"/>
    <circle cx="12" cy="12" r="5.5" opacity="0.6"/>
    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none"/>
    <path d="M21 3 L13.5 10.5" stroke-width="1.8"/>
    <path d="M21 3 L21 6.5 L17.5 6.5 Z" fill="currentColor" stroke="none"/>
  </symbol>
  <symbol id="icon-whistle" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="7" cy="7" r="1.6"/>
    <path d="M7 8.6 L 8.5 11"/>
    <path d="M5 12 H 17 L 20 13.5 L 20 16.5 L 17 18 H 9 A 4 4 0 0 1 5 14 Z"/>
    <circle cx="11" cy="15" r="1.4" fill="currentColor" stroke="none"/>
  </symbol>
  <symbol id="icon-card" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="9" y="3" width="10" height="15" rx="1" transform="rotate(-12 14 10.5)" opacity="0.45"/>
    <rect x="6" y="6" width="10" height="15" rx="1" fill="currentColor" opacity="0.1" stroke="none"/>
    <rect x="6" y="6" width="10" height="15" rx="1"/>
  </symbol>
  <symbol id="icon-sub" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M3 8 L19 8"/>
    <path d="M15 4 L19 8 L15 12"/>
    <path d="M21 16 L5 16"/>
    <path d="M9 12 L5 16 L9 20"/>
  </symbol>
  <symbol id="icon-live" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3" fill="#C6F24E" stroke="none"/>
    <circle cx="12" cy="12" r="6.5" opacity="0.6"/>
    <circle cx="12" cy="12" r="10" opacity="0.22"/>
  </symbol>
  <symbol id="icon-search" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="11" cy="11" r="7"/>
    <path d="m20 20-3.5-3.5"/>
  </symbol>
  <symbol id="icon-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <path d="M16 2v4M8 2v4M3 10h18"/>
  </symbol>
  <symbol id="icon-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <path d="M12 7v5l3 2"/>
  </symbol>
  <symbol id="icon-filter" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 5h16M7 12h10M10 19h4"/>
  </symbol>
  <symbol id="icon-compare" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3v18"/>
    <path d="M4 7h6M4 12h6M4 17h6"/>
    <path d="M14 10h6M14 14h6"/>
  </symbol>
  <symbol id="icon-star" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 3 L14.6 9 L21 9.7 L16 14 L17.5 20.5 L12 17 L6.5 20.5 L8 14 L3 9.7 L9.4 9 Z"/>
  </symbol>
  <symbol id="icon-trophy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 2v6a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V2"/>
    <path d="M4 22h16"/>
    <path d="M10 14v4M14 14v4M9 2h6"/>
    <path d="M6 4H3v3a2 2 0 0 0 2 2h1"/>
    <path d="M18 4h3v3a2 2 0 0 1-2 2h-1"/>
  </symbol>
  <symbol id="icon-bell" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 7 3 9H3c0-2 3-2 3-9"/>
    <path d="M10 21a2 2 0 0 0 4 0"/>
  </symbol>
  <symbol id="icon-settings" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.7 1.7 0 0 0 9 19.4a1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>
  </symbol>
  <symbol id="icon-share" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="18" cy="5" r="3"/>
    <circle cx="6" cy="12" r="3"/>
    <circle cx="18" cy="19" r="3"/>
    <path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/>
  </symbol>
</svg>`;
