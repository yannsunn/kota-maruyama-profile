'use client';

import React from 'react';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import BusinessSection from '@/components/BusinessSection';
import AdvisorySection from '@/components/AdvisorySection';
import GallerySection from '@/components/GallerySection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <BusinessSection />
      <AdvisorySection />
      <GallerySection />
      <AchievementsSection />
      <ContactSection />
      <MapSection />
      <Footer />
    </div>
  );
}