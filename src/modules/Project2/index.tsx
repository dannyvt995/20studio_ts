
import IntroWorkPage from '@/components/new/IntroWorkPage';
import { project1_page } from '@/constants/page_props';

function Project2(): JSX.Element {
   
   
    return (
        <div id="work2page">
            <IntroWorkPage  propsForGsap={project1_page.propsForGsap}  backgroundImage={"/clone/services2.webp"}/>
        
        </div>
    )
}
export default  Project2