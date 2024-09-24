"use client"
import WorkSlider from '@/components/new/WorkSlider';
import { isMobile } from '@/utils/responsive';


import { memo, useEffect, useState } from 'react';
import WorkPageMobi from '../WorkPageMobi';
function WorkPage(): JSX.Element {
  const [isMobi,setIsMobi] = useState(false)
  useEffect(() => {
    if(isMobile()) setIsMobi(true)
  },[])
  return (
    <div id="workpage">
      
      {isMobi ? <WorkPageMobi/>: <WorkSlider />}
    </div>
  )
}

export default memo(WorkPage)