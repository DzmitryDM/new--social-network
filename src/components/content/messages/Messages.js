import React from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import Dialog from './dialog/Dialog'
import m from './Messages.module.css'
import MyMessage from './myMessage/myMessage'
import UserMessage from './usersMessage/usersMessage'

const Messages = () => {
   let users = useSelector(state=>state.messages.dialogsUser)
   let messages = useSelector(state=>state.messages.dialogsMessages)
const isAuth=useSelector(state=>state.auth.isAuth)
 useEffect(()=>{

 })

   let user = users.map(u=><Dialog name={u.name} id={u.id}/>)
   let message = messages.map(u=><UserMessage message={u.message} id={u.id}/>)

  return (
    <div className={m.messages}>
     <div className={m.title}>Messages</div>
      <div className={m.messageContainer}>
         <div className={m.users}>{user}</div>
         <div className={m.messagess}>{message}</div>
     </div>
     <MyMessage/>
    </div>
  )
}

export default Messages
