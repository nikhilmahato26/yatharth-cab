import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, MessageCircle, ArrowRight, Shield } from 'lucide-react';
import TripsPlanModal from './TripsPlanModal';

export default function Navbar({ activeTab, setActiveTab }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isTripsPlanModalOpen, setIsTripsPlanModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'fleet', label: 'Fleet & Rates' },
    { id: 'routes', label: 'Popular Routes' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#061A3A]/95 backdrop-blur-md shadow-xl border-b border-[#F5B400]/20 py-2.5' 
        : 'bg-[#061A3A] py-3.5 border-b border-white/5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-3 text-left group transition focus:outline-none"
        >
          <img 
            src="/emblem.png" 
            alt="Yatharth Logo" 
            className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            onError={(e) => { e.target.style.display = 'none'; }}
          />
          <div className="flex flex-col">
            <span className="text-white font-extrabold text-lg sm:text-xl tracking-wider leading-none font-heading flex items-center gap-1.5">
              YATHARTH
              <span className="text-[10px] bg-[#F5B400] text-[#061A3A] font-bold px-1.5 py-0.5 rounded tracking-normal">
                RAJKOT
              </span>
            </span>
            <span className="text-[#FFC21A] text-xs font-semibold tracking-widest leading-tight uppercase mt-0.5">
              Cab Service
            </span>
            <span className="text-slate-400 text-[9px] tracking-tight italic hidden sm:block">
              Aapki Yatra, Hamari Jimmedari
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === link.id
                  ? 'text-[#061A3A] bg-[#F5B400] font-semibold shadow-sm'
                  : 'text-slate-200 hover:text-white hover:bg-white/10'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => setIsTripsPlanModalOpen(true)}
            className="bg-[#F5B400] text-[#061A3A] font-bold px-4 py-2.5 rounded-xl shadow-md text-sm hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Trips Plan
          </button>

          <a
            href="https://wa.me/917487887777?text=Hello%20Yatharth%20Cab%20Service%20Rajkot,%20I%20want%20to%20book%20a%20taxi."
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500 hover:text-white transition"
            title="Chat on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          <a
            href="tel:7487887777"
            className="gold-btn-gradient text-[#061A3A] font-bold px-4 py-2.5 rounded-xl shadow-md flex items-center gap-2 text-sm hover:shadow-lg transition-transform hover:-translate-y-0.5"
          >
            <Phone className="w-4 h-4 fill-[#061A3A]" />
            <span>7487887777</span>
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <a
            href="tel:7487887777"
            className="bg-[#F5B400] text-[#061A3A] p-2 rounded-lg font-bold sm:hidden"
            aria-label="Call"
          >
            <Phone className="w-4 h-4 fill-[#061A3A]" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#061A3A] border-t border-white/10 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top duration-200">
          <button
            onClick={() => {
              setIsTripsPlanModalOpen(true);
              setMobileMenuOpen(false);
            }}
            className="w-full text-center px-4 py-3 mb-3 rounded-lg text-sm font-bold bg-[#F5B400] text-[#061A3A] shadow-md animate-pulse"
          >
            View Special Trips Plan
          </button>
          <div className="grid grid-cols-2 gap-2 pb-3 mb-2 border-b border-white/10">
            <a
              href="tel:7487887777"
              className="flex items-center justify-center gap-2 bg-[#F5B400] text-[#061A3A] font-bold py-2.5 px-3 rounded-lg text-xs"
            >
              <Phone className="w-3.5 h-3.5 fill-[#061A3A]" />
              Call 7487887777
            </a>
            <a
              href="https://wa.me/917487887777?text=Hello%20Yatharth%20Cab%20Service%20Rajkot,%20I%20want%20to%20book%20a%20taxi."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-bold py-2.5 px-3 rounded-lg text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                activeTab === link.id
                  ? 'bg-[#F5B400] text-[#061A3A] font-bold'
                  : 'text-slate-200 hover:bg-white/5'
              }`}
            >
              {link.label}
            </button>
          ))}

          <div className="pt-3 text-center text-xs text-slate-400 italic">
            "Aapki Yatra, Hamari Jimmedari" — Yatharth Rajkot
          </div>
        </div>
      )}
      <TripsPlanModal 
        isOpen={isTripsPlanModalOpen} 
        onClose={() => setIsTripsPlanModalOpen(false)} 
      />
    </header>
  );
}
