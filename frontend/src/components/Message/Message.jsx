import React from 'react'
import "./Message.scss"

export default function Message(msg) {
    console.log(msg);
    let temp = msg;
    console.log(temp);
    msg = {
        body: temp
    };

  return (
    <div className='Message'>{msg.body}</div>
  )
}
