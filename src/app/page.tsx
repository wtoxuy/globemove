'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import ServicesSection from '@/app/components/ServicesSection';
import AdvantagesSection from '@/app/components/AdvantagesSection';
import ProcessSection from '@/app/components/ProcessSection';
import SpecializationSection from '@/app/components/SpecializationSection';
import FaqSection from '@/app/components/FaqSection';
import ContactSection from '@/app/components/ContactSection';

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const revealElements = document.querySelectorAll('.reveal');
    revealElements?.forEach((el) => observer?.observe(el));

    return () => observer?.disconnect();
  }, []);

  return (
    <main className="relative overflow-x-hidden">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AdvantagesSection />
      <ProcessSection />
      <SpecializationSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}