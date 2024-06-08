export type IAnimationElement =
  | HTMLDivElement
  | HTMLElement
  | HTMLParagraphElement
  | HTMLSpanElement
  | HTMLHeadElement
  | HTMLLinkElement
  | HTMLButtonElement
  | HTMLHeadingElement;

export interface ISliderItem {
  urlVid: string;
  urlMov: string;
  url?: string;
  title: string;
  desc: string;
  idx?: number;
}

export type TSection = 'hero' | 'about' | 'service' | 'contact';

export interface IPageModule {
  stateTransition: string;
}


export interface IPropsFromTransition {
  state: any,

  stateTransitionPage?: string,
  scrollerRef?: string,

  classAdd?:string,
  backgroundImage?:string,
  backgroundSize?:object,
}