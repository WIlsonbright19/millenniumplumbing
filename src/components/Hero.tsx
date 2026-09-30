import React from 'react';
import { PhoneCall, Calendar, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { HeroCarousel } from './HeroCarousel';
import { BUSINESS_INFO } from '../data/content';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section id="overview" className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
      {/* Subtle Warm Atmospheric Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[440px] bg-gradient-to-tr from-[#E3EBE4]/70 via-[#E8EDE7]/50 to-transparent blur-3xl -z-10 pointer-events-none rounded-full"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Display Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#191C1E] max-w-4xl mx-auto leading-[1.1] text-balance"
        >
          Atlanta’s Trusted Plumbers, <span className="italic font-light">Done Right The First Time</span>
        </motion.h1>

        {/* Value Proposition Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-5 text-base sm:text-lg text-[#555C56] max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Georgia State Licensed Master Plumbers. From 24/7 emergency burst pipe dispatch and tankless water heaters
          to fiber-optic sewer diagnostics and whole-home repiping across Midtown, Buckhead, and Metro Atlanta.
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5"
        >
          {/* Direct Phone Call Button */}
          <motion.a
            whileHover={{ scale: 1.025, backgroundColor: '#13392E' }}
            whileTap={{ scale: 0.98 }}
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#1B4D3E] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-shadow duration-200 shadow-md hover:shadow-lg focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
          >
            <PhoneCall className="w-4 h-4 animate-pulse" />
            <span>Call (678) 412-9962</span>
          </motion.a>

          {/* Prepare a service request */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenBooking}
            type="button"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#191C1E] text-[#FAFAF7] text-sm font-medium px-6 py-3.5 rounded-full transition-shadow duration-200 shadow-sm hover:bg-[#2A2E2C] focus-visible:outline-2 focus-visible:outline-[#191C1E]"
          >
            <Calendar className="w-4 h-4 text-neutral-300" />
            <span>Prepare Service Request</span>
          </motion.button>
        </motion.div>

        {/* Verified Social Proof Strip with Google Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 inline-flex items-center gap-3 text-xs text-[#555C56]"
        >
          {/* Avatar Stack */}
          <div className="flex -space-x-2 overflow-hidden py-1">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100"
              alt="Atlanta client"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-[#FAFAF7] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100"
              alt="Atlanta client"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-[#FAFAF7] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
              alt="Atlanta client"
              className="inline-block h-7 w-7 rounded-full ring-2 ring-[#FAFAF7] object-cover"
            />
          </div>

          {/* Stars & Text */}
          <div className="flex items-center gap-1 text-[#E5A100]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#1B4D3E] hover:underline flex items-center gap-1"
          >
            <span>5.0 Star Rated on Google Maps</span>
          </a>
        </motion.div>
      </div>

      {/* Moving Hero Carousel */}
      <HeroCarousel />
    </section>
  );
};
