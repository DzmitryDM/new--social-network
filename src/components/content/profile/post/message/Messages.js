import React from 'react';
import m from './Messages.module.css';
import caracal from './image/caracal.jpg';


const Messages=(props)=>{
   return(
      <div className={m.messages}>
         <div className={m.messages_avatar}>
            <img src={caracal} />
         </div>
         <a href='#' className={m.messages_text}>{props.message}</a>
      </div>
   )
}

export default Messages;