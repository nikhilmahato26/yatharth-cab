import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Send, CheckCircle2, Sparkles, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    tripType: 'Outstation One Way',
    pickup: 'Rajkot',
    destination: 'Somnath',
    date: new Date().toISOString().split('T')[0],
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({ particleCount: 70, spread: 60 });
    } catch (err) {}

    setSubmitted(true);
    const text = `*YATHARTH CAB SERVICE RAJKOT - CONTACT INQUIRY*
----------------------------------------
*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Trip Type:* ${formData.tripType}
*Route:* ${formData.pickup} to ${formData.destination}
*Travel Date:* ${formData.date}
*Special Notes:* ${formData.message || 'None'}
Please contact me with quotation.`;

    const url = `https://wa.me/917487887777?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="pt-8 pb-16">
      
      {/* Header Banner */}
      <div className="bg-[#061A3A] text-white py-16 px-4 sm:px-6 lg:px-8 border-b border-[#F5B400]/20 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-amber-300 font-bold text-xs uppercase tracking-wider">
            <Phone className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>24x7 Helpline & Bookings</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading">
            Contact Yatharth Cab Service Rajkot
          </h1>
          <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Need an urgent cab pickup in Rajkot or planning an upcoming Gujarat pilgrimage? Call or WhatsApp us anytime!
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md space-y-6">
              <h3 className="text-2xl font-black text-slate-900 font-heading">
                Rajkot Service Desk
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                We operate round the clock, 365 days a year across Rajkot, Saurashtra, and all major cities in Gujarat.
              </p>

              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#061A3A] text-[#FFC21A] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 fill-current" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase block">
                      Call 24x7 Hotline
                    </span>
                    <a href="tel:7487887777" className="text-base sm:text-lg font-black text-[#061A3A] hover:text-amber-600">
                      +91 74878 87777
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                  <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-emerald-800 font-semibold uppercase block">
                      WhatsApp Booking
                    </span>
                    <a 
                      href="https://wa.me/917487887777" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-black text-emerald-900 hover:underline"
                    >
                      7487887777
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#061A3A] text-[#FFC21A] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase block">
                      Location & Coverage
                    </span>
                    <span className="text-sm font-bold text-slate-800 block">
                      Rajkot City, Gujarat
                    </span>
                    <span className="text-xs text-slate-500">
                      Doorstep pickup across Rajkot & Gujarat
                    </span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-[#061A3A] text-[#FFC21A] flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 font-semibold uppercase block">
                      Operating Hours
                    </span>
                    <span className="text-sm font-bold text-slate-800 block">
                      24 Hours / 7 Days a Week
                    </span>
                    <span className="text-xs text-slate-500">
                      Midnight airport & emergency dispatches
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Interactive Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md">
              <div className="mb-6">
                <span className="text-xs font-bold text-[#F5B400] uppercase tracking-wider block">
                  Quick Travel Inquiry
                </span>
                <h3 className="text-2xl font-black text-slate-900 font-heading mt-1">
                  Send Us Your Travel Plan
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Fill in your details below and we will connect with a confirmed quote on WhatsApp.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Chetan Patel"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 98250 XXXXX"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Trip Type
                    </label>
                    <select
                      value={formData.tripType}
                      onChange={(e) => setFormData({ ...formData, tripType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-sm bg-white"
                    >
                      <option value="Outstation One Way">Outstation One Way</option>
                      <option value="Outstation Round Trip">Outstation Round Trip</option>
                      <option value="Rajkot Local Rental">Rajkot Local Rental</option>
                      <option value="Airport Pickup / Drop">Airport Pickup / Drop</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Pickup Location
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.pickup}
                      onChange={(e) => setFormData({ ...formData, pickup: e.target.value })}
                      placeholder="Rajkot"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Drop Destination
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g. Somnath"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Travel Date
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                    Special Requirements or Vehicle Preference
                  </label>
                  <textarea
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Need Swift Dzire / Ertiga for 5 passengers with luggage, senior citizen travelling..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold py-3.5 px-6 rounded-xl text-sm flex items-center justify-center gap-2 transition shadow-lg"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                {submitted && (
                  <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl text-center">
                    ✓ Connecting you directly with Yatharth Cab Service Rajkot on WhatsApp!
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
