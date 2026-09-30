import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Flame, Eye, Sparkles, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import plumbingTankless from '../assets/images/plumbing_tankless_system_1790679245677.jpg';
import plumbingDrain from '../assets/images/plumbing_camera_drain_1790679258210.jpg';
import plumbingFixtures from '../assets/images/plumbing_luxury_fixtures_1790679269782.jpg';
import plumbingTruck from '../assets/images/plumbing_service_truck_1790679283675.jpg';

interface HeroCard {
  id: string;
  image: string;
  tag: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  stat?: string;
}

const CARDS: HeroCard[] = [
  {
    id: 'card-2',
    image: plumbingTankless,
    tag: 'Tankless Hot Water',
    title: 'Endless high-efficiency hot water engineered for Atlanta homes',
    icon: Flame,
    stat: 'Save up to 40% Energy'
  },
  {
    id: 'card-3',
    image: plumbingDrain,
    tag: 'HD Video Pipe Diagnostics',
    title: 'Fiber-optic camera scoping & 4,000 PSI hydro-jet root clearance',
    icon: Eye,
    stat: 'Zero-Dig Diagnostics'
  },
  {
    id: 'card-4',
    image: plumbingFixtures,
    tag: 'Luxury Kitchen & Bath',
    title: 'Architectural fixture installation for designer kitchen & baths',
    icon: Sparkles,
    stat: 'Airtight Guarantee'
  },
  {
    id: 'card-5',
    image: plumbingTruck,
    tag: 'Midtown & Metro Atlanta',
    title: '443 Piedmont Ave NE — Rapid 45-minute emergency dispatch',
    icon: ShieldCheck,
    stat: '< 45 Min Dispatch'
  }
];

interface HeroCarouselProps {
  onSelectCard?: (card: HeroCard) => void;
}

export const HeroCarousel: React.FC<HeroCarouselProps> = ({ onSelectCard }) => {
  const [isPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);

  // Triple cards array to ensure an infinite seamless wrap-around loop
  const displayCards = [...CARDS, ...CARDS, ...CARDS];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastTimestamp = performance.now();
    const speed = 0.65; // Luxurious slow, elegant glide speed (pixels per frame)

    const step = (now: number) => {
      const delta = now - lastTimestamp;
      lastTimestamp = now;

      if (isPlaying && !isHovered && container) {
        container.scrollLeft += (speed * delta) / 16.67;

        // Reset scroll position when passing 1/3 of total scroll width for seamless loop
        const oneThird = container.scrollWidth / 3;
        if (container.scrollLeft >= oneThird * 2) {
          container.scrollLeft -= oneThird;
        } else if (container.scrollLeft <= 0) {
          container.scrollLeft += oneThird;
        }
      }

      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    return () => {
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [isPlaying, isHovered]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const cardWidth = 390;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full mt-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Controls Bar */}
      <div className="flex items-center justify-between gap-4 mb-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Live Indicator Pill */}
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full bg-[#1B4D3E] opacity-75 ${
                isPlaying && !isHovered ? 'animate-ping' : ''
              }`}
            />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#1B4D3E]" />
          </span>
          <span className="text-[11px] font-medium text-[#555C56]">
            {isHovered ? 'Paused on Hover' : 'Continuous Craftsmanship Showcase · Atlanta, GA'}
          </span>
        </div>

        {/* Action Controls (Clean arrows) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => handleManualScroll('left')}
            type="button"
            aria-label="Previous card"
            className="w-9 h-9 rounded-full border border-[#D5D5CD] bg-[#FAFAF7] hover:bg-white flex items-center justify-center text-[#191C1E] transition-all hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#1F3323]"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => handleManualScroll('right')}
            type="button"
            aria-label="Next card"
            className="w-9 h-9 rounded-full border border-[#D5D5CD] bg-[#FAFAF7] hover:bg-white flex items-center justify-center text-[#191C1E] transition-all hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-[#1F3323]"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Moving Carousel Ribbon */}
      <div
        ref={containerRef}
        className="flex gap-5 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-8 pb-6 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollBehavior: 'auto' }}
      >
        {displayCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={`${card.id}-${index}`}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              onClick={() => onSelectCard?.(card)}
              className="relative shrink-0 w-[300px] sm:w-[350px] md:w-[380px] h-[520px] sm:h-[600px] md:h-[640px] rounded-[32px] overflow-hidden shadow-xs hover:shadow-2xl transition-shadow duration-300 group border border-[#E7E7DF] bg-[#F0EFEB]"
            >
              {/* Image */}
              <img
                src={card.image}
                alt={card.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-700 ease-out pointer-events-none"
                loading="eager"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

              {/* Top Tag & Metric Badge */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-white/95 bg-black/45 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  {card.tag}
                </span>
                {card.stat && (
                  <span className="text-[11px] font-mono tabular-nums text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30 font-medium">
                    {card.stat}
                  </span>
                )}
              </div>

              {/* Bottom Glass Capsule Card */}
              <div className="absolute bottom-4 left-4 right-4 p-4 sm:p-5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 text-white transition-all duration-300 group-hover:bg-black/70 group-hover:border-white/35">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#1B4D3E] transition-colors">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-sm sm:text-[15px] font-medium leading-snug tracking-tight text-white/95 group-hover:text-white">
                      {card.title}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};
