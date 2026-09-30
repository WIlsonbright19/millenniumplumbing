import React from 'react';
import { TESTIMONIALS, BUSINESS_INFO } from '../data/content';
import { Star, ShieldCheck, Quote, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#FAFAF7] border-t border-[#E7E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E] mb-2">
            <span>CLIENT REVIEWS</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#191C1E]">
            Rated 5.0 Stars by Atlanta Homeowners & Businesses
          </h2>
          <p className="mt-3.5 text-base text-[#555C56]">
            Real feedback from neighbors in Midtown, Old Fourth Ward, Inman Park, and Buckhead who rely on Millennium Plumbing.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-3xl p-7 border border-[#E7E7DF] flex flex-col justify-between shadow-2xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#E5A100]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-[#1B4D3E] bg-[#EBF2EC] px-2 py-0.5 rounded-full font-medium">
                    Google Review
                  </span>
                </div>

                <Quote className="w-6 h-6 text-[#1B4D3E]/30 mb-3" />

                <p className="text-sm sm:text-[15px] text-[#2C302D] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2F2EE] flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#191C1E]">
                    {item.author}
                  </h4>
                </div>
                {item.verified && (
                  <div className="flex items-center gap-1 text-[11px] font-medium text-[#1B4D3E]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link to Google Maps Review */}
        <div className="mt-10 text-center">
          <a
            href={BUSINESS_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#191C1E] hover:text-[#1B4D3E] transition-colors"
          >
            <span>Read all customer ratings on Google Maps</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
