import Lenis from '@studio-freight/lenis';
import gsap from 'gsap'
declare global {
  interface Window {
    lenis?: Lenis | null;
    timelineNavbar? : gsap.core.Timeline | null;
    timelineBtnNavbar? : gsap.core.Timeline | null
  }
}
