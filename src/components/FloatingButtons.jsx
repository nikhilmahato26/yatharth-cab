import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <>
      {/* Desktop Floating Action Buttons (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:flex flex-col gap-3 items-end">
        {/* WhatsApp Button with pulse effect */}
        <a
          href="https://wa.me/917487887777?text=Hello%20Yatharth%20Cab%20Service%20Rajkot,%20I%20want%20to%20inquire%20about%20a%20cab."
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 bg-emerald-500 hover:bg-emerald-600 text-white pl-4 pr-3.5 py-3 rounded-full shadow-2xl pulse-whatsapp transition-transform hover:scale-105"
          aria-label="Book Cab on WhatsApp"
        >
          <span className="text-xs font-black tracking-wide hidden group-hover:inline-block transition-all">
            Chat on WhatsApp
          </span>
          <MessageCircle className="w-6 h-6 fill-white" />
        </a>

        {/* Call Button */}
        <a
          href="tel:7487887777"
          className="group flex items-center gap-3 bg-[#061A3A] hover:bg-[#123F7A] text-[#FFC21A] border-2 border-[#F5B400] pl-4 pr-3.5 py-3 rounded-full shadow-2xl transition-transform hover:scale-105"
          aria-label="Call Yatharth Cab Service Rajkot"
        >
          <span className="text-xs font-black tracking-wide hidden group-hover:inline-block transition-all text-white">
            Call 7487887777
          </span>
          <Phone className="w-5 h-5 fill-[#FFC21A]" />
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#061A3A]/95 backdrop-blur-md border-t border-[#F5B400]/30 p-2.5 shadow-2xl flex items-center gap-2">
        <a
          href="tel:7487887777"
          className="flex-1 gold-btn-gradient text-[#061A3A] font-extrabold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow"
        >
          <Phone className="w-4 h-4 fill-[#061A3A]" />
          <span>Call 7487887777</span>
        </a>

        <a
          href="https://wa.me/917487887777?text=Hello%20Yatharth%20Cab%20Service%20Rajkot,%20I%20want%20to%20book%20a%20cab."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3 px-3 rounded-xl text-xs flex items-center justify-center gap-2 shadow"
        >
          <MessageCircle className="w-4 h-4 fill-white/20" />
          <span>WhatsApp Now</span>
        </a>
      </div>
    </>
  );
}
