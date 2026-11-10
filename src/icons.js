// Stroke icons (24×24, lucide-style) and friendly avatar illustrations drawn in the
// same style as the BiDi logo: round faces, smiling eyes, rosy cheeks, brown outline.

const P = {
  heart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
  chat: '<path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01M12 12h.01M16 12h.01"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
  shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  home: '<path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M9 22V12h6v10"/>',
  star: '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>',
  stethoscope: '<path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 12 0V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 12 0v-4"/><circle cx="20" cy="10" r="2"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  book: '<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>',
  calendar: '<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M12 14.5c.6-.9 2.4-.7 2.4.6 0 1.1-2.4 2.4-2.4 2.4s-2.4-1.3-2.4-2.4c0-1.3 1.8-1.5 2.4-.6z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  mail: '<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>',
  droplet: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
  walk: '<circle cx="13" cy="4" r="2"/><path d="m7 21 3-5 2.5-1.5L15 21"/><path d="M9.5 9.5 12 7.5l2.5 3 3 1"/><path d="M12 7.5 10.5 14"/><path d="M9.5 9.5 7 12"/>',
  cross: '<path d="M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h5v5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2z"/>',
  lungs: '<path d="M12 4v8"/><path d="M12 12c-1 1-2 1.5-3 1.5"/><path d="M12 12c1 1 2 1.5 3 1.5"/><path d="M8.5 7C5 7 3 12 3 17c0 2 1 3 2.5 3S9 19 9 17v-6.5"/><path d="M15.5 7C19 7 21 12 21 17c0 2-1 3-2.5 3S15 19 15 17v-6.5"/>',
  pill: '<path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>',
  smile: '<circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><path d="M8.5 9.5c.4-.6 1.1-.6 1.5 0M14 9.5c.4-.6 1.1-.6 1.5 0"/>',
  clipboard: '<rect x="8" y="2" width="8" height="4" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
  globe: '<circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  chevron: '<path d="m6 9 6 6 6-6"/>',
  sparkle: '<path d="M12 3c.5 4 2.5 6.5 7 7-4.5.5-6.5 3-7 7-.5-4-2.5-6.5-7-7 4.5-.5 6.5-3 7-7z"/>',
  zoom: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3M11 8v6M8 11h6"/>',
  award: '<circle cx="12" cy="8" r="6"/><path d="M15.48 12.89 17 22l-5-3-5 3 1.52-9.11"/>',
  facebook: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
  youtube: '<path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/>'
};

export const icon = (name, cls = '') =>
  `<svg class="ico ${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name] || ''}</svg>`;

// ---------- Avatars ----------
const LINE = '#4A3530';
const SKIN = ['#F7DCCB', '#F2D2BD', '#EFCFB6', '#F5D9C6'];
const HAIR = {
  f: (h) => `<path d="M30 58c-3-24 12-38 30-38s33 13 30 37c-6-11-17-17-31-17-13 0-23 7-29 18z" fill="${h}" stroke="${LINE}" stroke-width="3"/><path d="M86 46c10 6 12 22 6 34-2-10-5-18-10-24z" fill="${h}" stroke="${LINE}" stroke-width="3" stroke-linejoin="round"/>`,
  f2: (h) => `<path d="M28 74c-6-30 8-52 32-52s38 22 32 52c-3-14-6-22-9-26-10 2-26-2-34-10-6 8-14 16-21 36z" fill="${h}" stroke="${LINE}" stroke-width="3" stroke-linejoin="round"/>`,
  f3: (h) => `<circle cx="60" cy="18" r="11" fill="${h}" stroke="${LINE}" stroke-width="3"/><path d="M30 58c-2-22 12-34 30-34s32 12 30 34c-8-10-18-15-30-15s-22 5-30 15z" fill="${h}" stroke="${LINE}" stroke-width="3"/>`,
  f4: (h) => `<path d="M26 92c-8-44 6-70 34-70s42 26 34 70c-4-2-6-6-7-12l-2-30c-12 0-24-4-30-12-4 8-12 12-20 14l-2 28c-1 6-3 10-7 12z" fill="${h}" stroke="${LINE}" stroke-width="3" stroke-linejoin="round"/>`,
  m: (h) => `<path d="M31 56c-4-22 10-34 29-34 20 0 33 12 29 34-3-6-6-9-10-11-10 3-25 2-34-4-6 3-11 8-14 15z" fill="${h}" stroke="${LINE}" stroke-width="3" stroke-linejoin="round"/>`,
  m2: (h) => `<path d="M31 54c-3-20 11-31 29-31 19 0 32 10 29 31-4-7-9-11-15-12-3 3-8 4-12 3l2-4c-11 1-24 6-33 13z" fill="${h}" stroke="${LINE}" stroke-width="3" stroke-linejoin="round"/>`
};

export function avatar(variant = 'f', { nurse = false, i = 0, bg } = {}) {
  const skin = SKIN[i % SKIN.length];
  const hair = variant === 'f3' && !nurse ? '#B9B3BD' : ['#2E211D', '#3B2A22', '#4A3428'][i % 3];
  const tops = nurse ? ['#1E4E91', '#2B6CB0', '#24657A'] : ['#D9C6D9', '#E8C9A8', '#BFD3C1', '#C9D8EE', '#E6B9A6', '#D7CBB8'];
  const top = tops[i % tops.length];
  const back = bg || (nurse ? '#EAF3FC' : ['#FBEFE3', '#F3ECF6', '#EAF3EC', '#FFF3E0'][i % 4]);
  const hairFn = HAIR[variant] || HAIR.f;
  const isLong = variant === 'f4';
  return `<svg class="avatar" viewBox="0 0 120 120" aria-hidden="true">
  <circle cx="60" cy="60" r="58" fill="${back}"/>
  <clipPath id="av${variant}${i}${nurse ? 'n' : ''}"><circle cx="60" cy="60" r="58"/></clipPath>
  <g clip-path="url(#av${variant}${i}${nurse ? 'n' : ''})">
    ${isLong ? hairFn(hair) : ''}
    <path d="M18 124c2-22 18-34 42-34s40 12 42 34z" fill="${top}" stroke="${LINE}" stroke-width="3"/>
    ${nurse ? `<path d="M50 92l10 12 10-12" fill="none" stroke="#123766" stroke-width="3" stroke-linecap="round"/><rect x="74" y="104" width="14" height="5" rx="2" fill="#fff" stroke="${LINE}" stroke-width="2"/>` : `<path d="M48 92c4 6 20 6 24 0" fill="none" stroke="${LINE}" stroke-width="3" stroke-linecap="round"/>`}
    <rect x="52" y="78" width="16" height="14" rx="3" fill="${skin}" stroke="${LINE}" stroke-width="3"/>
    <circle cx="60" cy="58" r="28" fill="${skin}" stroke="${LINE}" stroke-width="3"/>
    ${isLong ? '' : hairFn(hair)}
    ${nurse ? `<path d="M44 32c10-4 22-4 32 0" fill="none" stroke="#9CC6EE" stroke-width="3.5" stroke-linecap="round"/>` : ''}
    <path d="M45 60c2-4 7-4 9 0M66 60c2-4 7-4 9 0" fill="none" stroke="${LINE}" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="44" cy="69" rx="6" ry="3.6" fill="#F0A9A6" opacity=".75"/>
    <ellipse cx="76" cy="69" rx="6" ry="3.6" fill="#F0A9A6" opacity=".75"/>
    <path d="M53 72c4 4 10 4 14 0" fill="none" stroke="${LINE}" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>`;
}

// Decorative cover art for article placeholders.
export function coverArt(kind) {
  const glyph = kind === 'walk' ? P.walk : P.home;
  return `<svg class="cover-art" viewBox="0 0 400 260" aria-hidden="true">
  <defs><linearGradient id="cg-${kind}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${kind === 'walk' ? '#F6EFE7' : '#EAF3FC'}"/><stop offset="1" stop-color="${kind === 'walk' ? '#EBD8C2' : '#CFE2F5'}"/></linearGradient></defs>
  <rect width="400" height="260" fill="url(#cg-${kind})"/>
  <circle cx="320" cy="40" r="70" fill="#fff" opacity=".45"/>
  <circle cx="70" cy="230" r="90" fill="#fff" opacity=".35"/>
  <path d="M200 92c6-10 26-10 26 6 0 14-26 28-26 28s-26-14-26-28c0-16 20-16 26-6z" fill="#7A391B" opacity=".9"/>
  <g transform="translate(152 120) scale(4)" fill="none" stroke="${kind === 'walk' ? '#6E5233' : '#0B3F7F'}" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" opacity=".85">${glyph}</g>
</svg>`;
}

// ---------- Shop product illustrations (placeholders for real photos) ----------
const BG = {
  med: ['#EAF3FC', '#D3E4F5'],
  hygiene: ['#F4EEF7', '#E4D8EE'],
  nutrition: ['#FFF4E3', '#F5DFC0'],
  aids: ['#ECF4EE', '#D3E5D8'],
  insurance: ['#F7F0E8', '#EBD7C1']
};
const L = `stroke="${LINE}" stroke-width="5" stroke-linejoin="round" stroke-linecap="round"`;
const ART = {
  pillbox: `<rect x="100" y="118" width="200" height="92" rx="18" fill="#fff" ${L}/>
    ${[0, 1, 2, 3, 4, 5, 6].map((i) => `<rect x="${110 + i * 26.5}" y="128" width="20" height="30" rx="6" fill="${['#F2B6A6', '#F6CF6E', '#9CC6EE', '#B7CF9E'][i % 4]}" stroke="${LINE}" stroke-width="3"/>`).join('')}
    <path d="M114 178h172" stroke="${LINE}" stroke-width="3" stroke-dasharray="4 8" fill="none"/>
    <g transform="rotate(-30 300 90)"><rect x="276" y="80" width="48" height="20" rx="10" fill="#fff" ${L}/><path d="M300 80v20" stroke="${LINE}" stroke-width="3"/><rect x="300" y="82" width="22" height="16" rx="8" fill="#E8A68C"/></g>
    <circle cx="108" cy="86" r="12" fill="#F6CF6E" ${L}/>`,
  kit: `<path d="M170 104v-14a10 10 0 0 1 10-10h40a10 10 0 0 1 10 10v14" fill="none" ${L}/>
    <rect x="110" y="104" width="180" height="124" rx="20" fill="#fff" ${L}/>
    <rect x="110" y="104" width="180" height="30" rx="16" fill="#F2B6A6" ${L}/>
    <path d="M190 156h20v18h18v20h-18v18h-20v-18h-18v-20h18z" fill="#E36A5C" stroke="${LINE}" stroke-width="4" stroke-linejoin="round"/>`,
  bottle: `<rect x="150" y="78" width="70" height="30" rx="8" fill="#fff" ${L}/>
    <path d="M142 108h86v114a14 14 0 0 1-14 14h-58a14 14 0 0 1-14-14z" fill="#D9A27A" ${L}/>
    <rect x="152" y="140" width="66" height="54" rx="8" fill="#FFF8EE" stroke="${LINE}" stroke-width="3"/>
    <path d="M180 154h10v10h10v10h-10v10h-10v-10h-10v-10h10z" fill="#5E8C73"/>
    <ellipse cx="262" cy="214" rx="20" ry="13" fill="#fff" ${L}/><path d="M250 214h24" stroke="${LINE}" stroke-width="3"/>
    <circle cx="290" cy="186" r="12" fill="#F6CF6E" ${L}/>`,
  diaper: `<path d="M120 96h160l-12 132a14 14 0 0 1-14 12H146a14 14 0 0 1-14-12z" fill="#C9B6DD" ${L}/>
    <path d="M128 120h144" stroke="${LINE}" stroke-width="3" fill="none"/>
    <path d="M200 192c-26-16-30-36-18-44 8-5 16-1 18 6 2-7 10-11 18-6 12 8 8 28-18 44z" fill="#fff" stroke="${LINE}" stroke-width="4"/>
    <rect x="168" y="82" width="64" height="20" rx="10" fill="#fff" ${L}/>`,
  pad: `${[0, 1, 2].map((i) => `<rect x="${118 + i * 10}" y="${170 - i * 26}" width="164" height="54" rx="12" fill="${['#DCE9F7', '#C9DEF1', '#fff'][i]}" ${L}/>`).join('')}
    <path d="M150 140h128M150 154h128" stroke="#9CC6EE" stroke-width="3" stroke-dasharray="6 6" fill="none"/>
    <path d="M296 84c4 10 10 14 20 16-10 2-16 6-20 16-4-10-10-14-20-16 10-2 16-6 20-16z" fill="#9CC6EE"/>`,
  wipes: `<rect x="100" y="134" width="150" height="92" rx="26" fill="#BFD3C1" ${L}/>
    <rect x="135" y="150" width="80" height="34" rx="14" fill="#fff" stroke="${LINE}" stroke-width="4"/>
    <path d="M150 150c10-16 40-16 50 0" fill="#fff" stroke="${LINE}" stroke-width="4"/>
    <rect x="262" y="96" width="48" height="130" rx="14" fill="#fff" ${L}/><rect x="272" y="80" width="28" height="18" rx="5" fill="#9CC6EE" ${L}/>
    <circle cx="246" cy="98" r="9" fill="#fff" stroke="#9CC6EE" stroke-width="3"/><circle cx="230" cy="84" r="6" fill="#fff" stroke="#9CC6EE" stroke-width="3"/>`,
  milk: `<ellipse cx="170" cy="92" rx="56" ry="14" fill="#fff" ${L}/>
    <path d="M114 92v126c0 8 25 14 56 14s56-6 56-14V92" fill="#F3E3CF" ${L}/>
    <path d="M114 132c20 8 92 8 112 0v50c-20 8-92 8-112 0z" fill="#fff" stroke="${LINE}" stroke-width="3"/>
    <path d="M170 168c-14-9-16-20-10-25 4-3 9-1 10 3 1-4 6-6 10-3 6 5 4 16-10 25z" fill="#B5653E"/>
    <path d="M250 136h56l-8 92h-40z" fill="#fff" ${L}/><path d="M254 160h48l-5 64h-38z" fill="#FFF8EE"/>`,
  capsule: `<rect x="128" y="96" width="84" height="26" rx="8" fill="#5E8C73" ${L}/>
    <rect x="120" y="122" width="100" height="108" rx="20" fill="#F6CF6E" ${L}/>
    <rect x="136" y="148" width="68" height="52" rx="10" fill="#fff" stroke="${LINE}" stroke-width="3"/>
    <text x="170" y="182" text-anchor="middle" font-family="sans-serif" font-weight="700" font-size="20" fill="${LINE}">Ω3</text>
    ${[[268, 140, -30], [286, 196, 20]].map(([x, y, r]) => `<g transform="rotate(${r} ${x} ${y})"><rect x="${x - 30}" y="${y - 13}" width="60" height="26" rx="13" fill="#F6CF6E" ${L}/><path d="M${x} ${y - 13}v26" stroke="${LINE}" stroke-width="3"/><rect x="${x - 28}" y="${y - 11}" width="28" height="22" rx="11" fill="#E9A84A"/></g>`).join('')}`,
  monitor: `<rect x="120" y="96" width="140" height="120" rx="22" fill="#fff" ${L}/>
    <rect x="138" y="114" width="104" height="58" rx="10" fill="#DCE9F7" stroke="${LINE}" stroke-width="3"/>
    <text x="190" y="152" text-anchor="middle" font-family="sans-serif" font-weight="800" font-size="26" fill="#0B3F7F">120/80</text>
    <circle cx="160" cy="194" r="9" fill="#5E8C73"/><circle cx="190" cy="194" r="9" fill="#F2B6A6"/><circle cx="220" cy="194" r="9" fill="#F6CF6E"/>
    <path d="M260 150c40 0 30 60 60 60" fill="none" ${L}/><rect x="296" y="196" width="40" height="40" rx="12" fill="#9CC6EE" ${L}/>`,
  walker: `<path d="M140 96v132M260 96v132M140 112h120M150 170h100" fill="none" ${L}/>
    <rect x="160" y="152" width="80" height="18" rx="8" fill="#D9A27A" ${L}/>
    <path d="M128 96h24M248 96h24" stroke="${LINE}" stroke-width="10" stroke-linecap="round"/>
    ${[140, 260].map((x) => `<circle cx="${x}" cy="232" r="14" fill="#fff" ${L}/><circle cx="${x}" cy="232" r="4" fill="${LINE}"/>`).join('')}
    <path d="M300 120c-4-12 10-20 16-10 6-10 20-2 16 10-4 12-16 18-16 18s-12-6-16-18z" fill="#B5653E"/>`,
  shield: `<path d="M200 70c26 18 52 24 76 24v58c0 46-36 70-76 84-40-14-76-38-76-84V94c24 0 50-6 76-24z" fill="#14284F" ${L}/>
    <path d="M200 92c18 12 36 16 52 17v43c0 34-25 52-52 62-27-10-52-28-52-62v-43c16-1 34-5 52-17z" fill="#DCE9F7"/>
    <path d="M200 184c-24-15-28-34-17-42 7-5 15-1 17 6 2-7 10-11 17-6 11 8 7 27-17 42z" fill="#B5653E"/>
    <path d="M284 92l10 10 20-22" fill="none" stroke="#5E8C73" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>`,
  umbrella: `<path d="M110 150c0-50 40-80 90-80s90 30 90 80c-15-10-30-10-45 0-15-10-30-10-45 0-15-10-30-10-45 0-15-10-30-10-45 0z" fill="#E8A68C" ${L}/>
    <path d="M200 70v-8M200 150v66a14 14 0 0 1-28 0" fill="none" ${L}/>
    <path d="M154 118c0-20 10-34 18-40M246 118c0-20-10-34-18-40" fill="none" stroke="${LINE}" stroke-width="3"/>
    <path d="M256 226c-18-11-21-26-13-32 5-4 11-1 13 4 2-5 8-8 13-4 8 6 5 21-13 32z" fill="#B5653E"/>`
};

export function productArt(kind, line) {
  const [a, b] = BG[line] || BG.med;
  const id = `pa-${kind}`;
  return `<svg class="prod-art" viewBox="0 0 400 300" aria-hidden="true">
  <defs><linearGradient id="${id}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${a}"/><stop offset="1" stop-color="${b}"/></linearGradient></defs>
  <rect width="400" height="300" fill="url(#${id})"/>
  <circle cx="330" cy="50" r="80" fill="#fff" opacity=".4"/><circle cx="60" cy="270" r="90" fill="#fff" opacity=".3"/>
  <ellipse cx="200" cy="246" rx="120" ry="14" fill="${LINE}" opacity=".08"/>
  <g class="prod-art-in">${ART[kind] || ''}</g>
</svg>`;
}
