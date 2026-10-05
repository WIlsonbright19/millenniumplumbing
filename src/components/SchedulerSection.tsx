import React from 'react';
import { BUSINESS_INFO, PLUMBER_EXPERTS } from '../data/content';
import { ArrowRight, CalendarDays, PhoneCall, ShieldCheck } from 'lucide-react';

interface SchedulerSectionProps {
  onOpenBooking: () => void;
}

export const SchedulerSection: React.FC<SchedulerSectionProps> = ({ onOpenBooking }) => (
  <section id="approach" className="py-20 sm:py-28 bg-white border-t border-[#E7E7DF]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-6 space-y-6">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E]">
            About Millennium Plumbing
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] leading-tight font-normal text-[#191C1E]">
            Atlanta’s trusted plumbing and mechanical specialists
          </h2>

          <p className="text-base text-[#555C56] leading-relaxed">
            Located at 443 Piedmont Ave NE in Atlanta, Millennium Plumbing is committed to showing up promptly,
            communicating clearly, providing transparent pricing, and delivering quality plumbing for your home or
            business.
          </p>

          <div className="p-4 sm:p-5 rounded-2xl bg-[#FAFAF7] border border-[#E7E7DF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-4">
            <div className="flex items-center gap-3.5">
              <img
                src={PLUMBER_EXPERTS[0].avatar}
                alt={PLUMBER_EXPERTS[0].name}
                className="w-12 h-12 rounded-xl object-cover ring-2 ring-white shadow-xs"
              />
              <div>
                <h3 className="text-sm font-semibold text-[#191C1E]">{PLUMBER_EXPERTS[0].name}</h3>
                <p className="text-xs text-[#555C56]">{PLUMBER_EXPERTS[0].credentials}</p>
              </div>
            </div>
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto text-xs font-semibold bg-[#1B4D3E] hover:bg-[#13392E] text-white px-4 py-2.5 rounded-full transition-colors whitespace-nowrap flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>Call {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="bg-[#FAFAF7] border border-[#E1E1D7] rounded-3xl p-6 sm:p-8 shadow-xs">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#EBF2EC] px-3 py-1.5 text-xs font-semibold text-[#1B4D3E]">
              <CalendarDays className="w-4 h-4" />
              Service request
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#191C1E] mt-4">
              Tell us what you need
            </h3>
            <p className="text-sm text-[#555C56] mt-2 leading-relaxed">
              Share your plumbing issue, contact details, and preferred arrival window. Call our team afterward to
              submit your request and confirm availability.
            </p>

            <ul className="space-y-3 mt-6 text-sm text-[#464B48]">
              <li className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 mt-0.5 text-[#1B4D3E] shrink-0" />
                <span>Choose the service and urgency that best fit your situation.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <CalendarDays className="w-4 h-4 mt-0.5 text-[#1B4D3E] shrink-0" />
                <span>Include your preferred day and arrival window.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneCall className="w-4 h-4 mt-0.5 text-[#1B4D3E] shrink-0" />
                <span>Speak with dispatch to submit the request and confirm a visit.</span>
              </li>
            </ul>

            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full mt-7 py-3.5 px-5 bg-[#191C1E] hover:bg-[#1B4D3E] text-white text-sm font-semibold rounded-xl transition-colors shadow-xs flex items-center justify-center gap-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E]"
            >
              <span>Prepare a service request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-[#555C56] mt-3">
              Need urgent help?{' '}
              <a className="font-semibold text-[#1B4D3E] hover:underline" href={`tel:${BUSINESS_INFO.phoneRaw}`}>
                Call {BUSINESS_INFO.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
