import React from 'react';
import './App.css';
import { connect, sendMsg } from './api';

function App() {
    connect();

    function send()
      {
        console.log("hello");
        sendMsg("hello");
      }
    return(
      <div className='App'>
        <button onClick={send}>Hit</button>
      </div>
    )

}

export default App;
