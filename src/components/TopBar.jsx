import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#041026] text-slate-300 text-xs py-2 border-b border-white/10 hidden sm:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Location & Tagline */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <MapPin className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>Serving <strong className="text-white font-medium">Rajkot</strong> & All Over Gujarat</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-400 font-medium italic">
            <span>✨ "Safar Aaram Ka, Vishwas Hamara!"</span>
          </div>
        </div>

        {/* Right: 24x7 Hours, Direct WhatsApp & Phone */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>24x7 Service Available</span>
          </div>

          <a 
            href="https://wa.me/917487887777?text=Hello%20Yatharth%20Cab%20Service%20Rajkot,%20I%20want%20to%20inquire%20about%20a%20cab%20booking."
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-medium transition"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
            <span>WhatsApp Booking</span>
          </a>

          <a 
            href="tel:7487887777" 
            className="flex items-center gap-1.5 text-[#FFC21A] hover:text-white font-semibold transition"
          >
            <Phone className="w-3.5 h-3.5 fill-[#FFC21A]" />
            <span>+91 74878 87777</span>
          </a>
        </div>
      </div>
    </div>
  );
}
