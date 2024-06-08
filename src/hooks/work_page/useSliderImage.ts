"use client"

import gsap from "gsap";

export const listPath = [
    // hidden
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    // ttb
    'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    // btt
    'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)'
]
export const filterBrightness = {
    light:{
        '-webkit-filter': 'brightness(100%)',
        filter: 'brightness(100%)',
    },
    dark:{
        '-webkit-filter': 'brightness(16%)',
        filter: 'brightness(16%)',
    }
}
interface IGsapEnter {
    ListChildTitle: Element[][];
    ListChildSubtitle: Element[][];
    ListThumbnail?: Element[];
}
interface IRunSlider {
    ListTitleRef: Element[];
    ListSubtitleRef: Element[];
    ListThumbnailRef: Element[];
    ListBackgroundRef: Element[];
    prevState: number;
    nextState: number;
  }
  
  interface IGsapSlider {
    indexOfSlider: React.MutableRefObject<number>;
    prevState: number;
    nextState: number;
    ListChildTitle: Element[][];
    ListChildSub: Element[][];
    ListChildThumbnail: Element[];
    ListBackgroundRef: Element[];
    durationAnimation?: number;
    StateLock?: React.MutableRefObject<boolean>;
    dir: number;
  }
  
  

export function loadAnimationEnterPage({ ListChildTitle, ListChildSubtitle, ListThumbnail }: IGsapEnter) {
    //list_child_title = list_child_subtitles
    let listTitle
    let listSubtitle : Element[][]

    listTitle = ListChildTitle
    listSubtitle = ListChildSubtitle

    listTitle.forEach((child: Element[], index: number) => {

        if (index === 0) {
            gsap.timeline().set(child, {
                yPercent: 0,
                opacity: 1,
            })
                .set(listSubtitle[index], { opacity: .8 })
        } else {
            gsap.timeline({}).set(child, {
                yPercent: -100,
                opacity: 1,
            })
                .set(listSubtitle[index], { opacity: 0 })
        }
    });

    return () => {
        listTitle = null
        listSubtitle = []
    }
}



export function  runSlider({
    ListTitleRef, ListSubtitleRef, ListThumbnailRef, ListBackgroundRef, prevState, nextState
  }:IRunSlider) {
    ListTitleRef[prevState].classList.remove('active');
    ListTitleRef[nextState].classList.add('active');
    ListSubtitleRef[prevState].classList.remove('active');
    ListSubtitleRef[nextState].classList.add('active');
    ListThumbnailRef[prevState].classList.remove('active');
    ListThumbnailRef[nextState].classList.add('active');
    ListBackgroundRef[prevState].classList.remove('active');
    ListBackgroundRef[nextState].classList.add('active');
  }

  export function  gsapSlider({ prevState, nextState, ListChildTitle, ListChildSub, ListChildThumbnail, ListBackgroundRef, StateLock, durationAnimation, indexOfSlider, dir }:IGsapSlider) {
  
   
    indexOfSlider.current++;
  
    let pathResultBaseDirection1, pathResultBaseDirection2
    switch (dir) {
      case 1:
        pathResultBaseDirection1 = listPath[1];
        pathResultBaseDirection2 = listPath[2];
        break;
      case -1:
        pathResultBaseDirection1 = listPath[2];
        pathResultBaseDirection2 = listPath[1];
        break;
    }
  
    gsap.timeline({
      onComplete: () => {
        if(StateLock)StateLock.current = false;
      }
  
    })
      .set(ListChildTitle[nextState], { yPercent: -100 * dir })
      .set(ListChildSub[nextState], { opacity: 0 })
      .set([ListBackgroundRef[prevState].children[0],ListBackgroundRef[nextState].children[0]],filterBrightness.light)
      .set( ListBackgroundRef[nextState].children[0],{yPercent: 20 * dir})
      .set(ListChildThumbnail[nextState], {
        opacity: 1,
        clipPath: pathResultBaseDirection1,
        zIndex: indexOfSlider.current + 111,
      })
      .set(ListBackgroundRef[nextState], {
        clipPath: pathResultBaseDirection2,
        zIndex: indexOfSlider.current - 111,
      })
      .to(
        ListChildTitle[nextState],
        {
          yPercent: 0,
          stagger: 0.1,
          ease: "power3.inOut",
  
          duration: durationAnimation
        
        })
      .to(
        ListChildTitle[prevState],
        {
  
          yPercent: 100 * dir,
          stagger: 0.1,
          ease: "power3.inOut",
  
          duration: durationAnimation,
        }, "<")
      .to(
        ListChildSub[nextState],
        {
          opacity: .8,
          duration: durationAnimation,
          stagger: 0.1,
          ease: "power3.inOut"
        }, "<")
      .to(
        ListChildSub[prevState],
        {
          opacity: 0,
          stagger: 0.1,
          ease: "power3.inOut"
        }, "<")
      .to([ListChildThumbnail[nextState],ListBackgroundRef[nextState]], {
        clipPath: listPath[0],
        duration: durationAnimation,
        ease: "power3.inOut"
  
      }, "<")
      .to( ListBackgroundRef[nextState].children[0],{
  
        yPercent: 0,
        duration: durationAnimation,
        ease: "power3.inOut",
      }, "<")
      .to(
        ListBackgroundRef[prevState].children[0],
        {
  
          yPercent: -42 * dir,
          rotate: 10 * dir,
          scale: 1.1,
          
  
          duration: durationAnimation,
          ease: "power3.inOut",
          clearProps: "yPercent,rotate,scale",
          ...filterBrightness.dark
        }, "<")
  
  
  
  }

  export function setValStore(val:string|number, nameVal:string) {
    localStorage.setItem(nameVal, val.toString())
  }