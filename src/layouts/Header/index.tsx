'use client';

import ButtonMenu from "@/components/new/ButtonMenu";
import NavbarModalSection from "@/components/new/NavbarModalSection";
import NavbarSectionDeskop from "@/components/new/NavbarSectionDeskop";

const Header: React.FC = (): React.ReactElement => {

  return (
    <header className='header' >
      <NavbarSectionDeskop/>
      <NavbarModalSection />
    </header>
  );
};

export default Header;
