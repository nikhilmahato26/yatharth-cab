import React from 'react';
import { 
  UserCheck, 
  ShieldCheck, 
  Sparkles, 
  IndianRupee, 
  Clock, 
  PhoneCall, 
  HeartHandshake,
  Award
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: UserCheck,
      title: "Experienced & Verified Drivers",
      description: "Our chauffeurs are background-verified, polite, and have years of highway driving experience across Gujarat.",
      badge: "POLICE VERIFIED"
    },
    {
      icon: ShieldCheck,
      title: "Safe, Secure & Hygienic Journey",
      description: "Complete safety for families, seniors, and solo female passengers with GPS-tracked vehicles and clean sanitized cabs.",
      badge: "SAFETY FIRST"
    },
    {
      icon: Sparkles,
      title: "Clean & Well-Maintained Fleet",
      description: "Spotless AC cabs with fresh interiors, comfortable seating, smooth suspension, and thoroughly checked mechanics.",
      badge: "PRISTINE CONDITION"
    },
    {
      icon: IndianRupee,
      title: "No Hidden Charges Guarantee",
      description: "100% transparent billing from the start. Per-km rates clearly stated with no surprise surge prices or extra commissions.",
      badge: "TRANSPARENT RATES"
    },
    {
      icon: Clock,
      title: "On-Time Every Time",
      description: "We value your schedule. Timely doorstep pickups with flight and train connection tracking so you never miss a schedule.",
      badge: "ZERO DELAYS"
    },
    {
      icon: PhoneCall,
      title: "24x7 Service Always Available",
      description: "Round-the-clock assistance and emergency bookings. Call or WhatsApp anytime for instant cab dispatch in Rajkot.",
      badge: "24/7 SUPPORT"
    }
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-[#F7F9FC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A3A]/10 text-[#061A3A] font-bold text-xs uppercase tracking-wider mb-3">
            <Award className="w-4 h-4 text-[#F5B400]" />
            <span>Why Choose Yatharth Cab Service</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            Your Trust, Our Commitment!
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            We are dedicated to providing the most reliable, comfortable, and affordable taxi services in Rajkot and across Gujarat.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-[#F5B400] shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#061A3A] group-hover:bg-[#F5B400] transition-colors flex items-center justify-center shadow-md">
                      <IconComp className="w-6 h-6 text-[#FFC21A] group-hover:text-[#061A3A] transition-colors" />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 group-hover:text-amber-600 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-heading group-hover:text-[#061A3A] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <HeartHandshake className="w-4 h-4 text-emerald-600" />
                  <span>Yatharth Service Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight Banner / Rajkot Promise */}
        <div className="mt-12 rounded-3xl bg-[#061A3A] text-white p-6 sm:p-8 border border-[#F5B400]/30 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider text-[#FFC21A] font-bold">
              Rajkot & All Gujarat Coverage
            </span>
            <h4 className="text-xl sm:text-2xl font-bold font-heading">
              Looking for a custom pilgrimage or outstation tour?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300">
              Speak directly with our travel desk for special multi-day family discounts.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="https://wa.me/917487887777?text=Hello%20Yatharth,%20I%20want%20to%20plan%20a%20custom%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition"
            >
              <span>WhatsApp Inquiry</span>
            </a>
            <a
              href="tel:7487887777"
              className="gold-btn-gradient text-[#061A3A] font-extrabold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center gap-2 shadow"
            >
              <span>Call 7487887777</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
