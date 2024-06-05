"use client"


import { PageTransition } from '@Layouts/TransitionPage';

import { usePathname, useRouter } from "next/navigation";

import { useRef, useEffect } from "react";
import gsap from "gsap";


import NavbarSectionDeskop from '@Components/new/NavbarSectionDeskop';
import ButtonMenu from '@Components/new/ButtonMenu'
import NavbarModalSection from '@/components/new/NavbarModalSection';

const listPathAndIdDom = {
    pages: [
        '/',
        '/home',
        '/work',
        '/contact',
        '/about'
    ],
    pagesWork: [
        '/work/work1',
        '/work/work2',
        '/work/work3',
        '/work/work4'
    ],
    idpages: [
        '#homepage',
        '#aboutpage',
        '#workpage',
        '#contactpage'
    ],
    idpagesWork: [
        '#work1page',
        '#work2page',
        '#work3page',
        '#work4page'
    ]
}
const pages = [
    {
        path: "/home",
        title: "Page home",
        color: "#03a9f4"
    },
    {
        path: "/about",
        title: "Page about",
        color: "#4caf50"
    },
    {
        path: "/contact",
        title: "Page contact",
        color: "#ff9c07"
    },
    {
        path: "/work",
        title: "Page work",
        color: "#F44336"
    }
];

function removeSplash(target:string) {
    let value
    if (listPathAndIdDom.pagesWork.includes(target)) {
        value = target.replace(/\/work\//g, "");

    } else {
        value = target.replace(/\//g, "");
        if (value == '') value = "home"
    }

    return value
}
interface IRouterControls {
    children : React.ReactNode
}

export default function RouterControls({ children }:IRouterControls) {


    console.log("##############   RouterControls render")
    const pathName = usePathname()
    const router = useRouter()
    const pathNameFormat = removeSplash(pathName)

    const buttonOpenMenu = useRef(null)
    const navbarDeskopRef = useRef(null)
    const navbarModalRef = useRef(null)
    const domContent = useRef(null)
    const menuAnimRuning = useRef(false)
    const menuActive = useRef(false)

    const timeTransitionOpenNav = 1.6
    const timeTransitionCloseNav = 1.6
    const scrollDistanceAuto = 200

    const easeInOutExpo = (x:number) => {return x === 0
        ? 0
        : x === 1
        ? 1
        : x < 0.5 ? Math.pow(2, 20 * x - 10) / 2
        : (2 - Math.pow(2, -20 * x + 10)) / 2;}
        
        const ee = "power3.out"
        const easeOfwindowLenis = (x:number) => {return 1 - Math.pow(1 - x, 4);}
        const easeOfwindowLenis2 = (x:number) => {return x * x * x * x;}
    const easeOpen = ee
    const easeClose = ee
  
    let saveScrollPos
    // useEffect(() => {
    //     localStorage.setItem("menuAnimRuning","false")
    //     navbarDeskopRef.current = document.getElementById(`navbar`)
    //     buttonOpenMenu.current = document.getElementById(`button_menu`)
    //     navbarModalRef.current = document.getElementById(`w_navbarModal`)
    //     domContent.current = document.getElementById(`${pathNameFormat}page`)
    //     if (navbarDeskopRef.current) navbarDeskopRef.current.style.display = 'flex';
    //     if (buttonOpenMenu.current) buttonOpenMenu.current.style.display = 'none';
    //     return () => {
    //         navbarDeskopRef.current = null
    //         buttonOpenMenu.current = null
    //         navbarModalRef.current = null
    //         domContent.current = null
    //         saveScrollPos = null
    //     }
    // }, [pathName,pathNameFormat])


    // const openMenu = ({elMenuWrapper, elMenu, elContent}) => {
    //     saveScrollPos = window.lenis.scroll
        
    //     menuAnimRuning.current = true
    
   
    //     if (menuActive.current == true) {
  
    //        window.lenis?.scrollTo(saveScrollPos + scrollDistanceAuto,{duration:0 ,easing:easeOfwindowLenis2})
    //         gsap.timeline({
    //             onComplete: () => {
                    
    //                 menuActive.current = false
    //                 menuAnimRuning.current = false
    //                 localStorage.setItem("menuAnimRuning","false")
    //                 gsap.set([elMenuWrapper, elMenuWrapper.parentNode], { zIndex: -1 })
    //             }
    //         })
    //             .to(buttonOpenMenu.current.children[1], {
    //                 rotate: 45,
    //                 duration: timeTransitionCloseNav,
    //                 ease: easeClose,
    //             }, '<')
    //             .to(elMenuWrapper, {
    //                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',

    //                 duration: timeTransitionCloseNav,
    //                 ease: easeClose,
    //             }, '<')
    //             .to(elMenu, {
    //                 rotate: -4,
    //                 scale: 1.72,
    //                 y: -window.innerHeight / 2,
    //                 '-webkit-filter': 'brightness(16%)',
    //                 filter: 'brightness(16%)',
    //                 duration: timeTransitionCloseNav,
    //                 ease: easeClose,
    //             }, '<')
    //            /*  .to(elContent__backgroundHero,{
    //                 y : elContent__backgroundHero_currentY - elContent__backgroundHero_distance,
    //                 duration: timeTransitionCloseNav,
    //                 ease: easeClose,
    //             }, '<') */
    //             .to(elContent, {
    //           /*       rotate: 0, */
    //                 scale: 1,
    //                 y: 0,
    //                 rotateX : 0,
    //                 rotateY : 0,
    //                /*    '-webkit-filter': 'brightness(100%)',
    //                 filter: 'brightness(100%)', */
    //                 duration: timeTransitionCloseNav,
    //                 ease: easeClose,
    //             }, "<")
    //     } else {
    //         localStorage.setItem("menuAnimRuning","true")
    //         window.lenis?.scrollTo(saveScrollPos - scrollDistanceAuto,{duration:timeTransitionOpenNav, // thêm chút cho vừa đủ , chưa hiểu sao thíu
    //         easing:easeOfwindowLenis})
    //         gsap.timeline({
    //             onComplete: () => {
    //                 menuActive.current = true
    //                 menuAnimRuning.current = false
    //                // window.lenis?.scrollTo(saveScrollPos+scrollDistanceAuto,{duration:0})
    //             }
    //         })
    //            /*  .set(elContent, {
    //                 '-webkit-filter': 'brightness(100%)',
    //                 filter: 'brightness(100%)',
    //             }) */

    //             .set(elMenuWrapper.parentNode, { zIndex: 500 })
    //             .set(elMenuWrapper, { opacity: 1, clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)' })
    //             .set(elMenu, {
    //                 rotate: -7,
    //                 scale: 1.72,
    //                 y: -window.innerHeight / 2,
    //             })
    //             .to(elContent, {
    //              /*    rotate: 7, */
    //                 scale: 1.2,
    //                 rotateX : 21,
    //                 rotateY : 30,
    //               /*   y: scrollDistanceAuto, */
    //               /*   '-webkit-filter': 'brightness(16%)',
    //                 filter: 'brightness(16%)', */
    //                 duration: timeTransitionOpenNav,
    //                 ease: easeOpen,
    //             }, '<')
    //            /*  .to(elContent__backgroundHero , {
    //                 y : elContent__backgroundHero_currentY + elContent__backgroundHero_distance,
    //                 duration: timeTransitionOpenNav,
    //                 ease: easeOpen,
    //              }, '<') */
    //             .to(elMenuWrapper, {
    //                 clipPath: 'polygon(0% 0%, 100% 0%, 100% 111%, 0% 100%)',
    //                 duration: timeTransitionOpenNav,
    //                 ease: easeOpen,
    //             }, '<')
    //             .to(elMenu, {
    //                 rotate: 0,
    //                 scale: 1,
    //                 y: 0,
    //                 '-webkit-filter': 'brightness(100%)',
    //                 filter: 'brightness(100%)',
    //                 duration: timeTransitionOpenNav,
    //                 ease: easeOpen,
    //             }, '<')
    //             .to(buttonOpenMenu.current.children[1], {
    //                 rotate: 0,
    //                 duration: timeTransitionOpenNav,
    //                 ease: easeOpen,
    //             }, '<')
    //     }

    // }
    // const redirectPageOnModalMenu = ({elMenuWrapper, elMenu,targetUrl}) => {
     
    //     router.push(targetUrl)  
    //     gsap.timeline({
    //         onComplete: () => {
    //             menuActive.current = false
    //             menuAnimRuning.current = false
    //             gsap.set([elMenuWrapper, elMenuWrapper.parentNode], { zIndex: -1 })
    //         }
    //     })
    //         .to(elMenuWrapper, {
    //             clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',

    //             duration: timeTransitionCloseNav,
    //             ease: easeClose,
    //         }, '<')
    //         .to(elMenu, {
    //             rotate: -7,
    //             scale: 1.2,
    //             y: -window.innerHeight / 2,
    //             '-webkit-filter': 'brightness(16%)',
    //             filter: 'brightness(16%)',
    //             duration: timeTransitionCloseNav,
    //             ease: easeClose
    //         }, '<')
    // }
    // useEffect(() => {
    //     console.log("render 1 lần thui nha")
    //     const handleClickMenu = () => {
    //         if (!menuAnimRuning.current) {
    //             openMenu({
    //                 elMenuWrapper: navbarModalRef.current ,
    //                 elMenu: navbarModalRef.current.children[0],
    //                 elContent: domContent.current,
    //             });
    //         }
    //     };
       

    //    if(buttonOpenMenu.current) buttonOpenMenu.current.addEventListener("click", handleClickMenu);

    //     return () => {
    //         if(buttonOpenMenu.current) {
    //             buttonOpenMenu.current.removeEventListener("click", handleClickMenu);
    //         }
    //     };
    // }, [menuAnimRuning]);

   
    // function handleRedirectBaseHistory(e) {
    //     e.preventDefault()
    //     let data_link = e.target.getAttribute('data_link')
    //     if(data_link === pathName) return
    //     console.log(  data_link)
    //     redirectPageOnModalMenu({
    //         elMenuWrapper:navbarModalRef.current,
    //         elMenu:navbarModalRef.current.children[0],
    //         targetUrl:data_link
    //     })
    // }
    return (
        <>



          {/*   <ButtonMenu />
            <NavbarSectionDeskop />
            <NavbarModalSection/> */}
            <PageTransition
                transitionKey={pathName}
            >
                {children}
            </PageTransition>




        </>

    )

}
