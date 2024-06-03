"use client"
import { memo } from 'react'
import s from './style.module.css'
function ButtonMenu() {

  return (
    <button className={s.button_menu} id="button_menu" >
      <div className={s.lable}>
        Menu
      </div>
      <div className={s.icon}>
        <svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.icon_close}>
          <line x1="13.788" y1="1.28816" x2="1.06011" y2="14.0161" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
          <line x1="1.06049" y1="1.43963" x2="13.7884" y2="14.1675" stroke="currentColor" strokeWidth="1.2" style={{ strokeDashoffset: '0', strokeDasharray: 'none' }}></line>
        </svg>
      </div>
    </button>
  )
}
export default memo(ButtonMenu)
