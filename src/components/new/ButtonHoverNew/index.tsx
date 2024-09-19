"use client"
import cn from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, memo, useCallback } from 'react';
import s from './style.module.css';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRouter } from 'next/navigation';
import useStoreZustand from '@/hooks/useStoreZustand';
import { isMobile } from '@/utils/responsive';
import { usePathname } from 'next/navigation';
import IconSVG from '@/components/Icon/IconSVG';
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
    const timelineRef = useRef<gsap.core.Timeline>()
    const router = useRouter()
    const easeOps = "power3.inOut"
    const durationOps = 0.5

    const { contextSafe } = useGSAP({ scope: linkRef });
    const pathName = usePathname()
    const refIconNavbar = useRef<any>(null)
    const { stateTransition } = useStoreZustand()
    const isActiveRef = useRef<boolean>(false)
    const savePath = useRef<string>()

    useEffect(() => {

        //init timeline for icon
        if (!window.timelineIconNav) {
            window.timelineIconNav = []; // Khởi tạo nếu chưa có
        }
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

        return () => {
            if (timelineRef.current) {
                timelineRef.current.kill();

            }
        }
    }, [])



    useEffect(() => {

        if(pathName === '/work/work1' || pathName === '/work/work2' || pathName === '/work/work3' || pathName === '/work/work4') {
            savePath.current = '/work'
        }else{
            savePath.current = pathName
        }

        isActiveRef.current = (pathName === targetRedirect) || (pathName === '/' && targetRedirect === '/home');
    }, [pathName]);


  
    useEffect(() => {
        if(window.timelineIconNav.length > 5) {
            console.log("window.timelineIconNav.length > 5 !!")
            return
        }else{
            if (btnNavbar && window.timelineIconNav) {
                // Tạo một timeline mới
                let timeline = gsap.timeline({paused:true}).fromTo(
                    refIconNavbar.current,
                    { rotate:0,scale:0,y:"-50%",x:"-50%" },
                    { rotate:90,scale:1,y:"-50%",x:"-50%",duration:.5 }
                ).fromTo(
                    linkRef.current,
                    { x:0 },
                    { x:40,duration:.5 },"<"
                )
                timeline.name = targetRedirect;
              
                timeline.reverse()
                window.timelineIconNav.push(timeline)
             
            }   
        }
      
    }, []);
    useEffect(() => {
        if(btnNavbar) {
            if(window.timelineIconNav && window.timelineIconNav.length > 4) {
                console.log("one time")
                let timelineCC = window.timelineIconNav.find((t:any) => t.name === savePath.current);
               if(timelineCC)  timelineCC.play()
            }
        }
       
    },[savePath.current])
    useEffect(() => {


        if (isMobile()) return
        if (stateTransition !== 'entered') return




        const enterAnimation = contextSafe((e: any) => {
            if (timelineRef.current) {
                timelineRef.current.tweenFromTo(0, "midway");
                if (btnNavbar) {
                    //  selectedItemNavbar(data_id as number);

                }

            }


        });

        const leaveAnimation = contextSafe(() => {
            if (timelineRef.current) {
                timelineRef.current.play();
            }

        });

        if (linkRef.current && pathName !== targetRedirect) {
            // --^^ console.log("%c=>>AddListenerToButton","color:blue;border:1px solid gray")
            linkRef.current.addEventListener('mouseenter', enterAnimation);
            linkRef.current.addEventListener('mouseleave', leaveAnimation);
        }

        return () => {

            if (linkRef.current) {
                // --^^ console.log("%c<<=RemoveListenerOfButton","color:blue;border:1px solid gray")
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
        if(!btnNavbar &&  window.timelineIconNav) {
            if(window.timelineIconNav && window.timelineIconNav.length > 4) {
          
                let timelineCurrent = window.timelineIconNav.find((t:any) => t.name === savePath.current);
           
           
                timelineCurrent.reversed(!timelineCurrent.reversed())
          
            }
        }

    }, []);
    const handleRedirectFromNavbar = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        console.log("handleRedirectFromNavbar")
        if(btnNavbar &&  window.timelineIconNav) {
            if(window.timelineIconNav && window.timelineIconNav.length > 4) {
          
                let timelineCurrent = window.timelineIconNav.find((t:any) => t.name === savePath.current);
                let timelineNext = window.timelineIconNav.find((t:any) => t.name === targetRedirect);
           
                timelineCurrent.reversed(!timelineCurrent.reversed())
                timelineNext.reversed(!timelineCurrent.reversed())
          
            }
        }
      
        const elW = document.getElementById("main_navbar")
        if (elW) elW.style.pointerEvents = 'none'

        if (timelineRef.current) {
            timelineRef.current.play();
        }
        router.push(targetRedirect || '#')
        if (window.timelineNavbarModal && window.timelineBtnNavbar && window.timelineNavbarItem) {

            window.timelineNavbarModal.reversed(!window.timelineNavbarModal.reversed());
            window.timelineBtnNavbar.reversed(!window.timelineBtnNavbar.reversed());
            window.timelineNavbarItem.restart().play(0)

        } else {
            alert("Err on window var global >>>>>>>>")
        }
    }, []);

    return (
        <Link

            onClick={btnNavbar ? handleRedirectFromNavbar : handleRedirect}
            href={btnNavbar ? '#' : (targetRedirect || '#')}
            ref={linkRef}
            className={cn(s.btn_hover_underline, classAdd)}
            data-link={btnNavbar ? data_id : 'none'}
        >
            {btnNavbar ? <span ref={refIconNavbar} className={s.iconBtnNavbar}>
                <IconSVG src='/icon/star.svg' /></span> : <></>}
            {btnNavbarFooter ? <span className={isActiveRef.current ? `${s.iconBtnNavbar}  ${s.activeShowIcon}` : s.iconBtnNavbar}>
                <IconSVG src='/icon/star.svg' /></span> : <></>}


            {children}

        </Link>
    );
};

export default memo(ButtonHoverNew);
