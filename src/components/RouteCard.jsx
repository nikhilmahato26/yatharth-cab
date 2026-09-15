import React from 'react';
import { MapPin, Clock, ArrowRight, MessageCircle, Phone, CheckCircle } from 'lucide-react';

export default function RouteCard({ route, onBookRoute }) {
  const whatsappMessage = encodeURIComponent(
    `Hello Yatharth Cab Service Rajkot, I want to book a taxi for route: *${route.origin} to ${route.destination}* (${route.distance}). Please share car options and best price.`
  );

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#F5B400] flex flex-col justify-between group">
      
      <div>
        {/* Route Image Container */}
        <div className="relative h-44 w-full overflow-hidden bg-slate-900">
          <img
            src={route.image}
            alt={`${route.origin} to ${route.destination} Cab Service`}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
            onError={(e) => {
              e.target.src = '/cars_hero.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#061A3A] via-black/20 to-transparent" />
          
          {/* Destination Header Floating */}
          <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
            <div>
              <div className="text-[11px] font-semibold text-[#FFC21A] flex items-center gap-1 uppercase tracking-wider">
                <MapPin className="w-3 h-3" />
                <span>{route.origin} ⇄</span>
              </div>
              <h3 className="text-xl font-black text-white font-heading leading-tight">
                {route.destination}
              </h3>
            </div>
            <div className="bg-[#061A3A]/80 backdrop-blur-sm border border-white/20 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg">
              {route.duration}
            </div>
          </div>
        </div>

        {/* Details & Specs */}
        <div className="p-5">
          <div className="flex items-center justify-between text-xs text-slate-500 pb-3 border-b border-slate-100">
            <span className="font-semibold text-slate-700">Distance: <strong>{route.distance}</strong></span>
            <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold">Fast Expressway</span>
          </div>

          <p className="text-xs text-slate-600 my-3 leading-relaxed">
            {route.description}
          </p>

          {/* Sightseeing Pills */}
          <div className="space-y-1.5 pt-1">
            <span className="text-[11px] font-bold uppercase text-slate-400 block tracking-wider">Key Attractions:</span>
            <div className="flex flex-wrap gap-1.5">
              {route.highlights.map((h, i) => (
                <span key={i} className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md font-medium">
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Pricing Row */}
          <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100">
            <div className="bg-amber-50/70 p-2 rounded-xl border border-amber-200/60 text-center">
              <span className="text-[10px] text-slate-600 block">Dzire Sedan</span>
              <span className="text-sm font-black text-[#061A3A]">{route.dzireRate}*</span>
            </div>
            <div className="bg-amber-50/70 p-2 rounded-xl border border-amber-200/60 text-center">
              <span className="text-[10px] text-slate-600 block">Ertiga 6-Seater</span>
              <span className="text-sm font-black text-[#061A3A]">{route.ertigaRate}*</span>
            </div>
          </div>
        </div>
      </div>

      {/* Action CTA */}
      <div className="p-5 pt-0 flex items-center gap-2">
        <a
          href={`https://wa.me/917487887777?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Book Route</span>
        </a>

        <a
          href="tel:7487887777"
          className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#061A3A] transition"
          title="Call Now"
        >
          <Phone className="w-4 h-4" />
        </a>
      </div>

    </div>
  );
}
