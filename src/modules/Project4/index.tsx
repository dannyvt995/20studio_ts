
import IntroWorkPage from '@/components/new/IntroWorkPage';
import { project1_page } from '@/constants/page_props';

function Project4(): JSX.Element {
   
   
    return (
        <div id="work4page">
            <IntroWorkPage  propsForGsap={project1_page.propsForGsap}  backgroundImage={"/clone/services4.webp"}/>
        
        </div>
    )
}
export default  Project4