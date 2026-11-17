import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

// Pages
import HomePage from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import PackagesPage from './pages/PackagesPage';
import RoomsPage from './pages/RoomsPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-[#FBF5EA] text-[#2B1511] relative selection:bg-gold selection:text-white">
        
        {/* Fixed Navigation Bar across all screens */}
        <Navbar />

        {/* Dynamic Route Content with top padding for the fixed navbar */}
        <main className="flex-grow pt-[85px] sm:pt-[95px]">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/activities" element={<ActivitiesPage />} />
            <Route path="/packages" element={<PackagesPage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Floating WhatsApp and Mobile sticky bar */}
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}
