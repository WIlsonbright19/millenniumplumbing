import React from 'react';
import plumbingTechnician from '../assets/images/plumbing_technician_hero_1790679232959.jpg';
import plumbingDrain from '../assets/images/plumbing_camera_drain_1790679258210.jpg';
import plumbingTankless from '../assets/images/plumbing_tankless_system_1790679245677.jpg';
import plumbingFixtures from '../assets/images/plumbing_luxury_fixtures_1790679269782.jpg';

interface MarqueeItem {
  text: string;
  image?: string;
}

const ITEMS: MarqueeItem[] = [
  { text: '24/7 Emergency Burst Pipe Dispatch', image: plumbingTechnician },
  { text: 'Navien & Rinnai Certified Tankless Systems' },
  { text: '4,000 PSI Hydro-Jet Sewer Cleaning', image: plumbingDrain },
  { text: 'Licensed GA Master Plumber #MP20914' },
  { text: 'Non-Invasive Acoustic Slab Leak Detection', image: plumbingTankless },
  { text: 'Whole-Home Copper & PEX-A Repiping' },
  { text: 'Luxury Architectural Bath & Kitchen Fixtures', image: plumbingFixtures },
  { text: '443 Piedmont Ave NE · Central Atlanta' },
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="py-6 sm:py-8 bg-[#FAFAF7] border-y border-[#E7E7DF] overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-8 sm:gap-12">
        {/* Double array for infinite loop */}
        {[...ITEMS, ...ITEMS].map((item, index) => (
          <div key={index} className="flex items-center gap-6 sm:gap-8 shrink-0">
            <span className="font-serif text-xl sm:text-2xl lg:text-3xl text-[#191C1E] tracking-tight font-normal whitespace-nowrap">
              {item.text}
            </span>
            {item.image && (
              <div className="w-16 sm:w-20 h-8 sm:h-9 rounded-full overflow-hidden border border-[#D5D5CD] shrink-0 shadow-2xs">
                <img
                  src={item.image}
                  alt={item.text}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <span className="text-[#1B4D3E] text-lg">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
