/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SchedulerSection } from './components/SchedulerSection';
import { MarqueeTicker } from './components/MarqueeTicker';
import { ExpertsSection } from './components/ExpertsSection';
import { StepsSection } from './components/StepsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { MembershipSection } from './components/MembershipSection';
import { ArticlesSection } from './components/ArticlesSection';
import { FaqSection } from './components/FaqSection';
import { CtaBanner } from './components/CtaBanner';
import { Footer } from './components/Footer';
import { BookingSection } from './components/BookingSection';
import { HealthQuizSection } from './components/HealthQuizSection';

export default function App() {
  const handleOpenBooking = () => {
    const bookingSection = document.getElementById('booking-request');
    if (bookingSection) {
      bookingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenQuiz = () => {
    const quizSection = document.getElementById('symptom-checker');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleExploreServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFAF7] text-[#191C1E] selection:bg-[#E8EDE7] selection:text-[#1F3323]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenBooking={handleOpenBooking}
        onOpenQuiz={handleOpenQuiz}
      />

      {/* Main Content Sections */}
      <main id="main-content" className="flex-grow">
        {/* 1. Hero Section with Carousel Cards & Social Proof */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />

        {/* 2. Core Capabilities & Services Grid */}
        <ServicesSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 3. About Millennium Plumbing & Service Requests */}
        <SchedulerSection
          onOpenBooking={handleOpenBooking}
        />

        <BookingSection />

        <HealthQuizSection onBookRecommended={handleOpenBooking} />

        {/* 4. Infinite Smooth Marquee Ticker with Photographic Cutouts */}
        <MarqueeTicker />

        {/* 5. Meet Our Clinical Experts & Philosophy */}
        <ExpertsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 6. Simple Steps to Better Health (3-Step Pathway) */}
        <StepsSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 7. Clinical Testimonials & Verified Patient Outcomes */}
        <TestimonialsSection />

        {/* 8. Membership Tiers & Transparent Concierge Pricing */}
        <MembershipSection
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 9. Clinical Insights & Research Publications */}
        <ArticlesSection />

        {/* 10. Everything You Need to Know Upfront (FAQ Accordion) */}
        <FaqSection />

        {/* 11. Pre-Footer Get Started CTA Banner */}
        <CtaBanner
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={handleExploreServices}
        />
      </main>

      {/* Comprehensive Editorial Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
      />

    </div>
  );
}
