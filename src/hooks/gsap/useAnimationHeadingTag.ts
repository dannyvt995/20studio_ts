


"use client"
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const useAnimationHeadingTag = () => {

  let Scope
  let Triggle
  let Icon
  let NameTag
  let Timeline
  useEffect(() => {
    Scope = Array.from(document.querySelectorAll(".project_text"));

    Scope.forEach((element) => {
      Triggle = element.querySelector("h3")
      Icon = element.querySelector("h3 > svg")
      NameTag = element.querySelector("h3 > .text")

      Timeline = gsap.timeline({
        scrollTrigger: {
          scroller: "#work1page",
          trigger: Triggle,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      })
        .set(NameTag, { scale: 0.5 })
        .set(Icon, { rotate: 72 })
        .to(Triggle, { opacity: 1 })
        .to(NameTag, { scale: 1 }, "<")
        .to(Icon, { rotate: 0 }, "<")

    })
    return () => {
      Scope = null
      Icon = null
      NameTag = null
      Triggle = null
      Timeline = null
    }
  },[])
};
export default useAnimationHeadingTag