/* import Button from '@Components/Button';
import { useGSAP } from '@gsap/react';
import Fade from '@Interactive/Fade';
import { HeaderProxy } from '@Layouts/Header';
import s from '@Layouts/Header/styles.module.scss';
import { useHeaderSignal } from '@Layouts/Header/useHeaderSignal';
import { useSignalEffect } from '@preact/signals-react';
import { easingScrolling } from '@Utils/uiHelper';
import cn from 'classnames';
import gsap from 'gsap';
import React, { useRef } from 'react';

import { TypographyBody } from '@/components/Typography';
import { TSection } from '@/types/common';

import { isSoundUnderState } from '../SoundIcon';

type INavItem = {
  name: string;
  link: TSection;
  idx: number;
};

export default function MenuItem({ name, link, idx }: INavItem): React.ReactElement {
  const { setActiveSection, activeSection } = useHeaderSignal();
  const refItem = useRef<HTMLButtonElement>(null);

  useSignalEffect(() => {
    if (activeSection.value === link) {
      handleHover();
    } else {
      handleLeave();
    }
  });
  const { contextSafe } = useGSAP({ scope: refItem });
  const handleHover = contextSafe((): void => {
    const listText: HTMLDivElement[] = gsap.utils.toArray('.js-menu-active');

    gsap.to(listText, {
      yPercent: -100,
      ease: 'power3.out',
      duration: 0.6,
      overwrite: 'auto',
    });
  });
  const handleLeave = contextSafe(() => {
    if (link === activeSection.peek()) return;
    const listText: HTMLDivElement[] = gsap.utils.toArray('.js-menu-active');

    gsap.to(listText, {
      yPercent: 0,
      ease: 'power3.out',
      duration: 0.6,
      overwrite: 'auto',
    });
  });
  const handleNavigate = (): void => {
    // window.lenis?.start();
    // gsap.registerPlugin(ScrollToPlugin);
    // gsap.to(window, { duration: 2, scrollTo: { y: `#${link}` }, ease: 'power3.inOut' });
    isSoundUnderState.value = true;
    setActiveSection(link);
    HeaderProxy.isMenuForcePin = true;
    window.lenis?.scrollTo(`#${link}`, {
      duration: 2,
      lerp: 0.05,
      easing: easingScrolling,
      force: true,
      lock: true,
      onComplete: () => {
        HeaderProxy.isMenuForcePin = false;
      },
    });
  };

  return (
    <Fade key={name} duration={1.5} direction={'bottom'} from={'100%'} delayEnter={0.5 + idx / 10}>
      <div onMouseEnter={handleHover} onMouseLeave={handleLeave}>
        <Button
          ref={refItem}
          variant="text"
          className={`${s.header_navigate_item} js-btn`}
          onClick={handleNavigate}
        >
          <TypographyBody
            className={cn(
              'js-menu-active active block',
              s.header_navigate_item_text__default,
              s.header_navigate_item_text
            )}
          >
            {name}
          </TypographyBody>
          <TypographyBody
            className={cn(
              'js-menu-active active block',
              s.header_navigate_item_text__active,
              s.header_navigate_item_text
            )}
          >
            {name}
          </TypographyBody>
        </Button>
      </div>
    </Fade>
  );
}
 */