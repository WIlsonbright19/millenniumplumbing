import React, { useState } from 'react';
import { CheckCircle2, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface MembershipSectionProps {
  onOpenBooking: () => void;
}

export const MembershipSection: React.FC<MembershipSectionProps> = ({ onOpenBooking }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      id: 'residential-shield',
      name: 'Homeowner Shield',
      badge: 'Residential Protection',
      priceMonthly: 19,
      priceAnnual: 15,
      desc: 'Ideal for Atlanta homeowners seeking complete peace of mind, annual water heater care, and guaranteed emergency priority.',
      features: [
        'Annual 100-Point Whole-Home Plumbing Inspection',
        'Annual Water Heater Flush & Sediment Clear',
        '15% Member Discount on All Repairs & Fixtures',
        'Priority Emergency Scheduling Window',
        'Water Pressure & Expansion Tank Calibration',
        'Emergency Shutoff Valve Tagging & Mapping'
      ],
      popular: false
    },
    {
      id: 'commercial-premier',
      name: 'Commercial & Estate Premier',
      badge: 'Most Comprehensive',
      priceMonthly: 59,
      priceAnnual: 49,
      desc: 'Engineered for restaurants, property managers, and luxury residences needing continuous compliance, zero downtime, and dedicated support.',
      features: [
        'Semi-Annual Comprehensive Facility Plumbing Audit',
        'Annual State of Georgia Backflow Testing & City Filing',
        'Annual Fiber-Optic Sewer Camera Scoping',
        'Zero Weekend or After-Hours Emergency Surcharges',
        '20% Member Discount on All Hydro-Jetting & Repiping',
        'Direct 24/7 Priority Emergency Dispatch Hotline',
        'Water Quality & Scale Hardness Lab Analysis'
      ],
      popular: true
    }
  ];

  return (
    <section id="membership" className="py-20 sm:py-28 bg-white border-t border-[#E7E7DF]">
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
            <span>ANNUAL PROTECTION</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal leading-tight text-[#191C1E]">
            Millennium Shield Maintenance Plans
          </h2>
          <p className="mt-3.5 text-base text-[#555C56]">
            Prevent catastrophic water leaks, double the operating lifespan of your water heater, and enjoy priority dispatch with exclusive member savings.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center gap-1.5 p-1 bg-[#FAFAF7] rounded-xl border border-[#E1E1D7]">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all focus-visible:outline-2 focus-visible:outline-[#1B4D3E] ${
                billingCycle === 'monthly'
                  ? 'bg-[#191C1E] text-white shadow-xs'
                  : 'text-[#555C56] hover:text-[#191C1E]'
              }`}
            >
              Monthly Billing
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 text-xs font-semibold rounded-lg transition-all flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1B4D3E] ${
                billingCycle === 'annual'
                  ? 'bg-[#191C1E] text-white shadow-xs'
                  : 'text-[#555C56] hover:text-[#191C1E]'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-[#EBF2EC] text-[#1B4D3E] px-1.5 py-0.5 rounded font-mono font-bold">
                Save 20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Plan 1: Homeowner Shield */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
            className="lg:col-span-5 bg-[#FAFAF7] rounded-3xl p-8 border border-[#E1E1D7] flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#1B4D3E]">
                  {plans[0].badge}
                </span>
              </div>
              <h3 className="font-serif text-2xl text-[#191C1E] font-medium">
                {plans[0].name}
              </h3>
              <p className="mt-2 text-xs text-[#555C56] leading-relaxed">
                {plans[0].desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billingCycle}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="font-serif text-4xl text-[#191C1E] font-normal tabular-nums"
                  >
                    ${billingCycle === 'annual' ? plans[0].priceAnnual : plans[0].priceMonthly}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-[#8D928A]">/ month</span>
                {billingCycle === 'annual' && (
                  <span className="text-[11px] text-[#1B4D3E] font-medium ml-2">billed annually</span>
                )}
              </div>

              <div className="mt-8 space-y-3 pt-6 border-t border-[#E1E1D7]">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-[#191C1E]">
                  Included In Homeowner Shield:
                </h4>
                {plans[0].features.map((f, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-[#464B48]">
                    <CheckCircle2 className="w-4 h-4 text-[#1B4D3E] shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E1E1D7]">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                type="button"
                className="w-full py-3 bg-white hover:bg-neutral-100 text-[#191C1E] border border-[#D5D5CD] rounded-full text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#1B4D3E]"
              >
                <span>Enroll in Homeowner Shield</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Plan 2: Commercial & Estate Premier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -6, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } }}
            className="lg:col-span-7 bg-[#191C1E] text-white rounded-3xl p-8 sm:p-10 border border-[#2D312E] flex flex-col justify-between relative shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#8EB897] flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5" />
                  <span>{plans[1].badge}</span>
                </span>
                <span className="text-[11px] font-mono bg-white/10 text-white px-2.5 py-0.5 rounded-full border border-white/15">
                  Commercial & Multi-Property
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal">
                {plans[1].name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-xl">
                {plans[1].desc}
              </p>

              <div className="mt-6 flex items-baseline gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billingCycle}
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="font-serif text-4xl sm:text-5xl text-white font-normal tabular-nums"
                  >
                    ${billingCycle === 'annual' ? plans[1].priceAnnual : plans[1].priceMonthly}
                  </motion.span>
                </AnimatePresence>
                <span className="text-xs text-neutral-400">/ month</span>
                {billingCycle === 'annual' && (
                  <span className="text-xs text-[#8EB897] font-medium ml-2">billed annually</span>
                )}
              </div>

              {/* Comprehensive Features Included */}
              <div className="mt-8 space-y-3 pt-6 border-t border-white/15">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-200">
                  Comprehensive Plumbing Protection Included:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {plans[1].features.map((f, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <CheckCircle2 className="w-4 h-4 text-[#8EB897] shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#8EB897]" />
                <span>100% Tax-Deductible Business Expense · Cancel Anytime</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.025, backgroundColor: '#A3CAA9' }}
                whileTap={{ scale: 0.98 }}
                onClick={onOpenBooking}
                type="button"
                className="w-full sm:w-auto px-7 py-3 bg-[#8EB897] text-[#191C1E] rounded-full text-xs sm:text-sm font-semibold transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <span>Join Millennium Premier</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
