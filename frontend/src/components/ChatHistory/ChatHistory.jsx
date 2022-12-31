import React from 'react'
import "./ChatHistory.scss"


export default function ChatHistory(history) {
    console.log(history)
    
    const messages = history.history.map((msg, index) => {
        return <p key={index}>{msg.data}</p>
        
    });
    
    return (
    <div className='ChatHistory'>
        <h2>ChatHistory</h2>
        {messages}
    </div>
  );
}
