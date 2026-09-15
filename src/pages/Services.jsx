import React from 'react';
import { services } from '../data/services';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { Sparkles, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

export default function Services({ setActiveTab }) {
  return (
    <div className="pt-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#061A3A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F5B400]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>Comprehensive Cab Services</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading">
            Our Taxi & Chauffeur Services in Rajkot
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From quick city commutes to Saurashtra temple darshans and corporate travel across Gujarat, Yatharth Cab Service delivers punctual, sanitized, and professional rides.
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onBookService={() => {
                setActiveTab('home');
                setTimeout(() => {
                  const el = document.getElementById('book-taxi');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            />
          ))}
        </div>

        {/* Inclusions Banner */}
        <div className="mt-16 bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 font-heading mb-4">
            Every Yatharth Cab Booking Includes:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>100% Chilled AC on All Trips</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Clean, Odorless & Sanitized Cabs</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Doorstep Pickup & Drop Anywhere in Rajkot</span>
            </div>
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Zero Waiting Charges for Airport Pickups</span>
            </div>
          </div>
        </div>
      </div>

      <CTASection onBookClick={() => setActiveTab('home')} />
    </div>
  );
}
