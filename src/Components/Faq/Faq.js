import React, { useState } from 'react';
import "./Faq.css";
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-8 bg-white rounded-lg dark:bg-white shadow faq" > {/* Adjusted for white background and shadow for better visibility */}
      <button
        className="flex items-center justify-between w-full text-left text-black" // Ensure text is black and left-aligned
        onClick={() => setIsOpen(!isOpen)}
      >
        <h1 className="font-semibold">{question}</h1>
        <span className="rounded-full">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 12h12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 12H6m6-6v12" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && <p className="mt-6 text-sm text-gray-500">{answer}</p>}
    </div>
  );
};

function FAQSection() {
  const faqs = [
    {
      question: 'How can I pay for my appointment?',
      answer: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit...',
    },
    {
      question: 'Is the cost of the appointment covered by private health insurance?',
      answer: 'Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi...',
    },
    {
        question: 'Is the cost of the appointment covered by private health insurance?',
        answer: 'Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi...',
    },
      {
        question: 'Is the cost of the appointment covered by private health insurance?',
        answer: 'Voluptas eaque nobis, fugit odit omnis fugiat deleniti animi...',
      },
  ];

  return (
    <section className="bg-gray-100 dark:bg-gray-900 " style={{backgroundColor:"#0A173E"}}> {/* Adjust the background for the overall section if needed */}
      <div className="container px-6 py-12 mx-auto ">
        <h1 className="text-2xl font-semibold text-left lg:text-3xl text-white dark:text-white m-16 fqheading">Frequently asked questions</h1> {/* Ensure heading is left-aligned and text is black */}

        <div className="mt-8 space-y-8 lg:mt-12 m-16 ">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
