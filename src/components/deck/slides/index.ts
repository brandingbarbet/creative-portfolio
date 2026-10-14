import type { ComponentType } from 'react';
import type { SlideProps } from '../SlideFrame';
import { Slide1Cover } from './Slide1Cover';
import { Slide2About } from './Slide2About';
import { Slide3Education } from './Slide3Education';
import { Slide4Skills } from './Slide4Skills';
import { Slide5PreviousProjects } from './Slide5PreviousProjects';
import { Slide6Socials } from './Slide6Socials';
import { Slide7Brands } from './Slide7Brands';
import { Slide8Experience } from './Slide8Experience';
import { Slide9PassionProject } from './Slide9PassionProject';
import { Slide10Contact } from './Slide10Contact';

/** Slide order = SLIDES order in data/content.ts. */
export const SLIDE_COMPONENTS: Record<number, ComponentType<SlideProps>> = {
  1: Slide1Cover,
  2: Slide2About,
  3: Slide3Education,
  4: Slide4Skills,
  5: Slide5PreviousProjects,
  6: Slide6Socials,
  7: Slide7Brands,
  8: Slide8Experience,
  9: Slide9PassionProject,
  10: Slide10Contact,
};
