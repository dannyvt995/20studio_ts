'use client';

import ButtonMenu from "@/components/new/ButtonMenu";
import NavbarModalSection from "@/components/new/NavbarModalSection";
import NavbarSectionDeskop from "@/components/new/NavbarSectionDeskop";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import gsap from 'gsap'

interface ILenisScroll {
  scroll: number;
}

const Header: React.FC = (): React.ReactElement => {

  useEffect(() => {


    const flag = window.innerHeight;
    const handleScroll = ({ scroll }: ILenisScroll) => {
      // if (targetNavbarDeskop.current && targetButtonNavbar.current) {
      //   if (scroll > flag && scroll < flag * 2) {
      //     targetNavbarDeskop.current.style.opacity = `1`;
      //     targetButtonNavbar.current.style.opacity = `0`;
      //   } else if (scroll < flag) {
      //     targetNavbarDeskop.current.style.opacity = `0`;
      //     targetButtonNavbar.current.style.opacity = `1`;
      //   }
      // }

    };

    window.lenis?.on('scroll', handleScroll);

    return () => {
      window.lenis?.off('scroll', handleScroll);
   
    };
  }, []);

  return (
    <header className='header' >
      <NavbarSectionDeskop  />
      <NavbarModalSection />
      <ButtonMenu  />
    </header>
  );
};

export default Header;
