/* import { useGSAP } from '@gsap/react';
import { useSignalEffect } from '@preact/signals-react';
import gsap from 'gsap';
import React, { useRef } from 'react';

import { navList } from '@/constants/navList';
import { TSection } from '@/types/common';

import { useHeaderSignal } from '../useHeaderSignal';
import ItemMobile from './ItemMobile';
import s from './styles.module.scss';

export default function NavMobile(): JSX.Element {
  const navMobile = useRef<HTMLElement>(null);
  const { openNav } = useHeaderSignal();
  const { contextSafe } = useGSAP();

  const handleOpenMenu = contextSafe((): void => {
    if (!navMobile.current) return;
    const list = navMobile.current.querySelectorAll('.js-menu-mobile');
    const lines = navMobile.current.querySelectorAll('.js-line');
    gsap.killTweensOf([list, lines, navMobile.current]);

    gsap.to(navMobile.current, {
      display: 'block',
    });
    gsap.to(navMobile.current, {
      duration: 0.6,
      opacity: 1,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.fromTo(
      list,
      {
        yPercent: 100,
      },
      {
        yPercent: 0,
        duration: 0.6,
        ease: 'power3.out',
        overwrite: 'auto',
        stagger: {
          amount: 0.15,
        },
      }
    );
    gsap.fromTo(
      lines,
      {
        scaleX: 0,
      },
      {
        scaleX: 1,
        ease: 'power3',
        delay: 0.2,
        duration: 0.6,
        overwrite: 'auto',
        transformOrigin: 'center center',
        stagger: {
          amount: 0.15,
        },
      }
    );
  });

  const handleCloseMenu = contextSafe((): void => {
    if (!navMobile.current) return;
    const list = navMobile.current.querySelectorAll('.js-menu-mobile');
    const lines = navMobile.current.querySelectorAll('.js-line');
    gsap.killTweensOf([list, lines, navMobile.current]);

    gsap.to(list, {
      yPercent: -100,
      overwrite: 'auto',
      ease: 'power3.inOut',
      stagger: {
        amount: 0.15,
      },
    });
    gsap.to(lines, {
      scaleX: 0,
      ease: 'power3',
      overwrite: 'auto',
      stagger: {
        amount: 0.15,
      },
    });
    gsap.to(navMobile.current, {
      delay: 0.5,
      opacity: 0,
      duration: 0.3,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.to(navMobile.current, {
      display: 'none',
      delay: 0.65,
    });
  });

  useSignalEffect(() => {
    if (openNav.value) {
      window.lenis?.stop();
      handleOpenMenu();
    } else {
      window.lenis?.start();
      handleCloseMenu();
    }
  });
  return (
    <nav ref={navMobile} className={`${s.mobileNav} `}>
      <div className={s.mobileNav_nav}>
        {navList.map((item, index) => (
          <ItemMobile
            name={item.name}
            link={item.link as TSection}
            isMid={index === 1}
            key={item.name}
          />
        ))}
      </div>
    </nav>
  );
}
 */