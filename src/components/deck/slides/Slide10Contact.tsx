import { PROFILE, SOCIALS, WATERMARKS } from '../../../data/content';
import { useUI } from '../../../context/UIContext';
import { CircularText } from '../../ui/CircularText';
import { SlideFrame, stop } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide10Contact({ onActivate }: SlideProps) {
  const { openBooking } = useUI();
  const row = 'group/link flex items-center gap-[1.2cqw] transition-transform hover:translate-x-1';
  const dot = 'fs-small flex h-[3.4cqw] w-[3.4cqw] items-center justify-center rounded-full bg-slate-200 text-navy transition-colors group-hover/link:bg-navy group-hover/link:text-white';
  const txt = 'fs-label font-mono font-bold tracking-wider text-navy uppercase';

  return (
    <SlideFrame
      theme="light"
      purpose="slide-contact"
      lavender
      onActivate={onActivate}
      bodyClass="p-[5cqw]!"
      backdrop={
        <>
          <CircularText tone="lavender" text={WATERMARKS[0]} className="-bottom-[11cqw] -left-[8cqw] w-[30cqw]" />
          <CircularText tone="lavender" text={WATERMARKS[1]} className="-top-[10cqw] -right-[8cqw] w-[30cqw]" />
        </>
      }
    >
      <div>
        <h2 className="fs-display font-condensed leading-[1.05] tracking-tight text-navy uppercase" style={{ fontSize: 'max(26px, 6.4cqw)' }}>
          LET'S WORK TOGETHER<br />AND CREATE<br />SOMETHING GREAT!
        </h2>
        <button
          type="button"
          onClick={stop(() => openBooking())}
          className="fs-small mt-[1.6cqw] inline-flex cursor-pointer items-center gap-[1cqw] rounded-[0.8cqw] bg-navy px-[2.2cqw] py-[1cqw] font-bold text-white shadow-md transition-all hover:bg-navy-dark"
        >
          <i className="fa-regular fa-paper-plane" aria-hidden="true" />
          <span>Send Collaboration Proposal</span>
        </button>
      </div>

      <div className="flex flex-col items-end gap-[1cqw]">
        <a href={SOCIALS[0].link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={row}>
          <span className={dot}><i className="fa-brands fa-instagram" aria-hidden="true" /></span>
          <span className={txt}>{PROFILE.handle.toUpperCase()}</span>
        </a>
        <a href={SOCIALS[1].link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className={row}>
          <span className={dot}><i className="fa-brands fa-tiktok" aria-hidden="true" /></span>
          <span className={txt}>{PROFILE.handle.toUpperCase()}</span>
        </a>
        <a href={`mailto:${PROFILE.email}`} onClick={(e) => { e.stopPropagation(); e.preventDefault(); openBooking(); }} className={row}>
          <span className={dot}><i className="fa-regular fa-envelope" aria-hidden="true" /></span>
          <span className={txt}>{PROFILE.email}</span>
        </a>
      </div>
    </SlideFrame>
  );
}
