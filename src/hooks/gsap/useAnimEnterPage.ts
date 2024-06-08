"use client"

import { propsGsap } from "@Constants/gsap_props"
import { gsap } from "gsap"

export function useAnimEnterPage({ node, indexRef }: { node: HTMLDivElement, indexRef: any }) {
    
    let cloneNode :any = node
    let timeline:any
        timeline = gsap.timeline();
        timeline
        .set(cloneNode.parentNode as HTMLDivElement, { zIndex: indexRef })
        .set(cloneNode, { ...propsGsap.pathBot })
        .set(cloneNode.children[0] as HTMLDivElement, {
            ...propsGsap.pageEnter_tranform,
            ...propsGsap.brightness100,
        })
        .to(cloneNode as HTMLDivElement, {
            ...propsGsap.pathOpen,
            ...propsGsap.config
        })
        .to(cloneNode.children[0] as HTMLDivElement, {
            ...propsGsap.pageDefault,
            ...propsGsap.brightness100,
            ...propsGsap.config
        }, '<')

        return () => {
            if (timeline) {
                timeline.kill();
                timeline = null;
            }
            if (cloneNode) {
                gsap.set(cloneNode.children[0] as HTMLDivElement, { clearProps: 'all' }); // Clear all applied properties
                cloneNode = null;
            }
        };
}