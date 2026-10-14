import { useState } from 'react';
import type { ImgHTMLAttributes } from 'react';
import { cn } from '../../lib/cn';

/**
 * <img> with lazy loading and a quiet fallback tile if the URL fails,
 * so a dead link never leaves a broken-image icon in the layout.
 */
export function Img({ className, alt, onError, ...rest }: ImgHTMLAttributes<HTMLImageElement>) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={cn('flex items-center justify-center bg-slate-300/60 text-slate-500', className)}
      >
        <i className="fa-regular fa-image text-lg opacity-60" aria-hidden="true" />
      </div>
    );
  }

  return (
    <img
      alt={alt}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      className={className}
      onError={(e) => {
        setFailed(true);
        onError?.(e);
      }}
      {...rest}
    />
  );
}
