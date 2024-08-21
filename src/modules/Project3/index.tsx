
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import GridImageSlider1 from '@/components/new/Some_Component_For_Post/GridImageSlider1';
import LayoutCustom from '@/components/new/Some_Component_For_Post/LayoutCustom';
import { project3_page } from '@/constants/page_props';

function Project3(): JSX.Element {
   
   
    return (
        <div id="work3page">
            <IntroWorkPage content={project3_page.content.introWorkPage} />

            <GridImageSlider1 content={project3_page.content.gridImageSlider} propsForGsap={project3_page.propsForGsap}/>
            <LayoutCustom content={project3_page.content.gridImageSlider} />
            <FooterRedirect currentId={3}  targetRedirect='4' scroller={project3_page.propsForGsap.scrollerRef}/>
          
        </div>
    )
}
export default  Project3