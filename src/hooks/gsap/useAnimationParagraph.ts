"use client"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

// Initialize ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const useAnimationParagraph = () => {

  let Scope
  let Triggle
  let ListDom
  let Timeline
  useEffect(() => {
    Scope = Array.from(document.querySelectorAll(".project_text"));

    Scope.forEach((element) => {
      ListDom = Array.from(element.querySelectorAll("p > span > span"));
      Triggle = element.querySelector("p")

      Timeline = gsap.timeline({
        paused: true,
        scrollTrigger: {
          scroller: "#work1page",
          trigger: Triggle,
          start: "top 86%",
          end: "bottom 42%",
          //toggleActions: "play play reverse reverse",
          /*    markers: true, */
          scrub: true
        }
      })
        .set(ListDom,{rotateZ: 4.2})
        .to(ListDom, { 
          y: 0, 
          rotateZ: 0,
          rotateX: 0,
          stagger: 0.1
         }, 0);


    })
    return () => {
      Scope = null
      Triggle = null
      ListDom = null
      
      Timeline = null
    }
  },[])
 
};
export default useAnimationParagraph

