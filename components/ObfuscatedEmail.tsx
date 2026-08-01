'use client';

import { useCallback } from 'react';

function getEmail(): string {
  const p = [4, 6, 5, 8, 0, 4, 8, 9, 3, 2, 5, 0, 8, 3, 6, 7, 10, 11, 1];
  const c = ['a', 'e', 'g', 'i', 'k', 'n', 'o', 's', 't', '@', '.', 'd'];
  let r = '';
  for (let i = 0; i < p.length; i++) r += c[p[i]];
  return r;
}

interface Props {
  className?: string;
  children?: React.ReactNode;
}

export function ObfuscatedEmail({ className, children }: Props) {
  const handleClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:' + getEmail();
  }, []);

  return (
    <a href="#kontakt" onClick={handleClick} className={className}>
      {children ?? getEmail()}
    </a>
  );
}

export function EmailText() {
  return <>{getEmail()}</>;
}
