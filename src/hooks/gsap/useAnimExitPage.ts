"use client"

import { gsap } from "gsap"
import { propsGsapTransitionPage } from "@Constants/gsap_props"

export function useAnimExitPage({ nodeChild }: { nodeChild:HTMLElement }) {
    let cloneNode : any = nodeChild
    let timeline : any
    timeline = gsap.timeline();

    timeline
        .set(cloneNode as HTMLElement, {
            ...propsGsapTransitionPage.brightness100,
        })
        .to(cloneNode as HTMLElement, {
            ...propsGsapTransitionPage.pageExit_tranform,
            ...propsGsapTransitionPage.brightness16,
            ...propsGsapTransitionPage.props_exitAnim
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