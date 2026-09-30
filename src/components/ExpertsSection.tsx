import React, { useState } from 'react';
import { PLUMBER_EXPERTS, PlumberProfile, BUSINESS_INFO } from '../data/content';
import { ArrowUpRight, Award, ShieldCheck, Wrench, X, PhoneCall } from 'lucide-react';
import plumbingTechnician from '../assets/images/plumbing_technician_hero_1790679232959.jpg';

interface ExpertsSectionProps {
  onOpenBooking: () => void;
}

export const ExpertsSection: React.FC<ExpertsSectionProps> = ({ onOpenBooking }) => {
  const [selectedPlumber, setSelectedPlumber] = useState<PlumberProfile | null>(null);

  return (
    <section id="experts" className="py-20 sm:py-28 bg-[#FAFAF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Anchor + Quote Card */}
          <div className="lg:col-span-6 space-y-5">
            <div className="relative rounded-3xl overflow-hidden shadow-xs border border-[#E1E1D7] aspect-4/3 sm:aspect-16/10">
              <img
                src={plumbingTechnician}
                alt="Master plumber inspecting plumbing valves"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-[11px] font-mono uppercase bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  GA Master Plumber #MP20914
                </span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="p-5 bg-white rounded-2xl border border-[#E1E1D7] shadow-2xs">
              <p className="text-xs sm:text-[13px] text-[#464B48] leading-relaxed italic">
                &ldquo;Plumbing is the hidden lifeline of your home. We treat every joint, valve, and pipe as if it were protecting our own family’s foundation. Honest diagnostics, clean workmanship, and zero compromises.&rdquo;
              </p>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#1B4D3E]" />
                  <span className="text-xs font-semibold text-[#191C1E]">Marcus Vance</span>
                  <span className="text-[11px] text-[#8D928A]">· Operations Director & Master Plumber</span>
                </div>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-xs font-semibold text-[#1B4D3E] hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" />
                  <span>Call Marcus</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Meet Our Plumbers Roster */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E] mb-2">
                <span>LICENSED CRAFTSMEN</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-normal text-[#191C1E]">
                Meet Our Master Plumbers & Specialists
              </h2>
              <p className="mt-4 text-base text-[#555C56] leading-relaxed">
                Every technician dispatched to your Atlanta property is thoroughly background-checked,
                formally licensed, and equipped with industry-leading diagnostic technology.
              </p>
            </div>

            {/* Plumber Items List */}
            <div className="space-y-3.5 pt-2">
              {PLUMBER_EXPERTS.map((plumber) => (
                <div
                  key={plumber.id}
                  onClick={() => setSelectedPlumber(plumber)}
                  className="p-4 rounded-2xl bg-white border border-[#E7E7DF] hover:border-[#1B4D3E]/40 hover:shadow-xs transition-all duration-200 cursor-pointer flex items-center justify-between group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={plumber.avatar}
                      alt={plumber.name}
                      className="w-12 h-12 rounded-xl object-cover ring-1 ring-black/5"
                    />
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-sm font-semibold text-[#191C1E] group-hover:text-[#1B4D3E] transition-colors">
                          {plumber.name}
                        </h4>
                        <span className="text-[10px] font-mono bg-[#EBF2EC] text-[#1B4D3E] px-2 py-0.5 rounded-full font-medium">
                          {plumber.experience}
                        </span>
                      </div>
                      <p className="text-xs text-[#555C56] mt-0.5">
                        {plumber.role}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-medium text-[#1B4D3E]">
                    <span className="hidden sm:inline text-[11px] font-semibold">View Bio</span>
                    <div className="w-7 h-7 rounded-full bg-[#FAFAF7] group-hover:bg-[#EBF2EC] flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#191C1E] hover:text-[#1B4D3E] transition-colors"
              >
                <span>Request Specific Specialist for Your Service</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Plumber Profile Dialog Modal */}
      {selectedPlumber && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="plumber-name"
          >
            <button
              onClick={() => setSelectedPlumber(null)}
              type="button"
              aria-label="Close dialog"
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-neutral-100 text-neutral-500 hover:text-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-5">
              <img
                src={selectedPlumber.avatar}
                alt={selectedPlumber.name}
                className="w-16 h-16 rounded-2xl object-cover ring-2 ring-[#EBF2EC]"
              />
              <div>
                <h3 id="plumber-name" className="font-serif text-2xl text-[#191C1E] font-medium">
                  {selectedPlumber.name}
                </h3>
                <p className="text-xs font-medium text-[#1B4D3E]">
                  {selectedPlumber.role}
                </p>
                <p className="text-[11px] font-mono text-[#8D928A] mt-0.5">
                  {selectedPlumber.credentials}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-[#464B48] leading-relaxed border-t border-[#E7E7DF] pt-4">
              <div>
                <h5 className="font-semibold text-[#191C1E] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Wrench className="w-3.5 h-3.5 text-[#1B4D3E]" />
                  <span>Technical Specialty</span>
                </h5>
                <p>{selectedPlumber.specialty}</p>
              </div>

              <div>
                <h5 className="font-semibold text-[#191C1E] text-xs uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#1B4D3E]" />
                  <span>Background & Experience</span>
                </h5>
                <p>{selectedPlumber.bio}</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-[#E7E7DF] flex items-center justify-between gap-3">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-4 py-2 bg-[#EBF2EC] text-[#1B4D3E] text-xs font-semibold rounded-full hover:bg-[#DCE9DF] transition-colors flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call (678) 412-9962</span>
              </a>
              <button
                onClick={() => {
                  setSelectedPlumber(null);
                  onOpenBooking();
                }}
                type="button"
                className="px-5 py-2 bg-[#191C1E] hover:bg-[#1B4D3E] text-white text-xs font-semibold rounded-full transition-colors"
              >
                Schedule with {selectedPlumber.name.split(' ')[0]}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
