'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
  { href: '/software/', label: 'Software' },
  { href: '/apartments/index.html', label: 'Griechenland', external: true },
  { href: '/ueber-mich/', label: 'Über mich' },
  { href: '/blog/', label: 'Blog' },
];

export function Navigation() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === '/blog/') return pathname === '/blog' || pathname === '/blog/' || pathname.startsWith('/blog/');
    return pathname === href || pathname === href.replace(/\/$/, '');
  }

  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between
        px-5 py-4 md:px-12 md:py-[22px]
        bg-[oklch(0.99_0.003_250_/_0.92)] backdrop-blur-[8px]
        border-b-[3px] border-foreground flex-wrap gap-3"
    >
      <Link href="/" className="group flex items-center gap-[10px] no-underline">
        <div className="w-[16px] h-[16px] bg-accent border-2 border-foreground rounded-[5px] rotate-6 transition-transform duration-300 group-hover:rotate-[96deg] group-hover:scale-110" />
        <span className="font-bold text-[19px] tracking-[-0.02em] text-foreground">
          ignatios<span className="text-accent">.</span>de
        </span>
      </Link>

      <nav
        className="flex items-center gap-[14px] md:gap-9
          font-mono text-[11px] md:text-[13px] tracking-[0.02em] uppercase
          flex-wrap row-gap-[10px]"
      >
        {navLinks.map((link) =>
          link.external ? (
            <a
              key={link.href}
              href={link.href}
              className="nb-underline text-foreground pb-1 no-underline hover:text-foreground"
            >
              {link.label}
            </a>
          ) : (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 no-underline ${
                isActive(link.href) ? 'text-accent border-b-2 border-accent' : 'nb-underline text-foreground'
              }`}
            >
              {link.label}
            </Link>
          )
        )}
        <Link
          href="/software/"
          className="bg-accent text-white border-2 border-foreground rounded-lg shadow-[3px_3px_0_0_var(--color-foreground)] px-4 py-2 font-medium no-underline transition-[transform,box-shadow] duration-100 hover:text-white hover:-translate-x-px hover:-translate-y-px hover:shadow-[4px_4px_0_0_var(--color-foreground)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none"
        >
          Kontakt
        </Link>
      </nav>
    </header>
  );
}
