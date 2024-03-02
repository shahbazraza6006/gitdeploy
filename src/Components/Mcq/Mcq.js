// QuestionCard.jsx
import React, { useState, useEffect,useRef } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import video2 from './video2.mp4';

const QuestionCard = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the playback rate to 0.5 for half the normal speed
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);
  const [questions, setQuestions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState(Array(5).fill(null).map(() => ''));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [marks, setMarks] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://api.bitbase.capital/mcqs');
        const data = await response.json();
        console.log("data is",data);
        setQuestions(data);
        setSelectedOptions(Array(data.length).fill(''));

      } catch (error) {
        const response = await fetch('https://api.bitbase.capital/mcqs');
        const er = await response.json();
        console.log("error is",er);
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  const handleSelectOption = (optionId) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[currentQuestion] = optionId;
    setSelectedOptions(updatedOptions);
  };

  const handlePrev = () => {
    setCurrentQuestion((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
  };

  const handleSubmit = () => {
    // Validate that options are selected for all questions before submitting
    if (selectedOptions.some((option) => option === '')) {
      // Handle validation error (show a message or something)
      return;
    }

    // Calculate score based on selected options
    const newMarks = selectedOptions.reduce((score, option, index) => {
      const selectedOptionText = options[index].find((opt) => opt.id === option).text;
      return score + (selectedOptionText === questions[index].answer ? 1 : 0);
    }, 0);

    setMarks(newMarks);
    setSubmitted(true);
  };

  if (questions.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen ">
        <div className="relative">
          <div className="h-24 w-24 rounded-full border-t-8 border-b-8 border-gray-200"></div>
          <div className="absolute top-0 left-0 h-24 w-24 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin">
          </div>
        </div>
      </div>
    );
  }

  // Assuming the options are strings or objects with 'id' and 'text'
  const options = questions.map((question) =>
    (question.options || []).map((option, index) => {
      if (typeof option === 'string') {
        return { id: String.fromCharCode(65 + index), text: option };
      }
      return option;
    })
  );

  return (
    <div>
      <Navbar />
      <div className="absolute inset-0 overflow-hidden bg-gray-900">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>

      <motion.div
        className="min-h-screen flex justify-center items-center font-sans text-gray-700"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{ backgroundColor: "#0A173E" }}
      >
        <motion.div
          className="bg-transparent p-8 rounded-xl shadow-lg w-full max-w-3xl flex flex-col relative backdrop-filter backdrop-blur-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-semibold text-center text-white mt-1 mb-6">Knowledge Assessment</h1>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="text-xl text-start text-white font-semibold">
                Question {currentQuestion + 1} of {questions.length}
              </div>
              <div className="text-xl text-end text-white font-semibold">
                {submitted ? `Score: ${marks} / ${questions.length}` : ''}
              </div>
            </div>
            <motion.div
              className="text-lg text-start text-white"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {questions[currentQuestion]?.question}
            </motion.div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
            <motion.div
              className="grid grid-cols-1 gap-4 md:grid-cols-2 mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
{options[currentQuestion].map((option) => (
  <motion.div
    key={option.id}
    className={`cursor-pointer text-white p-4 border-2 rounded-lg ${
      selectedOptions[currentQuestion] === option.id
        ? 'border-green-800'
        : submitted && option.text === questions[currentQuestion].answer
        ? 'border-green-500'
        : 'border-gray-300'
    } ${
      submitted && option.text === questions[currentQuestion].answer
        ? 'bg-green-800'
        : ''
    } ${
      submitted && option.text !== questions[currentQuestion].answer
        ? selectedOptions[currentQuestion] === option.id
          ? 'border-red-500'
          : ''
        : ''
    }`}
    onClick={() => handleSelectOption(option.id)}
    tabIndex={0}
    onKeyPress={(event) =>
      event.key === 'Enter' && handleSelectOption(option.id)
    }
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {option.text}
  </motion.div>
))}


            </motion.div>

            <motion.div
              className="flex justify-between items-center mt-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <motion.button
                type="button"
                onClick={handlePrev}
                className="bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300 transition duration-300"
                disabled={currentQuestion === 0}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Prev
              </motion.button>

              {currentQuestion === questions.length - 1 ? (
                <motion.button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  Submit
                </motion.button>
              ) : (
                <motion.button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                  disabled={currentQuestion === questions.length - 1}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Next
                </motion.button>
              )}
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default QuestionCard;
