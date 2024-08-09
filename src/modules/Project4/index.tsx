
import FooterRedirect from '@/components/new/FooterRedirect';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import { project1_page } from '@/constants/page_props';

function Project4(): JSX.Element {
   
   
    return (
        <div id="work4page">
            <IntroWorkPage altbackgroundImage={"image_cache_services4"}  propsForGsap={project1_page.propsForGsap}  backgroundImage={"/clone/services4.webp"}/>
            <ProjectText scroller="#work4page" randomID='kadx123' disableTitle={false}/>
           
            <FooterRedirect currentId={4}  targetRedirect='1' scroller="#work4page"/>
           
        </div>
    )
}
export default  Project4