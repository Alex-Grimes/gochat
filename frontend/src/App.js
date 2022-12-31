import React, { useState, useEffect} from 'react';
import './App.css';
import { connect, sendMsg } from './api';
import { Header } from './components/Header/Header';
import ChatHistory from './components/ChatHistory/ChatHistory';

function App() {

  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New Message")
      setChatHistory([...chatHistory, msg])
      console.log(chatHistory)
    });
  
  }, [chatHistory])

  function send()
    {
      console.log("hello");
      sendMsg("hello");
    }
    return(
      <div className='App'>
        <Header />
        <ChatHistory history={chatHistory} />
        <button onClick={send}>Hit</button>
      </div>
    )

}

export default App;
