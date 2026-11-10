// BiDi 3D brand mark, built the way the PSI site builds its Ψ logo
// (psilabvnorg/website-psi-technology-69, src/logo3d.js):
// a crisp extruded slab with a small bevel and a vertex-colour gradient,
// outline "echo" layers that fan out in depth, a soft glow and dust.
//
// The mark is a brown heart inside a ring, like the BiDi logo. It sits big
// on the right. Every section carries a pose (data-pose); the pose is
// interpolated between the two sections nearest the viewport centre, and
// `ry` keeps growing down the page, so the heart turns as you scroll and
// faces front again at the contact section.
//
// A second layer fills the whole viewport with floating 3D leaves, small
// hearts and friendly icons that drift, flutter and parallax with scroll.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Shape, Path, ExtrudeGeometry,
  MeshPhysicalMaterial, Color, DirectionalLight, AmbientLight, PMREMGenerator, CanvasTexture,
  Sprite, SpriteMaterial, Points, PointsMaterial, BufferGeometry, BufferAttribute,
  Float32BufferAttribute, LineLoop, LineBasicMaterial, Vector2, Vector3, Timer, MathUtils,
  ACESFilmicToneMapping, SRGBColorSpace, DoubleSide, Fog
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// ---------- poses ----------
// Page order. ry grows by the same step each section, so the spin direction
// stays constant and the heart is facing front again at "contact" (3 turns).
const ORDER = ['hero', 'why', 'services', 'roles', 'pricing', 'shop', 'process', 'team', 'stories', 'blog', 'join', 'faq', 'contact'];
const RY0 = -0.35;
const STEP = (Math.PI * 6) / (ORDER.length - 1);
const BASE = {
  hero: { x: 0.52, y: 0.0, rx: 0.06, rz: 0, s: 1.08, spread: 0, lift: 0, glow: 1, o: 1 },
  why: { x: 0.66, y: 0.1, rx: -0.1, rz: 0.06, s: 1.35, spread: 0.8, lift: 0.4, glow: 0.5, o: 0.3 },
  services: { x: 0.7, y: -0.04, rx: 0.2, rz: -0.08, s: 1.55, spread: 1.1, lift: 0.6, glow: 0.4, o: 0.22 },
  roles: { x: 0.62, y: 0.08, rx: -0.12, rz: 0.04, s: 1.3, spread: 0.6, lift: 0.3, glow: 0.5, o: 0.2 },
  pricing: { x: 0.72, y: 0.0, rx: 0.25, rz: 0.1, s: 1.6, spread: 1.3, lift: 0.7, glow: 0.35, o: 0.16 },
  shop: { x: 0.68, y: 0.06, rx: -0.12, rz: 0.06, s: 1.4, spread: 0.9, lift: 0.5, glow: 0.45, o: 0.18 },
  process: { x: 0.62, y: 0.12, rx: 0, rz: 0, s: 1.2, spread: 0.4, lift: 0.2, glow: 0.7, o: 0.32 },
  team: { x: 0.7, y: -0.06, rx: -0.15, rz: -0.06, s: 1.45, spread: 1.0, lift: 0.5, glow: 0.4, o: 0.2 },
  stories: { x: 0.64, y: 0.04, rx: 0.2, rz: 0.08, s: 1.35, spread: 0.8, lift: 0.4, glow: 0.5, o: 0.22 },
  blog: { x: 0.72, y: 0.06, rx: -0.1, rz: 0, s: 1.5, spread: 1.2, lift: 0.6, glow: 0.4, o: 0.2 },
  join: { x: 0.66, y: -0.04, rx: 0.15, rz: -0.1, s: 1.4, spread: 0.9, lift: 0.5, glow: 0.4, o: 0.18 },
  faq: { x: 0.62, y: 0.06, rx: -0.08, rz: 0.05, s: 1.2, spread: 0.5, lift: 0.25, glow: 0.6, o: 0.28 },
  contact: { x: 0.62, y: 0.04, rx: 0, rz: 0, s: 1.1, spread: 0, lift: 0, glow: 1, o: 0.5 }
};
export const POSES = Object.fromEntries(ORDER.map((k, i) => [k, { ...BASE[k], ry: RY0 + i * STEP }]));
const KEYS = ['x', 'y', 'rx', 'ry', 'rz', 's', 'spread', 'lift', 'glow', 'o'];

const smooth = (t) => t * t * (3 - 2 * t);
const rand = (a, b) => a + Math.random() * (b - a);

// ---------- shapes ----------
function heartPoints(scale = 0.05, n = 160) {
  const pts = [];
  for (let i = 0; i < n; i++) {
    const t = (i / n) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    pts.push(new Vector2(x * scale, (y + 2.5) * scale)); // +2.5 roughly centres it
  }
  return pts;
}

function ringShape(r0, r1) {
  const outer = new Shape();
  outer.absarc(0, 0, r1, 0, Math.PI * 2, false);
  const hole = new Path();
  hole.absarc(0, 0, r0, 0, Math.PI * 2, true);
  outer.holes.push(hole);
  return outer;
}

function leafShape() {
  const s = new Shape();
  s.moveTo(0, -1);
  s.bezierCurveTo(0.75, -0.6, 0.7, 0.45, 0, 1);
  s.bezierCurveTo(-0.7, 0.45, -0.75, -0.6, 0, -1);
  return s;
}

// Gradient painted as vertex colours along a direction, like PSI's symbol.
function paintGradient(geom, from, to, dir = new Vector2(1, -1)) {
  const pos = geom.attributes.position;
  geom.computeBoundingBox();
  const bb = geom.boundingBox;
  const d = dir.clone().normalize();
  const corners = [[bb.min.x, bb.min.y], [bb.max.x, bb.min.y], [bb.min.x, bb.max.y], [bb.max.x, bb.max.y]].map(([x, y]) => x * d.x + y * d.y);
  const lo = Math.min(...corners);
  const hi = Math.max(...corners);
  const cols = new Float32Array(pos.count * 3);
  const a = new Color(from);
  const b = new Color(to);
  const c = new Color();
  for (let i = 0; i < pos.count; i++) {
    const t = ((pos.getX(i) * d.x + pos.getY(i) * d.y) - lo) / (hi - lo || 1);
    c.copy(a).lerp(b, MathUtils.clamp(t, 0, 1));
    cols.set([c.r, c.g, c.b], i * 3);
  }
  geom.setAttribute('color', new BufferAttribute(cols, 3));
}

// ---------- textures ----------
function canvasTex(size, draw) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  draw(c.getContext('2d'), size);
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  return t;
}
const radial = (stops, size = 256) => canvasTex(size, (g, s) => {
  const grd = g.createRadialGradient(s / 2, s / 2, 0, s / 2, s / 2, s / 2);
  stops.forEach(([o, col]) => grd.addColorStop(o, col));
  g.fillStyle = grd;
  g.fillRect(0, 0, s, s);
});

function heartPath(g, cx, cy, w) {
  const k = w / 52;
  g.beginPath();
  g.moveTo(cx, cy + 21 * k);
  g.bezierCurveTo(cx - 26 * k, cy + 3 * k, cx - 26 * k, cy - 19 * k, cx - 12 * k, cy - 21 * k);
  g.bezierCurveTo(cx - 5 * k, cy - 22 * k, cx - 1 * k, cy - 17 * k, cx, cy - 13 * k);
  g.bezierCurveTo(cx + 1 * k, cy - 17 * k, cx + 5 * k, cy - 22 * k, cx + 12 * k, cy - 21 * k);
  g.bezierCurveTo(cx + 26 * k, cy - 19 * k, cx + 26 * k, cy + 3 * k, cx, cy + 21 * k);
  g.closePath();
}

// Friendly icon stickers, drawn in the logo's style (soft fills, brown outline).
const INK = '#5A4034';
const ICONS = {
  flower(g, s) {
    const c = s / 2;
    g.lineWidth = s * 0.035; g.strokeStyle = INK;
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2 - Math.PI / 2;
      g.beginPath(); g.fillStyle = i % 2 ? '#F2B6A6' : '#F6C7B8';
      g.ellipse(c + Math.cos(a) * s * 0.2, c + Math.sin(a) * s * 0.2, s * 0.15, s * 0.15, 0, 0, Math.PI * 2);
      g.fill(); g.stroke();
    }
    g.beginPath(); g.fillStyle = '#F4C76A'; g.arc(c, c, s * 0.12, 0, Math.PI * 2); g.fill(); g.stroke();
  },
  star(g, s) {
    const c = s / 2;
    g.beginPath();
    for (let i = 0; i < 10; i++) {
      const r = i % 2 ? s * 0.18 : s * 0.38;
      const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
      g.lineTo(c + Math.cos(a) * r, c + Math.sin(a) * r);
    }
    g.closePath(); g.lineJoin = 'round';
    g.fillStyle = '#F6CF6E'; g.fill(); g.lineWidth = s * 0.035; g.strokeStyle = INK; g.stroke();
  },
  sparkle(g, s) {
    const c = s / 2;
    g.beginPath();
    g.moveTo(c, s * 0.1); g.quadraticCurveTo(c + s * 0.06, c - s * 0.06, s * 0.9, c);
    g.quadraticCurveTo(c + s * 0.06, c + s * 0.06, c, s * 0.9); g.quadraticCurveTo(c - s * 0.06, c + s * 0.06, s * 0.1, c);
    g.quadraticCurveTo(c - s * 0.06, c - s * 0.06, c, s * 0.1);
    g.fillStyle = '#9CC6EE'; g.fill();
  },
  sun(g, s) {
    const c = s / 2;
    g.strokeStyle = '#E9A84A'; g.lineCap = 'round'; g.lineWidth = s * 0.05;
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      g.beginPath(); g.moveTo(c + Math.cos(a) * s * 0.3, c + Math.sin(a) * s * 0.3); g.lineTo(c + Math.cos(a) * s * 0.42, c + Math.sin(a) * s * 0.42); g.stroke();
    }
    g.beginPath(); g.fillStyle = '#F6CF6E'; g.arc(c, c, s * 0.22, 0, Math.PI * 2); g.fill();
    g.lineWidth = s * 0.03; g.strokeStyle = INK; g.stroke();
    g.beginPath(); g.arc(c, c + s * 0.02, s * 0.09, 0.2, Math.PI - 0.2); g.stroke();
  },
  smile(g, s) {
    const c = s / 2;
    g.beginPath(); g.fillStyle = '#FBE3D2'; g.arc(c, c, s * 0.36, 0, Math.PI * 2); g.fill();
    g.lineWidth = s * 0.035; g.strokeStyle = INK; g.stroke();
    g.lineCap = 'round';
    g.beginPath(); g.arc(c - s * 0.12, c - s * 0.02, s * 0.05, Math.PI * 1.1, Math.PI * 1.9); g.stroke();
    g.beginPath(); g.arc(c + s * 0.12, c - s * 0.02, s * 0.05, Math.PI * 1.1, Math.PI * 1.9); g.stroke();
    g.beginPath(); g.arc(c, c + s * 0.06, s * 0.12, 0.25, Math.PI - 0.25); g.stroke();
    g.fillStyle = 'rgba(240,150,140,.6)';
    g.beginPath(); g.ellipse(c - s * 0.2, c + s * 0.08, s * 0.06, s * 0.035, 0, 0, Math.PI * 2); g.fill();
    g.beginPath(); g.ellipse(c + s * 0.2, c + s * 0.08, s * 0.06, s * 0.035, 0, 0, Math.PI * 2); g.fill();
  },
  house(g, s) {
    g.lineJoin = 'round'; g.lineWidth = s * 0.035; g.strokeStyle = INK;
    g.beginPath(); g.moveTo(s * 0.18, s * 0.48); g.lineTo(s * 0.5, s * 0.2); g.lineTo(s * 0.82, s * 0.48);
    g.lineTo(s * 0.74, s * 0.48); g.lineTo(s * 0.74, s * 0.82); g.lineTo(s * 0.26, s * 0.82); g.lineTo(s * 0.26, s * 0.48); g.closePath();
    g.fillStyle = '#DCE9F7'; g.fill(); g.stroke();
    heartPath(g, s * 0.5, s * 0.63, s * 0.26); g.fillStyle = '#B5653E'; g.fill();
  },
  tea(g, s) {
    g.lineJoin = 'round'; g.lineCap = 'round'; g.lineWidth = s * 0.035; g.strokeStyle = INK;
    g.beginPath(); g.moveTo(s * 0.22, s * 0.45); g.lineTo(s * 0.7, s * 0.45); g.quadraticCurveTo(s * 0.7, s * 0.82, s * 0.46, s * 0.82); g.quadraticCurveTo(s * 0.22, s * 0.82, s * 0.22, s * 0.45);
    g.fillStyle = '#F3E3CF'; g.fill(); g.stroke();
    g.beginPath(); g.arc(s * 0.74, s * 0.58, s * 0.08, -Math.PI / 2, Math.PI / 2); g.stroke();
    g.strokeStyle = '#C9A27A';
    for (const x of [0.36, 0.5]) { g.beginPath(); g.moveTo(s * x, s * 0.38); g.bezierCurveTo(s * (x - 0.05), s * 0.3, s * (x + 0.05), s * 0.26, s * x, s * 0.16); g.stroke(); }
  },
  plus(g, s) {
    const c = s / 2;
    g.beginPath(); g.fillStyle = '#E3F0E6'; g.arc(c, c, s * 0.36, 0, Math.PI * 2); g.fill();
    g.lineWidth = s * 0.035; g.strokeStyle = INK; g.stroke();
    g.fillStyle = '#5E8C73';
    g.fillRect(c - s * 0.05, c - s * 0.18, s * 0.1, s * 0.36);
    g.fillRect(c - s * 0.18, c - s * 0.05, s * 0.36, s * 0.1);
  }
};

// ---------- mount ----------
export function mount(canvas, opts = {}) {
  const getSections = opts.getSections || (() => Array.from(document.querySelectorAll('[data-pose]')));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const motion = reduced ? 0 : 1;

  let renderer;
  try {
    renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  } catch {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;

  const scene = new Scene();
  // Cream fog: far floaters melt softly into the page background.
  scene.fog = new Fog('#FBF7F0', 10, 21);
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 10);
  const key = new DirectionalLight('#fff4e6', 2.2);
  key.position.set(4, 5, 6);
  const rim = new DirectionalLight('#9cc6ee', 1.4);
  rim.position.set(-5, 2, -4);
  const fill = new DirectionalLight('#ffd9b8', 0.9);
  fill.position.set(-4, -3, 4);
  scene.add(key, rim, fill, new AmbientLight('#fbe8d6', 0.4));

  // Every material of the mark is listed here so the pose opacity can fade
  // the mark without fading the floating background layer.
  const fade = []; // [material, baseOpacity]
  const fadeMat = (m, base = 1) => { m.transparent = true; fade.push([m, base]); return m; };

  const root = new Group(); // pose
  const tilt = new Group(); // pointer + idle sway
  root.add(tilt);
  scene.add(root);

  // Heart slab (PSI-style: depth ≈ 12% of height, small bevel)
  const DEPTH = 0.2;
  const slab = { depth: DEPTH, bevelEnabled: true, bevelThickness: 0.05, bevelSize: 0.035, bevelSegments: 5, curveSegments: 12 };
  const hPts = heartPoints(0.056);
  const heartGeo = new ExtrudeGeometry(new Shape(hPts), slab);
  heartGeo.translate(0, 0, -DEPTH / 2);
  paintGradient(heartGeo, '#6E3218', '#2A0E05', new Vector2(1, -1.2));
  heartGeo.computeVertexNormals();
  const heartMat = fadeMat(new MeshPhysicalMaterial({
    vertexColors: true, roughness: 0.3, metalness: 0.08, clearcoat: 1, clearcoatRoughness: 0.1,
    sheen: 0.2, sheenColor: new Color('#D9A27A'), envMapIntensity: 0.35
  }));
  const heart = new Mesh(heartGeo, heartMat);
  tilt.add(heart);

  // Ring slab, navy → plum → copper like the logo's circle
  const R0 = 1.46;
  const R1 = 1.66;
  const ringGeo = new ExtrudeGeometry(ringShape(R0, R1), { ...slab, curveSegments: 96 });
  ringGeo.translate(0, 0, -DEPTH / 2);
  paintGradient(ringGeo, '#0A2250', '#4A2616', new Vector2(1, -1));
  ringGeo.computeVertexNormals();
  const ringMat = fadeMat(new MeshPhysicalMaterial({ vertexColors: true, roughness: 0.26, metalness: 0.2, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 0.6 }));
  const ring = new Mesh(ringGeo, ringMat);
  tilt.add(ring);

  // Echo outlines (heart + ring) that fan out in depth when "spread"
  const echoes = [];
  const heartLine = new BufferGeometry().setFromPoints(hPts.map((p) => new Vector3(p.x, p.y, 0)));
  const ringLine = new BufferGeometry().setFromPoints(Array.from({ length: 128 }, (_, i) => {
    const a = (i / 128) * Math.PI * 2;
    return new Vector3(Math.cos(a) * R1, Math.sin(a) * R1, 0);
  }));
  for (let i = 0; i < 5; i++) {
    const col = new Color('#C9A27A').lerp(new Color('#E8A68C'), i / 4);
    const mat = new LineBasicMaterial({ color: col, transparent: true, opacity: 0, depthWrite: false });
    const g = new Group();
    g.add(new LineLoop(heartLine, mat), new LineLoop(ringLine, mat));
    tilt.add(g);
    echoes.push({ g, mat, i: i + 1 });
  }

  // Warm glow
  const glow = new Sprite(new SpriteMaterial({
    map: radial([[0, 'rgba(255,214,176,0.85)'], [0.4, 'rgba(246,196,160,0.35)'], [1, 'rgba(251,247,240,0)']]),
    transparent: true, depthWrite: false
  }));
  glow.scale.set(6.5, 6.5, 1);
  glow.position.z = -1.4;
  root.add(glow);

  // Dust around the mark
  const N = 240;
  const p = new Float32Array(N * 3);
  const c = new Float32Array(N * 3);
  const dustCols = ['#DCBF93', '#E8A68C', '#A88C63', '#9CC6EE', '#F2C9A0'].map((h) => new Color(h));
  for (let i = 0; i < N; i++) {
    const r = 2.2 + Math.random() * 5;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    p.set([r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th) * 0.7, r * Math.cos(ph) - 2], i * 3);
    const col = dustCols[i % dustCols.length];
    c.set([col.r, col.g, col.b], i * 3);
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new Float32BufferAttribute(p, 3));
  dustGeo.setAttribute('color', new Float32BufferAttribute(c, 3));
  const dust = new Points(dustGeo, fadeMat(new PointsMaterial({
    size: 0.07, vertexColors: true, depthWrite: false,
    map: radial([[0, 'rgba(255,255,255,1)'], [0.4, 'rgba(255,255,255,.6)'], [1, 'rgba(255,255,255,0)']], 64)
  }), 0.7));
  root.add(dust);

  // ---------- floating background layer ----------
  const isMobile = () => window.innerWidth < 760;
  const floaters = [];
  const floatLayer = new Group();
  scene.add(floatLayer);

  const leafGeo = new ExtrudeGeometry(leafShape(), { depth: 0.03, bevelEnabled: true, bevelThickness: 0.025, bevelSize: 0.03, bevelSegments: 3, curveSegments: 16 });
  leafGeo.center();
  const leafMats = ['#7FA77F', '#9DBE8C', '#5E8C73', '#B7CF9E'].map((col) => new MeshPhysicalMaterial({
    color: col, roughness: 0.45, sheen: 0.6, sheenColor: new Color('#E6F2D8'), clearcoat: 0.4, side: DoubleSide, transparent: true, opacity: 0.9
  }));
  const miniHeartGeo = new ExtrudeGeometry(new Shape(heartPoints(0.05, 64)), { depth: 0.12, bevelEnabled: true, bevelThickness: 0.06, bevelSize: 0.05, bevelSegments: 4, curveSegments: 8 });
  miniHeartGeo.center();
  const miniHeartMats = ['#B5653E', '#E8A68C', '#8A3E1E', '#D9A27A'].map((col) => new MeshPhysicalMaterial({
    color: col, roughness: 0.3, clearcoat: 1, clearcoatRoughness: 0.12, sheen: 0.4, sheenColor: new Color('#FFE3CF'), transparent: true, opacity: 0.92
  }));
  const iconTex = Object.fromEntries(Object.entries(ICONS).map(([k, draw]) => [k, canvasTex(128, draw)]));
  const iconNames = Object.keys(ICONS);

  let made = 0;
  function seed(kind) {
    // Most sit near the left/right edges; the few in the middle are pushed
    // far back, where the fog makes them faint, so they never fight the text.
    const edge = Math.random() < 0.85;
    const side = made++ % 2 ? 1 : -1;
    return {
      kind,
      edge,
      nx: edge ? side * rand(0.62, 1.05) : rand(-0.8, 0.8),
      ny: rand(-1.3, 1.3),
      z: edge ? rand(-3.5, 1.2) : rand(-7, -4.5),
      spin: new Vector3(rand(-0.6, 0.6), rand(-0.8, 0.8), rand(-0.5, 0.5)),
      phase: rand(0, 10),
      drift: rand(0.03, 0.08),
      par: rand(0.35, 0.8) // scroll parallax factor
    };
  }
  for (let i = 0; i < 16; i++) {
    const m = new Mesh(leafGeo, leafMats[i % leafMats.length]);
    m.scale.set(1, 1.1, 1).multiplyScalar(rand(0.16, 0.3));
    m.userData = seed('leaf');
    floatLayer.add(m);
    floaters.push(m);
  }
  for (let i = 0; i < 12; i++) {
    const m = new Mesh(miniHeartGeo, miniHeartMats[i % miniHeartMats.length]);
    m.scale.setScalar(rand(0.16, 0.3));
    m.userData = seed('heart');
    floatLayer.add(m);
    floaters.push(m);
  }
  for (let i = 0; i < 12; i++) {
    const sp = new Sprite(new SpriteMaterial({ map: iconTex[iconNames[i % iconNames.length]], transparent: true, depthWrite: false, opacity: 0.9 }));
    const size = rand(0.35, 0.55);
    sp.scale.set(size, size, 1);
    sp.userData = seed('icon');
    floatLayer.add(sp);
    floaters.push(sp);
  }

  // ---------- scroll poses ----------
  const cur = { ...POSES.hero };
  const target = { ...POSES.hero };
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  function poseFor(name) {
    const base = { ...(POSES[name] || POSES.hero) };
    if (isMobile()) {
      if (name === 'hero') return { ...base, x: 0, y: 0.47, s: 0.6, o: 1 };
      base.x = 0.55;
      base.y = 0.3;
      base.s *= 0.75;
      base.o *= 0.65;
    }
    return base;
  }

  function updateTarget() {
    const secs = getSections();
    if (!secs.length) return;
    const vh = window.innerHeight;
    const mid = vh * 0.5;
    const list = secs.map((el) => {
      const r = el.getBoundingClientRect();
      return { c: r.top + Math.min(r.height, vh) * 0.5, name: el.dataset.pose };
    });
    let a = list[0];
    let b = list[0];
    let t = 0;
    if (mid >= list[list.length - 1].c) a = b = list[list.length - 1];
    else if (mid > list[0].c) {
      for (let i = 0; i < list.length - 1; i++) {
        if (mid >= list[i].c && mid <= list[i + 1].c) {
          a = list[i];
          b = list[i + 1];
          t = smooth((mid - a.c) / Math.max(1, b.c - a.c));
          break;
        }
      }
    }
    const pa = poseFor(a.name);
    const pb = poseFor(b.name);
    for (const k of KEYS) target[k] = pa[k] + (pb[k] - pa[k]) * t;
  }

  const onMove = (e) => {
    mouse.tx = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.ty = (e.clientY / window.innerHeight) * 2 - 1;
  };
  const onTilt = (e) => {
    if (e.gamma == null) return;
    mouse.tx = MathUtils.clamp(e.gamma / 30, -1, 1);
    mouse.ty = MathUtils.clamp((e.beta - 45) / 30, -1, 1);
  };
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('deviceorientation', onTilt, { passive: true });

  function resize() {
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);
  resize();

  const clock = new Timer();
  let raf = 0;
  let first = true;
  const beat = (t) => {
    const ph = (t % 1.25) / 1.25; // "lub-dub"
    return Math.exp(-(((ph - 0.08) / 0.045) ** 2)) + 0.6 * Math.exp(-(((ph - 0.26) / 0.055) ** 2));
  };
  const tanHalf = Math.tan(MathUtils.degToRad(35 / 2));

  function frame() {
    raf = requestAnimationFrame(frame);
    if (document.hidden) return;
    clock.update();
    const dt = Math.min(clock.getDelta(), 0.05);
    const t = clock.getElapsed();
    updateTarget();
    const k = first || reduced ? 1 : 1 - Math.exp(-dt * 4);
    first = false;
    for (const key of KEYS) cur[key] += (target[key] - cur[key]) * k;
    const km = 1 - Math.exp(-dt * 3);
    mouse.x += (mouse.tx - mouse.x) * km;
    mouse.y += (mouse.ty - mouse.y) * km;

    const halfH = tanHalf * camera.position.z;
    const halfW = halfH * camera.aspect;
    root.position.set(cur.x * halfW, cur.y * halfH, 0);
    root.rotation.set(cur.rx, cur.ry, cur.rz);
    root.scale.setScalar(cur.s);
    tilt.rotation.set(mouse.y * 0.2 + Math.sin(t * 0.5) * 0.04 * motion, mouse.x * 0.3 + Math.sin(t * 0.35) * 0.1 * motion, 0);
    tilt.position.y = Math.sin(t * 0.8) * 0.05 * motion;

    // Beat, lift (heart pops forward out of the ring), echoes fan out
    const b = beat(t) * motion;
    heart.scale.setScalar(1 + b * 0.05);
    heart.position.z = cur.lift * 0.9;
    ring.position.z = -cur.lift * 0.15;
    for (const e of echoes) {
      e.g.position.z = -0.3 - e.i * 0.5 * cur.spread;
      e.g.scale.setScalar(1 + e.i * 0.08 * cur.spread);
      e.mat.opacity = Math.min(1, cur.spread * 1.2) * (0.8 - e.i * 0.12) * Math.max(cur.o, 0.35);
    }
    dust.rotation.y = t * 0.02 * motion + cur.ry * 0.15;
    dust.scale.setScalar(1 + cur.spread * 0.35);
    for (const [m, base] of fade) m.opacity = base * cur.o;
    glow.material.opacity = (0.35 + cur.glow * 0.5 + b * 0.15) * cur.o;
    glow.scale.setScalar(5.5 + cur.glow * 1.5 + b * 0.4);

    // Floating layer: drift up, flutter, parallax with scroll, wrap around
    const scrollUnits = (window.scrollY / window.innerHeight) * 2 * halfH * motion;
    const small = isMobile();
    floaters.forEach((m, i) => {
      const u = m.userData;
      // Phones: only the outer edge ones, and fewer of them.
      m.visible = !small || (u.edge && Math.abs(u.nx) > 0.8 && i % 2 === 0);
      const hz = tanHalf * (camera.position.z - u.z);
      const wz = hz * camera.aspect;
      const span = hz * 2.8;
      let y = u.ny * hz + t * u.drift * motion + scrollUnits * u.par;
      y = ((((y + span / 2) % span) + span) % span) - span / 2;
      const depth = (u.z + 5) * 0.2;
      const x = u.nx * wz + Math.sin(t * 0.4 + u.phase) * 0.15 * motion - mouse.x * 0.15 * depth;
      m.position.set(x, y + mouse.y * 0.05 * depth, u.z);
      if (u.kind === 'icon') {
        m.material.rotation = Math.sin(t * 0.6 + u.phase) * 0.25 * motion;
      } else {
        const r = t * motion + u.phase;
        const flutter = u.kind === 'leaf' ? 1 : 0;
        m.rotation.set(u.spin.x * r + Math.sin(r * 1.3) * 0.5 * flutter, u.spin.y * r, u.spin.z * r + Math.sin(r * 0.9) * 0.6 * flutter);
      }
    });

    renderer.render(scene, camera);
  }
  frame();
  canvas.style.opacity = '1';
  canvas.classList.add('is-ready');

  return {
    destroy() {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('deviceorientation', onTilt);
      renderer.dispose();
      pmrem.dispose();
    }
  };
}
