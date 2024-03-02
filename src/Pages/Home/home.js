import React from 'react';

import './home.css';  // Import a separate CSS file for styling
import img3 from "./img3.png";

const Home = () => {
  
  return (
    <div>
      

      <div className="relative h-screen overflow-hidden">
        <img
          src={img3}
          alt="Profile"
          className="object-cover w-full h-full"
          style={{ imageRendering: 'auto' }}  
        />

        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-gray-900"></div>

        <div className="absolute bottom-0 w-full text-center pb-6 sm:pb-16 px-4">
          <div className="text-white">
            <h1 className="text-3xl sm:text-5xl font-bold text-gradient bg-yellow-600 mb-2 sm:mb-4">
              Unlock the world of cryptos with BitWit
            </h1>
            <p className="text-base sm:text-xl text-gradient bg-yellow-600">
              Your Digital Guide to Blockchain Mystery
            </p>
          </div>
        </div>
      </div>

     
    </div>
  );
};

export default Home;
