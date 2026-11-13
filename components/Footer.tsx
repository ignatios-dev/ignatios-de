import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className="border-t-[3px] border-foreground text-[14px] text-secondary
        px-6 py-8 md:px-12 md:py-12
        flex flex-col items-start gap-4
        md:flex-row md:justify-between md:items-center md:flex-wrap"
    >
      <div>&copy; {new Date().getFullYear()} Ignatios Waffenschmidt</div>
      <div className="flex gap-[18px] md:gap-7 flex-wrap font-mono text-[12px] md:text-[13px]">
        <Link href="/software/" className="nb-underline text-secondary no-underline hover:text-foreground">Software</Link>
        <a href="/apartments/index.html" className="nb-underline text-secondary no-underline hover:text-foreground">Griechenland</a>
        <Link href="/ueber-mich/" className="nb-underline text-secondary no-underline hover:text-foreground">Über mich</Link>
        <Link href="/impressum/" className="nb-underline text-secondary no-underline hover:text-foreground">Impressum</Link>
      </div>
    </footer>
  );
}
