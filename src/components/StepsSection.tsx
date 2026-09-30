import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import plumbingTruck from '../assets/images/plumbing_service_truck_1790679283675.jpg';
import plumbingDrain from '../assets/images/plumbing_camera_drain_1790679258210.jpg';
import plumbingTankless from '../assets/images/plumbing_tankless_system_1790679245677.jpg';

interface StepsSectionProps {
  onOpenBooking: () => void;
}

const STEPS = [
  {
    step: '01',
    title: 'Call or Prepare a Service Request',
    desc: 'Call (678) 412-9962 to submit a service request. You can prepare your details online, then call to confirm scheduling and availability.',
    image: plumbingTruck,
  },
  {
    step: '02',
    title: 'Root-Cause Diagnosis & Upfront Price',
    desc: 'Our Georgia Master Plumber evaluates your system with acoustic tools or HD fiber-optic cameras. You receive a guaranteed flat-rate quote before any work starts—zero surprise fees.',
    image: plumbingDrain,
  },
  {
    step: '03',
    title: 'Master-Level Execution & Clean Guarantee',
    desc: 'We execute the repair using commercial-grade fittings, pressure-test for 100% leak-free integrity, clean the workspace spotlessly, and back every job with a full warranty.',
    image: plumbingTankless,
  }
];

export const StepsSection: React.FC<StepsSectionProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 sm:py-28 bg-white border-t border-[#E7E7DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="text-xs font-semibold uppercase tracking-widest text-[#1B4D3E] mb-2">
            <span>HOW WE WORK</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#191C1E]">
            Simple, Transparent Steps to Problem-Free Plumbing
          </h2>
          <p className="mt-3.5 text-base text-[#555C56] leading-relaxed">
            From the initial phone call to the final pressure test, our process is built on speed, clarity, and exceptional trade craftsmanship.
          </p>
        </motion.div>

        {/* 3 Step Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((s, index) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
              className="bg-[#FAFAF7] rounded-3xl p-6 border border-[#E7E7DF] flex flex-col justify-between hover:border-[#1B4D3E]/40 hover:shadow-lg transition-all duration-300 group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 rounded-2xl overflow-hidden mb-6 border border-[#E1E1D7]">
                  <img
                    src={s.image}
                    alt={s.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#191C1E]/80 backdrop-blur-md text-white font-mono text-xs font-bold px-3 py-1 rounded-full">
                    Step {s.step}
                  </div>
                </div>

                {/* Content */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#191C1E] leading-snug group-hover:text-[#1B4D3E] transition-colors">
                  {s.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#555C56] leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#E1E1D7] flex items-center justify-between">
                <button
                  onClick={onOpenBooking}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#191C1E] group-hover:text-[#1B4D3E] transition-colors focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
                >
                  <span>Prepare Service Request</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
