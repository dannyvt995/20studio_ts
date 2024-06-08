"use client"
import { gsap } from "gsap"

export function useEnterDetailProject({ node }: { node: HTMLElement }) {
    let cloneNode: any = node
    let timeline: any
    timeline = gsap.timeline();
    timeline
        .set(node, {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
        })

    // Return a cleanup function
    return () => {
        timeline = null
        cloneNode = null
    };
}