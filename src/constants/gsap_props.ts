"use client"
export const timeTransitionPage = 1.234
export const easeTransitionPage = "power3.inOut"
export const delayFirstLoadAfterLoadingPage = 500
export const propsGsapTransitionPage = {
    pathOpen: {
        clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'
    },
    pathTop: {

    },
    pathBot: {
        clipPath: 'polygon(0% 100%, 100% 110%, 100% 100%, 0% 100%)'
    },
    config: {

        duration: timeTransitionPage,
        ease: easeTransitionPage
    },
    props_exitAnim: {

        duration: timeTransitionPage,
        ease: easeTransitionPage
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
        y: typeof window !== 'undefined' ? -window.innerHeight / 1.5 : 0,
        scale: 1.5,
    },
    pageEnter_tranform: {
        rotate: 7,
        y: typeof window !== 'undefined' ? window.innerHeight / 1.5 : 0,
        scale: 1.5,
    }
}

export const propsGsapNavbar = {
    props_openNav: {
        duration: 1.123,
        ease: easeTransitionPage
    },
    props_CloseNav: {
        duration: timeTransitionPage,
        ease: easeTransitionPage
    },
    props_Filter_Light: {
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
    },
    props_Filter_Shadow: {
        '-webkit-filter': 'brightness(16%)',
        filter: 'brightness(16%)',
    }
}