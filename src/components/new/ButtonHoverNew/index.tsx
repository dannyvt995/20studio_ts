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
gsap.registerPlugin(useGSAP)
interface ButtonHoverNewProps {
    children: React.ReactNode;
    classAdd?: string;
    targetRedirect?:string;
    btnNavbar?:boolean;
    data_id?:number;
    isActive?:boolean
}

const ButtonHoverNew: React.FC<ButtonHoverNewProps> = ({ children,isActive,data_id,btnNavbar,targetRedirect,classAdd }) => {
      
    console.log("re-redner")

    const linkRef = useRef<HTMLAnchorElement>(null);
    const timelineRef = useRef<gsap.core.Timeline>()
    const router = useRouter()
    const easeOps = "power4.inOut"
    const durationOps = 0.5
    const { selectedItemNavbar } = useStoreZustand();
    const { contextSafe } = useGSAP({ scope: linkRef }); 
    const pathName = usePathname()
    
useEffect(() => {
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
},[linkRef.current])

    useEffect(() => {
        if(isMobile()) return
     
      

        const enterAnimation = contextSafe((e:any) => {
            if(timelineRef.current) {
                if(pathName !== targetRedirect) {
                    timelineRef.current.tweenFromTo(0, "midway");
                    if(btnNavbar) selectedItemNavbar(data_id as number);
                }
          
            }

          
        });

        const leaveAnimation = contextSafe(() => {
            if(timelineRef.current) {
                if(pathName !== targetRedirect) {
                    timelineRef.current.play();
                }
             
            }
        });

        if (linkRef.current ) {
            linkRef.current.addEventListener('mouseenter', enterAnimation);
            linkRef.current.addEventListener('mouseleave', leaveAnimation);
        }

        return () => {
       
            if (linkRef.current) {
                linkRef.current.removeEventListener('mouseenter', enterAnimation);
                linkRef.current.removeEventListener('mouseleave', leaveAnimation);
            }
        };
    }, [pathName]);

    const handleRedirect = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        if(timelineRef.current) {
            timelineRef.current.play();
        }
    }, []);
    const handleRedirectFromNavbar = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
     
       
        if (window.timelineNavbar) {
            window.timelineNavbar.reversed(!window.timelineNavbar.reversed());
            
            router.push(targetRedirect || '#')
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
            {children}
        </Link>
    );
};

export default memo(ButtonHoverNew);
