// News.js
import React from 'react';
import './News.css';

const cardsData = [
    { imageUrl: 'https://plus.unsplash.com/premium_photo-1661683887049-69e8ae0a6c92?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXJ0JTIwYnVzaW5lc3N8ZW58MHx8MHx8fDA%3D', text: 'Card 1' },
    { imageUrl: 'https://klaytn.foundation/wp-content/uploads/2023/01/ecosystem_wallets_huobiwallet-1-140x140.png', text: 'Huobi Wallet' },
    { imageUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5614.png', text: 'Zelwin Finance' },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png", text: "Spooky Swap" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/10299.png", text: "Binance Coin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9608.png", text: "Spooky Swap" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/10299.png", text: "Binance Coin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7288.png", text: "Venus" },
    { imageUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png", text: "Bitcoin" },

    // Add more card data as needed
    // ... Repeat the above cards to add more
  ];

const Card = ({ imageUrl, text }) => (
    <div className=" mx-4 my-4 bg-black bg-opacity-25 border-white rounded-2xl overflow-hidden shadow-md text-center p-8 card" style={{width:"800px"}}>
      <img className="w-32 h-32 rounded-full mx-auto my-4 mb-4 imgcard" src={imageUrl} alt="Card Image" />
      <div>
        <p className="text-white mb-2">{text}</p>
      </div>
    </div>
  );
  

  const InfiniteCardLoop = ({ cards }) => (
    <div className="relative overflow-hidden">
      <div className="flex animation-container ">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
  
const News = () => (
  <div style={{ backgroundColor: "#0A173E" }}>
  <div className="news" >
    {/* Large Card with InfiniteCardLoop */}
    <div className="max-w-7xl mx-auto  bg-opacity-25 border-white rounded-2xl shadow-md text-left p-9 "style={{ backgroundColor: "#0A173E", border:"1px solid white" }}>
      <h3 className="text-white text-xl mb-4">Partners past and present</h3>
      <h2 className="text-white text-3xl font-bold mb-4">Together there's no stopping us</h2>
      <InfiniteCardLoop cards={cardsData} />
    </div>
  </div>
  </div>
);

export default News;



