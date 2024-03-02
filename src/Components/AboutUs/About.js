// About.jsx

import React from 'react';
import bitwit from './bitwit.jpeg';
import './Aboutus.css';
const About = () => {
  return (
    <div className="h-screen flex flex-col sm:flex-row items-center justify-center p-8 relative about " id="#about" style={{ backgroundColor: "#0A173E" }}>
      <div className="flex flex-col sm:flex-row text-white max-w-6xl w-full  relative z-10">
        
        {/* Image container */}
        <div className="flex justify-center items-center mb-8 sm:mb-0 w-full sm:w-1/2 z-10 aboutimage">
          <img
            src={bitwit}
            alt="AIDoge"
            className="h-auto max-h-92 w-full sm:max-w-md object-cover rounded-xl border-4 border-yellow-500 bg-orange-900"
          />
        </div>
        
        {/* Text container */}
        <div className="flex flex-col justify-center items-center sm:items-start sm:w-full pl-0 sm:pl-10 z-10">
          <h1 className="text-4xl font-bold mb-4 text-center sm:text-left">What is BITWIT?</h1>
          <p className="mb-4 text-start">Cryptocurrency, or crypto, is a digital form of currency utilizing secure blockchain technology for decentralized transactions. Bitcoin, introduced in 2009, was the pioneering cryptocurrency, leading to the emergence of various alternative coins. Operating independently of central authorities, cryptocurrencies offer benefits such as increased privacy and financial inclusivity. However, challenges like market volatility and regulatory scrutiny persist, making the crypto landscape dynamic and impactful in the global financial realm.</p>

          <div className="flex flex-col sm:flex-row justify-center sm:justify-start mt-4">
            <a href="#buy-aidoge" className="bg-blue-600 hover:bg-blue-700 text-yellow-500 text-xl font-bold py-2 px-4 rounded mb-2 sm:mb-0 sm:mr-4">
              Buy BITWIT
            </a>
            <a href="#view-docs" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              View Docs
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
