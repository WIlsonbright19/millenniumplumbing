import React from 'react';
import { PhoneCall, Calendar, MapPin } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';
import plumbingFixtures from '../assets/images/plumbing_luxury_fixtures_1790679269782.jpg';

interface CtaBannerProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ onOpenBooking, onExploreServices }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl sm:rounded-[36px] p-8 sm:p-12 lg:p-16 border border-[#E1E1D7] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading and CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#1B4D3E]">
                <MapPin className="w-3.5 h-3.5" />
                <span>443 PIEDMONT AVE NE · ATLANTA, GA</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] text-[#191C1E]">
                Have a Plumbing Emergency or <span className="italic font-light">Planning an Upgrade?</span>
              </h2>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 bg-[#1B4D3E] hover:bg-[#13392E] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-colors shadow-xs focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Call (678) 412-9962</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="inline-flex items-center justify-center gap-1.5 text-xs sm:text-sm font-semibold text-[#191C1E] bg-[#FAFAF7] hover:bg-white border border-[#D5D5CD] px-5 py-3.5 rounded-full transition-colors focus-visible:outline-2 focus-visible:outline-[#191C1E]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Prepare Service Request</span>
                </button>
              </div>
            </div>

            {/* Right Column: High-Impact Visual */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-3xl overflow-hidden aspect-4/3 sm:aspect-16/11 border border-[#E1E1D7] shadow-xs">
                <img
                  src={plumbingFixtures}
                  alt="Modern architectural plumbing fixture installation"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
