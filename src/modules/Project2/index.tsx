
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import GridImageSlider1 from '@/components/new/Some_Component_For_Post/GridImageSlider1';
import LayoutCustom from '@/components/new/Some_Component_For_Post/LayoutCustom';
import { project2_page,project3_page } from '@/constants/page_props';
import { memo } from 'react';

function Project2(): JSX.Element {
   
   
    return (
        <div id="work2page">
            <IntroWorkPage content={project2_page.content.introWorkPage}  propsForGsap={project2_page.propsForGsap} />
            <GridImageSlider1 content={project2_page.content} propsForGsap={project2_page.propsForGsap}/>
           {/*  <ProjectText scroller={project2_page.propsForGsap.scrollerRef} randomID='koko123' disableTitle={false}/> */}
            <LayoutCustom content={project2_page.content.gridImageSlider} />
      
            <FooterRedirect content={project3_page.content} currentId={2}  targetRedirect='3' scroller={project2_page.propsForGsap.scrollerRef}/>
            
        </div>
    )
}
export default  memo(Project2)