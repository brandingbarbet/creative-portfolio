import type { ReactNode } from 'react';
import { cn } from '../../lib/cn';

interface Props {
  kicker: string;
  children: ReactNode;
  tone?: 'light' | 'dark';
  /** "condensed" = Anton uppercase headline; "body" = bold Jakarta headline. */
  face?: 'condensed' | 'body';
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeader({ kicker, children, tone = 'light', face = 'body', className, align = 'left' }: Props) {
  const dark = tone === 'dark';
  return (
    <div className={cn(align === 'center' && 'mx-auto text-center', className)}>
      <span className={cn('mb-2 block font-mono text-xs font-bold tracking-[0.2em] uppercase', dark ? 'text-white/70' : 'text-navy')}>{kicker}</span>
      <h2
        className={cn(
          'text-4xl sm:text-6xl',
          face === 'condensed' ? 'font-condensed leading-none tracking-normal uppercase' : 'font-body font-extrabold tracking-tight',
          dark ? 'text-white' : 'text-navy',
        )}
      >
        {children}
      </h2>
    </div>
  );
}
