import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

// Pages
import Home from './pages/Home';
import Services from './pages/Services';
import Fleet from './pages/Fleet';
import Routes from './pages/Routes';
import About from './pages/About';
import Contact from './pages/Contact';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  // Handle why-us or anchor jumps
  const handleTabChange = (tabId) => {
    if (tabId === 'why-us') {
      setActiveTab('home');
      setTimeout(() => {
        const el = document.getElementById('why-us');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
      return;
    }

    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F9FC] text-slate-800 selection:bg-[#F5B400] selection:text-[#061A3A]">
      {/* Top Header Bar */}
      <TopBar />

      {/* Main Sticky Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={handleTabChange} />

      {/* Dynamic Page Rendering */}
      <main className="flex-grow">
        {activeTab === 'home' && (
          <Home 
            setActiveTab={handleTabChange}
            onBookRoute={() => {
              const el = document.getElementById('book-taxi');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onSelectVehicle={() => {
              const el = document.getElementById('book-taxi');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}

        {activeTab === 'services' && (
          <Services setActiveTab={handleTabChange} />
        )}

        {activeTab === 'fleet' && (
          <Fleet setActiveTab={handleTabChange} />
        )}

        {activeTab === 'routes' && (
          <Routes setActiveTab={handleTabChange} />
        )}

        {activeTab === 'about' && (
          <About setActiveTab={handleTabChange} />
        )}

        {activeTab === 'contact' && (
          <Contact />
        )}
      </main>

      {/* Footer */}
      <Footer setActiveTab={handleTabChange} />

      {/* Persistent WhatsApp & Call Floating Buttons */}
      <FloatingButtons />
    </div>
  );
}
