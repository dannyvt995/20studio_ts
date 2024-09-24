

import { memo, Suspense } from 'react';
import { IPageModule } from '@/types/common';
import IntroWorkPage from '@/components/new/IntroWorkPage';
import ProjectText from '@/components/new/ProjectText';

import Layout_1 from '@/components/new/Some_Component_For_Post/Layout_1';
import Layout_2 from '@/components/new/Some_Component_For_Post/Layout_2';
import Layout_3 from '@/components/new/Some_Component_For_Post/Layout_3';
import Layout_4 from '@/components/new/Some_Component_For_Post/Layout_4';
import { project1_page , project2_page} from '@/constants/page_props';
import FooterRedirect from '@/components/new/FooterRedirect';
import GridImageSlider from '@/components/new/Some_Component_For_Post/GridImageSlider1';
import LayoutCustom from '@/components/new/Some_Component_For_Post/LayoutCustom';

function Project1(): JSX.Element {
   
   
    return (
        <div id="work1page">
            <IntroWorkPage content={project1_page.content.introWorkPage} propsForGsap={project1_page.propsForGsap} />
           {/*  <ProjectText scroller={project1_page.propsForGsap.scrollerRef} randomID='hoho123' disableTitle={false}/> */}
             <GridImageSlider content={project1_page.content} propsForGsap={project1_page.propsForGsap}/>
            {/*  <ProjectText scroller={project1_page.propsForGsap.scrollerRef} randomID='ghhe123' disableTitle={true}/> */}
            <Suspense>
            <LayoutCustom content={project1_page.content.gridImageSlider} />
            </Suspense>
          
        
          {/*    <div className='cream_background'>
                <ProjectText scroller={project1_page.propsForGsap.scrollerRef} randomID='bobo123' disableTitle={false}/>
             </div>
             <div className='dark_background'>
                <ProjectText scroller={project1_page.propsForGsap.scrollerRef} randomID='tete123' disableTitle={false}/>
             </div> */}
       {/*       <Layout_1/>
             <Layout_2/>
             <Layout_3/>
             <Layout_4/> */}
             <FooterRedirect content={project2_page.content} currentId={1} targetRedirect='2' scroller={project1_page.propsForGsap.scrollerRef}/>
            
        </div>
    )
}
export default  memo(Project1)