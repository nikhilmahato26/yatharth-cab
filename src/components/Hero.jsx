import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Clock, Star, Sparkles, CheckCircle2, ChevronRight } from 'lucide-react';

export default function Hero({ onBookClick, onExploreFleet }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#041026] via-[#061A3A] to-[#092B5C] text-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-[#F5B400]/20">
      {/* Background Subtle Accents */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-[#F5B400]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-[#123F7A]/30 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Value Prop, Headline, CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Top Pill / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-[#F5B400]/40 backdrop-blur-sm text-xs sm:text-sm font-medium text-amber-300">
              <span className="flex h-2 w-2 rounded-full bg-[#F5B400] animate-ping" />
              <Sparkles className="w-4 h-4 text-[#F5B400]" />
              <span>#1 Trusted Cab Service in Rajkot & Saurashtra</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.15] font-heading">
              Safar Aaram Ka, <br />
              <span className="gold-gradient-text">Vishwas Hamara!</span>
            </h1>

            {/* Tagline / Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              <strong className="text-white font-semibold">Yatharth Cab Service Rajkot</strong> offers top-rated airport transfers, outstation one-way drops, local city hourly cabs, and family pilgrimage packages across Gujarat.
            </p>

            {/* Hindi/Gujarati Brand Promise Ribbon */}
            <div className="p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm flex items-center justify-center lg:justify-start gap-3 text-sm">
              <div className="w-8 h-8 rounded-full bg-[#F5B400]/20 flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 text-[#F5B400] fill-[#F5B400]" />
              </div>
              <p className="text-amber-200 font-medium italic">
                "Aapki Yatra, Hamari Jimmedari • Chaliye kahin bhi... Hum hain na!"
              </p>
            </div>

            {/* Starting Rate Highlights (From Posters) */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 pt-1 max-w-lg mx-auto lg:mx-0">
              <div className="bg-[#092B5C]/80 border border-[#F5B400]/30 rounded-2xl p-3.5 text-center shadow-lg relative overflow-hidden group hover:border-[#F5B400] transition">
                <div className="absolute top-0 right-0 bg-[#F5B400] text-[#061A3A] font-extrabold text-[10px] px-2 py-0.5 rounded-bl-lg uppercase">
                  SEDAN
                </div>
                <div className="text-xs text-slate-300 font-medium">SWIFT DZIRE</div>
                <div className="text-2xl sm:text-3xl font-black text-[#FFC21A] mt-0.5">
                  ₹12<span className="text-xs font-semibold text-slate-300">/KM*</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">AC • 4 Seater • Economical</div>
              </div>

              <div className="bg-[#092B5C]/80 border border-[#F5B400]/30 rounded-2xl p-3.5 text-center shadow-lg relative overflow-hidden group hover:border-[#F5B400] transition">
                <div className="absolute top-0 right-0 bg-[#F5B400] text-[#061A3A] font-extrabold text-[10px] px-2 py-0.5 rounded-bl-lg uppercase">
                  FAMILY MUV
                </div>
                <div className="text-xs text-slate-300 font-medium">MARUTI ERTIGA</div>
                <div className="text-2xl sm:text-3xl font-black text-[#FFC21A] mt-0.5">
                  ₹14<span className="text-xs font-semibold text-slate-300">/KM*</span>
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Dual AC • 6 Seater • Spacious</div>
              </div>
            </div>

            {/* Direct Booking CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <a
                href="https://wa.me/917487887777?text=Hello%20Yatharth%20Cab%20Service%20Rajkot,%20I%20want%20to%20book%20a%20cab%20now."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2.5 text-base transition-all hover:scale-[1.02]"
              >
                <MessageCircle className="w-5 h-5 fill-white/20" />
                <span>Book on WhatsApp</span>
              </a>

              <a
                href="tel:7487887777"
                className="w-full sm:w-auto gold-btn-gradient text-[#061A3A] font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center gap-2.5 text-base transition-all hover:scale-[1.02]"
              >
                <Phone className="w-5 h-5 fill-[#061A3A]" />
                <span>Call 7487887777</span>
              </a>

              <button
                onClick={onBookClick}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-5 py-3.5 rounded-xl border border-white/20 flex items-center justify-center gap-2 text-sm transition"
              >
                <span>Calculate Fare</span>
                <ArrowRight className="w-4 h-4 text-[#F5B400]" />
              </button>
            </div>

            {/* Quick Guarantees Checkmarks */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-5 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B400]" />
                <span>Verified Drivers</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B400]" />
                <span>Sanitized AC Cabs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B400]" />
                <span>Zero Hidden Fees</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#F5B400]" />
                <span>On-Time Every Time</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Graphic & Visual Identity */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative order-1 lg:order-2">
            
            {/* Visual Card Container */}
            <div className="relative w-full max-w-md lg:max-w-lg group">
              
              {/* Gold Ring Halo Effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#F5B400]/30 to-transparent rounded-3xl filter blur-2xl transform scale-100 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Trips Plan Image replacing the previous card */}
              <img 
                src="/trips_plan.jpg" 
                alt="Yatharth Cab Service Trips Plan" 
                className="relative z-10 w-full h-auto object-contain rounded-2xl shadow-2xl border border-white/20 transform group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
