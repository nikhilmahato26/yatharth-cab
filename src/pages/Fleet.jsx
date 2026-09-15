import React from 'react';
import { vehicles, fareTerms } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import CTASection from '../components/CTASection';
import { Car, ShieldCheck, Check, AlertCircle, Phone, MessageCircle } from 'lucide-react';

export default function Fleet({ setActiveTab }) {
  return (
    <div className="pt-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#061A3A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F5B400]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Car className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>Official Fleet & Transparent Rates</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading">
            Our Well-Maintained Vehicle Fleet
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Choose from economical sedans, family MUVs, luxury executive SUVs, and spacious group coaches. Every car is impeccably cleaned and serviced before every trip.
          </p>
        </div>
      </div>

      {/* Fleet Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {vehicles.map((veh) => (
            <VehicleCard
              key={veh.id}
              vehicle={veh}
              onSelectVehicle={() => {
                setActiveTab('home');
                setTimeout(() => {
                  const el = document.getElementById('book-taxi');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            />
          ))}
        </div>

        {/* Detailed Comparison Table */}
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-lg mb-16">
          <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold font-heading">Fleet Specifications & Tariff Comparison</h3>
              <p className="text-xs text-slate-400">All per-km rates with passenger & baggage capacity</p>
            </div>
            <span className="text-xs font-bold text-[#FFC21A] bg-white/10 px-3 py-1 rounded-full">
              Rajkot & All Gujarat
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700">
              <thead className="bg-slate-50 border-b border-slate-200 text-xs font-extrabold uppercase text-slate-600">
                <tr>
                  <th className="py-4 px-6">Vehicle Model</th>
                  <th className="py-4 px-6">Category</th>
                  <th className="py-4 px-6">Base Rate / KM</th>
                  <th className="py-4 px-6">Seating</th>
                  <th className="py-4 px-6">Luggage Boot</th>
                  <th className="py-4 px-6">AC Status</th>
                  <th className="py-4 px-6 text-right">Quick Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {vehicles.map((veh) => (
                  <tr key={veh.id} className="hover:bg-slate-50/80 transition">
                    <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F5B400]" />
                      {veh.name}
                    </td>
                    <td className="py-4 px-6">{veh.category}</td>
                    <td className="py-4 px-6 font-black text-[#061A3A] text-base">
                      ₹{veh.ratePerKm}/km*
                    </td>
                    <td className="py-4 px-6">{veh.seats} Passengers</td>
                    <td className="py-4 px-6">{veh.luggage}</td>
                    <td className="py-4 px-6">
                      <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded text-xs font-bold">
                        <Check className="w-3.5 h-3.5" /> Full AC
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={`https://wa.me/917487887777?text=Hello%20Yatharth,%20I%20want%20to%20book%20${encodeURIComponent(veh.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-lg text-xs transition"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Book</span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pricing Terms & Policies */}
        <div className="bg-amber-50/80 rounded-3xl p-8 border border-amber-200/80 space-y-4">
          <div className="flex items-center gap-2.5 text-amber-900 font-bold text-lg font-heading">
            <AlertCircle className="w-5 h-5 text-[#B78200]" />
            <h4>Important Booking Terms & Information</h4>
          </div>
          <ul className="space-y-2.5 text-xs sm:text-sm text-amber-950">
            {fareTerms.map((term, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="font-bold text-amber-700">•</span>
                <span>{term}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>

      <CTASection onBookClick={() => setActiveTab('home')} />
    </div>
  );
}
