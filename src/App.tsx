import { HashRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
import GlobalRecruiter from './components/home/GlobalRecruiter';

function HomePage() {
  return (
    <div className="bg-site-bg">
      <Hero />
      <WhyChooseUs />
      <CoreValues />
      <GlobalRecruiter />
      <Services />
      <QuoteHero />
      <MissionVision />
      <About />
    </div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
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
      <ScrollToTop />
      <div className="min-h-screen bg-site-bg">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#033A5B] focus:text-white focus:rounded-lg focus:outline-none focus:ring-2 focus:ring-[#22B0EB]"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/thanks" element={<ThankYouPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;