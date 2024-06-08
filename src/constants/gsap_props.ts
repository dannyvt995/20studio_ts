"use client"
const timeTransition = 1.5
const easeTransition = "power4.out"
export const propsGsap = {
    pathOpen: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    },
    pathTop: {

    },
    pathBot: {
        clipPath: 'polygon(0% 100%, 100% 110%, 100% 100%, 0% 100%)'
    },
    config: {

        duration: timeTransition,
        ease: easeTransition
    },
    props_exitAnim: {

        duration: timeTransition,
        ease: easeTransition
    },
    brightness100: {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
    },
    brightness16: {
        '-webkit-filter': 'brightness(16%)',
        filter: 'brightness(16%)',
    },
    pageDefault: {
        rotate: 0,
        y: 0,
        x: 0,
        scale: 1,
    },
    pageExit_tranform: {
        rotate: -7,
        y: typeof window !== 'undefined' ? -window.innerHeight / 2 : 0,
        scale: 1.2,
    },
    pageEnter_tranform: {
        rotate: 7,
        y: typeof window !== 'undefined' ? window.innerHeight / 2 : 0,
        scale: 1.2,
    }
}
