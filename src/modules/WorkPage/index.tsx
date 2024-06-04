
import WorkSlider from '@/components/new/WorkSlider';
import { IPageModule } from '@/types/common';
import { memo } from 'react';
function WorkPage({ stateTransition }: IPageModule): JSX.Element {

  return (
    <div id="workpage">
      <WorkSlider />
    </div>
  )
}

export default memo(WorkPage)