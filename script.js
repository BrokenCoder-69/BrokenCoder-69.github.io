/*
╔══════════════════════════════════════════════════════════════════════╗
║                    AL RAFI — PORTFOLIO  (script.js)                  ║
╠══════════════════════════════════════════════════════════════════════╣
║  This file makes things MOVE and REACT.                              ║
║                                                                      ║
║  🔎 Search (Ctrl+F) for a section name to jump to it:                ║
║     SECTION 1 · SETTINGS YOU CAN EDIT   ← start here                 ║
║     SECTION 2 · HELPERS                 (small tools used below)     ║
║     SECTION 3 · THEME SWITCHER                                       ║
║     SECTION 4 · SMOOTH SCROLL & MENU LINKS                           ║
║     SECTION 5 · NAV, PROGRESS BAR, PARALLAX, SPOTLIGHT               ║
║     SECTION 6 · HERO SLAM & TYPEWRITER                               ║
║     SECTION 7 · LETTER WAVE HEADINGS                                 ║
║     SECTION 8 · ROLLING NUMBER COUNTERS                              ║
║     SECTION 9 · ABOUT — GACHA SUMMON                                 ║
║     SECTION 10 · 3D TILT ON HOVER                                    ║
║     SECTION 11 · SKILLS ORBIT                                        ║
║     SECTION 12 · JOURNEY STICKY YEAR                                 ║
║     SECTION 13 · MAGNETIC BUTTON                                     ║
║     SECTION 14 · CLICK RIPPLE                                        ║
║     SECTION 15 · TEXT SCRAMBLE ON HOVER                              ║
║     SECTION 16 · COPY EMAIL                                          ║
║     SECTION 17 · CONFETTI                                            ║
║     SECTION 18 · EASTER EGG                                          ║
║     SECTION 19 · PROJECTS (builds the manga panels from the list)    ║
║                                                                      ║
║  💡 Most of the time you only need SECTION 1.                        ║
║     Text on the page lives in index.html, colors live in style.css.  ║
╚══════════════════════════════════════════════════════════════════════╝
*/

(() => {   // everything is wrapped in this so our variables don't clash with others


/* ════════════════════════════════════════════════════════════════════
   SECTION 1 · SETTINGS YOU CAN EDIT  ✏️
   ════════════════════════════════════════════════════════════════════ */

/* ── 1a. THEMES shown in the theme menu ──
   Format: [ id, Name shown, short description, background color, accent color ]
   • "id" must match a  :root[data-skin="id"]  block in style.css (Section A).
   • The FIRST one is the default theme.
   • The two colors are only for the little preview dot in the menu.        */
const SKINS = [
  ['crimson',  'Crimson',   'black + red',    '#0c0a0a', '#ff2e3d'],
  ['sakura',   'Sakura',    'light + blush',  '#fff4f6', '#e8304f'],
  ['neotokyo', 'Neo Tokyo', 'night + pink',   '#120a24', '#ff2fa0'],
  ['shonen',   'Shonen',    'black + orange', '#111014', '#ff7a00'],
  ['mecha',    'Mecha',     'purple + green', '#1b1030', '#7cff4d'],
  ['meadow',   'Meadow',    'sky + grass',    '#eaf6ff', '#2f9e52']
];

/* ── 1b. ORBIT SKILLS (the words floating around the circle in Skills) ── */
const ORBIT_INNER = ['Python', 'JavaScript', 'C', 'PHP', 'React'];
const ORBIT_OUTER = ['Django', 'Flutter', 'Laravel', 'PostgreSQL', 'MySQL', 'Communication', 'Teamwork', 'Time Management', 'Leadership', 'Problem Solving'];

/* ── 1c. EASTER EGG ──
   Typing this word anywhere on the page triggers the "LIMIT BREAK" surprise.
   (The classic Konami code ↑↑↓↓←→←→BA also works.)                        */
const SECRET_WORD = 'rafi';

/* ── 1e. PROJECTS ⭐ ─────────────────────────────────────────────────
   Every project is one { … } block. Add as many as you like!
   The site turns them into manga panels automatically.

   ✏️ TO ADD A PROJECT: copy one whole { … }, block (including the comma
      after it), paste it where you want it in the list, and change the text.
      The ORDER here = the order on the page (put your best ones first).

   What each line means:
     title:  project name. Use \n to break onto a new line, e.g. 'CAMPUS\nCONNECT'
     bubble: the speech-bubble text (keep it short and fun)
     stack:  tech used, shown small at the bottom
     sfx:    sound effect that pops on hover (BAM!, ZAP!, WHOOSH!…)
     link:   where the panel goes when clicked (GitHub repo or live demo)
     tags:   used for the filter tabs. Reuse the same words so they group,
             e.g. ['Web'], ['AI'], ['Mobile', 'Web']
     image:  OPTIONAL. A screenshot file in the same folder, e.g. 'campus.jpg'.
             Leave it out to get a colorful placeholder instead.
   ─────────────────────────────────────────────────────────────────── */
const PROJECTS = [
  {
    title:  'TACTIX\nAI',
    bubble: 'Checkout your Tactics before next match',
    stack:  'Python · Streamlit · Plotly · Machine Learning',
    sfx:    'GOAL!',
    link:   'https://github.com/BrokenCoder-69/tactix-ai-dashboard',
    tags:   ['AI', 'Football'],
    // image: 'tactix.png',
  },
  {
    title:  'QURAN\nHALAQA',
    bubble: 'Study circles, daily reading and a digital tasbih.',
    stack:  'Flutter · Riverpod · Django REST',
    sfx:    '✦',
    link:   'https://github.com/BrokenCoder-69/quran-halaqa',
    tags:   ['Mobile'],
  },
  {
    title:  'TEAM\nMANAGER',
    bubble: 'Seats, fees and squads for local football teams!',
    stack:  'Django REST · React · PostgreSQL',
    sfx:    'KICK-OFF!',
    link:   'https://github.com/BrokenCoder-69/football-team-manager',
    tags:   ['Web', 'Football'],
  },
  {
    title:  'CLUB DE\nOBLIVION',
    bubble: 'A real Android app, shipped as an APK!',
    stack:  'Flutter · Django · Private repo',
    sfx:    'LAUNCH!',
    link:   'https://github.com/BrokenCoder-69',   // ✏️ private repo, so this goes to your profile. Swap in an APK or demo link if you have one.
    tags:   ['Mobile'],
  },
  {
    title:  'SWEEP\nSWAP',
    bubble: 'Why buy it when you can swap it?',
    stack:  'Laravel · Sanctum · REST API',
    sfx:    'SWAP!',
    link:   'https://github.com/BrokenCoder-69/SweepSwap',
    tags:   ['Web'],
  },
  {
    title:  'BOARD\nVERSE',
    bubble: 'Ludo, Connect Four and more… loading!',
    stack:  'Django · Channels · WebSockets',
    sfx:    'ROLL!',
    link:   'https://github.com/BrokenCoder-69/boardverse',
    tags:   ['Web', 'Games'],
  },

  {
    title:  'FIT\nHUB',
    bubble: 'Your gym, now online. No excuses!',
    stack:  'Laravel · HTML · CSS · JavaScript',
    sfx:    'PUMP!',
    link:   'https://github.com/BrokenCoder-69/LARAVEL-FITHUB',   // ✏️ paste the FitHub repo or live link here
    tags:   ['Web', 'Health'],
  },

];

const PROJECTS_PER_CHAPTER = 4;   // panels per "manga page" (4 looks best)
const CHAPTERS_AT_START    = 2;   // how many pages show before "Next chapter" is clicked
const ALL_LABEL            = 'All';  // text of the first filter tab

/* ── 1d. ANIMATION SPEEDS ── */
const TYPE_SPEED_HERO   = 24;   // ms per letter for the hero subtitle (smaller = faster)
const TYPE_SPEED_LABELS = 35;   // ms per letter for "EP.02 — ABOUT ME" style labels
const SMOOTHNESS        = 0.09; // smooth-scroll softness (0.05 very floaty … 0.2 snappy)
const TILT_STRENGTH     = 12;   // degrees cards lean when hovered
const MAGNET_RANGE      = 300;  // px — how close the mouse must be to pull the round button


/* ════════════════════════════════════════════════════════════════════
   SECTION 2 · HELPERS
   Small shortcuts used everywhere below. You don't need to change these.
   ════════════════════════════════════════════════════════════════════ */

// true if the visitor asked their device for less motion
const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
// true on a computer with a mouse (false on phones/tablets)
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

// $('.thing') finds ONE element, $$('.thing') finds ALL of them (as an array)
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

const root = document.documentElement;   // the <html> element

// Safe save/load in the browser (won't crash in private mode)
const store = {
  get(k)    { try { return localStorage.getItem(k); } catch { return null; } },
  set(k, v) { try { localStorage.setItem(k, v); }     catch {} }
};

// watch(fn, options) → runs fn when elements scroll into view
const watch = (fn, opts = { threshold: .4 }) =>
  'IntersectionObserver' in window ? new IntersectionObserver(entries => entries.forEach(fn), opts) : null;

// toast('Hello') → shows a small pop-up message at the bottom
function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2200);
}


/* ════════════════════════════════════════════════════════════════════
   SECTION 3 · THEME SWITCHER
   Builds the theme menu from SKINS and remembers the visitor's choice.
   ════════════════════════════════════════════════════════════════════ */
const menu = $('#skinMenu');
const skinBtn = $('#skinBtn');

// create one button per theme
SKINS.forEach(([id, name, note, bg, acc]) => {
  const b = document.createElement('button');
  b.type = 'button';
  b.setAttribute('role', 'menuitemradio');
  b.dataset.skin = id;
  b.innerHTML = `<i class="dot" style="background:linear-gradient(135deg,${bg} 50%,${acc} 50%)"></i>
                 <span class="n">${name}<small>${note}</small></span>`;
  b.addEventListener('click', () => { setSkin(id); closeMenu(); });
  menu.append(b);
});

// apply a theme
function setSkin(id) {
  if (id === SKINS[0][0]) root.removeAttribute('data-skin');   // default theme = no attribute
  else root.setAttribute('data-skin', id);
  const s = SKINS.find(x => x[0] === id) || SKINS[0];
  $('#skinName').textContent = s[1];
  $$('button', menu).forEach(b => b.setAttribute('aria-checked', b.dataset.skin === id));
  store.set('rafiSkin', id);   // remember for next visit
}

function closeMenu() { menu.hidden = true; skinBtn.setAttribute('aria-expanded', 'false'); }

skinBtn.addEventListener('click', e => {
  e.stopPropagation();
  const willOpen = menu.hidden;
  menu.hidden = !willOpen;
  skinBtn.setAttribute('aria-expanded', String(willOpen));
});
document.addEventListener('click', e => { if (!menu.hidden && !e.target.closest('.skin')) closeMenu(); }); // click outside = close
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });                     // Esc = close

// load the saved theme (or the default)
setSkin(store.get('rafiSkin') || SKINS[0][0]);


/* ════════════════════════════════════════════════════════════════════
   SECTION 4 · SMOOTH SCROLL & MENU LINKS
   Uses the Lenis library (loaded in index.html) for buttery scrolling.
   ════════════════════════════════════════════════════════════════════ */
let lenis = null;
if (!reduce && window.Lenis) {
  try {
    lenis = new Lenis({ lerp: SMOOTHNESS, smoothWheel: true });
    (function raf(time) { lenis.raf(time); requestAnimationFrame(raf); })();
  } catch { lenis = null; }
}

// goTo('#about') → smoothly scrolls to that section
function goTo(sel) {
  if (sel === '#top') {
    if (lenis) lenis.scrollTo(0);
    else scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
    return;
  }
  const el = $(sel);
  if (!el) return;
  if (lenis) lenis.scrollTo(el, { offset: -70 });   // -70 leaves room for the nav bar
  else el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' });
}

// every link with class="scr" scrolls smoothly instead of jumping
$$('a.scr').forEach(a => a.addEventListener('click', e => { e.preventDefault(); goTo(a.getAttribute('href')); }));
// the "Next chapter" manga banner
// (the panel is created later by Section 19, so we listen on the whole page)
document.addEventListener('click', e => { if (e.target.closest('.mp.p5')) { e.preventDefault(); goTo('#contact'); } });
// logo = back to top
$('#logo').addEventListener('click', () => goTo('#top'));


/* ════════════════════════════════════════════════════════════════════
   SECTION 5 · NAV BACKGROUND, PROGRESS BAR, PARALLAX CITY, SPOTLIGHT
   ════════════════════════════════════════════════════════════════════ */
const nav = $('#nav');
const progress = $('#progress');
const cityLayers = $$('.city [data-depth]');
const spot = $('#spot');
let mouseX = 0;   // -0.5 (left edge) … 0.5 (right edge)

function onScroll() {
  const y = scrollY;
  const max = document.documentElement.scrollHeight - innerHeight;

  nav.classList.toggle('solid', y > 40);                              // blur behind nav after 40px
  progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;      // progress bar width

  // parallax: each city layer moves at its own speed (data-depth in index.html)
  if (!reduce) cityLayers.forEach(layer => {
    const d = +layer.dataset.depth;
    layer.style.transform = `translate(${mouseX * d * -40}px, ${y * d * .6}px)`;
  });
}
addEventListener('scroll', onScroll, { passive: true });
onScroll();

addEventListener('pointermove', e => {
  mouseX = e.clientX / innerWidth - .5;
  if (fine) {   // spotlight follows the mouse (desktop only)
    spot.style.setProperty('--sx', e.clientX + 'px');
    spot.style.setProperty('--sy', e.clientY + 'px');
  }
  if (!reduce) onScroll();
});


/* ════════════════════════════════════════════════════════════════════
   SECTION 6 · HERO SLAM & TYPEWRITER
   ════════════════════════════════════════════════════════════════════ */
const hero = $('.hero');

// play the "AL RAFI" slam + shake (CSS does the animation, we just restart it)
function slam() {
  if (reduce) return;
  hero.classList.remove('go');
  void hero.offsetWidth;          // tiny trick that lets the animation restart
  hero.classList.add('go');
}
$('#slam').addEventListener('click', slam);   // click the name to replay

// typeHTML(element, speed) → retypes the element's text letter by letter
// (keeps bold/strong tags working while typing)
function typeHTML(el, speed = 22) {
  if (reduce) return;
  const finalHTML = el.innerHTML;
  const pieces = finalHTML.match(/<[^>]+>|&[a-z]+;|[^<&]/g) || [];
  let i = 0, out = '';
  el.innerHTML = '<span class="car"></span>';
  (function step() {
    if (i >= pieces.length) { el.innerHTML = finalHTML; return; }
    let p = pieces[i++]; out += p;
    while (p.startsWith('<') && i < pieces.length) { p = pieces[i++]; out += p; }  // skip over tags instantly
    el.innerHTML = out + '<span class="car"></span>';
    setTimeout(step, speed);
  })();
}

slam();                                                         // play once on page load
setTimeout(() => typeHTML($('#sub'), TYPE_SPEED_HERO), 700);    // then type the subtitle

// "EP.0X — …" labels type themselves when they scroll into view (once)
const labelWatcher = watch(e => {
  if (e.isIntersecting) { labelWatcher.unobserve(e.target); typeHTML(e.target, TYPE_SPEED_LABELS); }
}, { threshold: 1 });
if (labelWatcher) $$('[data-type]').forEach(el => labelWatcher.observe(el));


/* ════════════════════════════════════════════════════════════════════
   SECTION 7 · LETTER WAVE HEADINGS
   Any element with  data-wave  gets split into letters that jump on hover.
   ════════════════════════════════════════════════════════════════════ */
$$('[data-wave]').forEach(heading => {

  // split text into <span class="lt"> letters, grouped by word so words don't break apart
  const split = node => {
    [...node.childNodes].forEach(child => {
      if (child.nodeType === 3) {   // plain text
        const frag = document.createDocumentFragment();
        child.textContent.split(/(\s+)/).forEach(word => {
          if (!word) return;
          if (/^\s+$/.test(word)) { frag.append(' '); return; }
          const w = document.createElement('span');
          w.style.whiteSpace = 'nowrap';
          w.style.display = 'inline-block';
          [...word].forEach(ch => {
            const s = document.createElement('span');
            s.className = 'lt';
            s.textContent = ch;
            w.append(s);
          });
          frag.append(w);
        });
        child.replaceWith(frag);
      } else if (child.nodeType === 1 && child.tagName !== 'BR') {
        split(child);   // go inside <em>, <strong> etc.
      }
    });
  };
  split(heading);

  const letters = $$('.lt', heading);
  const wave = () => {
    if (reduce) return;
    letters.forEach((l, i) => {
      l.classList.remove('wv');
      setTimeout(() => l.classList.add('wv'), i * 35);   // 35ms delay between letters
    });
  };
  letters.forEach(l => l.addEventListener('animationend', () => l.classList.remove('wv')));

  heading.addEventListener('pointerenter', wave);          // wave on hover
  const w = watch(e => { if (e.isIntersecting) { w.unobserve(heading); wave(); } }, { threshold: .8 });
  w && w.observe(heading);                                  // and once when it first appears
});


/* ════════════════════════════════════════════════════════════════════
   SECTION 8 · ROLLING NUMBER COUNTERS
   Reads data-val="600" data-suf="+" from index.html and builds slot-machine digits.
   ════════════════════════════════════════════════════════════════════ */
$$('.odo').forEach(odo => {
  const value  = odo.dataset.val;
  const suffix = odo.dataset.suf || '';
  odo.setAttribute('aria-label', value + suffix);   // screen readers read the real number

  // each digit becomes a column 0–9 that slides up
  odo.innerHTML = [...value].map(ch =>
    /\d/.test(ch)
      ? `<span class="col" data-d="${ch}" aria-hidden="true">${'0123456789'.split('').map(n => `<span>${n}</span>`).join('')}</span>`
      : `<span aria-hidden="true">${ch}</span>`   // dots etc. stay still
  ).join('') + (suffix ? `<span class="st" aria-hidden="true">${suffix}</span>` : '');

  const cols = $$('.col', odo);
  const showFinal = () => cols.forEach(c => c.style.transform = `translateY(${-c.dataset.d * 10}%)`);
  showFinal();               // show the real number right away
  if (reduce) return;

  // when it scrolls into view: reset to 0, then roll to the real number
  const w = watch(e => {
    if (!e.isIntersecting) return;
    w.unobserve(odo);
    cols.forEach(c => { c.style.transition = 'none'; c.style.transform = 'translateY(0)'; });
    void odo.offsetWidth;
    cols.forEach((c, i) => { c.style.transition = `transform ${1.4 + i * .25}s cubic-bezier(.2,.8,.2,1)`; });
    showFinal();
  }, { threshold: .8 });
  w && w.observe(odo);
});


/* ════════════════════════════════════════════════════════════════════
   SECTION 9 · ABOUT — GACHA SUMMON
   Press "Summon" → card flips face-down, shakes, the screen flashes,
   and the card flips back to reveal you with stars + confetti.
   It also plays once automatically the first time it scrolls into view.
   ════════════════════════════════════════════════════════════════════ */
const gacha = $('#gacha');
const summonBtn = $('#summon');
const gFlash = $('.g-flash', gacha);
const gStars = $$('.g-stars i', gacha);

function summon() {
  if (reduce || summonBtn.disabled) return;
  summonBtn.disabled = true;
  gStars.forEach(s => s.style.transitionDelay = '0s');
  gacha.classList.remove('charge');
  gacha.classList.add('hide');                                         // 1) flip face-down

  setTimeout(() => { void gacha.offsetWidth; gacha.classList.add('charge'); }, 500);   // 2) shake

  setTimeout(() => {                                                   // 3) flash + reveal
    gFlash.classList.remove('on'); void gFlash.offsetWidth; gFlash.classList.add('on');
    gStars.forEach((s, i) => s.style.transitionDelay = (0.3 + i * 0.15) + 's');       // stars pop in one by one
    gacha.classList.remove('hide');
    burst(90);                                                         // confetti (Section 17)
  }, 1350);

  setTimeout(() => {                                                   // 4) ready again
    summonBtn.disabled = false;
    summonBtn.textContent = 'Summon again ✦';                          // ✏️ EDIT: button text after first summon
  }, 2400);
}
summonBtn.addEventListener('click', summon);

// play once automatically when the card first scrolls into view
const gachaWatcher = watch(e => {
  if (e.isIntersecting) { gachaWatcher.unobserve(gacha); summon(); }
}, { threshold: .6 });
gachaWatcher && gachaWatcher.observe(gacha);


/* ════════════════════════════════════════════════════════════════════
   SECTION 10 · 3D TILT ON HOVER
   Anything with class="tilt" leans toward the mouse.
   ════════════════════════════════════════════════════════════════════ */
function addTilt(el) {
  if (!fine || reduce) return;
  const amount = el.classList.contains('mp') ? TILT_STRENGTH / 2 : TILT_STRENGTH;  // manga panels tilt less
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - .5;
    const py = (e.clientY - r.top) / r.height - .5;
    el.style.transform = `perspective(900px) rotateY(${px * amount}deg) rotateX(${-py * amount}deg) scale(1.02)`;
  });
  el.addEventListener('pointerleave', () => el.style.transform = '');
}
$$('.tilt').forEach(addTilt);   // project panels call addTilt themselves (Section 19)


/* ════════════════════════════════════════════════════════════════════
   SECTION 11 · SKILLS ORBIT
   Places ORBIT_INNER / ORBIT_OUTER words evenly around the rings.
   ════════════════════════════════════════════════════════════════════ */
function placeOnRing(ring, items) {
  ring.innerHTML = '';
  const radius = ring.clientWidth / 2;
  items.forEach((text, i) => {
    const angle = i / items.length * 360;
    const s = document.createElement('span');
    s.style.transform = `rotate(${angle}deg) translateY(-${radius}px) rotate(${-angle}deg)`;
    s.innerHTML = `<b>${text}</b>`;
    ring.append(s);
  });
}
function buildOrbit() {
  placeOnRing($('.ring.r1'), ORBIT_INNER);
  placeOnRing($('.ring.r2'), ORBIT_OUTER);
}
buildOrbit();
// rebuild if the screen size changes
if ('ResizeObserver' in window) new ResizeObserver(buildOrbit).observe($('#orbit'));


/* ════════════════════════════════════════════════════════════════════
   SECTION 12 · JOURNEY STICKY YEAR
   On scroll, activate the last card whose top has passed the screen's
   midpoint and flip the big year to its data-y value.
   ════════════════════════════════════════════════════════════════════ */
const bigYear = $('#bigyr');
const cards = $$('.ji');
let activeCard = null;
let yearChangeTimer;

function updateYear() {
  if (!bigYear || !cards.length) return;
  const middle = innerHeight / 2;
  let best = cards[0];
  for (const card of cards) {
    if (card.getBoundingClientRect().top < middle) best = card;
  }
  if (best === activeCard) return;
  activeCard = best;
  cards.forEach(card => card.classList.toggle('on', card === best));

  const year = best.dataset.y;
  if (yearChangeTimer) clearTimeout(yearChangeTimer);
  if (bigYear.textContent === year || reduce) {
    bigYear.textContent = year;
    bigYear.classList.remove('flip');
    return;
  }
  bigYear.classList.add('flip');
  yearChangeTimer = setTimeout(() => {
    bigYear.textContent = year;
    bigYear.classList.remove('flip');
    yearChangeTimer = undefined;
  }, 200);
}

if (cards.length) {
  addEventListener('scroll', updateYear, { passive: true });
  addEventListener('resize', updateYear);
  updateYear();
}


/* ════════════════════════════════════════════════════════════════════
   SECTION 13 · MAGNETIC BUTTON (Contact)
   The round "Say hello" button gets pulled toward the mouse.
   Clicking it copies the email and fires confetti.
   ════════════════════════════════════════════════════════════════════ */
const mag = $('#mag');
const contact = $('#contact');
if (fine && !reduce) {
  contact.addEventListener('pointermove', e => {
    const r = mag.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    const dist = Math.hypot(dx, dy);
    mag.style.transform = dist < MAGNET_RANGE
      ? `translate(${dx * .35}px, ${dy * .35}px) scale(${1.15 - dist / 2000})`
      : '';
  });
  contact.addEventListener('pointerleave', () => mag.style.transform = '');
}
mag.addEventListener('click', () => { copyMail(); burst(); });


/* ════════════════════════════════════════════════════════════════════
   SECTION 14 · CLICK RIPPLE
   A circle spreads from where you click on buttons and social links.
   ════════════════════════════════════════════════════════════════════ */
document.addEventListener('pointerdown', e => {
  const target = e.target.closest('.btn, .mag, .socials a');
  if (!target || reduce) return;
  const r = target.getBoundingClientRect();
  const size = Math.max(r.width, r.height);
  const dot = document.createElement('span');
  dot.className = 'ripple';
  dot.style.width = dot.style.height = size + 'px';
  dot.style.left = (e.clientX - r.left - size / 2) + 'px';
  dot.style.top  = (e.clientY - r.top  - size / 2) + 'px';
  target.append(dot);
  dot.addEventListener('animationend', () => dot.remove());
});


/* ════════════════════════════════════════════════════════════════════
   SECTION 15 · TEXT SCRAMBLE ON HOVER
   Links with data-scramble (and nav links) scramble like a hacker movie.
   ════════════════════════════════════════════════════════════════════ */
const GLYPHS = '!<>-_/[]{}=+*^?#アイウカキ01';   // ✏️ characters used while scrambling
function scramble(el) {
  if (reduce || el._busy) return;
  const finalText = el.dataset.txt || (el.dataset.txt = el.textContent);
  const start = performance.now();
  el._busy = true;
  (function frame(now) {
    const k = (now - start) / 500;   // 500ms total
    el.textContent = [...finalText].map((c, i) =>
      c === ' ' || k > i / finalText.length ? c : GLYPHS[Math.random() * GLYPHS.length | 0]
    ).join('');
    if (k < 1) requestAnimationFrame(frame);
    else { el.textContent = finalText; el._busy = false; }
  })(start);
}
$$('[data-scramble], .links a').forEach(a => a.addEventListener('pointerenter', () => scramble(a)));


/* ════════════════════════════════════════════════════════════════════
   SECTION 16 · COPY EMAIL
   Copies whatever is inside <code id="mail"> in index.html.
   ════════════════════════════════════════════════════════════════════ */
function copyMail() {
  const mail = $('#mail');
  const fallback = () => {   // if copying isn't allowed, select the text instead
    const range = document.createRange();
    range.selectNodeContents(mail);
    getSelection().removeAllRanges();
    getSelection().addRange(range);
    toast('Email selected. Press Ctrl/⌘ + C');
  };
  try {
    navigator.clipboard.writeText(mail.textContent).then(() => toast('Email copied: ' + mail.textContent), fallback);
  } catch { fallback(); }
}
$('#copy').addEventListener('click', copyMail);


/* ════════════════════════════════════════════════════════════════════
   SECTION 17 · CONFETTI
   burst(120) → shoots 120 pieces of confetti + sakura petals from the center.
   ════════════════════════════════════════════════════════════════════ */
const canvas = $('#confetti');
const ctx = canvas.getContext('2d');
let pieces = [];
let animating = false;

function sizeCanvas() {
  const d = Math.min(devicePixelRatio, 2);
  canvas.width = innerWidth * d;
  canvas.height = innerHeight * d;
  ctx.setTransform(d, 0, 0, d, 0, 0);
}
sizeCanvas();
addEventListener('resize', sizeCanvas);

function burst(count = 120) {
  if (reduce) return;
  const accent = getComputedStyle(root).getPropertyValue('--acc').trim();
  const colors = [accent, '#ffd23f', '#ffffff', '#ffb7c9', '#3de0ff'];   // ✏️ confetti colors
  for (let i = 0; i < count; i++) {
    pieces.push({
      x: innerWidth / 2, y: innerHeight * .55,
      vx: (Math.random() - .5) * 16, vy: -Math.random() * 16 - 4,   // speed + direction
      r: Math.random() * 6.28, vr: (Math.random() - .5) * .3,        // spin
      c: colors[i % colors.length],
      s: Math.random() * 6 + 5,                                       // size
      petal: Math.random() < .35,                                     // 35% are round petals
      life: 1
    });
  }
  if (!animating) { animating = true; requestAnimationFrame(drawConfetti); }
}

function drawConfetti() {
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  pieces.forEach(p => {
    p.vy += .35; p.vx *= .99;            // gravity + air
    p.x += p.vx; p.y += p.vy; p.r += p.vr;
    p.life -= .006;                      // slowly fade
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.translate(p.x, p.y); ctx.rotate(p.r);
    ctx.fillStyle = p.c;
    if (p.petal) { ctx.beginPath(); ctx.ellipse(0, 0, p.s, p.s * .6, 0, 0, 7); ctx.fill(); }
    else ctx.fillRect(-p.s / 2, -p.s / 3, p.s, p.s * .6);
    ctx.restore();
  });
  pieces = pieces.filter(p => p.life > 0 && p.y < innerHeight + 40);
  if (pieces.length) requestAnimationFrame(drawConfetti);
  else { animating = false; ctx.clearRect(0, 0, innerWidth, innerHeight); }
}


/* ════════════════════════════════════════════════════════════════════
   SECTION 18 · EASTER EGG — "LIMIT BREAK!"
   Triggers when someone:
     • types SECRET_WORD (see Section 1c), or
     • enters the Konami code ↑↑↓↓←→←→ B A, or
     • taps the logo 5 times quickly (for phones)
   ════════════════════════════════════════════════════════════════════ */
function limitBreak() {
  const overlay = $('#limit');
  overlay.classList.remove('on'); void overlay.offsetWidth; overlay.classList.add('on');
  burst(220);
  slam();
  toast('Secret unlocked: Limit Break mode!');   // ✏️ message
  setTimeout(() => overlay.classList.remove('on'), 2600);
}

let typed = '';
const KONAMI = 'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightba';
document.addEventListener('keydown', e => {
  if (e.target.closest('input, textarea')) return;   // ignore typing inside forms
  typed = (typed + e.key).slice(-80);
  if (typed.toLowerCase().endsWith(SECRET_WORD.toLowerCase()) || typed.endsWith(KONAMI)) {
    typed = '';
    limitBreak();
  }
});

let logoTaps = 0;
$('#logo').addEventListener('click', () => {
  logoTaps++;
  clearTimeout(limitBreak.timer);
  limitBreak.timer = setTimeout(() => logoTaps = 0, 1500);   // must tap within 1.5s
  if (logoTaps >= 5) { logoTaps = 0; limitBreak(); }
});

/* ════════════════════════════════════════════════════════════════════
   SECTION 19 · PROJECTS — builds the manga panels from PROJECTS (Section 1e)
   You normally don't need to edit this part.
   How it works:
     • Projects are cut into "chapters" of PROJECTS_PER_CHAPTER (4).
     • Each chapter gets a manga layout (wide + narrow panels).
       Odd chapters are mirrored so pages don't look the same.
     • Leftovers (1–3 projects) get layouts that still fill the row.
     • Filter tabs are made from every project's "tags".
   ════════════════════════════════════════════════════════════════════ */
const mangaEl  = $('#manga');
const filterEl = $('#pFilter');
const moreBtn  = $('#pMore');
const countEl  = $('#pCount');
const ART_CLASSES = ['art1', 'art2', 'art3', 'art4'];   // placeholder colors from style.css

let activeTag = ALL_LABEL;
let shownCount = PROJECTS_PER_CHAPTER * CHAPTERS_AT_START;

// make text safe to put into HTML, and turn \n into line breaks
const safe = str => String(str || '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c])).replace(/\n/g, '<br>');

// widths for a chapter with n projects (each inner array = one row adding up to 6)
function layoutFor(n, chapterIndex) {
  const flip = chapterIndex % 2 === 1;
  if (n >= 4) return flip ? [[2, 4], [4, 2]] : [[4, 2], [2, 4]];
  if (n === 3) return flip ? [[2, 4], [6]] : [[4, 2], [6]];
  if (n === 2) return [[3, 3]];
  return [[6]];
}

// build the HTML for one panel
function panelHTML(p, number, width, cut) {
  const art = p.image
    ? `<div class="art"><img src="${safe(p.image)}" alt="" loading="lazy"></div>`
    : (width >= 3 ? `<div class="art ${ART_CLASSES[(number - 1) % ART_CLASSES.length]}"></div>` : '');
  return `
    <div class="lines"></div>
    ${art}
    <span class="ch">CH.${number}</span>
    ${p.bubble ? `<div class="bub">${safe(p.bubble)}</div>` : ''}
    <div class="ttl2">${safe(p.title)}</div>
    <span class="stk">${safe(p.stack)}</span>
    <span class="sx">${safe(p.sfx || 'BAM!')}</span>`;
}

// draw the filter tabs
function renderFilters() {
  const counts = {};
  PROJECTS.forEach(p => (p.tags || []).forEach(t => counts[t] = (counts[t] || 0) + 1));
  const tags = [ALL_LABEL, ...Object.keys(counts)];
  if (tags.length <= 2) { filterEl.hidden = true; return; }   // no point filtering with 1 tag
  filterEl.innerHTML = tags.map(t => {
    const n = t === ALL_LABEL ? PROJECTS.length : counts[t];
    return `<button type="button" role="tab" aria-selected="${t === activeTag}" data-tag="${safe(t)}">${safe(t)}<small>${n}</small></button>`;
  }).join('');
}
filterEl.addEventListener('click', e => {
  const b = e.target.closest('button'); if (!b) return;
  activeTag = b.dataset.tag;
  shownCount = PROJECTS_PER_CHAPTER * CHAPTERS_AT_START;   // start fresh for the new filter
  renderFilters();
  renderPanels(0);
});

// draw the panels. animateFrom = index of the first panel that should pop in
function renderPanels(animateFrom = Infinity) {
  const list = PROJECTS
    .map((p, i) => ({ ...p, number: i + 1 }))                             // keep original chapter numbers
    .filter(p => activeTag === ALL_LABEL || (p.tags || []).includes(activeTag));
  const visible = list.slice(0, shownCount);

  mangaEl.innerHTML = '';
  let index = 0;
  for (let c = 0; c * PROJECTS_PER_CHAPTER < visible.length; c++) {
    const chunk = visible.slice(c * PROJECTS_PER_CHAPTER, (c + 1) * PROJECTS_PER_CHAPTER);
    // if a chapter has more than 4, extra ones go in half-width pairs
    const rows = layoutFor(Math.min(chunk.length, 4), c);
    let extra = chunk.length - 4;
    while (extra > 0) { rows.push(extra >= 2 ? [3, 3] : [6]); extra -= 2; }

    let k = 0;
    rows.forEach(row => row.forEach((w, pos) => {
      const p = chunk[k++]; if (!p) return;
      const a = document.createElement('a');
      const cut = row.length === 2 ? (pos === 0 ? 'cut-r' : 'cut-l') : '';
      a.className = `mp w${w} ${cut} tilt`;
      a.href = p.link || '#';
      if (p.link) { a.target = '_blank'; a.rel = 'noopener'; }
      a.setAttribute('aria-label', `${(p.title || '').replace(/\n/g, ' ')} — ${p.stack || ''}`);
      a.innerHTML = panelHTML(p, p.number, w, cut);
      if (index >= animateFrom && !reduce) {
        a.classList.add('enter');
        a.style.animationDelay = ((index - animateFrom) * 0.08) + 's';
        a.addEventListener('animationend', () => { a.classList.remove('enter'); a.style.animationDelay = ''; }, { once: true });
      }
      addTilt(a);
      mangaEl.append(a);
      index++;
    }));
  }

  // the red "Next chapter: your project?" banner always goes last
  // ✏️ EDIT: banner text
  const banner = document.createElement('a');
  banner.className = 'mp p5';
  banner.href = '#contact';
  banner.innerHTML = '<div><h3>Next chapter: your project?</h3><p>to be continued… →</p></div>';
  mangaEl.append(banner);

  // "Next chapter" button + counter
  const left = list.length - visible.length;
  moreBtn.hidden = left <= 0;
  moreBtn.textContent = `Next chapter ↓ (${Math.min(left, PROJECTS_PER_CHAPTER)} more)`;
  countEl.textContent = `Showing ${visible.length} of ${list.length} projects`;
}

moreBtn.addEventListener('click', () => {
  const before = shownCount;
  shownCount += PROJECTS_PER_CHAPTER;
  renderPanels(before);
});

renderFilters();
renderPanels();

})();   // end of the wrapper
