import Link from 'next/link';
import { ObfuscatedEmail } from './ObfuscatedEmail';

export function Footer() {
  return (
    <footer
      className="border-t border-border text-[14px] text-secondary
        px-6 py-8 md:px-12 md:py-12
        flex flex-col items-start gap-4
        md:flex-row md:justify-between md:items-center md:flex-wrap"
    >
      <div>&copy; {new Date().getFullYear()} Ignatios Waffenschmidt</div>
      <div className="flex gap-[18px] md:gap-7 flex-wrap font-mono text-[12px] md:text-[13px]">
        <Link href="/software/" className="text-secondary no-underline hover:text-foreground">Software</Link>
        <a href="/apartments/index.html" className="text-secondary no-underline hover:text-foreground">Griechenland</a>
        <Link href="/ueber-mich/" className="text-secondary no-underline hover:text-foreground">Über mich</Link>
        <ObfuscatedEmail className="text-secondary no-underline hover:text-foreground">Impressum</ObfuscatedEmail>
      </div>
    </footer>
  );
}
