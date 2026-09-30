import React, { useState } from 'react';
import { FAQS, BUSINESS_INFO } from '../data/content';
import { Plus, Minus, PhoneCall, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white border-t border-[#E7E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28"
          >
            <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E] mb-2">
              <span>FREQUENT QUESTIONS</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-normal leading-tight text-[#191C1E]">
              Clear Answers Before Any Work Begins
            </h2>
            <p className="mt-4 text-base text-[#555C56] leading-relaxed">
              We believe in total transparency. From average dispatch arrival times in Midtown Atlanta to warranties and permits, here is what our customers ask most often.
            </p>

            <div className="mt-8 p-5 bg-[#FAFAF7] rounded-2xl border border-[#E1E1D7] text-xs text-[#555C56] space-y-3">
              <p className="font-semibold text-[#191C1E] text-sm flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#1B4D3E]" />
                <span>Need Urgent Plumbing Assistance?</span>
              </p>
              <p>
                Our Atlanta emergency dispatch line is monitored 24 hours a day, 7 days a week.
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="font-mono text-sm text-[#1B4D3E] font-bold hover:underline flex items-center gap-1.5"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <p className="text-[11px] text-[#8D928A] mt-1">443 Piedmont Ave NE, Atlanta, GA 30308</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Accordion Items with Spring Expansion */}
          <div className="lg:col-span-7 space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openId === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-[#E7E7DF] pb-4 transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full py-3 flex items-center justify-between text-left group focus-visible:outline-2 focus-visible:outline-[#1B4D3E] rounded-lg"
                  >
                    <span className="font-medium text-base sm:text-lg text-[#191C1E] group-hover:text-[#1B4D3E] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="w-8 h-8 rounded-full bg-[#FAFAF7] group-hover:bg-[#EBF2EC] flex items-center justify-center text-[#191C1E] shrink-0 transition-colors"
                    >
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-[#1B4D3E]" />
                      ) : (
                        <Plus className="w-4 h-4 text-[#8D928A]" />
                      )}
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-2 pb-3 pr-8">
                          <p className="text-sm sm:text-[15px] text-[#555C56] leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
