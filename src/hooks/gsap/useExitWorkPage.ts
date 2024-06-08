"use client"
import { gsap } from "gsap"
import { propsGsap } from "@Constants/gsap_props"

export function useExitWorkPage({ node,indexWork }: { node: HTMLElement,indexWork:number }) {
    let timeline,title,subtitle,thumbnail,background
    
    title = node.children[0].children[0].children[0].children[0].children[indexWork]
    subtitle = node.children[0].children[0].children[0].children[1].children[indexWork]
    thumbnail = node.children[0].children[0].children[2]
    background = node.children[0].children[0].children[3].children[indexWork].children[0].children[0]
    timeline = gsap.timeline()
    timeline
    .set(thumbnail, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    }).to(
        background, {
      scale: 1,
      ...propsGsap.props_exitAnim
    }
    ).to(
        thumbnail, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
      ...propsGsap.props_exitAnim
    }, "<")
    .to(
      [title, subtitle], {
      opacity: 0,
      ...propsGsap.props_exitAnim
    }, "<")  
  
  
    return () => {
        timeline = null
        title = null
        subtitle = null
        thumbnail = null
        background = null
    };
}