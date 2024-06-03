import React from 'react'
import s from './style.module.css'
import IntroWorkPage from '../../IntroWorkPage'
import ProjectText from '../../ProjectText'
import GridImage1 from '../../Some_Component_For_Post/GridImageStyle1'
import GridImage2 from '../../Some_Component_For_Post/GridImageStyle2'
export default function DetailWorkPage() {
  return (
    <div className='DetailWorkPage'>

      <ProjectText/>
      <GridImage1/>
      <GridImage2/>
    </div>
  )
}
