import OurPartners from '@/components/new/OurPartners';
import s from './style.module.css'
import Advantage from "@Components/new/Aboutus/Advantage";
import Intro from "@Components/new/Aboutus/Intro";
import HeroSection from '@Components/new/HeroSection';
import ServicesSection from '@/components/new/ServicesSection';
import LetContact from '@/components/new/LetContact';
import FooterSection from '@/components/new/FooterSection';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
import FAQSection from '@/components/new/FAQSection';
import SliderImageHover from '@/components/SliderImageHover';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import GridImage1 from '@/components/new/Some_Component_For_Post/GridImageStyle1';
import Layout_1 from '@/components/new/Some_Component_For_Post/Layout_1';
import Layout_2 from '@/components/new/Some_Component_For_Post/Layout_2';
import Layout_3 from '@/components/new/Some_Component_For_Post/Layout_3';
import Layout_4 from '@/components/new/Some_Component_For_Post/Layout_4';

function Project1({stateTransition}:IPageModule): JSX.Element {
    const propsForGsap = {
        stateTransitionPage: stateTransition,
        scrollerRef: "#work1page"
      }
      const propsHeroSection = {
        classAdd:"dark_background",
        backgroundImage:"/home/banner.png",
        backgroundSize:{ width: "auto", height: "100%" }
      }
    return (
        <div id="work1page">
            <IntroWorkPage propsForGsap={propsForGsap}  backgroundImage={"/clone/services1.webp"}/>
            <ProjectText disableTitle={false}/>
             <GridImage1 propsForGsap={propsForGsap}/>
             <ProjectText disableTitle={true}/>
             <div className='cream_background'>
                <ProjectText disableTitle={false}/>
             </div>
             <div className='dark_background'>
                <ProjectText disableTitle={false}/>
             </div>
             <Layout_1/>
             <Layout_2/>
             <Layout_3/>
             <Layout_4/>
        </div>
    )
}
export default  memo(Project1)