import React from "react";
import Card from "../Card/Card";
import owl2 from "./owl2.jpeg";
import owl from "./owl.jpeg"; 
import knowledge from "./knowledge.jpeg";
import personalized from "./personalized.jpeg";
import ai from "./ai.jpeg";
import grading from "./grading.jpeg";
import "./feature.css";
const Features = () => {
  return (
    <div className="cord">
    <div className="flex flex-col justify-center items-center h-screen" style={{ backgroundColor: "#0A173E" }}>
      <h2 className="text-5xl text-white font-bold mb-4 font-serif titlo ">Utilities</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <Card title="Knowledge Assessment" imageSrc={knowledge} />
        <Card title="Personalised Training" imageSrc={personalized} />
        <Card title="AI-Powered Market " imageSrc={ai} />
        <Card title="Grading System" imageSrc={grading} />
      </div>
    </div>
    </div>
  );
};

export default Features;
