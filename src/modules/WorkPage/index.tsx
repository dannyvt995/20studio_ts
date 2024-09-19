"use client"
import WorkSlider from '@/components/new/WorkSlider';


import { memo } from 'react';
function WorkPage(): JSX.Element {
 
  return (
    <div id="workpage">
      <WorkSlider />
    </div>
  )
}

export default memo(WorkPage)