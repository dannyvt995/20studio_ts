
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import { project3_page } from '@/constants/page_props';

function Project3(): JSX.Element {
   
   
    return (
        <div id="work3page">
            <IntroWorkPage content={project3_page.content.introWorkPage} />
            <ProjectText scroller={project3_page.propsForGsap.scrollerRef} randomID='kykx123' disableTitle={false}/>
          
            <FooterRedirect currentId={3}  targetRedirect='4' scroller={project3_page.propsForGsap.scrollerRef}/>
          
        </div>
    )
}
export default  Project3