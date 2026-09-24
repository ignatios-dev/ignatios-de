export function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`inline-block bg-light-blue nb-border rounded-full font-mono text-[12px] tracking-[0.08em] text-accent uppercase px-3.5 py-1 mb-4 -rotate-1 ${className}`}
    >
      {children}
    </div>
  );
}
