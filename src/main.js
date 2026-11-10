import './styles.css';
import Lenis from 'lenis';
import {
  CONTACT, UI, HERO, WHY, SERVICES, ROLES, PRICING, PROCESS, TEAM, STORIES, BLOG, JOIN, FAQ,
  CONTACT_SECTION as CS, FOOTER, META, SHOP
} from './content.js';
import { icon, avatar, coverArt, productArt } from './icons.js';

// ---------- Language ----------
const LANGS = ['vi', 'en'];
function initialLang() {
  const q = new URLSearchParams(location.search).get('lang');
  if (LANGS.includes(q)) return q;
  try {
    const s = localStorage.getItem('bidi-lang');
    if (LANGS.includes(s)) return s;
  } catch { /* storage unavailable */ }
  return 'vi';
}
let lang = initialLang();
const t = (o) => (o == null ? '' : typeof o === 'string' ? o : o[lang] ?? o.vi);

const money = (n) => n.toLocaleString(lang === 'vi' ? 'vi-VN' : 'en-US') + 'đ';
const short = (n) => {
  if (n >= 1e6) {
    const m = n / 1e6;
    const s = Number.isInteger(m) ? String(m) : m.toFixed(1);
    return (lang === 'vi' ? s.replace('.', ',') + ' triệu' : s + 'M') + 'đ';
  }
  return money(n);
};

// ---------- Section templates ----------
const head = (s, center = false) => `
  <div class="sec-head ${center ? 'center' : ''}" data-reveal>
    <p class="eyebrow"><span class="num">${s.num}</span><span class="sep">·</span>${t(s.eyebrow)}</p>
    <h2 class="display h2">${t(s.title)}</h2>
    ${s.lead ? `<p class="lead">${t(s.lead)}</p>` : ''}
  </div>`;

const sampleTag = () => `<span class="sample" title="${t(UI.sample)}">${t(UI.sample)}</span>`;

function header() {
  return `
  <a class="skip" href="#main">${t(UI.skip)}</a>
  <header class="hdr" id="hdr">
    <div class="wrap hdr-in">
      <a class="brand" href="#top" aria-label="BiDi Homecare">
        <img src="brand/logo.webp" alt="" width="44" height="44">
        <span class="brand-txt"><b>BiDi</b> Homecare</span>
      </a>
      <nav class="nav" id="nav" aria-label="Menu">
        ${UI.nav.map((n) => `<a href="${n.href}">${t(n)}</a>`).join('')}
        <a class="btn btn-zalo nav-only-mobile" href="${CONTACT.zalo}" target="_blank" rel="noopener">${icon('chat')}${t(UI.zalo)}</a>
      </nav>
      <div class="hdr-act">
        <div class="lang" role="group" aria-label="${t(UI.langLabel)}">
          ${LANGS.map((l) => `<button type="button" data-lang="${l}" aria-pressed="${l === lang}">${l.toUpperCase()}</button>`).join('')}
        </div>
        <a class="btn btn-sm btn-primary hdr-call" href="tel:${CONTACT.tel}">${icon('phone')}<span>${t(UI.call)}</span></a>
        <button class="burger" type="button" aria-expanded="false" aria-controls="nav" aria-label="${t(UI.menu)}">${icon('menu')}</button>
      </div>
    </div>
  </header>`;
}

function hero() {
  return `
  <section class="sec hero" id="top" data-pose="hero">
    <div class="wrap hero-in">
      <div class="hero-copy">
        <p class="eyebrow pill" data-reveal><span class="dot"></span>${t(HERO.eyebrow)}</p>
        <h1 class="display hero-title" data-reveal>${t(HERO.title)}</h1>
        <p class="lead" data-reveal>${t(HERO.lead)}</p>
        <div class="cta-row" data-reveal>
          <a class="btn btn-primary btn-lg" href="#contact">${icon('heart')}${t(HERO.ctaPrimary)}</a>
          <a class="btn btn-ghost btn-lg" href="${CONTACT.zalo}" target="_blank" rel="noopener">${icon('chat')}${t(HERO.ctaSecondary)}</a>
        </div>
        <ul class="badges" data-reveal>
          ${HERO.badges.map((b) => `<li>${icon(b.icon)}<span>${t(b)}</span></li>`).join('')}
        </ul>
      </div>
      <div class="hero-side" aria-hidden="true">
        <div class="float-card fc-1"><span class="live"></span>${t(HERO.note)}</div>
        <div class="float-card fc-2">${icon('star')}<b>4,8</b><span>/5 · ${lang === 'vi' ? 'gia đình hài lòng' : 'happy families'}</span></div>
      </div>
    </div>
    <a class="scroll-cue" href="#why" aria-label="${lang === 'vi' ? 'Cuộn xuống' : 'Scroll down'}"><span></span></a>
  </section>`;
}

function why() {
  return `
  <section class="sec why" id="why" data-pose="why">
    <div class="wrap why-grid">
      <div class="why-media" data-reveal>
        <div class="blob-photo">
          <img src="img/caregiver-service.webp" alt="${t(WHY.photoAlt)}" loading="lazy" width="1400" height="764">
        </div>
        <div class="photo-tag">${icon('heart')}${t(WHY.photoTag)}</div>
      </div>
      <div class="why-copy">
        ${head(WHY)}
        <div class="stats" data-reveal>
          ${WHY.stats.map((s) => `<div class="stat"><b data-count="${s.value}" data-dec="${s.decimals || 0}" data-suffix="${s.suffix}">0</b><span>${t(s)}</span></div>`).join('')}
        </div>
      </div>
    </div>
    <div class="wrap">
      <div class="cards-4">
        ${WHY.cards.map((c, i) => `<article class="card soft" data-reveal style="--d:${i * 80}ms"><div class="ico-bubble">${icon(c.icon)}</div><h3>${t(c)[0]}</h3><p>${t(c)[1]}</p></article>`).join('')}
      </div>
    </div>
  </section>`;
}

function services() {
  return `
  <section class="sec services" id="services" data-pose="services">
    <div class="wrap">
      ${head(SERVICES, true)}
      <div class="tabs center" role="tablist" data-reveal>
        ${SERVICES.tabs.map((tab, i) => `<button role="tab" type="button" id="svc-tab-${tab.id}" aria-controls="svc-${tab.id}" aria-selected="${i === 0}" data-tab="svc-${tab.id}">${t(tab)}</button>`).join('')}
      </div>
      ${SERVICES.tabs.map((tab, i) => `
      <div class="tab-panel" role="tabpanel" id="svc-${tab.id}" aria-labelledby="svc-tab-${tab.id}" ${i ? 'hidden' : ''}>
        <p class="panel-tag">${icon('sparkle')}${t(tab.tag)}</p>
        <div class="svc-grid">
          ${tab.items.map((s, j) => `
          <article class="card svc" data-reveal style="--d:${j * 60}ms">
            <div class="ico-bubble ${tab.id === 'xv' ? 'navy' : ''}">${icon(s.icon)}</div>
            <h3>${t(s)[0]}</h3>
            <p>${t(s)[1]}</p>
            <p class="price-from">${s.from ? `${t(UI.from)} <b>${short(s.from)}</b>${t(s.unit)}` : `<span class="incl">${icon('check')}${t(SERVICES.included)}</span>`}</p>
          </article>`).join('')}
        </div>
      </div>`).join('')}
    </div>
  </section>`;
}

function roles() {
  return `
  <section class="sec roles" id="roles" data-pose="roles">
    <div class="wrap">
      ${head(ROLES, true)}
      <div class="role-grid">
        ${ROLES.items.map((r, i) => `
        <article class="role tone-${r.tone}" data-reveal style="--d:${i * 90}ms">
          <div class="role-top">
            <div class="role-ico">${icon(r.icon)}</div>
            <div><p class="role-tier">${t(r.tier)}</p><h3>${t(r.name)}</h3></div>
          </div>
          <p class="role-req">${icon('award')}${t(r.req)}</p>
          <p class="role-desc">${t(r.desc)}</p>
          <p class="list-h">${t(ROLES.fitLabel)}</p>
          <ul class="ticks">${t(r.fit).map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul>
          ${t(r.nofit).length ? `<p class="list-h">${t(ROLES.nofitLabel)}</p><ul class="ticks no">${t(r.nofit).map((x) => `<li>${icon('x')}${x}</li>`).join('')}</ul>` : ''}
          <div class="role-foot"><span>${t(UI.from)} <b>${money(r.fromHour)}</b>${t(ROLES.perHour)}</span><a class="btn btn-sm btn-ghost" href="#pricing">${t(PRICING.eyebrow)}${icon('arrow')}</a></div>
        </article>`).join('')}
      </div>
    </div>
  </section>`;
}

function pricing() {
  const names = ROLES.items.map((r) => r.name);
  return `
  <section class="sec pricing" id="pricing" data-pose="pricing">
    <div class="wrap">
      ${head(PRICING, true)}
      <div class="tabs center" role="tablist" data-reveal>
        ${PRICING.tabs.map((tab, i) => `<button role="tab" type="button" id="pr-tab-${tab.id}" aria-controls="pr-${tab.id}" aria-selected="${i === 0}" data-tab="pr-${tab.id}">${t(tab)}</button>`).join('')}
      </div>
      ${PRICING.tabs.map((tab, i) => `
      <div class="tab-panel" role="tabpanel" id="pr-${tab.id}" aria-labelledby="pr-tab-${tab.id}" ${i ? 'hidden' : ''}>
        <div class="price-grid">
          ${names.map((n, k) => `
          <article class="price-card tone-${ROLES.items[k].tone}" data-reveal style="--d:${k * 80}ms">
            <header><p class="role-tier">${t(ROLES.items[k].tier)}</p><h3>${t(n)}</h3></header>
            <ul class="price-rows">
              ${tab.rows.map((row) => `<li><span>${t(row)}</span><b>${row.p[k] ? money(row.p[k]) : `<em>${t(UI.notAvailable)}</em>`}</b></li>`).join('')}
            </ul>
            <a class="btn ${k === 0 ? 'btn-primary' : 'btn-ghost'} btn-block" href="#contact" data-plan="${t(n)} · ${t(tab)}">${t(UI.bookThis)}</a>
          </article>`).join('')}
        </div>
      </div>`).join('')}
      <p class="fine" data-reveal>${icon('clipboard')}${t(UI.vatNote)}</p>
    </div>
  </section>`;
}

// Shop: modelled on the PSI site's product portfolio (filter pills + numbered cards)
let shopFilter = 'all';
function shopCards() {
  const list = shopFilter === 'all' ? SHOP.products : SHOP.products.filter((p) => p.line === shopFilter);
  return list.map((p, i) => {
    const idx = SHOP.products.indexOf(p) + 1;
    const line = SHOP.lines[p.line];
    const isIns = p.line === 'insurance';
    const specs = p.specs.map((x) => `<div><dt>${x.v}${t(x.u) ? `<small>${t(x.u)}</small>` : ''}</dt><dd>${t(x.l)}</dd></div>`).join('');
    return `
    <article class="prod" data-reveal style="--d:${(i % 3) * 80}ms">
      <div class="prod-media">
        ${productArt(p.art, p.line)}
        <span class="prod-tag">${String(idx).padStart(2, '0')} · ${t(line)}</span>
        ${p.badge ? `<span class="prod-badge">${t(p.badge)}</span>` : ''}
      </div>
      <div class="prod-body">
        <h3>${t(p.name)}</h3>
        <p class="tagline">${t(p.tagline)}</p>
        <dl class="specs">${specs}</dl>
        <div class="prod-foot">
          <div class="price"><span>${t(SHOP.price)}</span><strong>${p.price ? money(p.price) : t(SHOP.quote)}${p.priceUnit ? `<small>${t(p.priceUnit)}</small>` : ''}</strong></div>
          <button type="button" class="btn btn-sm ${isIns ? 'btn-ghost' : 'btn-primary'}" data-order="${t(p.name)}">${icon(isIns ? 'shield' : 'chat')}${isIns || !p.price ? t(SHOP.advise) : t(SHOP.order)}</button>
        </div>
      </div>
    </article>`;
  }).join('');
}

function shopFilters() {
  const keys = ['all', ...Object.keys(SHOP.lines)];
  return keys.map((k) => {
    const n = k === 'all' ? SHOP.products.length : SHOP.products.filter((p) => p.line === k).length;
    const label = k === 'all' ? t(SHOP.all) : t(SHOP.lines[k]);
    return `<button type="button" class="pill" data-f="${k}" aria-pressed="${shopFilter === k}">${k === 'all' ? '' : icon(SHOP.lines[k].icon)}${label}<span class="count">${n}</span></button>`;
  }).join('');
}

function shop() {
  return `
  <section class="sec shop" id="shop" data-pose="shop">
    <div class="wrap">
      <div class="shop-head">
        ${head(SHOP)}
        <div class="filters" role="group" aria-label="${t(SHOP.eyebrow)}" data-reveal>${shopFilters()}</div>
      </div>
      <ul class="perks" data-reveal>${SHOP.perks.map((x) => `<li>${icon(x.icon)}${t(x)}</li>`).join('')}</ul>
      <div class="prod-grid" id="prod-grid">${shopCards()}</div>
      <p class="fine" data-reveal>${icon('shield')}${t(SHOP.note)}</p>
      <p class="sample-note">${sampleTag()}</p>
    </div>
  </section>`;
}

function process() {
  return `
  <section class="sec process" id="process" data-pose="process">
    <div class="wrap">
      ${head(PROCESS, true)}
      <ol class="steps">
        ${PROCESS.steps.map((s, i) => `
        <li class="step" data-reveal style="--d:${i * 110}ms">
          <div class="step-ico">${icon(s.icon)}<span>${i + 1}</span></div>
          <h3>${t(s)[0]}</h3>
          <p>${t(s)[1]}</p>
        </li>`).join('')}
      </ol>
    </div>
  </section>`;
}

function team() {
  const f = TEAM.founder;
  return `
  <section class="sec team" id="team" data-pose="team">
    <div class="wrap">
      ${head(TEAM)}
      <div class="founder" data-reveal>
        <div class="founder-photo"><img src="img/founder.webp" alt="${f.name}" loading="lazy" width="800" height="800"></div>
        <div class="founder-copy">
          <p class="quote-mark" aria-hidden="true">“</p>
          <blockquote>${t(f.quote)}</blockquote>
          <p class="founder-name">${f.name}</p>
          <p class="founder-role">${t(f.role)}</p>
          <p class="founder-edu">${icon('award')}${t(f.edu)}</p>
        </div>
      </div>
      <div class="team-row">
        <div class="team-grid">
          ${TEAM.members.map((m, i) => `
          <article class="member" data-reveal style="--d:${i * 60}ms">
            ${avatar(m.g, { nurse: true, i })}
            <h3>${m.name}</h3>
            <p class="m-role">${t(m.role)}</p>
            <p class="m-meta">${m.years} ${t(TEAM.yearsLabel)} · ${m.area}</p>
            <p class="m-rate">${icon('star')}${m.rating}</p>
          </article>`).join('')}
        </div>
        <aside class="licence" data-reveal>
          <button class="licence-img" type="button" data-zoom="img/nursing-licence.webp" aria-label="${t(UI.zoom)}: ${t(TEAM.licence.alt)}">
            <img src="img/nursing-licence.webp" alt="${t(TEAM.licence.alt)}" loading="lazy" width="800" height="1067">
            <span class="zoom">${icon('zoom')}</span>
          </button>
          <div>
            <h3>${icon('shield')}${t(TEAM.licence.title)}</h3>
            <p>${t(TEAM.licence.text)}</p>
          </div>
        </aside>
      </div>
      <p class="sample-note">${sampleTag()}</p>
    </div>
  </section>`;
}

function stories() {
  const card = (s, i) => `
    <figure class="story">
      <div class="stars" aria-label="${s.stars}/5">${icon('star').repeat(s.stars)}</div>
      <blockquote>${t(s)}</blockquote>
      <figcaption>${avatar(s.g, { i: i + 1 })}<span><b>${s.name}</b><small>${t(s.who)}</small></span></figcaption>
    </figure>`;
  const a = STORIES.items.slice(0, 3);
  const b = STORIES.items.slice(3);
  return `
  <section class="sec stories" id="stories" data-pose="stories">
    <div class="wrap">${head(STORIES, true)}</div>
    <div class="marquee" data-reveal>
      <div class="track">${[...a, ...b, ...a, ...b].map(card).join('')}</div>
    </div>
    <div class="marquee reverse" data-reveal>
      <div class="track">${[...b, ...a, ...b, ...a].map((s, i) => card(s, i + 2)).join('')}</div>
    </div>
    <div class="wrap"><p class="sample-note">${sampleTag()}</p></div>
  </section>`;
}

function blog() {
  return `
  <section class="sec blog" id="blog" data-pose="blog">
    <div class="wrap">
      ${head(BLOG)}
      <div class="blog-grid">
        ${BLOG.items.map((b, i) => `
        <article class="post" data-reveal style="--d:${i * 80}ms">
          <div class="post-img">${b.img ? `<img src="${b.img}" alt="" loading="lazy" width="800" height="533">` : coverArt(b.art)}</div>
          <div class="post-body">
            <p class="post-meta"><span class="chip">${t(b.tag)}</span>${b.mins} ${lang === 'vi' ? 'phút đọc' : 'min read'}</p>
            <h3>${t(b)[0]}</h3>
            <p>${t(b)[1]}</p>
            <a class="link" href="#contact">${t(UI.readMore)}${icon('arrow')}</a>
          </div>
        </article>`).join('')}
      </div>
      <p class="sample-note">${sampleTag()}</p>
    </div>
  </section>`;
}

function join() {
  const panel = (p, img, tone) => `
    <article class="join-card tone-${tone}" data-reveal>
      <div class="join-copy">
        <p class="eyebrow">${t(p.eyebrow)}</p>
        <h3 class="display">${t(p.title)}</h3>
        <p>${t(p.text)}</p>
        <ul class="ticks">${t(p.ticks).map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul>
        <a class="btn ${tone === 'navy' ? 'btn-light' : 'btn-primary'}" href="${CONTACT.zalo}" target="_blank" rel="noopener">${icon('chat')}${t(p.cta)}</a>
      </div>
      <button class="join-img" type="button" data-zoom="${img}" aria-label="${t(UI.zoom)}: ${t(p.alt)}"><img src="${img}" alt="${t(p.alt)}" loading="lazy" width="800" height="993"></button>
    </article>`;
  return `
  <section class="sec join" id="join" data-pose="join">
    <div class="wrap join-grid">
      ${panel(JOIN.partner, 'img/partnership.webp', 'navy')}
      ${panel(JOIN.jobs, 'img/recruitment.webp', 'cream')}
    </div>
  </section>`;
}

function faq() {
  return `
  <section class="sec faq" id="faq" data-pose="faq">
    <div class="wrap faq-grid">
      ${head(FAQ)}
      <div class="faq-list">
        ${FAQ.items.map((q, i) => `
        <details class="qa" data-reveal style="--d:${i * 60}ms" ${i === 0 ? 'open' : ''}>
          <summary>${t(q)[0]}<span class="chev">${icon('chevron')}</span></summary>
          <div class="qa-body"><p>${t(q)[1]}</p></div>
        </details>`).join('')}
      </div>
    </div>
  </section>`;
}

function contact() {
  const f = CS.form;
  return `
  <section class="sec contact" id="contact" data-pose="contact">
    <div class="wrap contact-grid">
      <div class="contact-copy">
        ${head(CS)}
        <ul class="contact-list" data-reveal>
          <li><span class="ico-bubble">${icon('phone')}</span><div><small>${t(CS.hotline)}</small><a href="tel:${CONTACT.tel}">${CONTACT.phone}</a></div></li>
          <li><span class="ico-bubble">${icon('mail')}</span><div><small>${t(CS.email)}</small><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></div></li>
          <li><span class="ico-bubble">${icon('clock')}</span><div><small>${t(CS.hours)}</small><span>${t(CS.hoursText)}</span></div></li>
          <li><span class="ico-bubble">${icon('pin')}</span><div><small>${t(CS.area)}</small><span>${t(CS.areaText)}</span></div></li>
        </ul>
        <div class="districts" data-reveal>${CS.districts.map((d) => `<span>${d}</span>`).join('')}</div>
      </div>
      <form class="form card" id="lead-form" novalidate data-reveal>
        <div class="form-head">${avatar('f', { nurse: true, i: 0 })}<p>${t(f.greeting)}</p></div>
        <label>${t(f.name)}<input name="name" autocomplete="name" required></label>
        <label>${t(f.phone)}<input name="phone" type="tel" inputmode="tel" autocomplete="tel" required></label>
        <fieldset><legend>${t(f.need)}</legend>
          <div class="chips">${t(f.needs).map((n, i) => `<label class="chip-opt"><input type="radio" name="need" value="${n}" ${i === 0 ? 'checked' : ''}><span>${n}</span></label>`).join('')}</div>
        </fieldset>
        <label>${t(f.note)}<textarea name="note" rows="3"></textarea></label>
        <p class="form-err" role="alert" hidden>${t(f.invalid)}</p>
        <button class="btn btn-primary btn-block btn-lg" type="submit">${icon('chat')}${t(f.submit)}</button>
        <p class="hint">${t(f.hint)}</p>
      </form>
    </div>
  </section>`;
}

function footer() {
  return `
  <footer class="ftr">
    <div class="wrap ftr-in">
      <div class="ftr-brand">
        <a class="brand" href="#top"><img src="brand/logo.webp" alt="" width="52" height="52"><span class="brand-txt"><b>BiDi</b> Homecare</span></a>
        <p>${t(FOOTER.tagline)}</p>
        <a class="btn btn-light btn-sm" href="tel:${CONTACT.tel}">${icon('phone')}${CONTACT.phone}</a>
      </div>
      ${FOOTER.cols.map((c) => `<div class="ftr-col"><h4>${t(c.h)}</h4>${c.links.map(([h, l]) => `<a href="${h}">${t(l)}</a>`).join('')}</div>`).join('')}
      <div class="ftr-col"><h4>${t(CS.eyebrow)}</h4><a href="${CONTACT.zalo}" target="_blank" rel="noopener">Zalo · ${CONTACT.phone}</a><a href="mailto:${CONTACT.email}">${CONTACT.email}</a><span>${t(CONTACT.city)}</span></div>
    </div>
    <div class="wrap ftr-bottom"><span>© ${new Date().getFullYear()} ${t(FOOTER.copy)}</span><span class="made">${icon('heart')}${lang === 'vi' ? 'Làm bằng cả trái tim' : 'Made with heart'}</span></div>
  </footer>
  <div class="fab" aria-label="${t(UI.zalo)}">
    <a class="fab-btn zalo" href="${CONTACT.zalo}" target="_blank" rel="noopener" aria-label="${t(UI.zalo)}">Zalo</a>
    <a class="fab-btn call" href="tel:${CONTACT.tel}" aria-label="${t(UI.call)}">${icon('phone')}</a>
  </div>
  <dialog class="lightbox" id="lightbox"><button type="button" class="lb-close" aria-label="${t(UI.close)}">${icon('x')}</button><img alt=""></dialog>
  <div class="toast" id="toast" role="status" aria-live="polite"></div>`;
}

// ---------- Render ----------
const app = document.getElementById('app');
function render() {
  document.documentElement.lang = lang;
  document.title = t(META.title);
  document.querySelector('meta[name="description"]')?.setAttribute('content', t(META.desc));
  app.innerHTML = `${header()}<main id="main">${hero()}${why()}${services()}${roles()}${pricing()}${shop()}${process()}${team()}${stories()}${blog()}${join()}${faq()}${contact()}</main>${footer()}`;
  bind();
}

// ---------- Behaviour ----------
let revealObs;
let countObs;
function bind() {
  // Language switch
  app.querySelectorAll('[data-lang]').forEach((b) => b.addEventListener('click', () => {
    if (b.dataset.lang === lang) return;
    lang = b.dataset.lang;
    try { localStorage.setItem('bidi-lang', lang); } catch { /* ignore */ }
    const y = window.scrollY;
    render();
    window.scrollTo(0, y);
    lenis?.resize?.();
  }));

  // Mobile menu
  const burger = app.querySelector('.burger');
  const nav = app.querySelector('#nav');
  const setMenu = (open) => {
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('menu-open', open);
    burger.innerHTML = icon(open ? 'x' : 'menu');
    burger.setAttribute('aria-label', t(open ? UI.close : UI.menu));
  };
  burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
  nav.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

  // Tabs (services + pricing)
  app.querySelectorAll('[role="tablist"]').forEach((list) => {
    const tabs = [...list.querySelectorAll('[role="tab"]')];
    const select = (tab) => {
      tabs.forEach((x) => {
        const on = x === tab;
        x.setAttribute('aria-selected', String(on));
        x.tabIndex = on ? 0 : -1;
        const panel = document.getElementById(x.dataset.tab);
        panel.hidden = !on;
        if (on) panel.querySelectorAll('[data-reveal]').forEach((el) => el.classList.add('in'));
      });
    };
    tabs.forEach((tab, i) => {
      tab.tabIndex = i === 0 ? 0 : -1;
      tab.addEventListener('click', () => select(tab));
      tab.addEventListener('keydown', (e) => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        const next = tabs[(i + d + tabs.length) % tabs.length];
        next.focus();
        select(next);
      });
    });
  });

  // "Book this plan" prefills the form note
  app.querySelectorAll('[data-plan]').forEach((a) => a.addEventListener('click', () => {
    const note = app.querySelector('#lead-form textarea');
    if (note) note.value = (lang === 'vi' ? 'Tôi quan tâm: ' : 'I am interested in: ') + a.dataset.plan;
  }));

  // Shop filters + order buttons
  const grid = app.querySelector('#prod-grid');
  const bindOrders = () => grid.querySelectorAll('[data-order]').forEach((b) => b.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(t(SHOP.orderMsg) + b.dataset.order); } catch { /* clipboard blocked */ }
    toast(t(SHOP.copied));
    window.open(CONTACT.zalo, '_blank', 'noopener');
  }));
  bindOrders();
  app.querySelectorAll('.filters .pill').forEach((b) => b.addEventListener('click', () => {
    shopFilter = b.dataset.f;
    app.querySelectorAll('.filters .pill').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    grid.innerHTML = shopCards();
    bindOrders();
    grid.querySelectorAll('[data-reveal]').forEach((el) => requestAnimationFrame(() => el.classList.add('in')));
    lenis?.resize?.();
  }));

  // Lightbox
  const lb = app.querySelector('#lightbox');
  app.querySelectorAll('[data-zoom]').forEach((b) => b.addEventListener('click', () => {
    const img = lb.querySelector('img');
    img.src = b.dataset.zoom;
    img.alt = b.querySelector('img')?.alt || '';
    lb.showModal();
  }));
  lb.querySelector('.lb-close').addEventListener('click', () => lb.close());
  lb.addEventListener('click', (e) => { if (e.target === lb) lb.close(); });

  // Lead form → copy message, open Zalo
  const form = app.querySelector('#lead-form');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const d = new FormData(form);
    const name = String(d.get('name') || '').trim();
    const phone = String(d.get('phone') || '').trim();
    const err = form.querySelector('.form-err');
    if (!name || phone.replace(/\D/g, '').length < 9) {
      err.hidden = false;
      return;
    }
    err.hidden = true;
    const f = CS.form;
    const msg = [t(f.greeting), `${t(f.name)}: ${name}`, `${t(f.phone)}: ${phone}`, `${t(f.need)} ${d.get('need')}`, d.get('note') ? `${t(f.note).replace(/\s*\(.*\)/, '')}: ${d.get('note')}` : ''].filter(Boolean).join('\n');
    try { await navigator.clipboard.writeText(msg); } catch { /* clipboard blocked */ }
    toast(t(UI.copied));
    window.open(CONTACT.zalo, '_blank', 'noopener');
  });

  // Reveal on scroll
  revealObs?.disconnect();
  revealObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (en.isIntersecting) {
        en.target.classList.add('in');
        revealObs.unobserve(en.target);
      }
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  app.querySelectorAll('[data-reveal]').forEach((el) => revealObs.observe(el));

  // Counters
  countObs?.disconnect();
  countObs = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      countObs.unobserve(en.target);
      animateCount(en.target);
    });
  }, { threshold: 0.6 });
  app.querySelectorAll('[data-count]').forEach((el) => countObs.observe(el));

  // Header shadow
  onScroll();
}

function animateCount(el) {
  const end = parseFloat(el.dataset.count);
  const dec = +el.dataset.dec;
  const suffix = el.dataset.suffix;
  const fmt = (v) => v.toLocaleString(lang === 'vi' ? 'vi-VN' : 'en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suffix;
  if (reduced) { el.textContent = fmt(end); return; }
  const t0 = performance.now();
  const dur = 1600;
  const step = (now) => {
    const p = Math.min(1, (now - t0) / dur);
    el.textContent = fmt(end * (1 - Math.pow(1 - p, 3)));
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

let toastTimer;
function toast(text) {
  const el = document.getElementById('toast');
  el.textContent = text;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 4200);
}

function onScroll() {
  document.getElementById('hdr')?.classList.toggle('scrolled', window.scrollY > 24);
}

// ---------- Boot ----------
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let lenis = null;
render();
window.addEventListener('scroll', onScroll, { passive: true });

if (!reduced) {
  lenis = new Lenis({ duration: 1.25, easing: (x) => 1 - Math.pow(1 - x, 4), anchors: { offset: -80 } });
  const raf = (time) => { lenis.raf(time); requestAnimationFrame(raf); };
  requestAnimationFrame(raf);
}

// Load the 3D heart after first paint
const canvas = document.getElementById('heart3d');
const startHeart = () => import('./heart3d.js')
  .then(({ mount }) => {
    const ok = mount(canvas);
    if (ok) document.body.classList.add('has-3d');
  })
  .catch(() => {});
if ('requestIdleCallback' in window) requestIdleCallback(startHeart, { timeout: 1200 });
else setTimeout(startHeart, 300);
