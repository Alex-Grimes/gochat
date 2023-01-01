import React from 'react'
import Message from '../Message/Message'
import "./ChatHistory.scss"


export default function ChatHistory(history) {
    console.log(history)
    
    const messages = history.history.map(message => {
        console.log(message.data);
        return(
        <Message msg={JSON.parse(message.data)} />
    )});
    
    return (
    <div className='ChatHistory'>
        <h2>ChatHistory</h2>
        {messages}
    </div>
  );
}
