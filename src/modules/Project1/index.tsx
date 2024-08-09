

import { memo, useEffect } from 'react';
import { IPageModule } from '@/types/common';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';
import GridImage1 from '@/components/new/Some_Component_For_Post/GridImageStyle1';
import Layout_1 from '@/components/new/Some_Component_For_Post/Layout_1';
import Layout_2 from '@/components/new/Some_Component_For_Post/Layout_2';
import Layout_3 from '@/components/new/Some_Component_For_Post/Layout_3';
import Layout_4 from '@/components/new/Some_Component_For_Post/Layout_4';
import { project1_page } from '@/constants/page_props';
import FooterRedirect from '@/components/new/FooterRedirect';

function Project1(): JSX.Element {
   
   
    return (
        <div id="work1page">
            <IntroWorkPage altbackgroundImage={"image_cache_services1"}   propsForGsap={project1_page.propsForGsap}  backgroundImage={"/clone/services1.webp"}/>
            <ProjectText scroller="#work1page" randomID='hoho123' disableTitle={false}/>
             <GridImage1 propsForGsap={project1_page.propsForGsap}/>
             <ProjectText scroller="#work1page" randomID='ghhe123' disableTitle={true}/>
             <div className='cream_background'>
                <ProjectText scroller="#work1page" randomID='bobo123' disableTitle={false}/>
             </div>
             <div className='dark_background'>
                <ProjectText scroller="#work1page" randomID='tete123' disableTitle={false}/>
             </div>
       {/*       <Layout_1/>
             <Layout_2/>
             <Layout_3/>
             <Layout_4/> */}
             <FooterRedirect currentId={1} targetRedirect='2' scroller="#work1page"/>
            
        </div>
    )
}
export default  Project1