import {memo, useEffect,useRef} from 'react'
import s from './style.module.css'

import Link from 'next/link';
import cn from 'classnames';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import useStoreZustand from '@/hooks/useStoreZustand';
import { isMobile } from '@/utils/responsive';
import WrapperTrackMouse from '../WrapperTrackMouse';

gsap.registerPlugin(useGSAP)
interface ButtonHoverNew2Props {
    children: React.ReactNode;
    icon: React.ReactNode;
    classAdd?: string;
    targetRedirect?:string;
}

const ButtonHoverNew2: React.FC<ButtonHoverNew2Props> = ({ children,icon,targetRedirect,classAdd }) => {
  const linkRef = useRef<any>()
  const { contextSafe } = useGSAP({ scope: linkRef }); 
  const {stateTransition} = useStoreZustand()



  useEffect(() => {
     
    if(stateTransition !== 'entered') return
  
    if(isMobile()) return
    const enterAnimation = contextSafe(() => {
        gsap.timeline({
          defaults:{   duration:.5 , ease:"power3.out"}
        })
        .to(`.${s.text}`,{
          "--line-width" : "0%",
          x:15,
    
        })
        .to(`.${s.icon}`,{
          opacity:1,
          x:"-155%",
     
        },"<")
      .to(`.${s.circleZoom}`,{
          background:'rgba(255,255,255,1)',
          scale:.9,
        
        },"<")
    });
    const leaveAnimation = contextSafe(() => {
      gsap.timeline({
        defaults:{   duration:.5 , ease:"power3.out"}
      })
      .to(`.${s.text}`,{
        "--line-width" : "100%",
        x:0,
   
      })
      .to(`.${s.icon}`,{
        opacity:0,
        x:"-300%",
   
      },"<")
      .to(`.${s.circleZoom}`,{
        transformOrigin: "center center",
        background:'rgba(0,0,0,1)',
       scale:0,
     
      },"<")
    });

    if (linkRef.current) {
        linkRef.current.addEventListener('mouseenter', enterAnimation);
        linkRef.current.addEventListener('mouseleave', leaveAnimation);
    }

    return () => {
        if (linkRef.current) {
            linkRef.current.removeEventListener('mouseenter', enterAnimation);
            linkRef.current.removeEventListener('mouseleave', leaveAnimation);
        }
    };
}, [stateTransition]);


  return (
    <WrapperTrackMouse classAdd={classAdd}>
 <Link   ref={linkRef} href={targetRedirect ? targetRedirect : '#'} className={cn(s.btn_hover_underline2)}>
        <div className={s.icon}>{icon}</div>
        <div className={s.outline}>
          <svg viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg" className={s.circle_outline} data-v-5152decb=""><circle cx="25" cy="25" r="23" data-v-5152decb=""></circle></svg>
          <div className={s.circleZoom}></div>
        </div>
        <div className={s.text}>{children}</div>
    </Link>

    </WrapperTrackMouse>
   
  )
}
export default memo(ButtonHoverNew2);
