import { HashRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import About from './components/About';
import Footer from './components/Footer';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';
import ThankYouPage from './pages/ThankYouPage';
import MissionVision from './components/MissionVision';
import CoreValues from './components/CoreValues';
import { Toaster } from 'react-hot-toast';
import { QuoteHero } from './components/home/QuoteHero';
import { motion } from 'framer-motion';

function HomePage() {
  return (
    <div className="bg-site-bg">
      <Hero />
      <WhyChooseUs />
      <CoreValues />
      <Services />
      <QuoteHero />
      <MissionVision />
      <About />
    </div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);
  
  return <div>Redirecting...</div>;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-site-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/thanks" element={<ThankYouPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;