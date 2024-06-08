import React, { forwardRef } from 'react'
import s from './style.module.css'
import Link from 'next/link';


const NavbarSectionDeskop = forwardRef<HTMLButtonElement>((props, ref) => (
    <nav ref={ref} className={s.nav} id='navbar_deskop'>
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
))
NavbarSectionDeskop.displayName = 'ButtonMenu';
export default NavbarSectionDeskop