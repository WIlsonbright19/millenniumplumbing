import React, { useState } from 'react';
import { PLUMBER_EXPERTS, BUSINESS_INFO } from '../data/content';
import { X, Calendar, Clock, MapPin, Check, ArrowRight, ShieldCheck, Wrench, PhoneCall, AlertTriangle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialist?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSpecialist
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [propertyType, setPropertyType] = useState<'residential' | 'commercial'>('residential');
  const [serviceCategory, setServiceCategory] = useState('emergency');
  const [urgency, setUrgency] = useState('same-day');
  const [selectedDate, setSelectedDate] = useState('Tomorrow');
  const [selectedTime, setSelectedTime] = useState('09:00 AM – 11:00 AM');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');

  if (!isOpen) return null;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) setStep(2);
    else if (step === 2) setStep(3);
  };

  const handleReset = () => {
    setStep(1);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close service modal"
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1B4D3E] mb-1">
            <span>Millennium Plumbing</span>
            <span>·</span>
            <span>443 Piedmont Ave NE</span>
          </div>
          <h3 id="booking-modal-title" className="font-serif text-2xl sm:text-3xl text-[#191C1E] font-medium">
            {step === 3 ? 'Request Details Ready' : 'Prepare a Plumbing Service Request'}
          </h3>
          <p className="text-xs text-[#555C56] mt-1">
            {step === 1 && 'Step 1 of 2: Select your plumbing needs and service urgency.'}
            {step === 2 && 'Step 2 of 2: Provide property location and preferred arrival window.'}
            {step === 3 && 'Your request details have not been sent. Call dispatch to submit your request.'}
          </p>
        </div>

        {/* Emergency Callout in Step 1 */}
        {step === 1 && (
          <div className="mb-6 p-3.5 bg-[#FEF3C7] border border-[#FDE68A] rounded-2xl flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2 text-[#92400E]">
              <AlertTriangle className="w-4 h-4 text-[#D97706] shrink-0" />
              <span><strong>Active water leak or pipe burst?</strong> Call us right now for &lt;45 min dispatch.</span>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="px-3 py-1.5 bg-[#D97706] hover:bg-[#B45309] text-white font-semibold rounded-lg shrink-0 transition-colors"
            >
              Call (678) 412-9962
            </a>
          </div>
        )}

        {/* Step 1: Plumbing Details & Property Type */}
        {step === 1 && (
          <form onSubmit={handleNext} className="space-y-5">
            {/* Property Type Toggle */}
            <div>
              <label className="block text-xs font-semibold text-[#191C1E] uppercase tracking-wider mb-2">
                Property Classification
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPropertyType('residential')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    propertyType === 'residential'
                      ? 'bg-[#191C1E] text-white border-[#191C1E]'
                      : 'bg-[#FAFAF7] text-[#555C56] border-[#D5D5CD]'
                  }`}
                >
                  Residential Home / Condo
                </button>
                <button
                  type="button"
                  onClick={() => setPropertyType('commercial')}
                  className={`py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all ${
                    propertyType === 'commercial'
                      ? 'bg-[#191C1E] text-white border-[#191C1E]'
                      : 'bg-[#FAFAF7] text-[#555C56] border-[#D5D5CD]'
                  }`}
                >
                  Commercial / Restaurant / Office
                </button>
              </div>
            </div>

            {/* Service Issue */}
            <div>
              <label className="block text-xs font-semibold text-[#191C1E] uppercase tracking-wider mb-2">
                Primary Plumbing Concern
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { id: 'emergency', label: 'Active Pipe Burst / Flood', icon: AlertTriangle },
                  { id: 'water-heater', label: 'Tankless / Tank Water Heater', icon: Wrench },
                  { id: 'drain', label: 'Drain Clog / Sewer Camera', icon: Wrench },
                  { id: 'leak-detect', label: 'Slab Leak / Low Pressure', icon: Wrench },
                  { id: 'fixtures', label: 'Faucets, Toilets & Disposals', icon: Wrench },
                  { id: 'commercial', label: 'Backflow Testing / Inspection', icon: ShieldCheck },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceCategory(s.id)}
                    className={`p-3 rounded-xl border text-left text-xs font-medium transition-all ${
                      serviceCategory === s.id
                        ? 'bg-[#EBF2EC] text-[#1B4D3E] border-[#1B4D3E]'
                        : 'bg-white text-[#464B48] border-[#D5D5CD] hover:bg-[#FAFAF7]'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Urgency */}
            <div>
              <label className="block text-xs font-semibold text-[#191C1E] uppercase tracking-wider mb-2">
                Dispatch Urgency
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'emergency', label: 'Immediate Emergency' },
                  { id: 'same-day', label: 'Same Day' },
                  { id: 'scheduled', label: 'Within Next 48h' },
                ].map((u) => (
                  <button
                    key={u.id}
                    type="button"
                    onClick={() => setUrgency(u.id)}
                    className={`py-2 px-2 text-xs rounded-xl border text-center transition-all ${
                      urgency === u.id
                        ? 'bg-[#191C1E] text-white border-[#191C1E]'
                        : 'bg-[#FAFAF7] text-[#464B48] border-[#D5D5CD]'
                    }`}
                  >
                    {u.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="w-full py-3 bg-[#191C1E] hover:bg-[#1B4D3E] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Continue to Location & Contact</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 2: Customer Address & Contact Info */}
        {step === 2 && (
          <form onSubmit={handleNext} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-[#191C1E] mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Alexander Hayes"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-[#191C1E] mb-1">
                  Phone Number (for dispatch updates) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(678) 555-0199"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#191C1E] mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-[#191C1E] mb-1">
                Property Street Address (Metro Atlanta) *
              </label>
              <input
                type="text"
                required
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="e.g., 443 Piedmont Ave NE, Apt 3B, Atlanta GA"
                className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-xl border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#191C1E] mb-1">
                Describe the Issue or Preferred Arrival Time
              </label>
              <textarea
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Water heater leaking from base, need estimate on tankless replacement..."
                className="w-full px-3.5 py-2 text-xs rounded-xl border border-[#D5D5CD] bg-white focus:outline-none focus:border-[#1B4D3E]"
              />
            </div>

            <div className="flex gap-2 pt-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="px-4 py-2.5 border border-[#D5D5CD] text-[#555C56] rounded-xl text-xs font-semibold hover:bg-neutral-50"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 py-3 bg-[#191C1E] hover:bg-[#1B4D3E] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2"
              >
                <span>Review Request Details</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success Confirmation */}
        {step === 3 && (
          <div className="py-4 text-center space-y-4">
            <div className="w-16 h-16 bg-[#EBF2EC] text-[#1B4D3E] rounded-full flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>

            <h4 className="font-serif text-2xl text-[#191C1E]">
              Request Details Ready
            </h4>

            <p className="text-xs text-[#555C56] max-w-sm mx-auto leading-relaxed">
              Your details are shown below but have not been sent. Call dispatch at {BUSINESS_INFO.phone} to submit your request and confirm availability.
            </p>

            <div className="p-4 bg-[#FAFAF7] rounded-2xl border border-[#E1E1D7] text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-[#8D928A]">Customer:</span>
                <span className="font-medium text-[#191C1E]">{name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8D928A]">Location:</span>
                <span className="font-medium text-[#191C1E]">{address}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8D928A]">Status:</span>
                <span className="text-[#92400E] font-semibold">Not yet submitted</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 bg-[#1B4D3E] text-white rounded-xl text-xs font-semibold hover:bg-[#13392E] transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Dispatch Immediately</span>
              </a>
              <button
                type="button"
                onClick={handleReset}
                className="px-5 py-2.5 border border-[#D5D5CD] text-[#191C1E] rounded-xl text-xs font-medium hover:bg-neutral-50"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
