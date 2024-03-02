
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/home';
import About from './Components/AboutUs/About';
import Features from './Components/Features/Features';
import Info from './Components/Info/Info';

import QuestionCard from './Components/Mcq/Mcq';
import Footer from './Components/Footer/Footer';
import FAQSection from './Components/Faq/Faq';
import Homepage from './Pages/Home';
import Chat from './Components/Chatbot/Chatbot';
import CryptoAnalysisPage from './Components/Analytic/Analytic';
import News from './Components/News/News';
import ImageGallery from './Components/Links/NewsLink';
import Artist from './Components/Artist/Artist';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/nav" element={<Navbar />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fe" element={<Features />} />
        <Route path="/info" element={<Info />} />
        
        <Route path="/mcq" element={<QuestionCard />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/" element={<Homepage />} />
        <Route path="/chatbot" element={<Chat />} />
        <Route path="/analytic" element={<CryptoAnalysisPage />} />
        <Route path="/news" element={<News />} />
      <Route path="/newslink" element={<ImageGallery />} />
      <Route path="/artist" element={<Artist />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
