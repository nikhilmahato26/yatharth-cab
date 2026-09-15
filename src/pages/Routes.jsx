import React from 'react';
import { popularRoutes, allDestinations } from '../data/routes';
import RouteCard from '../components/RouteCard';
import CTASection from '../components/CTASection';
import { Navigation, MapPin, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function Routes({ setActiveTab }) {
  return (
    <div className="pt-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#061A3A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F5B400]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Navigation className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>Gujarat Travel Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading">
            Popular Cab Routes From Rajkot
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Convenient one-way drops and round-trip pilgrimage tours to Somnath, Dwarka, Ahmedabad, Diu, Jamnagar, Sasan Gir, and across Gujarat with no return fare on one-way journeys.
          </p>
        </div>
      </div>

      {/* Routes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {popularRoutes.map((rt) => (
            <RouteCard
              key={rt.id}
              route={rt}
              onBookRoute={() => {
                setActiveTab('home');
                setTimeout(() => {
                  const el = document.getElementById('book-taxi');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
            />
          ))}
        </div>

        {/* All Gujarat Coverage Directory */}
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
          <h3 className="text-2xl font-bold text-slate-900 font-heading mb-2 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-emerald-600" />
            <span>All Destinations Served Across Gujarat & Beyond</span>
          </h3>
          <p className="text-xs text-slate-500 mb-6">
            We provide door-to-door cab pickups from Rajkot to every district, pilgrimage shrine, airport, and tourist spot.
          </p>

          <div className="flex flex-wrap gap-2.5">
            {allDestinations.map((dest, idx) => (
              <a
                key={idx}
                href={`https://wa.me/917487887777?text=Hello%20Yatharth,%20I%20want%20to%20inquire%20about%20a%20cab%20from%20Rajkot%20to%20${encodeURIComponent(dest)}.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-50 hover:bg-[#061A3A] hover:text-[#FFC21A] text-slate-700 px-4 py-2 rounded-xl text-xs font-semibold border border-slate-200 transition flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B400]" />
                <span>Rajkot ⇄ {dest}</span>
              </a>
            ))}
          </div>
        </div>

      </div>

      <CTASection onBookClick={() => setActiveTab('home')} />
    </div>
  );
}
