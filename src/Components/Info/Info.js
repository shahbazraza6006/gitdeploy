import React, { useState } from 'react';
import knowledge from "../../assets/ai.png";
import grading from "../../assets/grading.jpeg";
import personalized from "../../assets/personalized.jpeg";
import test2 from "../../assets/test2.jpeg";
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import "./info.css";

const Card = ({ imageSrc, alt, title, description, linkTo }) => {
  const [isHovered, setHovered] = useState(false);

  const cardSpring = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.1)' : '0 2px 4px rgba(0, 0, 0, 0.1)',
  });

  return (
    <animated.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ ...cardSpring,marginBottom:"100px" }}
      className="mx-3 mb-6 flex flex-col rounded-lg bg-white w-full sm:w-auto lg:max-w-lg shadow-lg dark:bg-neutral-700 infoimage" 
    >
       <Link to={linkTo}>
      
        <img
          className="rounded-t-lg w-full h-40 object-cover sm:h-auto"
          src={imageSrc}
          alt={alt}
        />
    
     
        <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
          <h2 className="mb-2 text-lg leading-tight text-blue-800 font-bold dark:text-neutral-50">
            {title}
          </h2>
          <p className="text-sm text-black-900 dark:text-neutral-200">
            {description}
          </p>
        </div>
      </Link>
    </animated.div>
  );
};

const Info = () => {
  return (
    <div style={{ backgroundColor: "#0A173E" }}>
    <div  className='in' >
      <h2 className="text-3xl sm:text-5xl font-semibold text-center text-white mb-6 sm:mb-10 font-serif info">Utilities</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center items-center mx-auto max-w-screen-lg gap-6">
        <Card
          imageSrc={knowledge}
          alt="Knowledge Concept"
          title="Knowledge assessment"
          description="Take BitWit's interactive assessment to gauge your current understanding and get a personalized learning path tailored just for you."
          linkTo="/mcq"
        />

        <Card
          imageSrc={grading}
          alt="Grading Concept"
          title="Personalised Training"
          description="From the basics of Bitcoin to the intricacies of smart contracts, BitWit's custom learning modules elevate your blockchain knowledge."
          linkTo="/chatbot"
        />

        <Card
          imageSrc={personalized}
          alt="Personalized Concept"
          title="AI-Powered Crypto Market Insights"
          description="Leverage BitWit's AI capabilities for in-depth market analysis, uncovering potential investment opportunities in the dynamic world of cryptocurrencies"
          linkTo="/analytic"
          
        />

        <Card
          imageSrc={test2}
          alt="Testing Concept"
          title="Grading System"
          description="Make informed decisions with BitWit's grading system, which ranks potential investments based on thorough analysis and market trends"
          linkTo="/artist"
         
        />
      </div>
    </div>
    </div>
  );
};

export default Info;
