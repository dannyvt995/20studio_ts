"use client"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect,useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);


const useAnimationHeading = () => {
  const scopeRef = useRef<any>([]);
  const triggleRef = useRef<any>([]);
  const listDomRef = useRef<any>([]);
  const timelineRef = useRef<any>([]);

  useEffect(() => {
    const scopeElements = Array.from(document.querySelectorAll(".project_text"));
    scopeRef.current = scopeElements;

    scopeElements.forEach((element, index) => {
      const listDom = Array.from(element.querySelectorAll(".title-line"));
      listDomRef.current[index] = listDom;
      const triggle = element.querySelector(".title");
      triggleRef.current[index] = triggle;

      const timeline = gsap.timeline({
        scrollTrigger: {
          scroller: "#work1page",
          trigger: triggle,
          start: "top 80%",
          end: "bottom 42%",
          scrub: true,
        },
      })
      .set(listDom, { rotateZ: 10 })
      .to(listDom, { y: 0, rotateZ: 0, transformOrigin: "left 50%", stagger: 0.1 }, 0);

      timelineRef.current[index] = timeline;
    });

    return () => {
      scopeRef.current = [];
      triggleRef.current = [];
      listDomRef.current = [];
      timelineRef.current = [];
    };
  }, []); // Empty dependency array to run only on mount
};

export default useAnimationHeading;