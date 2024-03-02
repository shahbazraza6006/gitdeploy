import React, { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const CryptoAnalysisPage = () => {
  const [selectedScore, setSelectedScore] = useState(null);

  const data = {
    labels: ['Twitter Analysis', 'Telegram Analysis', 'Volume Analysis', 'Performance Analysis', 'Tokenomics', 'Market Analysis'],
    datasets: [
      {
        label: 'Analysis Score',
        data: [90, 85, 80, 45,40,72],
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        beginAtZero: true,
      },
    },
    onClick: (event, elements, chart) => {
      if (elements.length > 0) {
        const index = elements[0].index;
        const score = chart.data.datasets[0].data[index];
        setSelectedScore(score);
        updateCardScores(score);
      }
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
    barThickness: 40,
  };

  const [cardScores, setCardScores] = useState([90, 85, 80, 45]);

  const updateCardScores = (score) => {
    setCardScores((prevScores) => [...prevScores.slice(0, 4), score]);
  };

  return (
    <div >
      <Navbar/>
      <div className="text-white items-center justify-center p-14" style={{ backgroundColor: "#0A173E" }}>
      
      <h1 className="text-4xl font-bold m-5 font-mono">BitWit - The Crypto Analyst</h1>
      <h2 className='text-center m-6 text-2xl font-mono '>Let me help you analyze the crypto projects and markets as a whole</h2>
      <div className="flex justify-center mb-9">
        <div style={{ width: '800px', height: '500px' }}>
          <Bar data={data} options={options} />
        </div>
      </div>
      <h2 className="text-2xl mt-4 m-16">
        Overall Score Rating - {selectedScore !== null ? `${selectedScore}%` : 'Select a bar'}
      </h2>
      <div className={`grid grid-cols-2 md:grid-cols-2 gap-4 mt-4 m-6`}>
        {data.labels.slice(0, 4).map((label, index) => (
          <div key={label} className={`bg-indigo-700 p-4 rounded-md shadow-lg col-span-1 md:col-span-1`}>
            <h3 className="font-semibold">{label}</h3>
            <p>Score: {cardScores[index]}%</p>
          </div>
        ))}
      </div>
      </div>
      <Footer/>
    </div>
  );
};

export default CryptoAnalysisPage;
