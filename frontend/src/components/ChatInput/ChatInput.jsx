import React from 'react'
import "./ChatInput.scss"
export default function ChatInput({ send }) {
  return (
    <div>
        <input onKeyDown={(event) => send(event)} />
    </div>
  )
}
