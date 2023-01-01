import React, { useState } from 'react'
import "./Message.scss"

export default function Message(msg) {
    console.log(msg);
    let temp = JSON.parse(JSON.stringify(msg));
    console.log(temp);
    const [message, setmessage] = useState([])
    setmessage(temp)

  return (
    <div className='Message'>{message.body}</div>
  )
}
