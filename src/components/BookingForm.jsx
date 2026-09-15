import React, { useState, useMemo } from 'react';
import { 
  Car, 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  ArrowRight, 
  MessageCircle, 
  Phone, 
  CheckCircle2, 
  Info, 
  Sparkles,
  Plane,
  Navigation,
  RotateCcw
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { vehicles } from '../data/vehicles';
import { popularRoutes, allDestinations } from '../data/routes';

// Distance & fare reference matrix from Rajkot (km one way)
const routeDistances = {
  "Somnath": 195,
  "Dwarka": 225,
  "Ahmedabad": 215,
  "Diu Island": 235,
  "Diu": 235,
  "Jamnagar": 90,
  "Gir Sasan": 160,
  "Junagadh": 105,
  "Porbandar": 180,
  "Vadodara": 280,
  "Surat": 440,
  "Bhuj / Kutch": 235,
  "Morbi": 65,
  "Gandhidham": 190,
  "Bhavnagar": 175
};

export default function BookingForm() {
  const [tripType, setTripType] = useState('oneway'); // 'oneway', 'roundtrip', 'local', 'airport'
  const [pickupCity, setPickupCity] = useState('Rajkot');
  const [dropCity, setDropCity] = useState('Somnath');
  const [selectedVehicleId, setSelectedVehicleId] = useState('dzire');
  const [travelDate, setTravelDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [travelTime, setTravelTime] = useState('07:00');
  const [passengers, setPassengers] = useState(3);
  const [localPackage, setLocalPackage] = useState('8hr80km');
  const [airportChoice, setAirportChoice] = useState('hirasar'); // 'hirasar', 'ahmedabad'
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const selectedVehicle = useMemo(() => {
    return vehicles.find(v => v.id === selectedVehicleId) || vehicles[0];
  }, [selectedVehicleId]);

  // Fare estimation logic
  const fareCalculation = useMemo(() => {
    if (tripType === 'local') {
      let baseCost = 0;
      let hours = 8;
      let kms = 80;

      if (localPackage === '4hr40km') {
        hours = 4;
        kms = 40;
        baseCost = selectedVehicle.id === 'dzire' ? 1200 : selectedVehicle.id === 'ertiga' ? 1600 : selectedVehicle.id === 'innova-crysta' ? 2200 : 3500;
      } else if (localPackage === '8hr80km') {
        hours = 8;
        kms = 80;
        baseCost = selectedVehicle.id === 'dzire' ? 2000 : selectedVehicle.id === 'ertiga' ? 2600 : selectedVehicle.id === 'innova-crysta' ? 3600 : 5500;
      } else {
        hours = 12;
        kms = 120;
        baseCost = selectedVehicle.id === 'dzire' ? 2800 : selectedVehicle.id === 'ertiga' ? 3600 : selectedVehicle.id === 'innova-crysta' ? 4800 : 7200;
      }

      return {
        distanceKm: `${kms} km Package`,
        duration: `${hours} Hours included`,
        estimatedFare: baseCost,
        rateLabel: `₹${selectedVehicle.ratePerKm}/km for extra kms`
      };
    }

    if (tripType === 'airport') {
      if (airportChoice === 'hirasar') {
        const fare = selectedVehicle.id === 'dzire' ? 950 : selectedVehicle.id === 'ertiga' ? 1400 : 1900;
        return {
          distanceKm: '32 km approx',
          duration: '45 mins',
          estimatedFare: fare,
          rateLabel: 'Fixed Airport Transfer Rate'
        };
      } else {
        // Ahmedabad airport
        const fare = selectedVehicle.id === 'dzire' ? 2999 : selectedVehicle.id === 'ertiga' ? 3850 : 5200;
        return {
          distanceKm: '225 km approx',
          duration: '3.5 hrs',
          estimatedFare: fare,
          rateLabel: 'Expressway Direct Airport Drop'
        };
      }
    }

    // Outstation one way or round trip
    const dist = routeDistances[dropCity] || 200;
    const effectiveKm = tripType === 'roundtrip' ? Math.max(dist * 2, 250) : dist;
    const baseFare = Math.round(effectiveKm * selectedVehicle.ratePerKm);

    return {
      distanceKm: tripType === 'roundtrip' ? `${dist * 2} km (Round Trip)` : `${dist} km (One Way)`,
      duration: `${Math.round(dist / 50 * 10) / 10} hrs approx`,
      estimatedFare: baseFare,
      rateLabel: `₹${selectedVehicle.ratePerKm}/km applied`
    };
  }, [tripType, dropCity, selectedVehicle, localPackage, airportChoice]);

  // Construct WhatsApp Booking Message
  const generateWhatsAppUrl = () => {
    let tripDetailsText = '';
    if (tripType === 'local') {
      tripDetailsText = `Rajkot Local Rental (${localPackage})`;
    } else if (tripType === 'airport') {
      tripDetailsText = `Airport Transfer (${airportChoice === 'hirasar' ? 'Rajkot Hirasar Airport' : 'Ahmedabad SVPI Airport'})`;
    } else if (tripType === 'roundtrip') {
      tripDetailsText = `Outstation Round Trip: ${pickupCity} ⇄ ${dropCity}`;
    } else {
      tripDetailsText = `Outstation One Way: ${pickupCity} ➔ ${dropCity}`;
    }

    const message = `*YATHARTH CAB SERVICE RAJKOT - BOOKING INQUIRY*
----------------------------------------
*Trip Type:* ${tripDetailsText}
*Vehicle:* ${selectedVehicle.name} (Rate: ₹${selectedVehicle.ratePerKm}/km)
*Travel Date:* ${travelDate}
*Pickup Time:* ${travelTime}
*Passengers:* ${passengers}
*Estimated Distance:* ${fareCalculation.distanceKm}
*Estimated Fare:* ₹${fareCalculation.estimatedFare.toLocaleString('en-IN')}*
${customerName ? `*Customer Name:* ${customerName}\n` : ''}${customerPhone ? `*Phone:* ${customerPhone}\n` : ''}
Please confirm availability and share final quotation. Thank you!`;

    return `https://wa.me/917487887777?text=${encodeURIComponent(message)}`;
  };

  const handleBookSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      // ignore
    }
    setBookingSuccess(true);
    const url = generateWhatsAppUrl();
    window.open(url, '_blank');
  };

  return (
    <section id="book-taxi" className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
        
        {/* Top Header Strip */}
        <div className="bg-[#061A3A] px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b-2 border-[#F5B400]">
          <div>
            <span className="text-[#FFC21A] text-xs font-bold uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Instant Fare Calculator & Quick Dispatch
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white font-heading">
              Book Your Cab in Rajkot & Gujarat
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden sm:block text-right">
              <span className="text-xs text-slate-300 block">Instant WhatsApp / Call Confirmation</span>
              <a href="tel:7487887777" className="text-base font-extrabold text-[#FFC21A] hover:underline">
                +91 74878 87777
              </a>
            </div>
          </div>
        </div>

        {/* Trip Type Selector Tabs */}
        <div className="bg-slate-50 p-2 sm:p-3 border-b border-slate-200 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTripType('oneway')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              tripType === 'oneway'
                ? 'bg-[#061A3A] text-[#FFC21A] shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Navigation className="w-4 h-4" />
            <span>One Way Drop</span>
          </button>

          <button
            type="button"
            onClick={() => setTripType('roundtrip')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              tripType === 'roundtrip'
                ? 'bg-[#061A3A] text-[#FFC21A] shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Round Trip</span>
          </button>

          <button
            type="button"
            onClick={() => setTripType('local')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              tripType === 'local'
                ? 'bg-[#061A3A] text-[#FFC21A] shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Rajkot Local Rental</span>
          </button>

          <button
            type="button"
            onClick={() => setTripType('airport')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition ${
              tripType === 'airport'
                ? 'bg-[#061A3A] text-[#FFC21A] shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Plane className="w-4 h-4" />
            <span>Airport Pickup/Drop</span>
          </button>
        </div>

        {/* Main Form Body */}
        <form onSubmit={handleBookSubmit} className="p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Inputs (8 cols) */}
            <div className="md:col-span-7 lg:col-span-8 space-y-5">
              
              {/* Pickup & Drop Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tripType === 'local' ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" /> City Location
                      </label>
                      <input
                        type="text"
                        value={pickupCity}
                        onChange={(e) => setPickupCity(e.target.value)}
                        placeholder="e.g. Kalawad Road, Rajkot"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] focus:border-[#061A3A] outline-none text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#061A3A]" /> Package Duration
                      </label>
                      <select
                        value={localPackage}
                        onChange={(e) => setLocalPackage(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] focus:border-[#061A3A] outline-none text-sm font-medium bg-white"
                      >
                        <option value="4hr40km">4 Hours / 40 Kilometers (Half Day)</option>
                        <option value="8hr80km">8 Hours / 80 Kilometers (Full Day - Recommended)</option>
                        <option value="12hr120km">12 Hours / 120 Kilometers (Extended City)</option>
                      </select>
                    </div>
                  </>
                ) : tripType === 'airport' ? (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <Plane className="w-3.5 h-3.5 text-[#061A3A]" /> Select Airport
                      </label>
                      <select
                        value={airportChoice}
                        onChange={(e) => setAirportChoice(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] focus:border-[#061A3A] outline-none text-sm font-medium bg-white"
                      >
                        <option value="hirasar">Rajkot Hirasar Int'l Airport (HSR)</option>
                        <option value="ahmedabad">Ahmedabad SVPI Airport (AMD)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Pickup / Drop Address in Rajkot
                      </label>
                      <input
                        type="text"
                        value={pickupCity}
                        onChange={(e) => setPickupCity(e.target.value)}
                        placeholder="Your Area / Hotel in Rajkot"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] focus:border-[#061A3A] outline-none text-sm font-medium"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Pickup City
                      </label>
                      <input
                        type="text"
                        value={pickupCity}
                        onChange={(e) => setPickupCity(e.target.value)}
                        placeholder="Rajkot"
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] focus:border-[#061A3A] outline-none text-sm font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-red-600" /> Drop Destination
                      </label>
                      <select
                        value={dropCity}
                        onChange={(e) => setDropCity(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] focus:border-[#061A3A] outline-none text-sm font-medium bg-white"
                      >
                        {Object.keys(routeDistances).map(city => (
                          <option key={city} value={city}>
                            {city} ({routeDistances[city]} km)
                          </option>
                        ))}
                      </select>
                    </div>
                  </>
                )}
              </div>

              {/* Vehicle Selection Cards */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Car className="w-3.5 h-3.5 text-[#061A3A]" /> Select Vehicle Type
                  </span>
                  <span className="text-[11px] text-amber-600 font-bold lowercase">
                    * Dzire ₹12/km • Ertiga ₹14/km
                  </span>
                </label>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {vehicles.map((veh) => {
                    const isSelected = selectedVehicleId === veh.id;
                    return (
                      <button
                        key={veh.id}
                        type="button"
                        onClick={() => setSelectedVehicleId(veh.id)}
                        className={`p-3 rounded-xl border text-left transition relative flex flex-col justify-between ${
                          isSelected
                            ? 'border-[#061A3A] bg-[#061A3A] text-white shadow-md ring-2 ring-[#F5B400]'
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
                        }`}
                      >
                        {isSelected && (
                          <div className="absolute top-1.5 right-1.5">
                            <CheckCircle2 className="w-4 h-4 text-[#FFC21A] fill-[#FFC21A]" />
                          </div>
                        )}
                        <div>
                          <div className="text-[10px] font-semibold opacity-75 uppercase">
                            {veh.category}
                          </div>
                          <div className="font-bold text-xs sm:text-sm mt-0.5 leading-tight">
                            {veh.name.replace('Maruti ', '').replace('Suzuki ', '').replace('Toyota ', '')}
                          </div>
                        </div>

                        <div className="mt-2 pt-2 border-t border-current/10">
                          <div className={`text-xs font-black ${isSelected ? 'text-[#FFC21A]' : 'text-[#061A3A]'}`}>
                            ₹{veh.ratePerKm}<span className="text-[10px] font-normal">/km*</span>
                          </div>
                          <div className="text-[10px] opacity-75 mt-0.5">
                            {veh.seats} Seater • AC
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Date, Time, Passengers Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" /> Travel Date
                  </label>
                  <input
                    type="date"
                    value={travelDate}
                    onChange={(e) => setTravelDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-xs sm:text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-slate-500" /> Pickup Time
                  </label>
                  <input
                    type="time"
                    value={travelTime}
                    onChange={(e) => setTravelTime(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-xs sm:text-sm font-medium"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-slate-500" /> Passengers
                  </label>
                  <input
                    type="number"
                    min="1"
                    max={selectedVehicle.seats}
                    value={passengers}
                    onChange={(e) => setPassengers(Number(e.target.value))}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 focus:ring-2 focus:ring-[#061A3A] outline-none text-xs sm:text-sm font-medium"
                    required
                  />
                </div>
              </div>

              {/* Optional Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm placeholder:text-slate-400 focus:border-slate-400 outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone Number (Optional)"
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm placeholder:text-slate-400 focus:border-slate-400 outline-none"
                  />
                </div>
              </div>

            </div>

            {/* Right Fare Summary Card (4 cols) */}
            <div className="md:col-span-5 lg:col-span-4 bg-gradient-to-b from-[#061A3A] to-[#092B5C] rounded-2xl p-5 text-white flex flex-col justify-between shadow-lg relative overflow-hidden border border-[#F5B400]/30">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs text-[#FFC21A] font-bold uppercase tracking-wider">
                    Fare Estimation
                  </span>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full text-slate-300">
                    Transparent Billing
                  </span>
                </div>

                {/* Selected vehicle preview */}
                <div className="flex items-center gap-3 bg-white/5 p-2.5 rounded-xl border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-[#F5B400]/20 flex items-center justify-center shrink-0">
                    <Car className="w-5 h-5 text-[#FFC21A]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">{selectedVehicle.name}</div>
                    <div className="text-[11px] text-amber-300 font-semibold">{fareCalculation.rateLabel}</div>
                  </div>
                </div>

                {/* Distance & Duration specs */}
                <div className="grid grid-cols-2 gap-2 text-center text-xs">
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-slate-400 block text-[10px]">Est. Distance</span>
                    <strong className="text-white font-semibold">{fareCalculation.distanceKm}</strong>
                  </div>
                  <div className="bg-white/5 p-2 rounded-lg border border-white/5">
                    <span className="text-slate-400 block text-[10px]">Est. Duration</span>
                    <strong className="text-white font-semibold">{fareCalculation.duration}</strong>
                  </div>
                </div>

                {/* Grand Estimate */}
                <div className="text-center py-2 bg-[#041026]/70 rounded-xl border border-[#F5B400]/20">
                  <div className="text-[10px] text-slate-300 uppercase tracking-wider font-semibold">
                    Estimated Starting Fare
                  </div>
                  <div className="text-3xl font-black text-[#FFC21A] tracking-tight mt-0.5">
                    ₹{fareCalculation.estimatedFare.toLocaleString('en-IN')}
                    <span className="text-xs font-medium text-slate-300">*</span>
                  </div>
                  <div className="text-[10px] text-slate-400 mt-1">
                    *Toll, parking & permit charges at actuals
                  </div>
                </div>
              </div>

              {/* Action Submit Buttons */}
              <div className="space-y-2.5 mt-5">
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-[#061A3A] font-black py-3 rounded-xl shadow-lg flex items-center justify-center gap-2 text-sm transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="w-4 h-4 fill-[#061A3A]" />
                  <span>Book on WhatsApp Now</span>
                </button>

                <a
                  href="tel:7487887777"
                  className="w-full gold-btn-gradient text-[#061A3A] font-extrabold py-2.5 rounded-xl flex items-center justify-center gap-2 text-xs transition"
                >
                  <Phone className="w-3.5 h-3.5 fill-[#061A3A]" />
                  <span>Or Call 7487887777 Directly</span>
                </a>
              </div>

              {bookingSuccess && (
                <div className="mt-3 text-center text-xs text-emerald-300 bg-emerald-950/60 p-2 rounded-lg border border-emerald-500/30 animate-in fade-in">
                  ✓ Opening WhatsApp to confirm your ride with Yatharth!
                </div>
              )}

            </div>

          </div>
        </form>

      </div>
    </section>
  );
}
