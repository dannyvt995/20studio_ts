
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import { project1_page } from '@/constants/page_props';

function Project3(): JSX.Element {
   
   
    return (
        <div id="work3page">
            <IntroWorkPage altbackgroundImage={"image_cache_services3"}  propsForGsap={project1_page.propsForGsap}  backgroundImage={"/clone/services3.webp"}/>
            <ProjectText scroller="#work3page" randomID='kykx123' disableTitle={false}/>
          
            <FooterRedirect currentId={3}  targetRedirect='4' scroller="#work3page"/>
          
        </div>
    )
}
export default  Project3