import React from 'react';
import Navbar from '../Components/Navbar/Navbar';

import About from '../Components/AboutUs/About';
import Features from '../Components/Features/Features';
import Info from '../Components/Info/Info';
import Footer from '../Components/Footer/Footer';
import FAQSection from '../Components/Faq/Faq';
import Home from './Home/home';
import News from '../Components/News/News';


const Homepage = () => {
    return (
        <div>
        <Navbar />
        <Home />
        <About />
        
        <Info />
        {/* <Features /> */}
        <News />
        <FAQSection />
        <Footer />
        </div>
    );
    }
export default Homepage;