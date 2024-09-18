import React, { memo, useEffect, useRef, useState } from 'react'
import s from './style.module.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ButtonHoverNew from '../ButtonHoverNew';
import { usePathname } from 'next/navigation';
import IconSVG from '@/components/Icon/IconSVG';
import useStoreZustand from '@/hooks/useStoreZustand';
import { isMobile } from '@/utils/responsive';
import WrapperTrackMouse from '../WrapperTrackMouse';
gsap.registerPlugin(useGSAP)

function NavbarSectionDeskop() {

    // --^^ console.log("%cNavbarDeskop_render", "color:green;font-weight:bold")

    const navbarDeskopRef = useRef<any>(null)
    const buttonMenuRef = useRef<any>(null)
    const navbarSectionDes = useRef<HTMLDivElement>(null)
    const timelineBtnMenu = useRef<gsap.core.Timeline>()
    const timelineNavbarItem = useRef<gsap.core.Timeline>()

    const timelineStatusNavbarItem = useRef<gsap.core.Timeline>()
    const mainNavbar = useRef<any>(null)
    const pathName = usePathname()
    const { stateEnterPage, stateVarGlobalLenis } = useStoreZustand()

    const unit = useRef<number>(0)
    const target = useRef<number>(0)
    const [isEnterPage, setIsEnterPage] = useState(true)
    const isMenuOpen = useRef<boolean>(false)
    useEffect(() => {



        unit.current = window.innerWidth / 100 * 6

        switch (pathName) {
            case '/home':
            case '/home':
            case '/':
                target.current = 0;
                break;
            case '/sustainability':
                target.current = unit.current;
                break;
            case '/work':
                target.current = unit.current * 2;
                break;
            case '/about':
                target.current = unit.current * 3;
                break;
            case '/service':
                target.current = unit.current * 4;
                break;
            case '/contact':
                target.current = unit.current * 5;
                break;
            case '/work/work1':
            case '/work/work2':
            case '/work/work3':
            case '/work/work4':
                target.current = unit.current * 2;
                break;
            default:
                target.current = unit.current;
        }


    }, [])
    const flag = 1220;


    useEffect(() => {
        if (navbarDeskopRef.current && buttonMenuRef.current && !isMobile()) {
            navbarDeskopRef.current.style.opacity = `1`;
            buttonMenuRef.current.style.opacity = `0`;
            navbarDeskopRef.current.style.visibility = `visible`;
            buttonMenuRef.current.style.visibility = `hidden`;
        }
    }, [pathName])

    // useEffect(() => {
    //     // --^^ console.log("%cGET GLOBAL LENIS FOR NAVBAR...", "color:pink");
    //     if(stateVarGlobalLenis ===  false) return
    //     const handleScroll = ({ scroll } : {scroll:number}) => {
    //         if (!navbarDeskopRef.current || !buttonMenuRef.current) return;
    //         if (scroll > flag) {
    //             navbarDeskopRef.current.style.opacity = `0`;
    //             buttonMenuRef.current.style.opacity = `1`;
    //             navbarDeskopRef.current.style.pointerEvents = `none`;
    //             buttonMenuRef.current.style.pointerEvents = `auto`;
    //         } else if (scroll <= flag) {
    //             navbarDeskopRef.current.style.opacity = `1`;
    //             buttonMenuRef.current.style.opacity = `0`;
    //             navbarDeskopRef.current.style.pointerEvents = `auto`;
    //             buttonMenuRef.current.style.pointerEvents = `none`;
    //         }
    //     };

    //     if (window.lenis) {
    //         window.lenis.on('scroll', handleScroll);
    //     }

    //     return () => {
    //         if (window.lenis) {
    //             window.lenis.off('scroll', handleScroll);
    //         }
    //     };
    // },[stateVarGlobalLenis])



    useEffect(() => {
        if (!stateEnterPage) return
        // --^^ console.log("%cInit Navbar Timeline !!", "color:green")
        timelineBtnMenu.current = gsap.timeline({ paused: true })

            .fromTo(`.${s.icon}`, {
                rotate: 45,
            }, {
                rotate: 180,
                ease: "power3.inOut",
                duration: .5
            })

            .fromTo(`.${s.lableMenu}`, {
                y: 0
            }, {
                y: "-100%",
                ease: "power3.inOut",
                duration: .5
            }, "<")

            .fromTo(`.${s.lableClose}`, {
                y: "100%"
            }, {
                y: 0,
                ease: "power3.inOut",
                duration: .5
            }, "<").reverse()


        window.timelineBtnNavbar = timelineBtnMenu.current

        return () => {
            window.timelineBtnNavbar = null
            if (timelineBtnMenu.current) timelineBtnMenu.current.kill()
        }
    }, [buttonMenuRef, stateEnterPage])

    useGSAP(() => {
        if (isEnterPage) {
            // --^^ console.log("Chạy lại à ??")
            timelineNavbarItem.current = gsap.timeline({ defaults: { delay: .5 }, paused: true })
                .to(`.${s.nav_item}`,
                    {
                        y: '0%',
                        duration: 1, ease: "power3.out",
                        stagger: .1
                    })
            timelineStatusNavbarItem.current = gsap.timeline({ paused: true, overwrite: true })
                .addLabel('closeMenu')   // Label cho trạng thái đóng menu
                .set(`.${s.nav_item}`, { y: '100%' }, 'closeMenu') // Thiết lập hành động cho label closeMenu
                .addLabel('openMenu')    // Label cho trạng thái mở menu
                .set(`.${s.nav_item}`, { y: '0%' }, 'openMenu');

            window.timelineNavbarItem = timelineNavbarItem.current

            setTimeout(() => {
                if (window.timelineNavbarItem) {
                    window.timelineNavbarItem.play()
                } else {
                    alert("window.timelineNavbarItem err on NavbarSectionDeskop")
                }
            }, 1000)
        }

    }, { scope: navbarDeskopRef })

    useGSAP(() => {
        if (isEnterPage && stateEnterPage) {
            // --^^ console.log("%cFire Anim Navbar First Time !!", "color:green")
            gsap.timeline({
                onComplete: () => {
                    setIsEnterPage(false)
                }
            }).set(`.${s.this_icon}`, {
                x: target.current,
                scale: 0,
                rotate: 0,
            })
                .to(`.${s.this_icon}`, {
                    opacity: 1,
                    scale: 1,
                    rotate: 90,
                    duration: 1,
                }, '<')

        }
    }, { scope: navbarDeskopRef, dependencies: [isEnterPage, stateEnterPage] })

    useGSAP(() => {

        if (!isEnterPage) {
            // --^^ console.log("%cToggle Anim Icon !!", "color:green")
            switch (pathName) {
                case '/home':
                case '/':
                    target.current = 0;
                    break;
                case '/sustainability':
                    target.current = unit.current;
                    break;
                case '/work':
                    target.current = unit.current * 2;
                    break;
                case '/about':
                    target.current = unit.current * 3;
                    break;
                case '/service':
                    target.current = unit.current * 4;
                    break;
                case '/contact':
                    target.current = unit.current * 5;
                    break;
                case '/work/work1':
                case '/work/work2':
                case '/work/work3':
                case '/work/work4':
                    target.current = unit.current * 2;
                    break;
                default:
                    target.current = unit.current;
            }
            gsap.to(`.${s.this_icon}`, {
                x: target.current,
                rotate: (target.current / unit.current) * 90,
                ease: "power3.out",
                duration: 1,
            })


        }






    }, { dependencies: [pathName, isEnterPage] })

    const { contextSafe } = useGSAP({ scope: navbarSectionDes })
    // set triggle từ hero section và lấy state từ đó

    useEffect(() => {
        mainNavbar.current = document.getElementById("main_navbar")
    }, [])

    const handleClickMenu = contextSafe(() => {
        isMenuOpen.current = !isMenuOpen.current
        if (window.timelineNavbarModal && window.timelineBtnNavbar && window.timelineNavbarItem) {
            mainNavbar.current.style.pointerEvents = 'auto'
            window.timelineNavbarModal.reversed(!window.timelineNavbarModal.reversed());
            window.timelineBtnNavbar.reversed(!window.timelineBtnNavbar.reversed());

            if (isMenuOpen.current === true) {
                gsap.set(`.${s.nav_item}`, { y: '100%' })
            } else {
                gsap.set(`.${s.nav_item}`, { y: '0%' })
            }

        } else {
            alert("Err on window var global >>>>>>>>")
        }


    })




    return (
        <WrapperTrackMouse>
 <div ref={navbarSectionDes}>
            <button onClick={handleClickMenu} ref={buttonMenuRef} className={s.button_menu} id="button_menu" >
                <h3 className={s.lable}>
                    <span className={s.lableMenu}>Menu</span>
                    <span className={s.lableClose}>Close</span>
                </h3>
                <div className={s.icon}>
                    <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon_close}>
                        <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
                        <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
                    </svg>
                </div>
            </button>

            <nav ref={navbarDeskopRef} className={s.nav} id='navbar_deskop'>
                {/* <div className={s.logo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2164" height="363" viewBox="0 0 2164 363" fill="white">
      <path d="M4 356.5C1.33333 346.167 7.07805e-07 335.5 7.07805e-07 324.5C7.07805e-07 305.833 4.16667 289.167 12.5 274.5C21.1667 259.833 31.6667 247.167 44 236.5C56.3333 225.833 72.8333 213.167 93.5 198.5C112.5 185.5 127.667 174.333 139 165C150.333 155.333 159.667 144.333 167 132C174.667 119.333 178.5 105.333 178.5 90C178.5 68.6666 171.833 50.6666 158.5 36C145.167 21 126.333 13.5 102 13.5C88.6667 13.5 75.5 17.1667 62.5 24.5C49.8333 31.8333 38.8333 41.6667 29.5 54C20.1667 66.3333 14 79.5 11 93.5H6.5L17 12L30 23C57.6667 12.6666 80.5 7.33331 98.5 6.99998C123.833 5.99999 146.333 8.99999 166 16C186 23 201.5 33.5 212.5 47.5C223.5 61.5 229 78.1667 229 97.5C229 115.833 223.667 132.5 213 147.5C202.667 162.167 189.833 175.167 174.5 186.5C159.5 197.5 139.5 210.5 114.5 225.5C90.8333 239.833 72.1667 252 58.5 262C44.8333 271.667 33.3333 282.833 24 295.5C14.6667 308.167 10 322.167 10 337.5C10 341.167 10.1667 344 10.5 346C23.1667 348 41.8333 349 66.5 349C106.167 349 142 344.833 174 336.5C206.333 328.167 225.833 313.667 232.5 293H237L221 357L4 356.5ZM409.336 361C379.669 362.333 354.003 354 332.336 336C311.003 317.667 294.669 293.667 283.336 264C272.336 234.333 266.836 203.167 266.836 170.5C266.836 141.5 271.169 114.5 279.836 89.5C288.836 64.5 302.336 44.5 320.336 29.5C338.336 14.1666 360.169 6.49998 385.836 6.49998C413.169 6.49998 436.503 15.5 455.836 33.5C475.169 51.5 489.669 75 499.336 104C509.336 133 514.336 163.5 514.336 195.5C514.336 224.167 510.336 251 502.336 276C494.336 300.667 482.336 320.833 466.336 336.5C450.669 351.833 431.669 360 409.336 361ZM408.836 356C425.836 355.333 439.003 340.167 448.336 310.5C458.003 280.5 462.836 244.5 462.836 202.5C462.836 170.5 459.836 139.833 453.836 110.5C448.169 81.1667 439.336 57.3333 427.336 39C415.669 20.6666 401.503 11.5 384.836 11.5C363.169 11.5 346.669 25.3333 335.336 53C324.336 80.3333 318.836 114.5 318.836 155.5C318.836 188.5 322.503 220.667 329.836 252C337.169 283 347.669 308.333 361.336 328C375.003 347.333 390.836 356.667 408.836 356ZM553.914 357.5L544.414 279.5H548.914C555.914 303.833 568.581 322.167 586.914 334.5C605.247 346.5 628.081 352.5 655.414 352.5C670.081 352.5 683.081 349.167 694.414 342.5C706.081 335.5 715.081 326.5 721.414 315.5C727.747 304.167 730.914 292.167 730.914 279.5C730.914 267.5 727.914 256 721.914 245C715.581 234 706.247 224.667 693.914 217C681.914 209.333 665.581 200.5 644.914 190.5C624.914 181.167 608.747 172.667 596.414 165C584.081 157.333 573.747 147.667 565.414 136C557.081 124 552.914 109.833 552.914 93.5C552.914 76.5 558.414 61.5 569.414 48.5C580.414 35.1667 594.914 25 612.914 18C631.247 10.6666 650.747 6.99998 671.414 6.99998C684.081 6.99998 697.414 8.33331 711.414 11C725.747 13.3333 736.247 16.1666 742.914 19.5L756.414 8.49999L767.914 75H763.414C759.081 54.6667 749.581 39 734.914 28C720.247 17 702.747 11.5 682.414 11.5C665.747 11.5 651.247 14.5 638.914 20.5C626.581 26.1667 617.247 34 610.914 44C604.581 53.6667 601.414 64.1667 601.414 75.5C601.414 81.5 602.414 87.5 604.414 93.5C608.414 107.5 616.914 119.333 629.914 129C643.247 138.667 662.247 149.5 686.914 161.5C711.914 173.833 731.581 185.167 745.914 195.5C760.581 205.833 770.914 218.667 776.914 234C781.247 246 783.414 257 783.414 267C783.414 282.667 779.247 297.167 770.914 310.5C762.581 323.833 750.081 334.833 733.414 343.5C717.081 351.833 696.914 356.5 672.914 357.5L656.914 358C637.581 358 620.414 356.5 605.414 353.5C590.414 350.5 578.747 346.333 570.414 341L553.914 357.5ZM1065.07 70.5H1060.57C1054.9 53.1667 1042.57 39.3333 1023.57 29C1004.9 18.6667 984.733 12.8333 963.066 11.5C956.4 14.5 953.066 19.5 953.066 26.5V337C953.066 341 954.4 344.833 957.066 348.5C959.733 351.833 966.066 353.833 976.066 354.5V357H887.066V354.5C897.066 353.833 903.4 351.833 906.066 348.5C908.733 344.833 910.066 341 910.066 337V26.5C910.066 18.8333 906.4 13.8333 899.066 11.5C877.4 12.8333 857.233 18.6667 838.566 29C820.233 39 808.233 52.6667 802.566 70H798.066L816.066 5.99999L1047.07 6.49998L1065.07 70.5ZM1313.41 6.49998L1372.91 6.99998V8.99998C1368.24 8.99998 1362.41 10.1667 1355.41 12.5C1348.74 14.5 1345.41 17.5 1345.41 21.5V231.5C1345.41 257.833 1343.08 279.833 1338.41 297.5C1333.74 315.167 1323.74 329.667 1308.41 341C1293.41 352.333 1271.24 358.167 1241.91 358.5C1204.24 359.167 1172.41 351.833 1146.41 336.5C1120.74 321.167 1107.91 289.833 1107.91 242.5L1108.41 26C1108.41 16 1100.74 10.5 1085.41 9.49997V6.99998H1174.91V9.49997C1164.91 10.1667 1158.58 12.1667 1155.91 15.5C1153.24 18.8333 1151.91 22.6666 1151.91 27V242.5C1151.91 315.5 1181.08 352 1239.41 352C1267.74 352 1289.08 347 1303.41 337C1318.08 326.667 1327.58 313.167 1331.91 296.5C1336.58 279.833 1339.08 258.5 1339.41 232.5L1340.41 21.5C1340.41 17.5 1336.91 14.3333 1329.91 12C1323.24 9.66665 1317.74 8.49999 1313.41 8.49999V6.49998ZM1524.76 6.49998C1562.1 6.49998 1594.1 15 1620.76 32C1647.43 48.6667 1667.43 70.5 1680.76 97.5C1694.43 124.167 1701.26 152.667 1701.26 183C1701.26 213.333 1694.43 241.833 1680.76 268.5C1667.43 295.167 1647.26 316.667 1620.26 333C1593.6 349.333 1561.26 357.5 1523.26 357.5H1482.76H1393.26V355C1403.26 354.333 1409.6 352.333 1412.26 349C1414.93 345.333 1416.26 341.5 1416.26 337.5V27C1416.26 22.6666 1414.93 18.8333 1412.26 15.5C1409.6 12.1667 1403.26 10.1667 1393.26 9.49997V6.99998H1464.76H1482.76L1524.76 6.49998ZM1522.76 352.5C1552.43 352.5 1577.6 344.833 1598.26 329.5C1618.93 313.833 1634.43 293.333 1644.76 268C1655.1 242.667 1660.26 215.5 1660.26 186.5C1660.26 156.833 1654.93 128.667 1644.26 102C1633.93 75.3333 1618.43 53.6666 1597.76 37C1577.43 20.3333 1553.1 11.8333 1524.76 11.5C1493.76 11.5 1472.43 14.5 1460.76 20.5C1460.1 22.1666 1459.76 24.3333 1459.76 27V337.5C1459.76 339.5 1459.93 341.333 1460.26 343C1467.6 346.667 1477.6 349.167 1490.26 350.5C1503.26 351.833 1514.1 352.5 1522.76 352.5ZM1452.76 336C1452.76 336 1452.76 336.167 1452.76 336.5C1453.1 336.5 1453.26 336.5 1453.26 336.5L1452.76 336ZM1788.12 337.5C1788.12 341.5 1789.45 345.333 1792.12 349C1794.79 352.333 1801.12 354.333 1811.12 355V357.5H1721.62V355C1731.62 354.333 1737.95 352.333 1740.62 349C1743.29 345.333 1744.62 341.5 1744.62 337.5V27C1744.62 22.6666 1743.29 18.8333 1740.62 15.5C1737.95 12.1667 1731.62 10.1667 1721.62 9.49997V6.99998H1811.12V9.49997C1801.12 10.1667 1794.79 12.1667 1792.12 15.5C1789.45 18.8333 1788.12 22.6666 1788.12 27V337.5ZM2024.73 360.5C2016.73 361.5 2009.06 362 2001.73 362C1966.4 362 1935.9 353 1910.23 335C1884.56 316.667 1864.9 292.833 1851.23 263.5C1837.9 234.167 1831.23 203.333 1831.23 171C1831.23 142.333 1836.73 115.667 1847.73 91C1858.73 66 1875.23 45.5 1897.23 29.5C1919.56 13.1666 1946.73 3.66665 1978.73 0.999994C1982.06 0.666645 1987.06 0.49997 1993.73 0.49997C2028.4 0.49997 2058.56 9.83331 2084.23 28.5C2109.9 46.8333 2129.4 70.8333 2142.73 100.5C2156.4 130.167 2163.23 161.167 2163.23 193.5C2163.23 221.167 2158.06 247 2147.73 271C2137.73 295 2122.23 315 2101.23 331C2080.56 347 2055.06 356.833 2024.73 360.5ZM2013.23 355.5C2035.23 355.5 2053.73 348.5 2068.73 334.5C2084.06 320.167 2095.4 301.333 2102.73 278C2110.4 254.667 2114.23 229.167 2114.23 201.5C2114.23 168.167 2108.9 136.167 2098.23 105.5C2087.56 74.8333 2071.9 50.1667 2051.23 31.5C2030.9 12.8333 2006.56 4.49999 1978.23 6.49998C1956.9 7.83332 1938.9 15.5 1924.23 29.5C1909.9 43.1667 1899.23 61 1892.23 83C1885.23 105 1881.73 129 1881.73 155C1881.73 187.667 1887.06 219.5 1897.73 250.5C1908.4 281.167 1923.56 306.333 1943.23 326C1963.23 345.667 1986.56 355.5 2013.23 355.5Z" fill="white"/>
</svg>
                </div> */}
                <span className={s.this_icon}>
                    <IconSVG src='/icon/star.svg' />
                </span>
                <ul className={s.nav_list}>

                    <li className={s.nav_item}>
                        <ButtonHoverNew isActive={pathName === '/home' || pathName === '/'} targetRedirect='/home'>
                            Home
                        </ButtonHoverNew>
                    </li>
                    <li className={s.nav_item}>
                        <ButtonHoverNew isActive={pathName === '/sustainability'} targetRedirect='/sustainability'>
                            Sustain
                        </ButtonHoverNew>
                    </li>
                    <li className={s.nav_item}>
                        <ButtonHoverNew isActive={pathName === '/work'} targetRedirect='/work'>
                            Project
                        </ButtonHoverNew>
                    </li>
                    <li className={s.nav_item}>
                        <ButtonHoverNew isActive={pathName === '/about'} targetRedirect='/about'>
                            About us
                        </ButtonHoverNew>
                    </li>
                    <li className={s.nav_item}>
                        <ButtonHoverNew isActive={pathName === '/service'} targetRedirect='/service'>
                            Service
                        </ButtonHoverNew>
                    </li>
                    <li className={s.nav_item}>
                        <ButtonHoverNew isActive={pathName === '/contact'} targetRedirect='/contact'>
                            Contact
                        </ButtonHoverNew>
                    </li>

                </ul>
            </nav>

        </div>
        </WrapperTrackMouse>
       

    )
}

export default memo(NavbarSectionDeskop)