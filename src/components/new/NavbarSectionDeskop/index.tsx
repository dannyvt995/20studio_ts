import React, { memo } from 'react'
import s from './style.module.css'
import Link from 'next/link';

function NavbarSectionDeskop(): JSX.Element {
    return (
        <nav className={s.nav} id='navbar'>
            <ul className={s.nav_list}>

                <li className={s.nav_item}>
                    <Link href={"/home"} >Home</Link>
                </li>
                <li className={s.nav_item}>
                    <Link href={"/work"} >Dự án</Link>
                </li>
                <li className={s.nav_item}>
                    <Link href={"/about"} >About</Link>
                </li>
                <li className={s.nav_item}>
                    <Link href={"/contact"} >Contact</Link>
                </li>
            </ul>
        </nav>
    )
}
export default memo(NavbarSectionDeskop)