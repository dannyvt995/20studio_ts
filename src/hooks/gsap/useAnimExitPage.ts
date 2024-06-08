"use client"

import { gsap } from "gsap"
import { propsGsap } from "@Constants/gsap_props"

export function useAnimExitPage({ node }: { node: HTMLElement }) {
    let cloneNode :any = node
    let timeline : any
    timeline = gsap.timeline();

    timeline
        .set(cloneNode.children[0] as HTMLElement, {
            ...propsGsap.brightness100,
        })
        .to(cloneNode.children[0] as HTMLElement, {
            ...propsGsap.pageExit_tranform,
            ...propsGsap.brightness16,
            ...propsGsap.props_exitAnim
        });

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