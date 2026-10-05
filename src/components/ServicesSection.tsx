import React, { useState } from 'react';
import { SERVICES, ServiceItem, BUSINESS_INFO } from '../data/content';
import { ArrowUpRight, Flame, Wrench, Eye, ShieldCheck, Sparkles, AlertCircle, CheckCircle2, PhoneCall } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onOpenBooking: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'emergency':
        return <AlertCircle className="w-5 h-5 text-[#DC2626]" />;
      case 'water-heaters':
        return <Flame className="w-5 h-5 text-[#E65100]" />;
      case 'drain-sewer':
        return <Eye className="w-5 h-5 text-[#1B4D3E]" />;
      case 'repiping':
        return <Wrench className="w-5 h-5 text-[#1B4D3E]" />;
      case 'fixtures-install':
        return <Sparkles className="w-5 h-5 text-[#1B4D3E]" />;
      case 'commercial':
        return <ShieldCheck className="w-5 h-5 text-[#1B4D3E]" />;
      default:
        return <Wrench className="w-5 h-5 text-[#1B4D3E]" />;
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAFAF7] border-t border-[#E7E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E] mb-3">
            <span>OUR SPECIALTIES</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-tight font-normal text-[#191C1E] text-balance">
            Complete Residential & Commercial Plumbing Engineered for Atlanta Homes and Businesses.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#555C56] leading-relaxed">
            Every service is handled by Georgia Master Plumbers using commercial-grade materials,
            non-destructive diagnostic equipment, and transparent flat-rate pricing.
          </p>
        </motion.div>

        {/* Services Grid (6 cards) */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-white rounded-3xl p-7 border border-[#E7E7DF] flex flex-col justify-between hover:border-[#1B4D3E]/40 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    service.id === 'emergency' ? 'bg-red-50' : 'bg-[#F0F5F1]'
                  }`}>
                    {getServiceIcon(service.id)}
                  </div>
                  <span className="text-xs font-mono tabular-nums text-[#8D928A]">
                    {service.number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#191C1E] group-hover:text-[#1B4D3E] transition-colors leading-snug">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-[#555C56] leading-relaxed line-clamp-3">
                  {service.shortDesc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#F2F2EE] flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(selectedService?.id === service.id ? null : service)}
                  type="button"
                  aria-expanded={selectedService?.id === service.id}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191C1E] group-hover:text-[#1B4D3E] transition-colors focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
                >
                  <span>View Details & Pricing</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
                <span className="text-[11px] text-[#8D928A]">{service.duration}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedService && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E7E7DF]" aria-labelledby="service-title">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#1B4D3E] mb-2">
                  <span>Service {selectedService.number}</span>
                  <span aria-hidden="true">·</span>
                  <span>Atlanta, GA</span>
                </div>
                <h3 id="service-title" className="font-serif text-2xl sm:text-3xl text-[#191C1E] font-medium leading-tight">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                type="button"
                className="self-start text-xs font-semibold text-[#555C56] underline underline-offset-4 hover:text-[#1B4D3E]"
              >
                Close details
              </button>
            </div>

            <p className="mt-4 text-sm sm:text-base text-[#464B48] leading-relaxed">
              {selectedService.fullDesc}
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 border-t border-[#E7E7DF] pt-6">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191C1E] mb-3">
                  Service highlights
                </h4>
                <ul className="space-y-2">
                  {selectedService.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#464B48]">
                      <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191C1E] mb-3">
                  What you receive
                </h4>
                <ul className="space-y-2">
                  {selectedService.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#464B48]">
                      <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                      <span>{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E7E7DF] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#555C56]">
                Availability: <strong className="text-[#191C1E]">{selectedService.duration}</strong>
              </span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex-1 sm:flex-none px-4 py-2.5 bg-[#EBF2EC] hover:bg-[#DCE9DF] text-[#1B4D3E] text-xs font-semibold rounded-full transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="flex-1 sm:flex-none px-6 py-2.5 bg-[#191C1E] hover:bg-[#1B4D3E] text-white text-xs sm:text-sm font-semibold rounded-full transition-colors"
                >
                  Prepare a service request
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
