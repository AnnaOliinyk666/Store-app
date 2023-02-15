import React from 'react'
import s from './style.module.css'

export default function Modal({children,closeModal}) {
  return (
    <div className={s.container}>
        <div className={s.window}> 
            {children}
            <button className={s.btn_modal_close} onClick={()=>closeModal()}>X</button>
        </div>
        
    </div>
  )
}
