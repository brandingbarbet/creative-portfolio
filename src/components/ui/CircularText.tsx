import { useId } from 'react';
import { cn } from '../../lib/cn';

interface Props {
  text: string;
  /** Tailwind positioning + size, e.g. "-top-8 -left-8 w-44 h-44" */
  className?: string;
  /** Text colour; opacity is applied in CSS */
  tone?: 'light' | 'dark' | 'lavender';
}

const TONES = { light: 'text-white', dark: 'text-navy', lavender: 'text-purple-400' } as const;

/** Pale ring of text used as a decorative watermark near panel edges. */
export function CircularText({ text, className, tone = 'dark' }: Props) {
  const id = useId();
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={cn('pointer-events-none absolute select-none opacity-[0.16]', TONES[tone], className)}
    >
      <defs>
        <path id={id} d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
      </defs>
      <text
        fill="currentColor"
        fontSize="13"
        fontWeight="700"
        letterSpacing="2"
        style={{ textTransform: 'uppercase', fontFamily: 'var(--font-body)' }}
      >
        <textPath href={`#${id}`} textLength="500" lengthAdjust="spacing">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
