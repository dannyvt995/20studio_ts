"use client"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useAnimationHeading = () => {
  
  let Scope
  let Triggle
  let ListDom
  let Timeline
  useEffect(() => {
    Scope = Array.from(document.querySelectorAll(".project_text"));
 
    Scope.forEach((element) => {
      ListDom = Array.from(element.querySelectorAll(".title-line"));
      Triggle = element.querySelector(".title")
     
  
  
      Timeline = gsap.timeline({
       scrollTrigger: {
        scroller: "#work1page",
        trigger: Triggle,
        start: "top 80%",
        end: "bottom 42%",
  
        scrub: true
       }
      })
      .set(ListDom,{rotateZ: 10})
      .to(ListDom, { y: 0, rotateZ:0,transformOrigin:"left 50%",stagger: 0.1 }, 0);
  
   
    })
    return () => {
      Scope = null
      Triggle= null
      ListDom= null
      
      Timeline = null
    }
  },[])
};
export default useAnimationHeading

