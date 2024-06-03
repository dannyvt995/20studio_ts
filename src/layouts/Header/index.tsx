'use client';

import ButtonMenu from "@/components/new/ButtonMenu";
import NavbarModalSection from "@/components/new/NavbarModalSection";
import NavbarSectionDeskop from "@/components/new/NavbarSectionDeskop";




export default function Header(): React.ReactElement {
  
  return (
    <header className='header'>
      <NavbarSectionDeskop/>
      <NavbarModalSection/>
      <ButtonMenu/>
    </header>
  );
}
