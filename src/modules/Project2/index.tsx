
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import { project1_page } from '@/constants/page_props';

function Project2(): JSX.Element {
   
   
    return (
        <div id="work2page">
            <IntroWorkPage  propsForGsap={project1_page.propsForGsap} altbackgroundImage={"image_cache_services2"}  backgroundImage={"/clone/services2.webp"}/>
            <ProjectText scroller="#work2page" randomID='koko123' disableTitle={false}/>
          
            <FooterRedirect currentId={2}  targetRedirect='3' scroller="#work2page"/>
            
        </div>
    )
}
export default  Project2