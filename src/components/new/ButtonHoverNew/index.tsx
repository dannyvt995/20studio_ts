"use client"
import cn from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, memo,useCallback } from 'react';
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
    targetRedirect?:string;
    btnNavbar?:boolean;
    btnNavbarFooter?:boolean;
    data_id?:number;
    isActive?:boolean
}

const ButtonHoverNew: React.FC<ButtonHoverNewProps> = ({ children,btnNavbarFooter,data_id,btnNavbar,targetRedirect,classAdd }) => {
      


    const linkRef = useRef<HTMLAnchorElement>(null);
    const timelineRef = useRef<gsap.core.Timeline>()
    const router = useRouter()
    const easeOps = "power3.inOut"
    const durationOps = 0.5
    const { selectedItemNavbar } = useStoreZustand();
    const { contextSafe } = useGSAP({ scope: linkRef }); 
    const pathName = usePathname()
    const mainNavbar = useRef<any>(null)
     const {stateTransition} = useStoreZustand()
     const isActiveRef = useRef<boolean>(false)
    useEffect(() => {
     
        if(btnNavbar){
            mainNavbar.current = document.getElementById("main_navbar")
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
    },[])

  

    useEffect(() => {
        isActiveRef.current = (pathName === targetRedirect) || (pathName === '/' && targetRedirect === '/home');
    }, [pathName]);

    useEffect(() => {
       
   
        if(isMobile()) return
        if(stateTransition !== 'entered') return
      
   
        
   
        const enterAnimation = contextSafe((e:any) => {
            if(timelineRef.current) {
                timelineRef.current.tweenFromTo(0, "midway");
                if(btnNavbar) selectedItemNavbar(data_id as number);
            }

          
        });

        const leaveAnimation = contextSafe(() => {
            if(timelineRef.current) {
                timelineRef.current.play();
            }
        });

        if (linkRef.current && pathName !== targetRedirect) {
            console.log("%cAddListenerToButton","color:yellow;border:1px solid white")
            linkRef.current.addEventListener('mouseenter', enterAnimation);
            linkRef.current.addEventListener('mouseleave', leaveAnimation);
        }

        return () => {
         
            if (linkRef.current) {
                console.log("%cRemoveListenerOfButton","color:yellow;border:1px solid white")
                linkRef.current.removeEventListener('mouseenter', enterAnimation);
                linkRef.current.removeEventListener('mouseleave', leaveAnimation);
            }
        };
    }, [stateTransition,pathName]);

    const handleRedirect = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
       // không set  event.preventDefault(); 
       // vì cho funct này chạy song song với e mặc định
        if(timelineRef.current) {
            timelineRef.current.play();
        }
    }, []);
    const handleRedirectFromNavbar = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
    
        mainNavbar.current.style.pointerEvents =  'none'
        if(timelineRef.current) {
            timelineRef.current.play();
        }
        if (window.timelineNavbarModal && window.timelineBtnNavbar && window.timelineNavbarItem) {
            window.timelineNavbarModal.reversed(!window.timelineNavbarModal.reversed());
            window.timelineBtnNavbar.reversed(!window.timelineBtnNavbar.reversed());
            window.timelineNavbarItem.reversed(!window.timelineNavbarItem.reversed())
            router.push(targetRedirect || '#')
        }else{
            alert("Err on window var global >>>>>>>>")
        }
    }, []);
   
    return (
        <Link  
            onClick={btnNavbar ? handleRedirectFromNavbar : handleRedirect} 
            href={btnNavbar ? '#' : (targetRedirect || '#')} 
            ref={linkRef} 
            className={cn(s.btn_hover_underline,classAdd)}
            data-link={btnNavbar ? data_id : 'none'}
        >
            {btnNavbar ? <span className={s.iconBtnNavbar} style={isActiveRef.current ? {display:'flex'} : {}}><IconSVG src='/icon/star.svg' /></span> : <></>}
            {btnNavbarFooter ? <span className={s.iconBtnNavbar} style={isActiveRef.current ? {display:'flex'} : {}}><IconSVG src='/icon/star.svg' /></span> : <></>}
            {children}
            
        </Link>
    );
};

export default memo(ButtonHoverNew);
