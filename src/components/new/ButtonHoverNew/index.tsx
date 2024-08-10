"use client"
import cn from 'classnames';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import s from './style.module.css';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(useGSAP)
interface ButtonHoverNewProps {
    children: React.ReactNode;
    classAdd?: string;
    targetRedirect?:string;
}

const ButtonHoverNew: React.FC<ButtonHoverNewProps> = ({ children,targetRedirect,classAdd }) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const timelineRef = useRef<any>(null)
    const easeOps = "power4.inOut"
    const durationOps = 0.5
    const { contextSafe } = useGSAP({ scope: linkRef }); 
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

        const enterAnimation = contextSafe(() => {
            timelineRef.current.tweenFromTo(0, "midway");

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

  
    return (
        <Link href={targetRedirect ? targetRedirect : '#'} ref={linkRef} className={cn(s.btn_hover_underline,classAdd)}>
            {children}
        </Link>
    );
};

export default ButtonHoverNew;
