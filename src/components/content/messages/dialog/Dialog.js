import React from 'react'
import di from './Dialog.module.css'

const Dialog = (props) => {
  return (
    <div className={di.dialog}>
      <div className={di.userName}>{props.name}</div>
    </div>
  )
}


export default Dialog
