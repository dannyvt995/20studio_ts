"use client"
import WorkSlider from '@/components/new/WorkSlider';
import { isMobile } from '@/utils/responsive';


import { memo } from 'react';
import WorkPageMobi from '../WorkPageMobi';
function WorkPage(): JSX.Element {
  
  return (
    <div id="workpage">
      
      {isMobile() ? <WorkPageMobi></WorkPageMobi>: <WorkSlider />}
    </div>
  )
}

export default memo(WorkPage)