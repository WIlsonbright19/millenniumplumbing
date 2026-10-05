import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, PhoneCall } from 'lucide-react';
import { BUSINESS_INFO } from '../data/content';

const getDateAfterDays = (days: number) => {
  const date = new Date();
  date.setDate(date.getDate() + days);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const serviceOptions = [
  { id: 'emergency', label: 'Active Pipe Burst / Flood' },
  { id: 'water-heater', label: 'Tankless / Tank Water Heater' },
  { id: 'drain', label: 'Drain Clog / Sewer Camera' },
  { id: 'leak-detect', label: 'Slab Leak / Low Pressure' },
  { id: 'fixtures', label: 'Faucets, Toilets & Disposals' },
  { id: 'commercial', label: 'Backflow Testing / Inspection' },
];

const inputClassName =
  'min-h-12 w-full rounded-lg border border-[#D5D5CD] bg-white px-3.5 py-3 text-base text-[#191C1E] transition-colors placeholder:text-[#737872] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1B4D3E]/25 focus-visible:border-[#1B4D3E] sm:text-sm';

export const BookingSection: React.FC = () => {
  const [requestSent, setRequestSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewRequest = () => {
    setRequestSent(false);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => window.setTimeout(resolve, 350));
    setRequestSent(true);
    setIsSubmitting(false);
  };

  return (
    <section id="booking-request" className="scroll-mt-24 border-y border-[#E7E7DF] bg-white py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-16 lg:px-8">
        <div className="lg:col-span-4 lg:pt-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1B4D3E]">
            Service request
          </p>
          <h2 id="booking-request-title" className="mt-4 font-serif text-3xl font-normal leading-tight text-[#191C1E] sm:text-4xl">
            {requestSent ? 'Thanks for reaching out.' : 'Let’s get it taken care of.'}
          </h2>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-[#555C56]">
            {requestSent
              ? 'Thanks for trying the service request form. This demo does not send or save your details.'
              : 'Tell us a little about the job and we’ll be in touch to confirm a time that works.'}
          </p>

          {!requestSent && (
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#1B4D3E] transition-colors hover:text-[#13392E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4D3E]"
            >
              <PhoneCall className="h-4 w-4" aria-hidden="true" />
              Need urgent help? Call {BUSINESS_INFO.phone}
            </a>
          )}
        </div>

        <div className="lg:col-span-8">
          {requestSent ? (
            <div className="flex h-full min-h-64 flex-col items-start justify-center border-t border-[#E7E7DF] py-8 sm:flex-row sm:items-center sm:gap-5 lg:border-l lg:border-t-0 lg:py-0 lg:pl-10" role="status" aria-live="polite">
              <CheckCircle2 className="h-10 w-10 shrink-0 text-[#1B4D3E]" aria-hidden="true" />
              <div className="mt-4 sm:mt-0">
                <p className="text-base font-medium text-[#191C1E]">Your request has been submitted.</p>
                <p className="mt-1 text-sm leading-relaxed text-[#555C56]">
                  Thanks for getting in touch. We’ll follow up to confirm your preferred time.
                </p>
                <p className="mt-3 text-xs leading-relaxed text-[#737872]">
                  Demo confirmation: requests aren’t sent or saved yet.
                </p>
                <button
                  type="button"
                  onClick={handleNewRequest}
                  className="mt-5 min-h-11 text-sm font-semibold text-[#1B4D3E] underline underline-offset-4 hover:text-[#13392E] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1B4D3E]"
                >
                  Send another request
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 border-t border-[#E7E7DF] pt-6 lg:border-l lg:border-t-0 lg:pt-0 lg:pl-10"
            >
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="service-name" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Your name *
                  </label>
                  <input id="service-name" name="name" type="text" required autoComplete="name" placeholder="Full name" className={inputClassName} />
                </div>
                <div>
                  <label htmlFor="service-phone" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Phone number *
                  </label>
                  <input id="service-phone" name="phone" type="tel" required autoComplete="tel" placeholder="(678) 555-0199" className={inputClassName} />
                </div>
                <div>
                  <label htmlFor="service-email" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Email address *
                  </label>
                  <input id="service-email" name="email" type="email" required autoComplete="email" placeholder="name@example.com" className={inputClassName} />
                </div>
                <div>
                  <label htmlFor="property-type" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Property type *
                  </label>
                  <select id="property-type" name="property-type" required defaultValue="Residential" className={inputClassName}>
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service-address" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                  Service address *
                </label>
                <input
                  id="service-address"
                  name="address"
                  type="text"
                  required
                  autoComplete="street-address"
                  placeholder="Street address, city, ZIP code"
                  className={inputClassName}
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="service-type" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Service needed *
                  </label>
                  <select id="service-type" name="service" required defaultValue="" className={inputClassName}>
                    <option value="" disabled>Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service.id} value={service.label}>{service.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="service-urgency" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Timing *
                  </label>
                  <select id="service-urgency" name="urgency" required defaultValue="Today" className={inputClassName}>
                    <option>Immediate emergency</option>
                    <option>Today</option>
                    <option>Flexible</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="preferred-service-date" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Preferred date *
                  </label>
                  <input
                    id="preferred-service-date"
                    name="service-date"
                    type="date"
                    min={getDateAfterDays(0)}
                    required
                    defaultValue={getDateAfterDays(1)}
                    className={inputClassName}
                  />
                </div>
                <div>
                  <label htmlFor="preferred-arrival-window" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                    Arrival window *
                  </label>
                  <select id="preferred-arrival-window" name="arrival-time" required defaultValue="" className={inputClassName}>
                    <option value="" disabled>Select a time</option>
                    <option>8:00 AM–10:00 AM</option>
                    <option>10:00 AM–12:00 PM</option>
                    <option>12:00 PM–2:00 PM</option>
                    <option>2:00 PM–4:00 PM</option>
                    <option>4:00 PM–6:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="service-notes" className="mb-1.5 block text-sm font-medium text-[#191C1E]">
                  Additional details *
                </label>
                <textarea
                  id="service-notes"
                  name="notes"
                  rows={2}
                  required
                  placeholder="Describe the issue, or enter “None” if there are no additional details."
                  className={inputClassName}
                />
              </div>

              <div className="flex flex-col items-start gap-3 border-t border-[#E7E7DF] pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-relaxed text-[#555C56]">
                  We’ll contact you to confirm availability.
                </p>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#1B4D3E] px-6 text-sm font-semibold text-white transition-colors hover:bg-[#13392E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1B4D3E] sm:w-auto"
                >
                  {isSubmitting ? 'Submitting…' : 'Send request'}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
