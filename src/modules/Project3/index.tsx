
import IntroWorkPage from '@/components/new/IntroWorkPage';
import { project1_page } from '@/constants/page_props';

function Project3(): JSX.Element {
   
   
    return (
        <div id="work3page">
            <IntroWorkPage  propsForGsap={project1_page.propsForGsap}  backgroundImage={"/clone/services3.webp"}/>
        
        </div>
    )
}
export default  Project3