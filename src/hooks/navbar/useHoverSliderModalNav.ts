import {gsap} from "gsap"


interface IUseHoverSliderModalNav {
    nextState: number,
    prevState: number,
    navbarModalImages: Element[],
    indexOfSlider: any
}
export const useHoverSliderModalNav = ({ nextState, prevState, navbarModalImages, indexOfSlider }: IUseHoverSliderModalNav) => {
    let cloneDom = navbarModalImages
    gsap.timeline()
        .set(cloneDom[nextState], { zIndex: indexOfSlider, opacity: 0, rotate: 5, scale: 1 })
        .to(
            cloneDom[nextState], {
            opacity: 1,
            rotate: 0,
            scale: 1.1,
            duration: .5,
            ease: "power3.out",
        }
        ).set(cloneDom[prevState], {
            clearProps: "opacity,rotate,scale"
        })
    return () => {
        cloneDom = []
    };
}