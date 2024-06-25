"use client"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect,useRef } from 'react';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const useAnimationParagraph = () => {
  const scopeRef = useRef<any>(null);
  const triggleRef = useRef<any>(null);
  const listDomRef = useRef<any>(null);
  const timelineRef = useRef<any>(null);

  useEffect(() => {
    scopeRef.current = Array.from(document.querySelectorAll('.project_text'));

    scopeRef.current.forEach((element:any) => {
      listDomRef.current = Array.from(element.querySelectorAll('p > span > span'));
      triggleRef.current = element.querySelector('p');

      timelineRef.current = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: '#work1page',
          trigger: triggleRef.current,
          start: 'top 86%',
          end: 'bottom 42%',
          scrub: true,
        },
      })
        .set(listDomRef.current, { rotateZ: 4.2 })
        .to(listDomRef.current, { 
          y: 0, 
          rotateZ: 0,
          rotateX: 0,
          stagger: 0.1 
        }, 0);
    });

    return () => {
      scopeRef.current = null;
      triggleRef.current = null;
      listDomRef.current = null;
      timelineRef.current = null;
    };
  }, []); // Empty dependency array to run only on mount

};

export default useAnimationParagraph;
