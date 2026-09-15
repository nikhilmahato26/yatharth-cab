import React from 'react';
import { Users, Briefcase, Wind, Fuel, Check, MessageCircle, Phone, ArrowRight } from 'lucide-react';

export default function VehicleCard({ vehicle, onSelectVehicle }) {
  const whatsappMessage = encodeURIComponent(
    `Hello Yatharth Cab Service Rajkot, I want to book *${vehicle.name}* (Rate: ₹${vehicle.ratePerKm}/km). Please check availability.`
  );

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-slate-200 hover:border-[#F5B400] flex flex-col justify-between group">
      
      {/* Top Banner Tag */}
      <div className="bg-[#061A3A] text-white px-5 py-2.5 flex items-center justify-between text-xs">
        <span className="font-extrabold uppercase tracking-wider text-[#FFC21A]">
          {vehicle.badge}
        </span>
        <span className="bg-[#F5B400] text-[#061A3A] font-black px-2 py-0.5 rounded text-[11px]">
          {vehicle.category}
        </span>
      </div>

      <div>
        {/* Car Image Container */}
        <div className="relative p-5 bg-gradient-to-b from-slate-50 to-white flex items-center justify-center overflow-hidden border-b border-slate-100 min-h-[190px]">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className="max-h-36 w-auto object-contain transform group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.src = '/cars_hero.png';
            }}
          />
          {/* Rate Badge Floating */}
          <div className="absolute top-3 right-3 bg-[#061A3A] border border-[#F5B400] text-[#FFC21A] px-3 py-1 rounded-xl shadow-lg">
            <span className="text-base font-black">{vehicle.highlightBadge}</span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-6">
          <div className="flex items-baseline justify-between mb-2">
            <h3 className="text-xl font-black text-slate-900 font-heading">
              {vehicle.name}
            </h3>
            <span className="text-xs font-bold text-slate-500">
              Starts at <strong className="text-[#061A3A] text-sm">₹{vehicle.ratePerKm}/km</strong>*
            </span>
          </div>

          <p className="text-xs text-slate-600 mb-4 line-clamp-2">
            {vehicle.idealFor}
          </p>

          {/* Quick Specs Grid */}
          <div className="grid grid-cols-2 gap-2 bg-slate-50 rounded-2xl p-3 border border-slate-100 text-xs text-slate-700 mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-3.5 h-3.5 text-[#061A3A]" />
              <span>{vehicle.seats} Passengers</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5 text-[#061A3A]" />
              <span>{vehicle.luggage}</span>
            </div>
            <div className="flex items-center gap-2">
              <Wind className="w-3.5 h-3.5 text-[#061A3A]" />
              <span>Chilled AC</span>
            </div>
            <div className="flex items-center gap-2">
              <Fuel className="w-3.5 h-3.5 text-[#061A3A]" />
              <span>{vehicle.fuel}</span>
            </div>
          </div>

          {/* Key Features List */}
          <ul className="space-y-1.5">
            {vehicle.features.map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-6 pt-0 space-y-2">
        <a
          href={`https://wa.me/917487887777?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition shadow"
        >
          <MessageCircle className="w-4 h-4" />
          <span>Book {vehicle.name.replace('Maruti ', '').replace('Suzuki ', '')} on WhatsApp</span>
        </a>

        <div className="flex items-center gap-2">
          <a
            href="tel:7487887777"
            className="flex-1 bg-slate-100 hover:bg-slate-200 text-[#061A3A] font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call 7487887777</span>
          </a>

          <button
            onClick={() => onSelectVehicle(vehicle)}
            className="flex-1 bg-[#061A3A] hover:bg-[#123F7A] text-[#FFC21A] font-bold py-2 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 transition"
          >
            <span>Estimate Fare</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
