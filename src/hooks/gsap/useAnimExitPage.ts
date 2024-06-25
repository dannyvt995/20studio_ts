"use client"

import { gsap } from "gsap"
import { propsGsap } from "@Constants/gsap_props"

export function useAnimExitPage({ nodeChild }: { nodeChild:HTMLElement }) {
    let cloneNode : any = nodeChild
    let timeline : any
    timeline = gsap.timeline();

    timeline
        .set(cloneNode as HTMLElement, {
            ...propsGsap.brightness100,
        })
        .to(cloneNode as HTMLElement, {
            ...propsGsap.pageExit_tranform,
            ...propsGsap.brightness16,
            ...propsGsap.props_exitAnim
        });

    return () => {
        if (timeline) {
            timeline.kill();
            timeline = null;
        }
        if(cloneNode) {
            gsap.set(cloneNode as HTMLDivElement, { clearProps: 'all' });
            cloneNode = null
        }
    };
}