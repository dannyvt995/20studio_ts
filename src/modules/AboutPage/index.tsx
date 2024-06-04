import HeroSection from '@/components/new/HeroSection';
import s from './style.module.css'
import Advantage from "@Components/new/Aboutus/Advantage";
import Intro from "@Components/new/Aboutus/Intro";
import SectionTitleBlend from '@/components/new/SectionIntractive/SectionTitleBlend';
import FooterSection from '@/components/new/FooterSection';
import Minded from '@/components/new/Aboutus/Minded';
import Us from '@/components/new/Aboutus/Us';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
function AboutPage({stateTransition} : IPageModule): JSX.Element {
    const propsForGsap = {
        stateTransitionPage: stateTransition,
        scrollerRef: "#aboutpage"
    }
    const propsHeroSection = {
        classAdd: "dark_background",
        backgroundImage: "/about/banner.webp",
        backgroundSize: { width: "105%", height: "auto" }
    }
    return (
        <div id="aboutpage">
            <HeroSection propsForGsap={propsForGsap} propsHeroSection={propsHeroSection} />

            <Intro />

            {/* lazy load from here */}
            {/* lazy load from here */}
            {/* lazy load from here */}

            <Advantage />

            <SectionTitleBlend propsForGsap={propsForGsap} />
            <Minded />
            <Us />
            <FooterSection propsForGsap={propsForGsap} />
        </div>
    )
}
export default memo(AboutPage)