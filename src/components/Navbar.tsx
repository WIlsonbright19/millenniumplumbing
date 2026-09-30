import React, { useState, useEffect } from 'react';
import {
  PhoneCall,
  Calendar,
  X,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'motion/react';
import { BUSINESS_INFO } from '../data/content';

interface NavbarProps {
  onOpenBooking: () => void;
  onOpenQuiz?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking, onOpenQuiz }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scroll and support ESC key when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Services', href: '#services' },
    { label: 'Service Areas', href: '#approach' },
  ];

  const menuItems = [
    { number: '01', label: 'Overview', href: '#overview' },
    { number: '02', label: 'Services', href: '#services' },
    { number: '03', label: 'Service Areas', href: '#approach' },
    { number: '04', label: 'Client Reviews', href: '#reviews' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAFAF7]/95 backdrop-blur-md border-b border-[#E7E7E0] py-2.5 sm:py-3 shadow-xs'
            : 'bg-[#FAFAF7]/80 backdrop-blur-xs py-3.5 sm:py-5 border-b border-transparent sm:border-none'
        }`}
      >
        {/* Precision Scroll Progress Line at top */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#1B4D3E] via-[#2F6D57] to-[#1B4D3E] origin-left"
          style={{ scaleX }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Wordmark */}
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 group focus-visible:outline-2 focus-visible:outline-[#1B4D3E] rounded-sm"
            >
              <div className="w-8 h-8 rounded-lg bg-[#1B4D3E] text-white flex items-center justify-center font-bold text-sm tracking-wider shadow-xs relative overflow-hidden group-hover:bg-[#13392E] transition-colors">
                <span>MP</span>
                <div className="absolute top-0 right-0 w-2 h-2 bg-[#D19A3E] rounded-bl-sm" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-serif text-lg sm:text-2xl tracking-tight text-[#191C1E] font-medium group-hover:text-[#1B4D3E] transition-colors leading-none">
                    Millennium
                  </span>
                  <span className="font-serif text-lg sm:text-2xl italic font-light text-[#1B4D3E] leading-none">
                    Plumbing
                  </span>
                </div>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7 text-[13.5px] font-medium text-[#464B48]">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="hover:text-[#191C1E] transition-colors relative py-1 focus-visible:outline-2 focus-visible:outline-[#1B4D3E] rounded-sm group"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#1B4D3E] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              {/* Direct Emergency Dispatch Phone */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                aria-label="Call (678) 412-9962"
                className="inline-flex items-center justify-center text-xs font-semibold text-[#1B4D3E] bg-[#EBF2EC] hover:bg-[#DCE9DF] p-2.5 rounded-full border border-[#D0DFD3] transition-colors"
                title="Call 24/7 Dispatch"
              >
                <PhoneCall className="w-4 h-4" />
              </a>

              {/* Prepare a service request */}
              <motion.button
                whileHover={{ scale: 1.025, backgroundColor: '#284B30' }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                type="button"
                className="inline-flex items-center gap-1.5 bg-[#191C1E] text-[#FAFAF7] text-[13px] font-medium px-4 py-2 rounded-full transition-shadow duration-200 shadow-xs hover:shadow-md whitespace-nowrap focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Prepare Service Request</span>
              </motion.button>
            </div>

            {/* Minimalist Animated Hamburger Button */}
            <div className="flex items-center gap-2 xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                type="button"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
                className={`group h-10 px-3.5 rounded-full flex items-center gap-2.5 border transition-all duration-200 shadow-2xs active:scale-95 focus-visible:outline-2 focus-visible:outline-[#1B4D3E] ${
                  mobileMenuOpen
                    ? 'bg-[#191C1E] text-white border-[#191C1E]'
                    : 'bg-white/90 backdrop-blur-md text-[#191C1E] border-[#DCDCD4] hover:border-[#1B4D3E]/40 hover:bg-[#F8F8F5]'
                }`}
              >
                <span className="text-[11px] font-mono uppercase tracking-wider font-medium">
                  {mobileMenuOpen ? 'Close' : 'Menu'}
                </span>

                {/* Minimalist 2-line Morph */}
                <div className="w-4 h-3 relative flex flex-col justify-between items-center py-0.5" aria-hidden="true">
                  <span
                    className={`block h-[1.5px] w-4 rounded-full transition-all duration-300 origin-center ${
                      mobileMenuOpen
                        ? 'rotate-45 translate-y-[4.5px] bg-white'
                        : 'bg-[#191C1E] group-hover:bg-[#1B4D3E]'
                    }`}
                  />
                  <span
                    className={`block h-[1.5px] w-4 rounded-full transition-all duration-300 origin-center ${
                      mobileMenuOpen
                        ? '-rotate-45 -translate-y-[4.5px] bg-white'
                        : 'bg-[#191C1E] group-hover:bg-[#1B4D3E]'
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Minimalistic Navigation Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden flex justify-end">
            {/* Soft Ambient Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-[#121513]/40 backdrop-blur-xs"
              aria-hidden="true"
            />

            {/* Minimalist Slide Drawer */}
            <motion.aside
              aria-label="Navigation drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="relative w-full max-w-sm sm:max-w-md h-full bg-[#FAFAF7] border-l border-[#E5E5DD] shadow-2xl flex flex-col justify-between z-10 overflow-hidden"
            >
              {/* Minimal Header */}
              <div className="px-6 sm:px-8 pt-7 pb-4 flex items-center justify-between border-b border-[#EBEBE3]">
                <div className="flex items-center gap-2">
                  <span className="font-serif text-lg font-medium text-[#191C1E]">
                    Millennium
                  </span>
                  <span className="font-serif text-lg italic font-light text-[#1B4D3E]">
                    Plumbing
                  </span>
                </div>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  type="button"
                  aria-label="Close menu"
                  className="w-8 h-8 rounded-full text-[#636A64] hover:text-[#191C1E] hover:bg-[#EFEFEA] active:scale-95 transition-all flex items-center justify-center focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Minimalist Typographic Navigation Links */}
              <div className="flex-1 overflow-y-auto px-6 sm:px-8 py-8 flex flex-col justify-center">
                <nav className="space-y-6">
                  {menuItems.map((item, idx) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * idx, duration: 0.25 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.href)}
                        type="button"
                        className="group w-full text-left flex items-baseline gap-4 py-1 transition-all focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
                      >
                        <span className="text-[11px] font-mono text-[#8C938E] tracking-wider group-hover:text-[#1B4D3E] transition-colors">
                          {item.number}
                        </span>
                        <span className="font-serif text-3xl sm:text-4xl text-[#191C1E] font-normal tracking-tight group-hover:text-[#1B4D3E] group-hover:translate-x-1.5 transition-all">
                          {item.label}
                        </span>
                      </button>
                    </motion.div>
                  ))}
                </nav>

                {/* Minimalist Secondary Tool Trigger */}
                {onOpenQuiz && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                    className="mt-10 pt-6 border-t border-[#E8E8E0]"
                  >
                    <button
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenQuiz();
                      }}
                      type="button"
                      className="group inline-flex items-center gap-2 text-xs font-medium text-[#4D5550] hover:text-[#1B4D3E] transition-colors"
                    >
                      <span className="font-mono text-[10px] tracking-wider uppercase text-[#88908A]">
                        Diagnostic
                      </span>
                      <span>Plumbing Symptom Checker</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}
              </div>

              {/* Minimalist Footer Area */}
              <div className="px-6 sm:px-8 py-6 border-t border-[#E8E8E0] bg-[#F5F5F0]/60 space-y-4">
                {/* Direct Phone Dispatch */}
                <div>
                  <div className="flex items-center justify-between text-[10px] font-mono tracking-wider uppercase text-[#737B75] mb-1">
                    <span>Emergency Dispatch</span>
                    <span className="text-emerald-700 font-semibold">24/7 Active</span>
                  </div>
                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="block font-serif text-2xl font-medium text-[#191C1E] hover:text-[#1B4D3E] transition-colors tracking-tight"
                  >
                    {BUSINESS_INFO.phone}
                  </a>
                </div>

                {/* Action button */}
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  type="button"
                  className="w-full py-3 px-4 bg-[#191C1E] hover:bg-[#2A312D] text-[#FAFAF7] rounded-lg text-xs font-medium tracking-wide transition-colors flex items-center justify-center gap-2 shadow-2xs active:scale-[0.99]"
                >
                  <span>Prepare Service Request</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {/* Minimal Meta */}
                <div className="flex items-center justify-between text-[11px] text-[#7A827B] pt-1">
                  <span>Atlanta · Lic #MP20914</span>
                  <a
                    href={BUSINESS_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#1B4D3E] transition-colors inline-flex items-center gap-0.5"
                  >
                    <span>Google Maps (5.0 ★)</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </motion.aside>
          </div>
        )}
      </AnimatePresence>

      {/* Floating Mobile Bottom Action Dock (Visible only on mobile devices) */}
      <aside
        aria-label="Mobile emergency contact and scheduling dock"
        className={`fixed bottom-0 left-0 right-0 z-30 sm:hidden bg-white/95 backdrop-blur-md border-t border-[#E4E4DC] px-4 py-2.5 shadow-lg transition-transform duration-300 ${
          mobileMenuOpen ? 'translate-y-full opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'
        }`}
      >
        <div className="flex items-center gap-2 max-w-md mx-auto">
          {/* Emergency Call Button */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="flex-1 py-2.5 px-3 bg-[#1B4D3E] active:bg-[#13392E] text-white rounded-xl font-semibold text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
          >
            <PhoneCall className="w-3.5 h-3.5 animate-pulse" />
            <span>(678) 412-9962</span>
          </a>

          {/* Quick service request button */}
          <button
            onClick={onOpenBooking}
            type="button"
            className="flex-1 py-2.5 px-3 bg-[#191C1E] active:bg-neutral-800 text-white rounded-xl font-medium text-xs flex items-center justify-center gap-1.5 shadow-sm active:scale-98"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Prepare Request</span>
          </button>
        </div>
      </aside>
    </>
  );
};
