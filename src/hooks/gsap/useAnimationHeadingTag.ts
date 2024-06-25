


"use client"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect,useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useAnimationHeadingTag = () => {
  const scopeRef = useRef<any>([]);
  const triggleRef = useRef<any>([]);
  const iconRef = useRef<any>([]);
  const nameTagRef = useRef<any>([]);
  const timelineRef = useRef<any>([]);

  useEffect(() => {
    const scopeElements = Array.from(document.querySelectorAll(".project_text"));
    scopeRef.current = scopeElements;

    scopeElements.forEach((element, index) => {
      const triggle = element.querySelector("h3");
      const icon = element.querySelector("h3 > svg");
      const nameTag = element.querySelector("h3 > .text");
      
      triggleRef.current[index] = triggle;
      iconRef.current[index] = icon;
      nameTagRef.current[index] = nameTag;

      const timeline = gsap.timeline({
        scrollTrigger: {
          scroller: "#work1page",
          trigger: triggle,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      })
        .set(nameTag, { scale: 0.5 })
        .set(icon, { rotate: 72 })
        .to(triggle, { opacity: 1 })
        .to(nameTag, { scale: 1 }, "<")
        .to(icon, { rotate: 0 }, "<");

      timelineRef.current[index] = timeline;
    });

    return () => {
      scopeRef.current = [];
      triggleRef.current = [];
      iconRef.current = [];
      nameTagRef.current = [];
      timelineRef.current = [];
    };
  }, []); // Empty dependency array to run only on mount
};

export default useAnimationHeadingTag;