'use strict';

/* ===== 试玩区 ===== */
const frame = document.getElementById('demoFrame');
const shell = document.getElementById('demoShell');
const fullscreen = document.getElementById('fullscreenDemo');

frame.addEventListener('load', () => shell.classList.add('loaded'));
fullscreen.addEventListener('click', async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await shell.requestFullscreen();
  } catch (error) {
    frame.focus();
    fullscreen.textContent = '浏览器未允许全屏';
  }
});
document.addEventListener('fullscreenchange', () => {
  fullscreen.textContent = document.fullscreenElement ? '退出全屏' : '全屏试玩';
});

/* ===== 主视觉 Canvas 场景：锁链巨像・中央黑塔・雾与红光
   程序化占位美术——正式壁纸（WEB_HERO_WALLPAPER）落地后整体替换 paintScene 即可 ===== */
const sceneCanvas = document.getElementById('heroScene');
const emberCanvas = document.getElementById('heroEmbers');
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

function mulberry(seed) {
  return () => {
    seed |= 0; seed = seed + 0x6D2B79F5 | 0;
    let t = Math.imul(seed ^ seed >>> 15, 1 | seed);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

function paintScene() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const W = sceneCanvas.clientWidth, H = sceneCanvas.clientHeight;
  if (!W || !H) return;
  sceneCanvas.width = W * dpr; sceneCanvas.height = H * dpr;
  const x = sceneCanvas.getContext('2d');
  x.scale(dpr, dpr);
  const rnd = mulberry(20260716);
  const groundY = H * 0.845;

  // 天穹与塔身背光
  let g = x.createLinearGradient(0, 0, 0, H);
  g.addColorStop(0, '#181310'); g.addColorStop(0.45, '#0d0a08'); g.addColorStop(1, '#060504');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createRadialGradient(W / 2, H * 0.42, 0, W / 2, H * 0.42, Math.max(W, H) * 0.45);
  g.addColorStop(0, 'rgba(150,96,52,.12)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);

  // 远景废墟天际线（两层）
  const ridge = (baseY, amp, color) => {
    x.fillStyle = color; x.beginPath(); x.moveTo(0, H);
    x.lineTo(0, baseY);
    for (let px = 0; px <= W; px += W / 46) x.lineTo(px, baseY - rnd() * amp);
    x.lineTo(W, H); x.closePath(); x.fill();
  };
  ridge(H * 0.72, H * 0.05, 'rgba(14,11,9,.75)');
  ridge(H * 0.78, H * 0.08, 'rgba(10,8,7,.9)');

  // 中央黑塔（顶部越出画面，压迫感）
  const tw = W * 0.13;
  g = x.createLinearGradient(0, 0, 0, groundY);
  g.addColorStop(0, '#0d0a08'); g.addColorStop(1, '#080605');
  x.fillStyle = g;
  x.beginPath();
  x.moveTo(W / 2 - tw * 0.34, -H * 0.05); x.lineTo(W / 2 + tw * 0.34, -H * 0.05);
  x.lineTo(W / 2 + tw * 0.5, groundY); x.lineTo(W / 2 - tw * 0.5, groundY);
  x.closePath(); x.fill();
  // 塔身血色符缝
  g = x.createLinearGradient(0, H * 0.18, 0, H * 0.62);
  g.addColorStop(0, 'rgba(192,51,37,0)'); g.addColorStop(0.4, 'rgba(192,51,37,.55)'); g.addColorStop(1, 'rgba(142,31,22,0)');
  x.fillStyle = g; x.fillRect(W / 2 - 1, H * 0.18, 2, H * 0.44);
  g = x.createRadialGradient(W / 2, H * 0.3, 0, W / 2, H * 0.3, W * 0.05);
  g.addColorStop(0, 'rgba(192,51,37,.28)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(W / 2 - W * 0.05, H * 0.25, W * 0.1, W * 0.1);

  // 中景断柱
  const pillar = (px, w, h) => {
    x.fillStyle = '#090706';
    x.beginPath();
    x.moveTo(px, groundY); x.lineTo(px, groundY - h);
    x.lineTo(px + w * 0.3, groundY - h - w * 0.28);
    x.lineTo(px + w * 0.62, groundY - h + w * 0.1);
    x.lineTo(px + w, groundY - h - w * 0.14);
    x.lineTo(px + w, groundY); x.closePath(); x.fill();
  };
  for (const [fx, fw, fh] of [[0.07, 0.03, 0.2], [0.2, 0.022, 0.13], [0.3, 0.017, 0.09], [0.66, 0.02, 0.1], [0.76, 0.026, 0.16], [0.9, 0.032, 0.22]])
    pillar(W * fx, W * fw, H * fh);

  // 左右锁链巨像（跪伏戴兜帽的剪影）
  const statue = (cx, h, flip) => {
    x.save(); x.translate(cx, groundY); x.scale(flip ? -1 : 1, 1);
    const s = h;
    g = x.createLinearGradient(0, -s, 0, 0);
    g.addColorStop(0, '#0d0a08'); g.addColorStop(1, '#070505');
    x.fillStyle = g;
    x.beginPath();
    x.moveTo(-s * 0.46, 0);
    x.bezierCurveTo(-s * 0.56, -s * 0.42, -s * 0.44, -s * 0.78, -s * 0.16, -s * 0.9);
    x.quadraticCurveTo(s * 0.02, -s * 0.99, s * 0.13, -s * 0.86);   // 兜帽弧顶
    x.quadraticCurveTo(s * 0.2, -s * 0.77, s * 0.1, -s * 0.72);     // 帽檐垂落
    x.quadraticCurveTo(s * 0.16, -s * 0.62, s * 0.24, -s * 0.5);    // 低伏的胸线
    x.bezierCurveTo(s * 0.4, -s * 0.3, s * 0.5, -s * 0.12, s * 0.52, 0);
    x.closePath(); x.fill();
    x.restore();
  };
  const sh = H * 0.52;
  statue(W * 0.13, sh, false);
  statue(W * 0.87, sh, true);

  // 锁链：从巨像肩头垂向断柱
  const chain = (x0, y0, x1, y1, sag) => {
    const mx = (x0 + x1) / 2, my = Math.max(y0, y1) + sag;
    x.strokeStyle = 'rgba(150,130,105,.12)'; x.lineWidth = 1;
    const steps = 26;
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      const bx = (1 - t) * (1 - t) * x0 + 2 * (1 - t) * t * mx + t * t * x1;
      const by = (1 - t) * (1 - t) * y0 + 2 * (1 - t) * t * my + t * t * y1;
      x.beginPath(); x.ellipse(bx, by, 2.6, 3.4, t * 1.2, 0, Math.PI * 2); x.stroke();
    }
  };
  chain(W * 0.155, groundY - sh * 0.62, W * 0.31, groundY - H * 0.07, H * 0.06);
  chain(W * 0.1, groundY - sh * 0.7, W * 0.015, groundY - H * 0.16, H * 0.05);
  chain(W * 0.845, groundY - sh * 0.62, W * 0.69, groundY - H * 0.07, H * 0.06);
  chain(W * 0.9, groundY - sh * 0.7, W * 0.985, groundY - H * 0.16, H * 0.05);

  // 雾带
  for (const [fy, fa] of [[0.62, 0.05], [0.74, 0.07], [0.82, 0.09]]) {
    g = x.createLinearGradient(0, H * fy - 40, 0, H * fy + 46);
    g.addColorStop(0, 'rgba(120,95,70,0)'); g.addColorStop(0.5, `rgba(120,95,70,${fa})`); g.addColorStop(1, 'rgba(120,95,70,0)');
    x.fillStyle = g; x.fillRect(0, H * fy - 40, W, 86);
  }

  // 大地与中心红光、独行的小骑士
  x.fillStyle = '#050403'; x.fillRect(0, groundY, W, H - groundY);
  g = x.createRadialGradient(W / 2, groundY + 6, 0, W / 2, groundY + 6, W * 0.085);
  g.addColorStop(0, 'rgba(190,58,30,.5)'); g.addColorStop(0.55, 'rgba(120,30,16,.22)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  x.fillStyle = g; x.fillRect(W / 2 - W * 0.09, groundY - W * 0.05, W * 0.18, W * 0.12);
  const kh = Math.max(11, H * 0.024), kx = W / 2, ky = groundY + 4;
  x.fillStyle = '#020201';
  x.beginPath(); x.arc(kx, ky - kh * 0.88, kh * 0.11, 0, Math.PI * 2); x.fill();        // 头
  x.beginPath();                                                                        // 披风与身躯
  x.moveTo(kx - kh * 0.08, ky - kh * 0.76); x.lineTo(kx + kh * 0.08, ky - kh * 0.76);
  x.lineTo(kx + kh * 0.17, ky); x.lineTo(kx - kh * 0.17, ky); x.closePath(); x.fill();
  x.fillRect(kx + kh * 0.13, ky - kh * 0.6, 1, kh * 0.6);                               // 拄剑

  // 暗角与向页面底色的过渡
  g = x.createRadialGradient(W / 2, H * 0.46, H * 0.22, W / 2, H * 0.52, Math.max(W, H) * 0.75);
  g.addColorStop(0, 'rgba(0,0,0,0)'); g.addColorStop(1, 'rgba(0,0,0,.58)');
  x.fillStyle = g; x.fillRect(0, 0, W, H);
  g = x.createLinearGradient(0, H * 0.86, 0, H);
  g.addColorStop(0, 'rgba(8,7,6,0)'); g.addColorStop(1, '#080706');
  x.fillStyle = g; x.fillRect(0, H * 0.86, W, H * 0.14);

  // 噪点颗粒
  for (let i = 0; i < 1100; i++) {
    x.fillStyle = i % 2 ? 'rgba(220,205,180,.024)' : 'rgba(0,0,0,.05)';
    x.fillRect(rnd() * W, rnd() * H, 1, 1);
  }
}

/* ===== 余烬粒子 ===== */
let embers = [];
function resetEmbers() {
  const dpr = Math.min(devicePixelRatio || 1, 2);
  emberCanvas.width = emberCanvas.clientWidth * dpr;
  emberCanvas.height = emberCanvas.clientHeight * dpr;
  const W = emberCanvas.clientWidth, H = emberCanvas.clientHeight;
  const rnd = Math.random;
  embers = Array.from({length: 38}, () => ({
    x: rnd() * W, y: rnd() * H,
    r: 0.7 + rnd() * 1.5, v: 9 + rnd() * 16, drift: 6 + rnd() * 12,
    phase: rnd() * Math.PI * 2, flicker: 0.6 + rnd() * 1.6,
    color: ['rgba(176,81,42,', 'rgba(192,51,37,', 'rgba(214,120,64,'][Math.floor(rnd() * 3)]
  }));
}
let lastT = 0;
function tickEmbers(t) {
  const dt = Math.min(0.05, (t - lastT) / 1000 || 0.016); lastT = t;
  const dpr = Math.min(devicePixelRatio || 1, 2);
  const W = emberCanvas.clientWidth, H = emberCanvas.clientHeight;
  const x = emberCanvas.getContext('2d');
  x.setTransform(dpr, 0, 0, dpr, 0, 0);
  x.clearRect(0, 0, W, H);
  for (const p of embers) {
    p.y -= p.v * dt;
    p.x += Math.sin(t / 1000 * p.flicker + p.phase) * p.drift * dt;
    if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
    const a = 0.25 + 0.3 * (0.5 + 0.5 * Math.sin(t / 220 + p.phase));
    x.fillStyle = p.color + a + ')';
    x.beginPath(); x.arc(p.x, p.y, p.r, 0, Math.PI * 2); x.fill();
  }
  requestAnimationFrame(tickEmbers);
}

paintScene();
if (!reduceMotion) { resetEmbers(); requestAnimationFrame(tickEmbers); }
let resizeTimer = 0;
addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => { paintScene(); if (!reduceMotion) resetEmbers(); }, 150);
});

/* ===== 顶栏状态与导航联动 ===== */
const header = document.querySelector('.site-header');
addEventListener('scroll', () => header.classList.toggle('scrolled', scrollY > 30), {passive: true});

const navLinks = [...document.querySelectorAll('.primary-nav a')];
const sectionByLink = new Map(navLinks.map(a => [document.querySelector(a.getAttribute('href')), a]));
const spy = new IntersectionObserver(entries => {
  for (const e of entries) if (e.isIntersecting) {
    navLinks.forEach(a => a.classList.remove('active'));
    sectionByLink.get(e.target)?.classList.add('active');
  }
}, {rootMargin: '-45% 0px -50% 0px'});
sectionByLink.forEach((a, section) => section && spy.observe(section));

/* ===== 章节滚动浮现 ===== */
const revealer = new IntersectionObserver(entries => {
  for (const e of entries) if (e.isIntersecting) { e.target.classList.add('in'); revealer.unobserve(e.target); }
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => revealer.observe(el));
