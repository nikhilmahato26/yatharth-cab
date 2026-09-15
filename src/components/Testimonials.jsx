import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Ramesh Patel",
      location: "Rajkot (Kalawad Road)",
      trip: "Rajkot to Somnath & Dwarka (3-Day Family Tour)",
      car: "Maruti Ertiga (₹14/km)",
      rating: 5,
      comment: "We booked the Ertiga for our family temple darshan to Somnath and Dwarka. The car was spotless, dual AC worked great in the afternoon heat, and the driver was extremely polite and respectful with my elderly parents. Best cab service in Rajkot!"
    },
    {
      name: "Dr. Aniket Joshi",
      location: "Ahmedabad / Rajkot",
      trip: "Rajkot to Ahmedabad Airport Drop",
      car: "Swift Dzire (₹12/km)",
      rating: 5,
      comment: "Needed an urgent midnight pickup at 3:30 AM to catch a morning flight from Ahmedabad SVPI. Yatharth cab arrived 15 minutes before time at my doorstep in Rajkot. Very smooth highway driving and reasonable transparent fare."
    },
    {
      name: "Meera Shah",
      location: "Rajkot",
      trip: "Rajkot Local 8hr/80km Shopping & Visits",
      car: "Swift Dzire",
      rating: 5,
      comment: "Booked a full day local rental for family shopping and doctor appointments across Rajkot. The driver knew all the bypass routes, had no complaints about waiting, and the fare was totally transparent without extra hidden charges."
    },
    {
      name: "Hardik Vaghela",
      location: "Jamnagar",
      trip: "Rajkot to Jamnagar Corporate Travel",
      car: "Toyota Innova Crysta",
      rating: 5,
      comment: "Regular user for our company's business trips between Rajkot and Jamnagar Reliance complex. The vehicles are executive class, drivers are uniformed, and GST invoices are provided promptly. 10/10 service."
    },
    {
      name: "Sanjaybhai Mehta",
      location: "Rajkot (150ft Ring Road)",
      trip: "Rajkot to Diu Beach Vacation",
      car: "Maruti Ertiga",
      rating: 5,
      comment: "Took an Ertiga for 2 nights to Diu. Comfortable leg space for 6 adults and luggage. Driver was very cooperative and recommended great authentic Kathiyawadi dhabas along the highway. Will always book Yatharth!"
    },
    {
      name: "Pooja Trivedi",
      location: "Surat",
      trip: "Rajkot Hirasar Airport Pickup to City",
      car: "Swift Dzire",
      rating: 5,
      comment: "Arrived at the new Rajkot Hirasar airport and booked Yatharth on WhatsApp. Chauffeur was waiting right at the arrival gate with my name board. Super clean car and very safe journey."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5B400]/15 text-[#B78200] font-bold text-xs uppercase tracking-wider mb-3 border border-[#F5B400]/30">
            <Star className="w-3.5 h-3.5 fill-[#F5B400] text-[#F5B400]" />
            <span>4.9 / 5 Rating from 2,500+ Travellers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            Loved By Families & Travelers in Rajkot
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            Real experiences from pilgrims, business executives, and daily commuters who trust Yatharth Cab Service.
          </p>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-[#F5B400] hover:bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#F5B400] fill-[#F5B400]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-sm text-slate-700 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      {rev.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 fill-emerald-100" />
                    </h4>
                    <span className="text-[11px] text-slate-500 block">
                      {rev.location}
                    </span>
                  </div>
                  <span className="text-[10px] bg-slate-200/70 text-slate-700 px-2 py-0.5 rounded font-medium">
                    {rev.car}
                  </span>
                </div>

                <div className="text-[11px] font-semibold text-[#061A3A] mt-2 pt-2 border-t border-dashed border-slate-200">
                  📍 {rev.trip}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
