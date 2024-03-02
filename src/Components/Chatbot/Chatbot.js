// Chat.js
import React, { useState } from 'react';

import Header from './Header';
import ChatWindow from './ChatWindow';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
const Chat = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'user' },
    { id: 2, text: 'Hi there!', sender: 'bot' },
    { id: 3, text: 'How can I help you today?', sender: 'bot' },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { id: messages.length + 1, text: message, sender: 'user' }]);
    // You can add logic here to handle the bot's response
  };

  return (
    <div >
      <Navbar />
      <div className="flex h-screen bg-gray-100 ">

      
     
      <div className="flex-1 flex flex-col " style={{backgroundColor:"#040040",height:"fit-content"}}>
        <Header />
        <h2 className='text-5xl text-white font-bold  mt-4 mb-2' style={{fontFamily:"serif"}}>Chat with <span style={{color:"skyblue"}}>BitWit</span> </h2>
        <div className='flex-1 p-4  m-12 bg-black-900 rounded-lg border shadow-lg' style={{backgroundColor:"#020024"}}>
         
        <ChatWindow />
        </div>
       
      </div>
      </div>
   
    </div>
  );
};

export default Chat;
