import React, { useState } from 'react';
import { PLUMBER_EXPERTS, BUSINESS_INFO } from '../data/content';
import { Calendar as CalendarIcon, Check, PhoneCall } from 'lucide-react';

interface SchedulerSectionProps {
  onOpenBooking: () => void;
}

export const SchedulerSection: React.FC<SchedulerSectionProps> = ({ onOpenBooking }) => {
  const [serviceType, setServiceType] = useState('Tankless Water Heater / Repair');
  const [selectedDateIndex, setSelectedDateIndex] = useState(1);
  const [isBooked, setIsBooked] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

  const dates = Array.from({ length: 6 }, (_, offset) => {
    const date = new Date();
    date.setDate(date.getDate() + offset);
    return {
      day: offset === 0 ? 'Today' : new Intl.DateTimeFormat('en-US', { weekday: 'short' }).format(date),
      date: String(date.getDate()).padStart(2, '0'),
      full: new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric' }).format(date),
    };
  });

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsBooked(true);
  };

  const handleReset = () => {
    setIsBooked(false);
    setCustomerName('');
    setCustomerPhone('');
    setCustomerAddress('');
  };

  return (
    <section id="approach" className="py-20 sm:py-28 bg-white border-t border-[#E7E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Millennium Plumbing Story & Service Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E]">
              <span>ABOUT MILLENNIUM PLUMBING</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-normal text-[#191C1E]">
              Atlanta’s Trusted Plumbing & Mechanical Specialists
            </h2>

            <p className="text-base text-[#555C56] leading-relaxed">
              Located at 443 Piedmont Ave NE in the heart of Atlanta, Millennium Plumbing was built on an uncompromising
              commitment: show up promptly, communicate clearly, provide transparent upfront pricing, and deliver
              master-grade plumbing that safeguards your home and business for decades.
            </p>

            {/* Master Plumber Mini Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF7] border border-[#E7E7DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
              <div className="flex items-center gap-3.5">
                <img
                  src={PLUMBER_EXPERTS[0].avatar}
                  alt={PLUMBER_EXPERTS[0].name}
                  className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-xs"
                />
                <div>
                  <h4 className="text-sm font-semibold text-[#191C1E]">{PLUMBER_EXPERTS[0].name}</h4>
                  <p className="text-xs text-[#555C56]">{PLUMBER_EXPERTS[0].credentials}</p>
                </div>
              </div>
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full sm:w-auto text-xs font-semibold bg-[#1B4D3E] hover:bg-[#13392E] text-white px-4 py-2.5 rounded-full transition-colors whitespace-nowrap flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call (678) 412-9962</span>
              </a>
            </div>
          </div>

          {/* Right Column: Standout Interactive Service & Dispatch Scheduler */}
          <div className="lg:col-span-6">
            <div className="bg-[#FAFAF7] border border-[#E1E1D7] rounded-3xl p-6 sm:p-8 shadow-xs relative">
              {!isBooked ? (
                <div className="space-y-6">
                  {/* Service Selector */}
                  <div>
                    <label className="block text-xs font-semibold text-[#555C56] uppercase tracking-wider mb-2">
                      Select Plumbing Service
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#D5D5CD] bg-white text-sm text-[#191C1E] focus:outline-none focus:border-[#1B4D3E]"
                    >
                      <option value="Emergency Burst Pipe / Active Leak">🚨 Emergency Burst Pipe / Active Water Leak</option>
                      <option value="Tankless Water Heater / Repair">🔥 Tankless or Tank Water Heater Repair/Install</option>
                      <option value="Sewer Camera & Drain Hydro-Jetting">🔍 Drain Clog / Sewer Camera Inspection</option>
                      <option value="Whole-Home Repiping (Copper/PEX)">🛠️ Whole-Home Repiping & Pressure Issues</option>
                      <option value="Bathroom & Kitchen Fixture Installation">✨ Faucets, Sinks, Toilets & Garbage Disposals</option>
                      <option value="Commercial Plumbing & Backflow Testing">🏢 Commercial Plumbing & Backflow Testing</option>
                    </select>
                  </div>

                  {/* Available Date Selection */}
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-[#555C56] uppercase tracking-wider flex items-center gap-1.5">
                        <CalendarIcon className="w-3.5 h-3.5 text-[#1B4D3E]" />
                        <span>Preferred Service Date</span>
                      </span>
                      <span className="text-xs font-medium text-[#1B4D3E]">
                        {dates[selectedDateIndex].full}
                      </span>
                    </div>

                    <div className="grid grid-cols-6 gap-2">
                      {dates.map((d, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => setSelectedDateIndex(index)}
                          className={`flex flex-col items-center justify-center p-2 rounded-xl transition-all border ${
                            selectedDateIndex === index
                              ? 'bg-[#191C1E] text-white border-[#191C1E] shadow-xs'
                              : 'bg-white hover:bg-[#F2F2EE] text-[#191C1E] border-[#E1E1D7]'
                          }`}
                        >
                          <span className="text-[10px] uppercase font-medium">{d.day}</span>
                          <span className="text-xs sm:text-sm font-semibold mt-0.5">{d.date}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Customer Quick Info */}
                  <form onSubmit={handleConfirm} className="space-y-3 pt-2">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-medium text-[#555C56] mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          value={customerName}
                          onChange={(e) => setCustomerName(e.target.value)}
                          placeholder="e.g., Sarah Mitchell"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-medium text-[#555C56] mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          value={customerPhone}
                          onChange={(e) => setCustomerPhone(e.target.value)}
                          placeholder="(404) 555-0123"
                          className="w-full px-3 py-2 text-xs rounded-lg border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[11px] font-medium text-[#555C56] mb-1">
                        Service Address (Atlanta Metro Area)
                      </label>
                      <input
                        type="text"
                        required
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                        placeholder="e.g., 850 Piedmont Ave NE, Atlanta GA"
                        className="w-full px-3 py-2 text-xs rounded-lg border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-3 py-3 bg-[#191C1E] hover:bg-[#1B4D3E] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-xs"
                    >
                      Review Request Details
                    </button>
                  </form>
                </div>
              ) : (
                /* Success Confirmation State */
                <div className="py-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-14 h-14 bg-[#EBF2EC] text-[#1B4D3E] rounded-full flex items-center justify-center mx-auto shadow-xs">
                    <Check className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl text-[#191C1E]">
                      Request Details Ready
                    </h3>
                    <p className="text-xs text-[#555C56] mt-2 max-w-sm mx-auto">
                      Thanks, <strong className="text-[#191C1E]">{customerName}</strong>. These details have not been sent. Call dispatch to submit your request and confirm availability.
                    </p>
                  </div>

                  <div className="p-4 bg-white rounded-2xl border border-[#E1E1D7] text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between">
                      <span className="text-[#8D928A]">Service:</span>
                      <span className="font-medium text-[#191C1E]">{serviceType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8D928A]">Preferred Date:</span>
                      <span className="font-medium text-[#191C1E]">{dates[selectedDateIndex].full}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#8D928A]">Address:</span>
                      <span className="font-medium text-[#191C1E]">{customerAddress}</span>
                    </div>
                    <div className="flex justify-between pt-1 border-t border-neutral-100">
                      <span className="text-[#8D928A]">Dispatch Phone:</span>
                      <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-mono text-[#1B4D3E] font-semibold">
                        (678) 412-9962
                      </a>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-center gap-3">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="text-xs font-semibold text-[#555C56] hover:text-[#191C1E] underline"
                    >
                      Book Another Service
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
