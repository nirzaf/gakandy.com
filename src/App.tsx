import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import Performance from './components/Performance';
import { Toaster } from 'react-hot-toast';

function HomePage() {
  return (
    <div className="bg-site-bg">
      <Hero />
      <WhyChooseUs />
      <Performance />
      <Services />
      <MissionVision />
      <About />
    </div>
  );
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
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;