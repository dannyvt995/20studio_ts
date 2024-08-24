"use client"

import { propsGsapTransitionPage } from "@Constants/gsap_props"
import { gsap } from "gsap"

export function useAnimEnterPage({ node, indexRef }: { node: HTMLDivElement, indexRef: any }) {

    let cloneNode: any = node
    let cloneNodeChild: any = cloneNode.children[0]
    let cloneNodeParent: any = cloneNode.parentNode
    // -+- console.log("indexRef", indexRef)
    let timeline: any
    timeline = gsap.timeline();
    timeline
        .set(cloneNodeParent as HTMLDivElement, { zIndex: indexRef })
        .set(cloneNode, { ...propsGsapTransitionPage.pathBot })
        .set(cloneNodeChild as HTMLDivElement, {
            ...propsGsapTransitionPage.pageEnter_tranform,
            ...propsGsapTransitionPage.brightness100,
        })
        .to(cloneNode as HTMLDivElement, {
            ...propsGsapTransitionPage.pathOpen,
            ...propsGsapTransitionPage.config
        })
        .to(cloneNodeChild as HTMLDivElement, {
            ...propsGsapTransitionPage.pageDefault,
            ...propsGsapTransitionPage.brightness100,
            ...propsGsapTransitionPage.config
        }, '<')

    return () => {
        if (timeline) {
            timeline.kill();
            timeline = null;
        }
        if (cloneNodeParent) {
            cloneNodeParent = null
        }
        if (cloneNodeChild) {
            gsap.set(cloneNodeChild as HTMLDivElement, { clearProps: 'all' }); // Clear all applied properties
            cloneNodeChild = null;
        }
    };
}