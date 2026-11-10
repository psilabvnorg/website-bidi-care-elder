// 3D brand mark: a glossy brown heart inside a navy-to-copper ring.
// The scene sits on a fixed full-screen canvas. It glides to a pose for each
// section marked with [data-pose], beats gently, tilts toward the pointer and
// is surrounded by drifting particles and small floating hearts.
import {
  WebGLRenderer, Scene, PerspectiveCamera, Group, Mesh, Shape, ExtrudeGeometry,
  TorusGeometry, SphereGeometry, MeshPhysicalMaterial, Color,
  DirectionalLight, AmbientLight, PMREMGenerator, CanvasTexture, Sprite, SpriteMaterial,
  Points, PointsMaterial, BufferGeometry, Float32BufferAttribute, Timer, MathUtils,
  ACESFilmicToneMapping, SRGBColorSpace, Vector2
} from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

// Big and centred-right in the hero, then a small companion heart in the
// bottom-left corner that keeps beating while you read.
const CORNER = { x: -0.9, y: -0.78, s: 0.17, rx: 0, ry: 0.35, o: 0.95 };
export const POSES = {
  hero: { x: 0.5, y: 0.0, s: 1.0, rx: 0, ry: -0.25, o: 1 },
  corner: CORNER
};
const KEYS = ['x', 'y', 's', 'rx', 'ry', 'o'];

const smooth = (t) => t * t * (3 - 2 * t);

function heartShape() {
  // Classic parametric heart, sampled densely for a smooth outline.
  const pts = [];
  for (let i = 0; i < 160; i++) {
    const t = (i / 160) * Math.PI * 2;
    const x = 16 * Math.pow(Math.sin(t), 3);
    const y = 13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t);
    pts.push(new Vector2(x * 0.05, y * 0.05));
  }
  return new Shape(pts);
}

function radialTexture(stops, size = 256) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  const grd = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  stops.forEach(([o, col]) => grd.addColorStop(o, col));
  g.fillStyle = grd;
  g.fillRect(0, 0, size, size);
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

function heartTexture() {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d');
  g.fillStyle = '#fff';
  g.beginPath();
  g.moveTo(32, 54);
  g.bezierCurveTo(6, 36, 6, 14, 20, 12);
  g.bezierCurveTo(27, 11, 31, 16, 32, 20);
  g.bezierCurveTo(33, 16, 37, 11, 44, 12);
  g.bezierCurveTo(58, 14, 58, 36, 32, 54);
  g.fill();
  const tex = new CanvasTexture(c);
  tex.colorSpace = SRGBColorSpace;
  return tex;
}

export function mount(canvas, opts = {}) {
  const getSections = opts.getSections || (() => Array.from(document.querySelectorAll('[data-pose]')));
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
  const pmrem = new PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

  const camera = new PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(0, 0, 10);

  const key = new DirectionalLight('#fff4e6', 2.4);
  key.position.set(4, 5, 6);
  const rim = new DirectionalLight('#9cc6ee', 1.4);
  rim.position.set(-5, 2, -4);
  const fill = new DirectionalLight('#ffd9b8', 0.9);
  fill.position.set(-4, -3, 4);
  scene.add(key, rim, fill, new AmbientLight('#fbe8d6', 0.35));

  const root = new Group(); // follows section poses
  const tilt = new Group(); // follows pointer + idle sway
  root.add(tilt);
  scene.add(root);

  // Heart
  const heartGeo = new ExtrudeGeometry(heartShape(), {
    depth: 0.32, bevelEnabled: true, bevelThickness: 0.26, bevelSize: 0.16, bevelSegments: 10, curveSegments: 48
  });
  heartGeo.center();
  const heartMat = new MeshPhysicalMaterial({
    color: '#5A2810', roughness: 0.34, metalness: 0.08, clearcoat: 1, clearcoatRoughness: 0.1,
    sheen: 0.35, sheenColor: new Color('#C98A5E'), sheenRoughness: 0.6, envMapIntensity: 0.7
  });
  const heart = new Mesh(heartGeo, heartMat);
  tilt.add(heart);

  // Ring with a navy-to-copper gradient, like the logo's circle
  const ringGeo = new TorusGeometry(1.62, 0.075, 48, 280);
  const pos = ringGeo.attributes.position;
  const cols = new Float32Array(pos.count * 3);
  const navy = new Color('#1C3D75');
  const plum = new Color('#4A4A62');
  const copper = new Color('#7A4A30');
  const tmp = new Color();
  for (let i = 0; i < pos.count; i++) {
    const t = MathUtils.clamp((pos.getX(i) - pos.getY(i)) / 4.6 + 0.5, 0, 1);
    if (t < 0.5) tmp.copy(navy).lerp(plum, t * 2);
    else tmp.copy(plum).lerp(copper, (t - 0.5) * 2);
    cols.set([tmp.r, tmp.g, tmp.b], i * 3);
  }
  ringGeo.setAttribute('color', new Float32BufferAttribute(cols, 3));
  const ringMat = new MeshPhysicalMaterial({
    vertexColors: true, roughness: 0.22, metalness: 0.35, clearcoat: 1, clearcoatRoughness: 0.08, envMapIntensity: 1
  });
  const ring = new Mesh(ringGeo, ringMat);
  const ringHolder = new Group();
  ringHolder.add(ring);
  tilt.add(ringHolder);

  // A fine bronze orbit with three pearls
  const orbit = new Group();
  const thin = new Mesh(
    new TorusGeometry(1.92, 0.012, 12, 260),
    new MeshPhysicalMaterial({ color: '#C9A27A', roughness: 0.35, metalness: 0.6, transparent: true, opacity: 0.8 })
  );
  orbit.add(thin);
  const pearlMat = new MeshPhysicalMaterial({ color: '#FFF6EC', roughness: 0.15, clearcoat: 1, sheen: 1, sheenColor: new Color('#F7D7BD') });
  const pearls = [0, 2.1, 4.2].map((a, i) => {
    const m = new Mesh(new SphereGeometry(i === 0 ? 0.07 : 0.05, 24, 24), pearlMat);
    m.userData.a = a;
    orbit.add(m);
    return m;
  });
  orbit.rotation.set(1.15, 0.25, 0);
  tilt.add(orbit);

  // Warm glow behind
  const glow = new Sprite(new SpriteMaterial({
    map: radialTexture([[0, 'rgba(255,214,176,0.85)'], [0.4, 'rgba(246,196,160,0.35)'], [1, 'rgba(251,247,240,0)']]),
    transparent: true, depthWrite: false
  }));
  glow.scale.set(6.5, 6.5, 1);
  glow.position.z = -1.4;
  root.add(glow);

  // Drifting particles
  const N = 260;
  const p = new Float32Array(N * 3);
  const c = new Float32Array(N * 3);
  const palette = ['#DCBF93', '#E8A68C', '#A88C63', '#9CC6EE', '#F2C9A0'].map((h) => new Color(h));
  for (let i = 0; i < N; i++) {
    const r = 2.3 + Math.random() * 5;
    const th = Math.random() * Math.PI * 2;
    const ph = Math.acos(2 * Math.random() - 1);
    p.set([r * Math.sin(ph) * Math.cos(th), r * Math.sin(ph) * Math.sin(th) * 0.7, r * Math.cos(ph) - 2], i * 3);
    const col = palette[i % palette.length];
    c.set([col.r, col.g, col.b], i * 3);
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute('position', new Float32BufferAttribute(p, 3));
  dustGeo.setAttribute('color', new Float32BufferAttribute(c, 3));
  const dust = new Points(dustGeo, new PointsMaterial({
    size: 0.07, vertexColors: true, transparent: true, opacity: 0.7, depthWrite: false,
    map: radialTexture([[0, 'rgba(255,255,255,1)'], [0.4, 'rgba(255,255,255,.6)'], [1, 'rgba(255,255,255,0)']], 64)
  }));
  root.add(dust);

  // Little hearts that float upward
  const hTex = heartTexture();
  const hearts = [];
  const heartCols = ['#B5653E', '#E8A68C', '#C9A27A', '#9C4A26'];
  for (let i = 0; i < 16; i++) {
    const sp = new Sprite(new SpriteMaterial({ map: hTex, color: heartCols[i % 4], transparent: true, depthWrite: false, opacity: 0 }));
    const seed = { x: (Math.random() - 0.5) * 6, z: Math.random() * 2 - 1.5, speed: 0.15 + Math.random() * 0.2, phase: Math.random() * 10, size: 0.12 + Math.random() * 0.14 };
    sp.userData = seed;
    root.add(sp);
    hearts.push(sp);
  }

  // Pose interpolation driven by scroll position
  const cur = { ...POSES.hero };
  const target = { ...POSES.hero };
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };

  function poseFor(name, mobile) {
    const base = { ...(POSES[name] || POSES.corner) };
    if (mobile) {
      if (name === 'hero') return { ...base, x: 0, y: 0.47, s: 0.6, o: 1 };
      base.x = -0.8;
      base.y = -0.86;
      base.s = 0.2;
      base.o = 0.4;
    }
    return base;
  }

  function updateTarget() {
    const secs = getSections();
    if (!secs.length) return;
    const vh = window.innerHeight;
    const mid = vh * 0.5;
    const mobile = window.innerWidth < 760;
    const list = secs.map((el) => {
      const r = el.getBoundingClientRect();
      return { c: r.top + Math.min(r.height, vh) * 0.5, name: el.dataset.pose };
    });
    let a = list[0];
    let b = list[0];
    let t = 0;
    if (mid <= list[0].c) a = b = list[0];
    else if (mid >= list[list.length - 1].c) a = b = list[list.length - 1];
    else {
      for (let i = 0; i < list.length - 1; i++) {
        if (mid >= list[i].c && mid <= list[i + 1].c) {
          a = list[i];
          b = list[i + 1];
          t = smooth((mid - a.c) / Math.max(1, b.c - a.c));
          break;
        }
      }
    }
    const pa = poseFor(a.name, mobile);
    const pb = poseFor(b.name, mobile);
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
  const motion = reduced ? 0 : 1;

  function beat(t) {
    // "lub-dub" every 1.25s
    const ph = (t % 1.25) / 1.25;
    return Math.exp(-(((ph - 0.08) / 0.045) ** 2)) + 0.6 * Math.exp(-(((ph - 0.26) / 0.055) ** 2));
  }

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

    const halfH = Math.tan(MathUtils.degToRad(camera.fov / 2)) * camera.position.z;
    const halfW = halfH * camera.aspect;
    root.position.set(cur.x * halfW, cur.y * halfH, 0);
    root.rotation.set(cur.rx, cur.ry, 0);
    root.scale.setScalar(cur.s);

    tilt.rotation.set(mouse.y * 0.25 + Math.sin(t * 0.5) * 0.05 * motion, mouse.x * 0.35 + Math.sin(t * 0.35) * 0.18 * motion, 0);
    tilt.position.y = Math.sin(t * 0.8) * 0.06 * motion;

    const b = beat(t) * motion;
    heart.scale.setScalar(1 + b * 0.055);
    ringHolder.rotation.set(Math.sin(t * 0.3) * 0.12 * motion, Math.sin(t * 0.4) * 0.5 * motion, 0);
    orbit.rotation.z = t * 0.2 * motion;
    pearls.forEach((m, i) => {
      const a = m.userData.a + t * (0.5 + i * 0.12) * motion;
      m.position.set(Math.cos(a) * 1.92, Math.sin(a) * 1.92, 0);
    });
    glow.material.opacity = 0.75 + b * 0.25;
    glow.scale.setScalar(6 + b * 0.5);
    dust.rotation.y = t * 0.02 * motion;

    for (const h of hearts) {
      const u = h.userData;
      const life = ((t * u.speed + u.phase) % 4) / 4; // 0..1
      h.position.set(u.x + Math.sin(t + u.phase) * 0.2, -2.6 + life * 5.2, u.z);
      h.scale.setScalar(u.size * (0.6 + life * 0.6));
      h.material.opacity = Math.sin(life * Math.PI) * 0.75 * motion;
    }

    canvas.style.opacity = cur.o.toFixed(3);
    renderer.render(scene, camera);
  }
  frame();
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
