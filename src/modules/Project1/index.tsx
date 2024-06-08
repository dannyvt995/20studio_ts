

import { memo } from 'react';
import { IPageModule } from '@/types/common';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import GridImage1 from '@/components/new/Some_Component_For_Post/GridImageStyle1';
import Layout_1 from '@/components/new/Some_Component_For_Post/Layout_1';
import Layout_2 from '@/components/new/Some_Component_For_Post/Layout_2';
import Layout_3 from '@/components/new/Some_Component_For_Post/Layout_3';
import Layout_4 from '@/components/new/Some_Component_For_Post/Layout_4';
import useAnimationHeading from '@Hooks/gsap/useAnimationHeading';
import useAnimationHeadingTag from '@Hooks/gsap/useAnimationHeadingTag';
import useAnimationParagraph from '@Hooks/gsap/useAnimationParagraph';
import { project1_page } from '@/constants/page_props';

function Project1({stateTransition}:IPageModule): JSX.Element {

      if(stateTransition === 'entered') {
        useAnimationHeading()
        useAnimationHeadingTag()
        useAnimationParagraph()
    }
    return (
        <div id="work1page">
            <IntroWorkPage state={stateTransition} propsForGsap={project1_page.propsForGsap}  backgroundImage={"/clone/services1.webp"}/>
            <ProjectText disableTitle={false}/>
             <GridImage1 propsForGsap={project1_page.propsForGsap}/>
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