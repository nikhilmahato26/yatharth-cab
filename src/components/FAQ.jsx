import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Phone, MessageCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "How do I book a cab with Yatharth Cab Service in Rajkot?",
      a: "Booking is instant and effortless! You can either call our 24x7 helpline at 7487887777, message us on WhatsApp with your travel details, or use the interactive booking form on this website. Our team will promptly confirm car availability and driver details."
    },
    {
      q: "What are your starting rates for Swift Dzire and Maruti Ertiga?",
      a: "Our Swift Dzire sedan starts at just ₹12/km* (ideal for up to 4 passengers), and our Maruti Ertiga MUV starts at ₹14/km* (ideal for 6 passengers with luggage). For local city rentals, we offer flat hourly packages (4hr/40km and 8hr/80km)."
    },
    {
      q: "Are toll taxes, parking, and state permits included in the per-km rate?",
      a: "No. In line with transparent industry standards, toll charges, parking fees, and interstate permits are charged at actuals with original receipts. We never charge hidden commissions or unexplained extra fees."
    },
    {
      q: "Can I book a One-Way drop from Rajkot without paying return fare?",
      a: "Yes! We specialize in One-Way outstation drops from Rajkot to Ahmedabad, Somnath, Dwarka, Diu, Jamnagar, Vadodara, and Surat. You only pay for the one-way distance travelled, saving you up to 40% compared to traditional round-trip pricing."
    },
    {
      q: "Do you provide airport pickup and drop for Rajkot Hirasar Airport?",
      a: "Yes, we operate 24x7 dedicated airport taxis for both the new Rajkot Hirasar International Airport (HSR) and Ahmedabad SVPI Airport (AMD). We monitor flight schedules in real-time so your driver is already at the terminal when your flight lands."
    },
    {
      q: "Is night driving safe for long outstation trips with Yatharth?",
      a: "Absolutely. Safety is our top priority. All our chauffeurs are background-verified, non-alcoholic, and have extensive experience on Gujarat highways. Every vehicle is GPS-enabled, and our operations desk tracks trips 24 hours a day."
    },
    {
      q: "What is your cancellation and reschedule policy?",
      a: "We offer maximum flexibility. If your travel plans change, you can reschedule or cancel your booking by notifying us via phone or WhatsApp at least 2 hours prior to your scheduled pickup time with zero cancellation penalty."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#061A3A]/10 text-[#061A3A] font-bold text-xs uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#F5B400]" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
            Got Questions? We Have Answers.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Everything you need to know about booking, pricing, and policies at Yatharth Cab Service Rajkot.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-shadow hover:shadow-md"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="w-full text-left p-5 font-bold text-slate-900 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-heading flex items-center gap-2.5">
                    <span className="text-amber-500 font-black">Q{index + 1}.</span>
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-[#061A3A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more help */}
        <div className="mt-10 text-center p-6 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-base font-bold text-slate-900 font-heading">
              Still have questions or need custom pricing?
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              Our travel specialists in Rajkot are happy to assist you 24x7.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://wa.me/917487887777"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
            <a
              href="tel:7487887777"
              className="bg-[#061A3A] hover:bg-[#123F7A] text-[#FFC21A] font-bold px-4 py-2 rounded-xl text-xs flex items-center gap-1.5 transition"
            >
              <Phone className="w-3.5 h-3.5 fill-[#FFC21A]" />
              <span>7487887777</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
