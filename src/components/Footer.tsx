import React from 'react';
import { ArrowUpRight, PhoneCall, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#FAFAF7] border-t border-[#E7E7DF] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Feature Banner in Footer */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#E1E1D7] mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Box */}
            <div className="lg:col-span-7 bg-[#191C1E] text-white p-7 sm:p-9 rounded-2xl flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8EB897] mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#8EB897] animate-pulse" />
                  <span>24/7 Rapid Atlanta Dispatch</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-normal leading-snug">
                  Active plumbing leak or water heater failure? Call our master dispatch team directly.
                </h3>
                <p className="mt-3 text-xs sm:text-sm text-neutral-300">
                  Located right on Piedmont Ave NE with immediate access to I-75/85 and all central Atlanta corridors.
                </p>
              </div>

              <div className="pt-6 flex flex-wrap gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#8EB897] hover:bg-[#A3CAA9] text-[#191C1E] px-5 py-2.5 rounded-full text-xs font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-white"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call (678) 412-9962</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="inline-flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-xs font-medium transition-colors"
                >
                  <span>Prepare Service Request</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Location & Hours Box */}
            <div className="lg:col-span-5 bg-[#FAFAF7] border border-[#E1E1D7] p-6 rounded-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#E1E1D7]">
                <span className="text-xs font-semibold text-[#191C1E] uppercase tracking-wider">
                  Dispatch Headquarters
                </span>
                <span className="text-xs text-[#1B4D3E] font-medium">Atlanta, GA</span>
              </div>

              <div className="space-y-3 text-xs text-[#555C56]">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#191C1E] block">Millennium Plumbing</strong>
                    <span>443 Piedmont Ave NE, Atlanta, GA 30308</span>
                    <div className="mt-1">
                      <a
                        href={BUSINESS_INFO.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#1B4D3E] font-medium hover:underline inline-flex items-center gap-1"
                      >
                        <span>Open in Google Maps</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 pt-2 border-t border-[#E1E1D7]">
                  <Clock className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#191C1E] block">Operating Hours</strong>
                    <span>Emergency Dispatch: 24/7 Everyday</span>
                    <span className="block text-[#8D928A]">Office & Scheduling: Mon – Sat 7am – 7pm</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-[#E1E1D7]">
                  <ShieldCheck className="w-4 h-4 text-[#1B4D3E] shrink-0" />
                  <span className="text-[#191C1E] font-mono text-[11px]">
                    GA Master Plumber License #MP20914
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Lower Main Footer Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-[#E7E7DF]">
          
          {/* Brand Info */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-xs">
                MP
              </div>
              <span className="font-serif text-2xl font-normal tracking-tight text-[#191C1E]">
                Millennium Plumbing
              </span>
            </div>
            <p className="text-xs text-[#555C56] max-w-md leading-relaxed">
              Providing premier residential and commercial plumbing throughout Midtown Atlanta and surrounding counties. Master craftsmanship, fair pricing, and rapid response.
            </p>

          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191C1E]">
              Direct Contact
            </h4>
            <ul className="space-y-2 text-xs text-[#555C56]">
              <li>
                <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="font-semibold text-[#1B4D3E] hover:underline block">
                  (678) 412-9962
                </a>
                <span className="text-[11px] text-[#8D928A]">24/7 Emergency Line</span>
              </li>
              <li className="pt-1">
                <span className="block font-medium text-[#191C1E]">Office Location:</span>
                <span>443 Piedmont Ave NE</span>
                <span className="block">Atlanta, GA 30308</span>
              </li>
              <li className="pt-1">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#1B4D3E] font-medium hover:underline inline-flex items-center gap-1"
                >
                  <span>Google Maps Listing</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Sub-Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8D928A]">
          <p>© {new Date().getFullYear()} Millennium Plumbing. All rights reserved. Georgia Master Plumber #MP20914.</p>
          <div className="flex items-center gap-6">
            <a href="#overview" className="hover:text-[#191C1E] transition-colors">Privacy Policy</a>
            <a href="#overview" className="hover:text-[#191C1E] transition-colors">Terms of Service</a>
            <a href="#overview" className="hover:text-[#191C1E] transition-colors">Atlanta Service Map</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
