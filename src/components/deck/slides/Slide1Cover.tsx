import { WATERMARKS } from '../../../data/content';
import { CircularText } from '../../ui/CircularText';
import { CoverArt } from '../../cover/CoverArt';
import { SlideFrame } from '../SlideFrame';
import type { SlideProps } from '../SlideFrame';

export function Slide1Cover({ onActivate }: SlideProps) {
  return (
    <SlideFrame theme="navy" purpose="slide-cover" bare onActivate={onActivate}>
      <CircularText tone="light" text={WATERMARKS[0]} className="-top-[9cqw] left-[30cqw] w-[34cqw]" />
      <CoverArt />
    </SlideFrame>
  );
}
