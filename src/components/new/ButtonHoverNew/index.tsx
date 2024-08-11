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

gsap.registerPlugin(useGSAP)
interface ButtonHoverNewProps {
    children: React.ReactNode;
    classAdd?: string;
    targetRedirect?:string;
    btnNavbar?:boolean;
    data_id?:number;
}

const ButtonHoverNew: React.FC<ButtonHoverNewProps> = ({ children,data_id,btnNavbar,targetRedirect,classAdd }) => {
      
    console.log("re-redner")

    const linkRef = useRef<HTMLAnchorElement>(null);
    const timelineRef = useRef<any>(null)
    const router = useRouter()
    const easeOps = "power4.inOut"
    const durationOps = 0.5
    const { selectedItemNavbar } = useStoreZustand();
    const { contextSafe } = useGSAP({ scope: linkRef }); 
    useEffect(() => {
        if(isMobile()) return
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

        const enterAnimation = contextSafe((e:any) => {
            timelineRef.current.tweenFromTo(0, "midway");
            if(btnNavbar) selectedItemNavbar(data_id as number);

        });
        const leaveAnimation = contextSafe(() => {
            timelineRef.current.play();
        });

        if (linkRef.current) {
            linkRef.current.addEventListener('mouseenter', enterAnimation);
            linkRef.current.addEventListener('mouseleave', leaveAnimation);
        }

        return () => {
            if(timelineRef.current) timelineRef.current = null
            if (linkRef.current) {
                linkRef.current.removeEventListener('mouseenter', enterAnimation);
                linkRef.current.removeEventListener('mouseleave', leaveAnimation);
            }
        };
    }, []);

    const handleRedirectFromNavbar = useCallback((event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        if (window.timelineNavbar) {
            window.timelineNavbar.reversed(!window.timelineNavbar.reversed());
            router.push(targetRedirect || '#');
        }
    }, []);
   
    return (
        <Link  
            onClick={btnNavbar ? handleRedirectFromNavbar : undefined} 
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
