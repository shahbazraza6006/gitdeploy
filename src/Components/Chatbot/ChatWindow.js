import React, { useState } from 'react';
import { MdSend } from 'react-icons/md';
import userAvatar from './Chatbot.jpg';
import botAvatar from './robot.jpg';
import Navbar from "../../Components/Navbar/Navbar";
import "./Chatbot.css";
const ChatWindow = () => {
  const [inputMessage, setInputMessage] = useState('');
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSendMessage = () => {
    console.log('Sending message:', inputMessage);
    setInputMessage('');
  };

  const handleCardClick = (cardIndex) => {
    setSelectedCard(cardIndex);
  };

  const cardsData = [
    {
      question: "What is Bitcoin?",
      answer: "Bitcoin is a decentralized digital currency, without a central bank or single administrator, that can be sent from user to user on the peer-to-peer bitcoin network without the need for intermediaries.",
    },
    {
      question: "How does blockchain work?",
      answer: "Blockchain is a distributed ledger technology that securely records and verifies transactions across multiple computers. It consists of a chain of blocks, each containing a list of transactions.",
    },
    {
      question: "What is Ethereum?",
      answer: "Ethereum is an open-source blockchain platform that allows developers to build and deploy smart contracts and decentralized applications (DApps).",
    },
    {
      question: "How to buy cryptocurrencies?",
      answer: "You can buy cryptocurrencies on various cryptocurrency exchanges using fiat currency or other cryptocurrencies. Popular exchanges include Coinbase, Binance, and Kraken.",
    },
  ];

  return (
    <main className="flex-1 overflow-y-auto p-6 relative" style={{ height: '78vh', backgroundColor: "#020024" }}>
      {/* Input field and send button */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white flex items-center shadow mt-5" style={{ backgroundColor: "#020024" }}>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-xl focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-500 text-white p-2 border border-gray-300 rounded-xl hover:bg-blue-600 focus:outline-none flex items-center justify-center"
          style={{ paddingLeft: '16px', paddingRight: '16px' }}
        >
          <MdSend size="24px" />
        </button>
      </div>

      

      {/* User's and Bot's messages */}
      {selectedCard !== null && (
        <>
          <div className="flex items-end justify-end mb-4">
            <div className="max-w-md rounded shadow p-4 bg-white">
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center chtdiv">
                  <img src={userAvatar} alt="User Avatar" className="w-10 h-10 mr-2" />
                  <p className="text-gray-800">{cardsData[selectedCard].question}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-start mb-4">
            <div className="max-w-md rounded shadow p-4 bg-white">
              <div className="flex items-start justify-around mb-2">
                <div className="flex items-center">
                  <img src={botAvatar} alt="Bot Avatar" className="w-10 h-10 mr-2" />
                  <p className="text-gray-800 text-justify">{cardsData[selectedCard].answer}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {/* Display clickable cards */}
      <div className="flex flex-wrap justify-center chatcard " >
        {cardsData.map((card, index) => (
          <div
            key={index}
            className={`max-w-md rounded shadow p-4  border-white   cursor-pointer mx-2 mb-2 w-full   hover:bg-blue-900  ${selectedCard !== null ? 'hidden' : ''}`}
            onClick={() => handleCardClick(index)}
            style={{border:"1px solid white"}}
          >
            <p className="text-white ">{card.question}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ChatWindow;
 