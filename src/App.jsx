import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { FloatingContactButtons } from './components/common/FloatingContactButtons';
import { FloatingMobileBar } from './components/common/FloatingMobileBar';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Portfolio } from './pages/Portfolio';
import { Wedding } from './pages/Wedding';
import { PreWedding } from './pages/PreWedding';
import { Events } from './pages/Events';
import { Portraits } from './pages/Portraits';
import { Videography } from './pages/Videography';
import { Services } from './pages/Services';
import { Packages } from './pages/Packages';
import { Testimonials } from './pages/Testimonials';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Booking } from './pages/Booking';

// Scroll to top helper component on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
};

export function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-studio-bg text-studio-text selection:bg-studio-gold selection:text-black">
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/pre-wedding" element={<PreWedding />} />
            <Route path="/events" element={<Events />} />
            <Route path="/portraits" element={<Portraits />} />
            <Route path="/videography" element={<Videography />} />
            <Route path="/services" element={<Services />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>

        <Footer />
        <FloatingContactButtons />
        <FloatingMobileBar />
      </div>
    </Router>
  );
}

export default App;
