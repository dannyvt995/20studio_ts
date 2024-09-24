"use client"
import cn from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, memo, useCallback, useState } from 'react';
import s from './style.module.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import useStoreZustand from '@/hooks/useStoreZustand';
import { isMobile } from '@/utils/responsive';
import { usePathname } from 'next/navigation';
import IconSVG from '@/components/Icon/IconSVG';
import useStoreTimeline from '@/hooks/useStoreTimeline';
import {formatUrlForIconNavbar} from '@Utils/utils_url'
gsap.registerPlugin(useGSAP)
interface ButtonHoverNewProps {
    children: React.ReactNode;
    classAdd?: string;
    targetRedirect?: string;
    btnNavbar?: boolean;
    btnNavbarFooter?: boolean;
    data_id?: number;
    wrapper?: React.ReactNode;
}

const ButtonHoverNew: React.FC<ButtonHoverNewProps> = ({ children, wrapper, btnNavbarFooter, data_id, btnNavbar, targetRedirect, classAdd }) => {



    const linkRef = useRef<HTMLAnchorElement>(null);
    const labelRef = useRef<HTMLSpanElement>(null);
    const timelineRef = useRef<gsap.core.Timeline>()
    const router = useRouter()
    const easeOps = "power3.inOut"
    const durationOps = 0.5

    const timelineStore = useStoreTimeline((state) => state.timelines);
    const setOtherTimeline = useStoreTimeline((state) => state.setOtherTimeline);
    const getAllTimelines = useStoreTimeline((state) => state.getAllTimelines)
    const { contextSafe } = useGSAP({ scope: linkRef });
    const pathName = usePathname()
    const refIconNavbar = useRef<any>(null)
    const { stateTransition,selectedItemNavbar,setStateMenuIsOpen } = useStoreZustand()
    const isActiveRef = useRef<boolean>(false)
    const currentPath = useRef<string>('/none')
    const [isMobi,setIsMobi] = useState(false)
    useEffect(() => {
        if(isMobile()) setIsMobi(true)
    },[])
    useEffect(() => {

        const {currentPathFormatted} = formatUrlForIconNavbar({cur:pathName,tar:'none'})
        timelineRef.current = gsap.timeline({ paused: true });
        timelineRef.current.fromTo(linkRef.current, {
            "--line-width": "0%",
            "--line-left": "0%",
        }, {
            "--line-width": "100%",
            duration: durationOps,
            ease: easeOps,
        });

        timelineRef.current.add("midway");
        timelineRef.current.fromTo(linkRef.current, {
            "--line-width": "100%",
            "--line-left": "0%",

        }, {
            "--line-width": "0%",
            "--line-left": "100%",
            duration: durationOps,
            ease: easeOps,
            immediateRender: false,
        });
      
       
        if (btnNavbar && !isMobile()) {
            let timeline = gsap.timeline({paused:true}).fromTo(
                refIconNavbar.current,
                { rotate:0,scale:0},
                { rotate:90,scale:1,y:"-50%",x: "72%",duration:.5 }
            ).fromTo(
                labelRef.current,
                { x:0 },
                { x:42,duration:.5 },"<"
            )
            timeline.name = targetRedirect;
            timeline.reverse()
            setOtherTimeline(timeline.name, timeline);


            if(currentPathFormatted === targetRedirect) timeline.play()
        } 
       
        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();

            }
        }
    }, [])


    useEffect(() => {
        isActiveRef.current = (pathName === targetRedirect) || (pathName === '/' && targetRedirect === '/home');
    },[pathName])
  
    useEffect(() => {

        if (isMobi) return
        if (stateTransition !== 'entered') return

        const enterAnimation = contextSafe((e: any) => {
            if (timelineRef.current) {
                if(pathName !== targetRedirect) {
                    timelineRef.current.tweenFromTo(0, "midway");
                }
              
            }
        });

        const leaveAnimation = contextSafe(() => {
            if (timelineRef.current) {
                timelineRef.current.play();
            }
        });

        if (linkRef.current ) {
           //^^console.log("%c=>>AddListenerToButton","color:blue;border:1px solid gray")
            linkRef.current.addEventListener('mouseenter', enterAnimation);
            linkRef.current.addEventListener('mouseleave', leaveAnimation);
        }

        return () => {

            if (linkRef.current) {
               //^^console.log("%c<<=RemoveListenerOfButton","color:blue;border:1px solid gray")
                linkRef.current.removeEventListener('mouseenter', enterAnimation);
                linkRef.current.removeEventListener('mouseleave', leaveAnimation);
            }
        };
    }, [stateTransition, pathName]);

   
    const handleRedirect = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        // không set  event.preventDefault(); 
        // vì cho funct này chạy song song với e mặc định
        if (timelineRef.current) {
            timelineRef.current.play();
        }
      
    }, []);

    // useEffect(() => {
    //     // Prefetch 
    //     router.prefetch(targetRedirect as string)
    //   }, [router])

    const handleRedirectFromNavbar = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
       // event.preventDefault();
      
        if(pathName === targetRedirect) {
            //^^console.log("Trung")
            return
        }

    
      
        const elW = document.getElementById("main_navbar")
        if (elW) elW.style.pointerEvents = 'none'
        //  setStateMenuIsOpen(true)

        localStorage.setItem('isOpenNav','true')
       // router.push(targetRedirect || '#')
        if (timelineRef.current) {
            timelineRef.current.play();
        }
      
        timelineStore['navbarModal']?.reversed(!timelineStore['navbarModal'].reversed());
        timelineStore['btnNavbarOpen']?.reversed(!timelineStore['btnNavbarOpen'].reversed())
        timelineStore['btnNavbarClose']?.reversed(!timelineStore['btnNavbarClose'].reversed())
        timelineStore['navbarDesListOn']?.restart().play(0)

       
    }, [timelineStore]);

    return (
        <Link
      
            onClick={btnNavbar ? handleRedirectFromNavbar : handleRedirect}
        //    href={btnNavbar ? '#' : (targetRedirect || '#')}
            href={targetRedirect ? targetRedirect : '#'} 
            ref={linkRef}
            className={cn(s.btn_hover_underline, classAdd)}
            data-link={btnNavbar ? data_id : 'none'}
          //  style={isActiveRef.current ? {userSelect: "none"} : {}}
        >
            {btnNavbar ? <span ref={refIconNavbar} className={isActiveRef.current && isMobi ? cn(s.iconBtnNavbar,s.active2) : s.iconBtnNavbar} >
                <IconSVG src='/icon/star.svg' /></span> : <></>}
            {btnNavbarFooter  ? 
                <span className={s.iconBtnNavbar}>
                    {isActiveRef.current ? <IconSVG src='/icon/star.svg' /> : <></>}
                </span> 
            : <></>}


            <span className={isActiveRef.current && isMobi ? cn(s.label,s.active1) : s.label} ref={labelRef}>{children}</span>

        </Link>
    );
};

export default memo(ButtonHoverNew);
