import React from 'react';
import { Phone, MessageCircle, QrCode, Sparkles, CheckCircle2, Shield } from 'lucide-react';

export default function CTASection({ onBookClick }) {
  return (
    <section className="py-16 bg-[#041026] text-white relative overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#123F7A]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#F5B400]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-r from-[#061A3A] via-[#092B5C] to-[#061A3A] border-2 border-[#F5B400]/40 p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Offer & Direct Action */}
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B400]/20 border border-[#F5B400]/40 text-[#FFC21A] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Advance Booking = Better Price & Guaranteed Service</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading leading-tight">
                Ready for a Comfortable Journey? <br />
                <span className="gold-gradient-text">Call Yatharth Cab Service Now!</span>
              </h2>

              <p className="text-base text-slate-300 max-w-xl">
                Whether you need an early morning airport drop at Hirasar or a weekend pilgrimage to Somnath and Dwarka, our sanitized cabs and verified chauffeurs are ready 24x7.
              </p>

              {/* Big Contact Banner */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="tel:7487887777"
                  className="gold-btn-gradient text-[#061A3A] font-black text-lg px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 transition-transform hover:scale-105"
                >
                  <Phone className="w-6 h-6 fill-[#061A3A]" />
                  <span>Call: 7487887777</span>
                </a>

                <a
                  href="https://wa.me/917487887777?text=Hello%20Yatharth%20Cab%20Service%20Rajkot,%20I%20want%20to%20book%20a%20cab."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-black text-lg px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 transition-transform hover:scale-105"
                >
                  <MessageCircle className="w-6 h-6" />
                  <span>WhatsApp 24/7</span>
                </a>
              </div>

              {/* Trust badges row */}
              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B400]" /> Clean AC Sedans & MUVs
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B400]" /> Starting ₹12/km Dzire
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#F5B400]" /> 100% On-Time Guarantee
                </span>
              </div>

            </div>

            {/* Right Column: QR Code Card & Badge */}
            <div className="lg:col-span-4 flex flex-col items-center justify-center">
              <div className="bg-white text-[#061A3A] p-6 rounded-3xl shadow-2xl border-4 border-[#F5B400] text-center max-w-xs w-full">
                
                <span className="text-[11px] font-black uppercase tracking-widest text-[#B78200] block mb-1">
                  Instant Mobile Booking
                </span>
                <h4 className="text-lg font-black font-heading leading-tight mb-3">
                  Scan & Book Your Ride Now!
                </h4>

                {/* QR Code image from poster */}
                <div className="bg-slate-100 p-2.5 rounded-2xl border-2 border-dashed border-slate-300 inline-block shadow-inner mb-3">
                  <img
                    src="/qr_code.png"
                    alt="Scan QR to Book Yatharth Cab"
                    className="w-36 h-36 object-contain rounded-lg mx-auto"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                  <div className="text-[10px] text-slate-500 font-semibold mt-1">
                    Point Phone Camera to Scan
                  </div>
                </div>

                <div className="bg-[#061A3A] text-white py-2 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FFC21A]" />
                  <span>+91 74878 87777</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
