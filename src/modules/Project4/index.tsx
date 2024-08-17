
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import { project4_page } from '@/constants/page_props';

function Project4(): JSX.Element {
   
   
    return (
        <div id="work4page">
            <IntroWorkPage content={project4_page.content.introWorkPage} />
            <ProjectText scroller={project4_page.propsForGsap.scrollerRef} randomID='kadx123' disableTitle={false}/>
           
            <FooterRedirect currentId={4}  targetRedirect='1' scroller={project4_page.propsForGsap.scrollerRef}/>
           
        </div>
    )
}
export default  Project4