import React from 'react';
import './Card.css';  
const Card = ({ title, imageSrc }) => {
  return (
    <div className='cord'>
    <div className="relative max-w-md mx-4 overflow-hidden bg-opacity-50 m-4 ">
      <img
        className="w-full h-60 md:w-60 md:h-60 rounded-lg border-2 border-yellow-400 shadow-md"
        src={imageSrc}
        alt={title}
      />
      <div className="bottom-0 left-0 w-full py-4 px-2 text-center">
        {/* <div className="font-bold text-xl text-white">{title}</div> */}
      </div>
    </div>
    </div>
  );
};

export default Card;
