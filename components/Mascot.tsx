'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export interface MascotTip {
  text: string;
  href?: string;
  linkLabel?: string;
}

const SPEED = 45; // px pro Sekunde
const EDGE = 16;
const STORAGE_KEY = 'glauki-hidden';
const COMMENT_COOLDOWN = 15000;
const RANDOM_TIP_QUIET = 30000;

// Sprüche zu dem, was der Besucher gerade so treibt
const REACTIONS = {
  fastScroll: ['Hui, nicht so schnell! Mir wird schwindelig.', 'Suchst du was Bestimmtes? Du scrollst wie eine Eule im Sturzflug.'],
  bottom: ['Ganz unten angekommen. Hier gibt es nur noch den Footer … und mich.'],
  backToTop: ['Nochmal von vorne? Gute Entscheidung.'],
  idle: ['Bist du noch da? Ich zähle solange Oliven. 1, 2, 3 …', 'Psst. Nicht einschlafen. Das ist mein Job, ich bin nachtaktiv.'],
  exit: ['Wo willst du hin? Hier gibt es Kekse! … Okay, keine Kekse. Aber gute Artikel.'],
  back: ['Oh, du bist wieder da! Ich hab nichts angefasst, versprochen.'],
  copy: ['Kopierst du da etwa was? Keine Sorge, ich verrate nichts.'],
  rage: ['Alles okay? Das war ziemlich viel Klickerei. Tief durchatmen.'],
  poke: ['Aua! Ich bin eine Eule, kein Button!', 'Noch einmal und ich picke zurück.'],
  resize: ['Uiii, die Welt wird gerade ganz anders groß!'],
  reading: ['Du liest ja wirklich bis hierhin! Respekt, das schaffen nicht viele.'],
  night: ['So spät noch unterwegs? Eulen verstehen das.'],
  morning: ['So früh schon wach? Ich geh gleich schlafen, aber zeig dir noch schnell alles.'],
};

const PAGE_GREETINGS: Array<[(path: string) => boolean, string]> = [
  [(p) => p === '/', 'Hallo! Sieht so aus, als würdest du eine Homepage besuchen. Kann ich dir helfen?'],
  [(p) => p.startsWith('/software'), 'Auf der Suche nach einem Entwickler? Zufällig kenne ich einen sehr guten.'],
  [(p) => p.startsWith('/ueber-mich'), 'Das ist mein Mensch. Er füttert mich mit Oliven, also sei nett zu ihm.'],
  [(p) => /^\/blog\/.+/.test(p), 'Gute Wahl! Ich hab den auch gelesen. Also … den Titel.'],
  [(p) => p.startsWith('/blog'), 'Willkommen im Blog! Hier stehen Dinge, die zu lang für Tweets waren.'],
];

const HOVER_NUDGES = ['Na los, klick schon! Der beißt nicht.', 'Du schwebst da jetzt schon eine Weile drüber …'];

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function pick<T>(list: T[]) {
  return list[Math.floor(Math.random() * list.length)];
}

function readHidden() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

export function Mascot({ tips }: { tips: MascotTip[] }) {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [walking, setWalking] = useState(false);
  const [facingLeft, setFacingLeft] = useState(false);
  const [onRightHalf, setOnRightHalf] = useState(false);
  const [startled, setStartled] = useState(false);
  const [message, setMessage] = useState<MascotTip | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const pupilsRef = useRef<SVGGElement>(null);
  const pos = useRef(EDGE);
  const dir = useRef(1);
  const talking = useRef(false);
  const lastSpoke = useRef(0);
  const lastComment = useRef(0);
  const usedReactions = useRef(new Set<string>());
  const nextTip = useRef(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const startleTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const firstPath = useRef(true);

  const say = useCallback((msg: MascotTip, autoClose = true) => {
    clearTimeout(closeTimer.current);
    talking.current = true;
    lastSpoke.current = Date.now();
    setMessage(msg);
    if (autoClose) {
      const duration = Math.min(Math.max(msg.text.length * 70, 5000), 9000);
      closeTimer.current = setTimeout(() => {
        talking.current = false;
        setMessage(null);
      }, duration);
    }
  }, []);

  const startle = useCallback(() => {
    clearTimeout(startleTimer.current);
    setStartled(true);
    startleTimer.current = setTimeout(() => setStartled(false), 600);
  }, []);

  // Kommentar zu Nutzerverhalten: jede Reaktion nur einmal, mit Abstand zueinander
  const react = useCallback(
    (key: keyof typeof REACTIONS, opts: { force?: boolean; jump?: boolean } = {}) => {
      const now = Date.now();
      if (!opts.force && (usedReactions.current.has(key) || now - lastComment.current < COMMENT_COOLDOWN)) {
        return;
      }
      usedReactions.current.add(key);
      lastComment.current = now;
      if (opts.jump) startle();
      say({ text: pick(REACTIONS[key]) });
    },
    [say, startle]
  );

  const showNextTip = useCallback(() => {
    if (tips.length === 0) return;
    say(tips[nextTip.current % tips.length], false);
    nextTip.current = (nextTip.current + 1) % tips.length;
  }, [tips, say]);

  const closeMessage = useCallback(() => {
    clearTimeout(closeTimer.current);
    talking.current = false;
    setMessage(null);
  }, []);

  function dismiss() {
    closeMessage();
    setVisible(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // Speicher nicht verfügbar – dann eben nur bis zum Reload weg
    }
  }

  // Erst im Browser einblenden, damit Server- und Client-Render übereinstimmen
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(!readHidden()));
    return () => cancelAnimationFrame(id);
  }, []);

  useEffect(
    () => () => {
      clearTimeout(closeTimer.current);
      clearTimeout(startleTimer.current);
    },
    []
  );

  // Begrüßung je nach Seite (und Uhrzeit beim ersten Besuch)
  useEffect(() => {
    if (!visible) return;
    const first = firstPath.current;
    firstPath.current = false;
    const id = setTimeout(
      () => {
        const hour = new Date().getHours();
        if (first && (hour >= 23 || hour < 4)) return react('night', { force: true });
        if (first && hour >= 4 && hour < 7) return react('morning', { force: true });
        const greeting = PAGE_GREETINGS.find(([match]) => match(pathname));
        if (greeting) say({ text: greeting[1] });
      },
      first ? 2500 : 1200
    );
    return () => clearTimeout(id);
  }, [visible, pathname, say, react]);

  // Beobachten, was der Besucher so treibt
  useEffect(() => {
    if (!visible) return;

    let lastY = window.scrollY;
    let lastT = performance.now();
    let burst = 0;
    let reachedBottom = false;
    let idleTimer: ReturnType<typeof setTimeout>;
    let hoverTimer: ReturnType<typeof setTimeout> | undefined;
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    let hiddenAt = 0;
    let savedTitle = '';
    let clicks: Array<{ t: number; x: number; y: number }> = [];

    const resetIdle = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => react('idle'), 45000);
    };

    const onScroll = () => {
      resetIdle();
      const now = performance.now();
      const y = window.scrollY;
      const dt = now - lastT;
      const velocity = Math.abs(y - lastY) / Math.max(dt, 1);
      burst = velocity > 4 ? burst + 1 : Math.max(burst - 1, 0);
      if (burst > 6) {
        burst = 0;
        react('fastScroll', { jump: true });
      }
      lastY = y;
      lastT = now;

      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable < window.innerHeight * 0.5) return;
      if (/^\/blog\/.+/.test(pathname) && y / scrollable > 0.6) react('reading');
      if (y >= scrollable - 40) {
        reachedBottom = true;
        react('bottom');
      } else if (reachedBottom && y < 80) {
        react('backToTop');
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) react('exit', { jump: true });
    };

    const onVisibility = () => {
      if (document.hidden) {
        hiddenAt = Date.now();
        savedTitle = document.title;
        document.title = '🦉 Huhu, komm zurück!';
      } else {
        if (savedTitle) document.title = savedTitle;
        if (hiddenAt && Date.now() - hiddenAt > 5000) react('back', { force: true, jump: true });
      }
    };

    const onCopy = () => react('copy');

    const onClick = (e: MouseEvent) => {
      if (wrapRef.current?.contains(e.target as Node)) return;
      const now = Date.now();
      clicks = clicks.filter((c) => now - c.t < 900);
      clicks.push({ t: now, x: e.clientX, y: e.clientY });
      const near = clicks.filter((c) => Math.hypot(c.x - e.clientX, c.y - e.clientY) < 50);
      if (near.length >= 4) {
        clicks = [];
        react('rage', { jump: true });
      }
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = (e.target as Element).closest?.('[data-glauki-hover]');
      clearTimeout(hoverTimer);
      if (!target) return;
      hoverTimer = setTimeout(() => {
        const custom = target.getAttribute('data-glauki-hover');
        const key = `hover:${custom || 'default'}`;
        if (usedReactions.current.has(key) || Date.now() - lastComment.current < COMMENT_COOLDOWN) return;
        usedReactions.current.add(key);
        lastComment.current = Date.now();
        say({ text: custom || pick(HOVER_NUDGES) });
      }, 2500);
    };

    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => react('resize', { jump: true }), 400);
    };

    // Pupillen folgen der Maus
    let raf = 0;
    const onMouseMove = (e: MouseEvent) => {
      resetIdle();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const wrap = wrapRef.current;
        const pupils = pupilsRef.current;
        if (!wrap || !pupils) return;
        const r = wrap.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2);
        const dy = e.clientY - (r.top + r.height / 3);
        const len = Math.hypot(dx, dy) || 1;
        const flip = dir.current < 0 ? -1 : 1;
        pupils.style.transform = `translate(${((dx / len) * 2.5 * flip).toFixed(2)}px, ${((dy / len) * 2.5).toFixed(2)}px)`;
      });
    };

    resetIdle();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('keydown', resetIdle);
    window.addEventListener('touchstart', resetIdle, { passive: true });
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('visibilitychange', onVisibility);
    document.addEventListener('copy', onCopy);
    document.addEventListener('click', onClick);
    document.addEventListener('pointerover', onPointerOver);

    return () => {
      clearTimeout(idleTimer);
      clearTimeout(hoverTimer);
      clearTimeout(resizeTimer);
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('keydown', resetIdle);
      window.removeEventListener('touchstart', resetIdle);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('visibilitychange', onVisibility);
      document.removeEventListener('copy', onCopy);
      document.removeEventListener('click', onClick);
      document.removeEventListener('pointerover', onPointerOver);
    };
  }, [visible, pathname, react, say]);

  // Herumlaufen
  useEffect(() => {
    const el = wrapRef.current;
    if (!visible || !el) return;

    const size = el.offsetWidth;
    const place = () => {
      el.style.transform = `translateX(${pos.current}px)`;
      setOnRightHalf(pos.current + size / 2 > window.innerWidth / 2);
    };

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      pos.current = window.innerWidth - size - EDGE;
      place();
      return;
    }

    let last = performance.now();
    let pauseUntil = 0;
    let nextPauseAt = last + rand(4000, 9000);
    let raf = 0;

    const tick = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.1);
      last = now;
      const max = window.innerWidth - size - EDGE;

      if (talking.current || now < pauseUntil) {
        setWalking(false);
      } else {
        setWalking(true);
        pos.current += dir.current * SPEED * dt;
        if (pos.current <= EDGE) dir.current = 1;
        if (pos.current >= max) dir.current = -1;
        pos.current = Math.min(Math.max(pos.current, EDGE), max);
        setFacingLeft(dir.current < 0);

        if (now > nextPauseAt) {
          pauseUntil = now + rand(2500, 5000);
          nextPauseAt = pauseUntil + rand(5000, 11000);
          if (Math.random() < 0.3) dir.current *= -1;
          if (Math.random() < 0.35 && Date.now() - lastSpoke.current > RANDOM_TIP_QUIET) {
            showNextTip();
            clearTimeout(closeTimer.current);
            closeTimer.current = setTimeout(() => {
              talking.current = false;
              setMessage(null);
            }, 8000);
          }
        }
      }

      place();
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, showNextTip]);

  // Zu oft angestupst?
  const pokes = useRef<number[]>([]);
  function onOwlClick() {
    const now = Date.now();
    pokes.current = pokes.current.filter((t) => now - t < 2500);
    pokes.current.push(now);
    if (pokes.current.length >= 5) {
      pokes.current = [];
      react('poke', { force: true, jump: true });
      return;
    }
    if (message) closeMessage();
    else showNextTip();
  }

  if (!visible) return null;

  return (
    <div
      ref={wrapRef}
      className="fixed bottom-3 left-0 z-40 w-[52px] md:w-[64px] pointer-events-none"
    >
      {message && (
        <div
          role="status"
          key={message.text}
          className={`owl-bubble pointer-events-auto absolute bottom-full mb-3 w-[min(280px,calc(100vw-32px))]
            bg-background nb-border nb-shadow-sm rounded-2xl p-4 pr-8 text-[14px] leading-[1.5] text-foreground
            ${onRightHalf ? 'right-0 origin-bottom-right' : 'left-0 origin-bottom-left'}`}
        >
          <button
            type="button"
            onClick={closeMessage}
            aria-label="Sprechblase schließen"
            className="absolute top-1.5 right-2.5 font-mono text-[16px] font-bold text-foreground cursor-pointer transition-transform hover:rotate-90"
          >
            ×
          </button>
          <p className="m-0">{message.text}</p>
          {message.href && (
            <Link
              href={message.href}
              className="inline-block mt-2 font-semibold text-accent hover:text-accent-hover"
            >
              {message.linkLabel ?? 'Ansehen →'}
            </Link>
          )}
          <button
            type="button"
            onClick={dismiss}
            className="block mt-3 font-mono text-[11px] uppercase tracking-[0.05em] text-secondary hover:text-foreground cursor-pointer"
          >
            Glauki ausblenden
          </button>
          <span
            aria-hidden
            className={`absolute -bottom-[9px] w-4 h-4 bg-background rotate-45 rounded-br-[4px]
              border-r-[3px] border-b-[3px] border-foreground
              ${onRightHalf ? 'right-5' : 'left-5'}`}
          />
        </div>
      )}

      <button
        type="button"
        onClick={onOwlClick}
        aria-label="Glauki, die Eule – Tipp anzeigen"
        className={`owl pointer-events-auto block w-full cursor-pointer ${walking ? 'walking' : ''} ${message ? 'talking' : ''} ${startled ? 'startled' : ''}`}
        style={{ transform: facingLeft ? 'scaleX(-1)' : undefined }}
      >
        <OwlSvg pupilsRef={pupilsRef} />
      </button>
    </div>
  );
}

function OwlSvg({ pupilsRef }: { pupilsRef: React.Ref<SVGGElement> }) {
  return (
    <svg viewBox="0 0 64 72" className="block w-full h-auto overflow-visible">
      {/* Füße */}
      <g className="owl-foot-l">
        <ellipse cx="24" cy="67" rx="6" ry="3.5" fill="var(--color-foreground)" />
      </g>
      <g className="owl-foot-r">
        <ellipse cx="40" cy="67" rx="6" ry="3.5" fill="var(--color-foreground)" />
      </g>

      {/* Federohren */}
      <path d="M12 22 L14 6 L24 16 Z" fill="var(--color-accent)" stroke="var(--color-foreground)" strokeWidth="3" strokeLinejoin="round" />
      <path d="M52 22 L50 6 L40 16 Z" fill="var(--color-accent)" stroke="var(--color-foreground)" strokeWidth="3" strokeLinejoin="round" />

      {/* Körper */}
      <ellipse cx="32" cy="39" rx="24" ry="26" fill="var(--color-accent)" stroke="var(--color-foreground)" strokeWidth="3" />

      {/* Flügel */}
      <ellipse cx="9" cy="44" rx="5" ry="11" fill="var(--color-accent-hover)" stroke="var(--color-foreground)" strokeWidth="3" />
      <g className="owl-wing-r">
        <ellipse cx="55" cy="44" rx="5" ry="11" fill="var(--color-accent-hover)" stroke="var(--color-foreground)" strokeWidth="3" />
      </g>

      {/* Bauch */}
      <ellipse cx="32" cy="50" rx="13" ry="12" fill="var(--color-light-blue)" stroke="var(--color-foreground)" strokeWidth="2.5" />
      <path d="M26 47 l3 3 l3 -3 l3 3 l3 -3 M26 54 l3 3 l3 -3 l3 3 l3 -3" fill="none" stroke="var(--color-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />

      {/* Augen */}
      <g className="owl-eyes">
        <circle cx="23" cy="29" r="9" fill="white" stroke="var(--color-foreground)" strokeWidth="3" />
        <circle cx="41" cy="29" r="9" fill="white" stroke="var(--color-foreground)" strokeWidth="3" />
        <g ref={pupilsRef} className="owl-pupils">
          <circle cx="24" cy="30" r="4" fill="var(--color-foreground)" />
          <circle cx="42" cy="30" r="4" fill="var(--color-foreground)" />
          <circle cx="25.5" cy="28.5" r="1.3" fill="white" />
          <circle cx="43.5" cy="28.5" r="1.3" fill="white" />
        </g>
      </g>

      {/* Schnabel */}
      <path d="M29 37 L35 37 L32 42 Z" fill="var(--color-foreground)" strokeLinejoin="round" />
    </svg>
  );
}
