import React from 'react'
import m from './usersMessage.module.css'

const UserMessage = (props) => {
  return (
    <div className={m.message}>
      <div className={m.userMessage}>{props.message}</div>
    </div>
  )
}


export default UserMessage