import React from 'react';
import CTASection from '../components/CTASection';
import { Award, ShieldCheck, HeartHandshake, Users, MapPin, CheckCircle2, Clock, Phone } from 'lucide-react';

export default function About({ setActiveTab }) {
  return (
    <div className="pt-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#061A3A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F5B400]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>About Yatharth Cab Service Rajkot</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading">
            Aapki Yatra, Hamari Jimmedari
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Rajkot’s trusted name in professional taxi and outstation cab hire, driven by safety, transparency, and genuine Kathiyawadi hospitality.
          </p>
        </div>
      </div>

      {/* Main Story & Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Left: About Text (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 rounded-lg bg-[#061A3A] text-[#FFC21A] text-xs font-bold uppercase tracking-wider">
              Our Journey & Mission
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Redefining Travel in Rajkot & Saurashtra
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Founded with the goal of eliminating the stress, unpredictable pricing, and poor car maintenance often experienced in local taxi hire, <strong>Yatharth Cab Service Rajkot</strong> has grown to become the preferred travel partner for families, pilgrims, corporate professionals, and tourists.
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Whether you are travelling from Rajkot to the holy Jyotirlinga at <strong>Somnath</strong>, the sacred abode at <strong>Dwarka</strong>, the corporate corridors of <strong>Ahmedabad</strong>, or catching a flight at the new <strong>Rajkot Hirasar Airport</strong>, our mission is simple: provide a comfortable, sanitized car with a courteous driver who values your safety and punctuality above all else.
            </p>

            <div className="p-4 bg-slate-100 rounded-2xl border-l-4 border-[#F5B400] text-slate-800 text-sm italic">
              "Safar Aaram Ka, Vishwas Hamara! When you book with Yatharth, you are not just booking a car; you are placing your trust in a team that treats your family as our own."
            </div>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>100% Verified Chauffeurs</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Zero Hidden Commissions</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>24x7 Operations Support</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>GPS Tracked Safe Travel</span>
              </div>
            </div>
          </div>

          {/* Right: Key Stats / Poster Branding Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-gradient-to-b from-[#061A3A] to-[#092B5C] p-8 text-white shadow-2xl border border-[#F5B400]/30 space-y-6">
              
              <div className="text-center pb-4 border-b border-white/10">
                <img
                  src="/emblem.png"
                  alt="Yatharth Brand Logo"
                  className="h-16 w-auto mx-auto mb-2"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <h3 className="text-xl font-bold font-heading">Yatharth Cab Service</h3>
                <span className="text-[#FFC21A] text-xs font-semibold uppercase tracking-wider">
                  Rajkot, Gujarat
                </span>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-[#FFC21A]">15,000+</div>
                  <div className="text-xs text-slate-300 mt-1">Trips Completed</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-[#FFC21A]">4.9 / 5</div>
                  <div className="text-xs text-slate-300 mt-1">Customer Rating</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-[#FFC21A]">24 / 7</div>
                  <div className="text-xs text-slate-300 mt-1">Instant Support</div>
                </div>
                <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="text-3xl font-black text-[#FFC21A]">100%</div>
                  <div className="text-xs text-slate-300 mt-1">AC Fleet Guarantee</div>
                </div>
              </div>

              <div className="text-center pt-2">
                <a
                  href="tel:7487887777"
                  className="w-full gold-btn-gradient text-[#061A3A] font-extrabold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-sm shadow"
                >
                  <Phone className="w-4 h-4 fill-[#061A3A]" />
                  <span>Call 7487887777</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>

      <CTASection onBookClick={() => setActiveTab('home')} />
    </div>
  );
}
