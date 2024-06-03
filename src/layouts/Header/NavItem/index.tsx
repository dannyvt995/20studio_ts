/* 'use client';

import LinkEffect from '@Components/LinkEffect';
import TypographyBody from '@Components/Typography/Body';
import { gsap } from 'gsap';
import React, { useEffect, useRef } from 'react';

import { TSection } from '@/types/common';

import s from './styles.module.scss';

interface INavItem {
  name: string;
  link: TSection;
}

export default function NavItem({ name, link }: INavItem): React.ReactElement {
  const refText = useRef<HTMLAnchorElement>(null);
  const refTextChilds = useRef<NodeListOf<Element> | undefined>(undefined);

  useEffect(() => {
    refTextChilds.current = refText.current?.querySelectorAll('.js-refText_children');
  }, []);

  const onMouseEnter = (): void => {
    refTextChilds.current?.length &&
      gsap.to(refTextChilds.current, { y: '-100%', ease: 'power3.out', duration: 0.8 });
  };

  const onMouseLeave = (): void => {
    refTextChilds.current?.length &&
      gsap.to(refTextChilds.current, { y: '0%', ease: 'power3.out', duration: 0.8 });
  };
  return (
    <li key={name} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <LinkEffect href={link}>
        <TypographyBody>
          <span ref={refText} className={s.nav_text}>
            <span className={'js-refText_children block'}>{name}</span>
            <span className={`js-refText_children ${s.nav_text_clone}`}>{name}</span>
          </span>
        </TypographyBody>
      </LinkEffect>
    </li>
  );
}
 */