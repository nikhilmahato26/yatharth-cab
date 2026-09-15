import React from 'react';
import Hero from '../components/Hero';
import BookingForm from '../components/BookingForm';
import VehicleCard from '../components/VehicleCard';
import ServiceCard from '../components/ServiceCard';
import RouteCard from '../components/RouteCard';
import WhyChooseUs from '../components/WhyChooseUs';
import Testimonials from '../components/Testimonials';
import CTASection from '../components/CTASection';
import FAQ from '../components/FAQ';
import { vehicles, fareTerms } from '../data/vehicles';
import { services } from '../data/services';
import { popularRoutes } from '../data/routes';
import { Sparkles, Car, Navigation, ShieldCheck, ArrowRight, Phone } from 'lucide-react';

export default function Home({ setActiveTab, onBookRoute, onSelectVehicle }) {
  const scrollToBooking = () => {
    const el = document.getElementById('book-taxi');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      {/* 1. Hero Section */}
      <Hero onBookClick={scrollToBooking} onExploreFleet={() => setActiveTab('fleet')} />

      {/* 2. Interactive Booking Form & Fare Estimator */}
      <BookingForm />

      {/* 3. Featured Fleet & Rates Section (Dzire ₹12/km, Ertiga ₹14/km) */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A3A]/10 text-[#061A3A] font-bold text-xs uppercase tracking-wider mb-3">
              <Car className="w-3.5 h-3.5 text-[#F5B400]" />
              <span>Our Premium Fleet</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Transparent Per-KM Cab Rates
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Clean AC vehicles suited for business, couples, large families, and pilgrimage tours.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab('fleet')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#061A3A] hover:text-[#123F7A] transition"
            >
              <span>View All Fleet Specs & Terms</span>
              <ArrowRight className="w-4 h-4 text-[#F5B400]" />
            </button>
          </div>
        </div>

        {/* Vehicle Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {vehicles.map((veh) => (
            <VehicleCard
              key={veh.id}
              vehicle={veh}
              onSelectVehicle={() => {
                scrollToBooking();
              }}
            />
          ))}
        </div>

        {/* Pricing Terms Note */}
        <div className="mt-8 p-4 bg-amber-50/80 rounded-2xl border border-amber-200/80 text-xs text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#B78200] shrink-0" />
            <span>*Standard minimum km rule applies for outstation trips. Toll, parking & state permit extra at actuals.</span>
          </div>
          <a href="tel:7487887777" className="font-extrabold text-[#061A3A] hover:underline shrink-0">
            Helpline: 7487887777
          </a>
        </div>
      </section>

      {/* 4. Core Services Section */}
      <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5B400]/15 text-[#B78200] font-bold text-xs uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Complete Travel Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Services Designed Around Your Journey
            </h2>
            <p className="mt-3 text-base text-slate-600 font-normal">
              From Rajkot city local drops to Gujarat-wide temple circuits and airport shuttles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => (
              <ServiceCard
                key={srv.id}
                service={srv}
                onBookService={() => scrollToBooking()}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5. Popular Routes Section */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#061A3A]/10 text-[#061A3A] font-bold text-xs uppercase tracking-wider mb-3">
              <Navigation className="w-3.5 h-3.5 text-[#F5B400]" />
              <span>Gujarat Travel Corridor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-heading">
              Popular Routes from Rajkot
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              One-way and round trips with prompt pickups, experienced highway drivers, and clear fixed fares.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <button
              onClick={() => setActiveTab('routes')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#061A3A] hover:text-[#123F7A] transition"
            >
              <span>Explore All Gujarat Destinations</span>
              <ArrowRight className="w-4 h-4 text-[#F5B400]" />
            </button>
          </div>
        </div>

        {/* Route Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularRoutes.slice(0, 4).map((rt) => (
            <RouteCard
              key={rt.id}
              route={rt}
              onBookRoute={() => scrollToBooking()}
            />
          ))}
        </div>
      </section>

      {/* 6. Why Choose Yatharth Cab Service */}
      <WhyChooseUs />

      {/* 7. Customer Testimonials */}
      <Testimonials />

      {/* 8. Frequently Asked Questions */}
      <FAQ />

      {/* 9. High-Conversion CTA Banner with QR */}
      <CTASection onBookClick={scrollToBooking} />
    </div>
  );
}
