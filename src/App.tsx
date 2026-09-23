/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { JourneySection } from './components/JourneySection';
import { ProductsSection } from './components/ProductsSection';
import { ProductDetailModal } from './components/ProductDetailModal';
import { CapabilitiesSection } from './components/CapabilitiesSection';
import { ClientsSection } from './components/ClientsSection';
import { AboutSection } from './components/AboutSection';
import { ValuesSection } from './components/ValuesSection';
import { FinalCta } from './components/FinalCta';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { ProductItem } from './types';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [activeModalProduct, setActiveModalProduct] = useState<ProductItem | null>(null);
  const [enquiryProduct, setEnquiryProduct] = useState<string>('Heavyweight T-Shirts');

  const scrollToContact = (productName?: string) => {
    if (productName) {
      setEnquiryProduct(productName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToJourney = () => {
    const journeyElem = document.getElementById('journey');
    if (journeyElem) {
      journeyElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className={`min-h-screen font-sans selection:bg-[#D4AF37]/30 selection:text-[#F7F5F0] transition-colors duration-500 ${
        darkMode ? 'bg-[#0c0c0d] text-[#F7F5F0]' : 'bg-[#FAF8F5] text-[#121213]'
      }`}
    >
      {/* Subtle Horizontal Scroll Progress Bar */}
      <ScrollProgressBar darkMode={darkMode} />

      {/* Fixed Sticky Top Navigation Bar */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        onOpenEnquiry={() => scrollToContact()}
      />

      {/* Full-Screen Hero Section */}
      <Hero
        darkMode={darkMode}
        onStartConversation={() => scrollToContact()}
        onExploreProcess={scrollToJourney}
      />

      {/* Scroll Story: The Journey (Stages 01 – 06) */}
      <JourneySection darkMode={darkMode} />

      {/* What We Produce: Knitwear & Product Grid */}
      <ProductsSection
        darkMode={darkMode}
        onSelectProduct={(product) => setActiveModalProduct(product)}
      />

      {/* Capabilities & Factory (8-item grid + Statistics Strip) */}
      <CapabilitiesSection darkMode={darkMode} />

      {/* Selected Clients & Brands */}
      <ClientsSection darkMode={darkMode} />

      {/* About Sowndarya Exports */}
      <AboutSection darkMode={darkMode} />

      {/* Company Values (5 Columns) */}
      <ValuesSection darkMode={darkMode} />

      {/* Final Editorial Call to Action */}
      <FinalCta
        darkMode={darkMode}
        onGetInTouch={() => scrollToContact()}
        onSendEnquiry={() => scrollToContact()}
      />

      {/* Contact & Enquiry Form */}
      <ContactSection
        darkMode={darkMode}
        preselectedProduct={enquiryProduct}
      />

      {/* Warm Cream / Editorial Contrast Footer */}
      <Footer darkMode={darkMode} />

      {/* Product Detail & Tech Spec Inspection Modal */}
      <ProductDetailModal
        product={activeModalProduct}
        darkMode={darkMode}
        onClose={() => setActiveModalProduct(null)}
        onRequestSample={(productName) => {
          scrollToContact(productName);
        }}
      />
    </div>
  );
}
