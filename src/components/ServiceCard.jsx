import React from 'react';
import { 
  Plane, 
  MapPin, 
  Navigation, 
  Repeat, 
  Users, 
  Briefcase, 
  Check, 
  ArrowRight,
  MessageCircle,
  Phone
} from 'lucide-react';

const iconMap = {
  Plane,
  MapPin,
  Navigation,
  Repeat,
  Users,
  Briefcase
};

export default function ServiceCard({ service, onBookService }) {
  const IconComponent = iconMap[service.icon] || Car;

  const whatsappMessage = encodeURIComponent(
    `Hello Yatharth Cab Service Rajkot, I am interested in booking *${service.title}*. Please provide details and pricing.`
  );

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-[#F5B400] flex flex-col justify-between group">
      <div>
        {/* Top Icon & Popular Tag */}
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#061A3A] group-hover:bg-[#F5B400] transition-colors flex items-center justify-center shadow-md">
            <IconComponent className="w-6 h-6 text-[#FFC21A] group-hover:text-[#061A3A] transition-colors" />
          </div>
          {service.popular && (
            <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-[#F5B400]/15 text-[#B78200] border border-[#F5B400]/30">
              POPULAR SERVICE
            </span>
          )}
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-xl font-bold text-slate-900 font-heading group-hover:text-[#061A3A] transition-colors">
          {service.title}
        </h3>
        <p className="text-xs font-semibold text-amber-600 mt-0.5">
          {service.subtitle}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-600 mt-3 leading-relaxed">
          {service.description}
        </p>

        {/* Feature Highlights */}
        <ul className="mt-4 space-y-2 border-t border-slate-100 pt-3">
          {service.highlights.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
              <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer / Actions */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
        <span className="text-xs font-bold text-slate-500">
          {service.pricingNote}
        </span>

        <div className="flex items-center gap-2">
          <a
            href={`https://wa.me/917487887777?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white transition"
            title="Book on WhatsApp"
          >
            <MessageCircle className="w-4 h-4" />
          </a>
          <button
            onClick={() => onBookService(service)}
            className="px-3 py-1.5 rounded-lg bg-[#061A3A] hover:bg-[#123F7A] text-white text-xs font-bold transition flex items-center gap-1.5"
          >
            <span>Book Now</span>
            <ArrowRight className="w-3 h-3 text-[#FFC21A]" />
          </button>
        </div>
      </div>
    </div>
  );
}
