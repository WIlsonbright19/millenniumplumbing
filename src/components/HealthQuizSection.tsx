import React, { useState } from 'react';
import { Wrench, Check, ArrowRight, ArrowLeft, PhoneCall, AlertTriangle } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

interface HealthQuizSectionProps {
  onBookRecommended: (serviceName: string) => void;
}

export const HealthQuizSection: React.FC<HealthQuizSectionProps> = ({
  onBookRecommended
}) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const questions = [
    {
      title: 'What is the primary plumbing symptom you are experiencing?',
      options: [
        { label: 'Active water leak, wet ceiling, or flooding (Urgent)', value: 'emergency' },
        { label: 'No hot water, lukewarm showers, or water heater is 8+ years old', value: 'water-heater' },
        { label: 'Toilet, shower, or main sewer drain backed up or gurgling', value: 'drain' },
        { label: 'Low water pressure, rusty water, or recurring pinhole leaks', value: 'repipe' },
        { label: 'Upgrading faucets, sinks, toilets, or commercial backflow test', value: 'fixtures' }
      ]
    },
    {
      title: 'What type of property and approximate age?',
      options: [
        { label: 'Historic Atlanta Home (Pre-1970 with original cast iron/galvanized pipes)', value: 'historic' },
        { label: 'Suburban Home or Townhouse (1970–2005)', value: 'mid-century' },
        { label: 'Modern Home or High-Rise Condo (Post-2005 with PEX/copper)', value: 'modern' },
        { label: 'Commercial Restaurant, Retail, or Office Property', value: 'commercial' }
      ]
    },
    {
      title: 'When was your plumbing system or water heater last serviced?',
      options: [
        { label: 'Never serviced or unknown', value: 'never' },
        { label: 'Within the last 1–2 years', value: 'recent' },
        { label: 'More than 5 years ago', value: 'older' }
      ]
    }
  ];

  const handleSelectOption = (value: string) => {
    const updated = { ...answers, [currentQ]: value };
    setAnswers(updated);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
    }
  };

  const getRecommendation = () => {
    const primary = answers[0] || 'emergency';
    if (primary === 'emergency') {
      return {
        title: 'Priority Emergency Leak Dispatch Protocol',
        desc: 'Our Atlanta dispatch truck at 443 Piedmont Ave NE is equipped with acoustic leak locators and pipe shutoff tools for rapid arrival under 45 minutes.',
        service: 'Emergency Plumbing & Leak Response'
      };
    }
    if (primary === 'water-heater') {
      return {
        title: 'High-Efficiency Tankless Water Heater Consultation',
        desc: 'Upgrade to an endless on-demand Navien or Rinnai tankless system. Saves up to 40% in monthly energy, backed by a 10-year heat exchanger warranty.',
        service: 'Tankless & Hybrid Water Heater Systems'
      };
    }
    if (primary === 'drain') {
      return {
        title: 'High-Definition Sewer Camera & Hydro-Jetting',
        desc: 'Zero-excavation fiber-optic color scoping to pinpoint invasive tree roots, followed by 4,000 PSI hydro-jetting to restore full line diameter.',
        service: 'High-Definition Sewer Camera & Hydro-Jetting'
      };
    }
    return {
      title: 'Uponor PEX-A Whole-Home Repiping Assessment',
      desc: 'Replace deteriorating galvanized or failing copper pipes with commercial-grade PEX-A expansion tubing for full pressure and zero corrosion.',
      service: 'Whole-Home Copper & PEX-A Repiping'
    };
  };

  const recommendation = getRecommendation();

  return (
    <section id="symptom-checker" className="scroll-mt-24 py-16 sm:py-20 bg-white border-y border-[#E7E7DF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="bg-[#FAFAF7] rounded-3xl p-6 sm:p-8 border border-[#E1E1D7]">

        {!isCompleted ? (
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-[#1B4D3E]">
                Diagnostic Calculator · Question {currentQ + 1} of {questions.length}
              </span>
              {currentQ > 0 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-xs text-[#555C56] hover:text-[#191C1E] flex items-center gap-1"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              )}
            </div>

            <h2 id="quiz-title" className="font-serif text-2xl text-[#191C1E] leading-snug mb-6">
              {questions[currentQ].title}
            </h2>

            <div className="space-y-3">
              {questions[currentQ].options.map((opt) => (
                <button
                  key={opt.value}
                  type="button"
                  onClick={() => handleSelectOption(opt.value)}
                  className="w-full text-left p-4 rounded-2xl border border-[#E7E7DF] hover:border-[#1B4D3E] hover:bg-[#FAFAF7] transition-all text-xs sm:text-sm font-medium text-[#191C1E] flex items-center justify-between group"
                >
                  <span>{opt.label}</span>
                  <div className="w-6 h-6 rounded-full border border-[#D5D5CD] group-hover:border-[#1B4D3E] flex items-center justify-center shrink-0">
                    <ArrowRight className="w-3.5 h-3.5 text-[#1B4D3E] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-4 space-y-5">
            <div className="w-14 h-14 bg-[#EBF2EC] text-[#1B4D3E] rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-[#1B4D3E]">
                Diagnostic Result
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#191C1E] mt-1">
                {recommendation.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#555C56] mt-3 leading-relaxed max-w-md mx-auto">
                {recommendation.desc}
              </p>
            </div>

            <div className="p-4 bg-[#FAFAF7] rounded-2xl border border-[#E1E1D7] text-left text-xs space-y-1.5 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span className="text-[#8D928A]">Recommended Scope:</span>
                <span className="font-semibold text-[#191C1E]">{recommendation.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8D928A]">Pricing Model:</span>
                <span className="text-[#1B4D3E] font-medium">Guaranteed Flat-Rate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#8D928A]">Dispatch Hub:</span>
                <span className="text-[#191C1E]">443 Piedmont Ave NE</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="px-5 py-2.5 bg-[#1B4D3E] text-white rounded-xl text-xs font-semibold hover:bg-[#13392E] transition-colors flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call (678) 412-9962</span>
              </a>
              <button
                type="button"
                onClick={() => onBookRecommended(recommendation.service)}
                className="px-5 py-2.5 bg-[#191C1E] hover:bg-[#2A2E2C] text-white rounded-xl text-xs font-medium transition-colors"
              >
                Prepare Service Request
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  );
};
