import React from 'react';
import { Phone, MessageCircle, MapPin, Mail, Clock, ShieldCheck, ChevronRight, Heart } from 'lucide-react';

export default function Footer({ setActiveTab }) {
  const handleLinkClick = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#041026] text-slate-300 border-t border-[#F5B400]/20 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand & Taglines (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/emblem.png"
                alt="Yatharth Logo"
                className="h-12 w-auto object-contain"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              <div>
                <span className="text-white font-black text-xl font-heading tracking-wider block">
                  YATHARTH
                </span>
                <span className="text-[#FFC21A] text-xs font-bold tracking-widest uppercase block -mt-1">
                  CAB SERVICE RAJKOT
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              Premier taxi and chauffeur hire service based in Rajkot, Gujarat. Providing top-quality Swift Dzire, Maruti Ertiga, Innova Crysta, and Tempo Travellers for outstation drops, airport transfers, and pilgrimage journeys.
            </p>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-xs text-amber-300 italic">
              "Aapki Yatra, Hamari Jimmedari • Safar Aaram Ka, Vishwas Hamara!"
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://wa.me/917487887777"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition"
                title="WhatsApp Us"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="tel:7487887777"
                className="w-10 h-10 rounded-xl bg-[#F5B400]/20 border border-[#F5B400]/40 text-[#FFC21A] flex items-center justify-center hover:bg-[#F5B400] hover:text-[#061A3A] transition"
                title="Call Helpline"
              >
                <Phone className="w-5 h-5 fill-current" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider border-b border-[#F5B400]/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => handleLinkClick('home')} className="hover:text-[#FFC21A] transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B400]" /> Home
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('services')} className="hover:text-[#FFC21A] transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B400]" /> Our Services
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('fleet')} className="hover:text-[#FFC21A] transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B400]" /> Fleet & Rates
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('routes')} className="hover:text-[#FFC21A] transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B400]" /> Popular Routes
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('why-us')} className="hover:text-[#FFC21A] transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B400]" /> Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('about')} className="hover:text-[#FFC21A] transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B400]" /> About Us
                </button>
              </li>
              <li>
                <button onClick={() => handleLinkClick('contact')} className="hover:text-[#FFC21A] transition flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-[#F5B400]" /> Contact & Booking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Gujarat Routes (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider border-b border-[#F5B400]/30 pb-2">
              Popular Routes
            </h4>
            <ul className="space-y-2 text-xs">
              <li className="flex items-center justify-between text-slate-300">
                <span>Rajkot ⇄ Somnath Temple</span>
                <span className="text-[#FFC21A] font-semibold">195 km</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>Rajkot ⇄ Dwarkadhish</span>
                <span className="text-[#FFC21A] font-semibold">225 km</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>Rajkot ⇄ Ahmedabad Airport</span>
                <span className="text-[#FFC21A] font-semibold">215 km</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>Rajkot ⇄ Diu Island Beach</span>
                <span className="text-[#FFC21A] font-semibold">235 km</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>Rajkot ⇄ Jamnagar Refinery</span>
                <span className="text-[#FFC21A] font-semibold">90 km</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>Rajkot ⇄ Sasan Gir Lion Safari</span>
                <span className="text-[#FFC21A] font-semibold">160 km</span>
              </li>
              <li className="flex items-center justify-between text-slate-300">
                <span>Rajkot ⇄ Junagadh Girnar</span>
                <span className="text-[#FFC21A] font-semibold">105 km</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Hub (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider border-b border-[#F5B400]/30 pb-2">
              Rajkot Headquarters
            </h4>
            
            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F5B400] shrink-0 mt-0.5" />
                <span>Rajkot City, Gujarat 360001 (Serving All Over Gujarat)</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#F5B400] shrink-0" />
                <a href="tel:7487887777" className="text-white font-bold hover:text-[#FFC21A] transition">
                  +91 74878 87777
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/917487887777" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">
                  7487887777 (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#F5B400] shrink-0" />
                <span>24x7 Cab Dispatch Service</span>
              </div>
            </div>

            {/* Starting Rate Pill in Footer */}
            <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/10 text-center">
              <span className="text-[10px] uppercase text-slate-400 block font-semibold">Starting Fares</span>
              <div className="flex justify-around text-xs font-black text-[#FFC21A] mt-1">
                <span>Dzire: ₹12/km*</span>
                <span>•</span>
                <span>Ertiga: ₹14/km*</span>
              </div>
            </div>
          </div>

        </div>

        {/* Pricing Terms & Disclaimer */}
        <div className="py-6 text-[11px] text-slate-500 text-center space-y-1 border-b border-white/5">
          <p>*Price applicable as per minimum km (standard 250km - 300km per day for outstation journeys).</p>
          <p>Toll taxes, parking charges, and state border permit fees are extra at actuals.</p>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Yatharth Cab Service Rajkot. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with care for travellers across Gujarat
          </p>
        </div>

      </div>
    </footer>
  );
}
