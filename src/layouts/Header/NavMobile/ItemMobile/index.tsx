/* import { useHeaderSignal } from '@Layouts/Header/useHeaderSignal';
import cn from 'classnames';
import React from 'react';

import { TypographyBody } from '@/components/Typography';
import { TSection } from '@/types/common';
import { easingScrolling } from '@/utils/uiHelper';

import { HeaderProxy } from '../..';
import { isSoundUnderState } from '../../SoundIcon';
import s from './styles.module.scss';

type INavItem = {
  name: string;
  link: TSection;
  isMid: boolean;
};

export default function ItemMobile({ name, isMid, link }: INavItem): React.ReactElement {
  const { openNav } = useHeaderSignal();

  const handleNavigate = (): void => {
    isSoundUnderState.value = true;
    openNav.value = false;
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
    <div className={s.itemMobile} onClick={handleNavigate}>
      {isMid ? (
        <>
          <div className={cn(s.itemMobile_line, s.itemMobile_line__top, 'js-line')} />
          <div className={s.itemMobile_inner}>
            <TypographyBody size={'36'} color="white" className="js-menu-mobile">
              {name}
            </TypographyBody>
          </div>
          <div className={cn(s.itemMobile_line, s.itemMobile_line__bottom, 'js-line')} />
        </>
      ) : (
        <div className={s.itemMobile_inner}>
          <TypographyBody size={'36'} color="white" className="js-menu-mobile">
            {name}
          </TypographyBody>
        </div>
      )}
    </div>
  );
}
 */