import React from 'react';
import { X, CheckCircle2 } from 'lucide-react';

export default function TripsPlanModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row z-10 max-h-[90vh]">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors focus:outline-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Texts Section (Desktop Left, Mobile Bottom) */}
        <div className="w-full md:w-1/3 p-6 md:p-8 flex flex-col justify-center bg-[#061A3A] text-white order-2 md:order-1 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-[#F5B400] mb-4">
            Special Spiritual Tour
          </h2>
          <p className="text-slate-300 mb-6 text-sm leading-relaxed">
            Embark on a divine journey from Rajkot with our exclusive tour packages. Experience safe rides, comfortable journeys, and affordable pricing.
          </p>
          
          <ul className="space-y-4 mb-8">
            {[
              "Well Maintained & Clean Vehicles",
              "Experienced & Polite Drivers",
              "On Time Pickup & Drop",
              "Affordable & Transparent Pricing"
            ].map((feature, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-slate-200">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          
          <a
            href="tel:7487887777"
            className="w-full py-3 px-4 bg-[#F5B400] hover:bg-[#FFC21A] text-[#061A3A] text-center font-bold rounded-xl transition-colors shadow-lg"
          >
            Book Your Journey Now
          </a>
        </div>

        {/* Image Section (Desktop Right, Mobile Top) */}
        <div className="w-full md:w-2/3 bg-gray-100 order-1 md:order-2 overflow-y-auto flex items-start justify-center">
          <img 
            src="/trips-plan.jpg" 
            alt="Yatharth Trips Plan" 
            className="w-full h-auto object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.parentElement.innerHTML = '<div class="p-8 text-center text-slate-500 w-full flex flex-col items-center justify-center h-full min-h-[300px]">Image not found. Please upload trips-plan.jpg to public folder.</div>';
            }}
          />
        </div>
        
      </div>
    </div>
  );
}
