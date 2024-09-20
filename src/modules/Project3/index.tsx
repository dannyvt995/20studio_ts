
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import GridImageSlider1 from '@/components/new/Some_Component_For_Post/GridImageSlider1';
import LayoutCustom from '@/components/new/Some_Component_For_Post/LayoutCustom';
import { project3_page,project4_page } from '@/constants/page_props';
import { memo } from 'react';

function Project3(): JSX.Element {
   
   
    return (
        <div id="work3page">
            <IntroWorkPage content={project3_page.content.introWorkPage} />

            <GridImageSlider1 content={project3_page.content} propsForGsap={project3_page.propsForGsap}/>
            <LayoutCustom content={project3_page.content.gridImageSlider} />
            <FooterRedirect content={project4_page.content} currentId={3}  targetRedirect='4' scroller={project3_page.propsForGsap.scrollerRef}/>
          
        </div>
    )
}
export default  memo(Project3)