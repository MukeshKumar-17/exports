import React from 'react';
import { ABOUT_CARDS, COMPANY_INFO } from '../data/companyData';
import { Compass, Target, CheckCircle, Globe } from 'lucide-react';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  motion,
} from './EditorialMotion';

interface AboutSectionProps {
  darkMode: boolean;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ darkMode }) => {
  const getCardIcon = (index: number) => {
    const iconClass = 'w-5 h-5 text-[#D4AF37] stroke-[1.4]';
    switch (index) {
      case 0:
        return <Target className={iconClass} />;
      case 1:
        return <Compass className={iconClass} />;
      case 2:
        return <CheckCircle className={iconClass} />;
      case 3:
        return <Globe className={iconClass} />;
      default:
        return <Target className={iconClass} />;
    }
  };

  return (
    <section
      id="about"
      className={`w-full py-24 sm:py-32 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#0c0c0d] text-[#F7F5F0] border-white/10' : 'bg-[#FAF8F5] text-[#121213] border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeaderMotion className={`flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b mb-16 ${
          darkMode ? 'border-[#D4AF37]/20' : 'border-[#B8972E]/30'
        }`}>
          <div>
            <motion.span variants={editorialEyebrow} className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37] block mb-3">
              ABOUT SOWNDARYA EXPORTS
            </motion.span>
            <motion.h2 variants={editorialHeadline} className={`text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.1] ${
              darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
            }`}>
              Built for consistency. <br />
              <span className="text-[#D4AF37] italic font-serif">Driven by craftsmanship.</span>
            </motion.h2>
          </div>

          <motion.p variants={editorialSubtext} className={`text-sm sm:text-base max-w-md font-light leading-relaxed ${
            darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
          }`}>
            An integrated apparel manufacturing partner dedicated to brands, retailers, and private labels that refuse to compromise on build quality or delivery reliability.
          </motion.p>
        </SectionHeaderMotion>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Comprehensive Story & Anchor Strip */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`space-y-5 text-base sm:text-lg font-light leading-relaxed ${
              darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
            }`}>
              <p>
                Sowndarya Exports operates as an integrated apparel manufacturing partner dedicated to brands, retailers, and private labels that refuse to compromise on build quality or delivery reliability.
              </p>
              <p>
                Rooted in Tirupur — the premier knitwear and textile corridor of southern India — our infrastructure connects raw cotton fibre procurement directly to high-speed circular knitting, precision garment dyeing, automated CAD pattern grading, and rigorous multi-point quality audits.
              </p>
              <p>
                We believe exceptional apparel is not accidental; it is the natural consequence of disciplined sourcing, tightly managed stitch tensions, calibrated compaction, and unambiguous customer accountability.
              </p>
            </div>

            {/* Geographical Anchor Strip */}
            <div className={`pt-6 border-t flex items-center justify-between text-xs font-mono ${
              darkMode ? 'border-white/10 text-[#9E9B94]' : 'border-black/10 text-[#66645E]'
            }`}>
              <div>
                <span className="block text-[#D4AF37] uppercase tracking-wider text-[10px] mb-0.5">
                  HEADQUARTERS
                </span>
                <span>Tirupur, Tamil Nadu, India</span>
              </div>
              <div className="text-right">
                <span className="block text-[#D4AF37] uppercase tracking-wider text-[10px] mb-0.5">
                  COMMERCIAL FOCUS
                </span>
                <span>Export Apparel OEM / ODM</span>
              </div>
            </div>
          </div>

          {/* Right Column: Four Small Premium Information Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ABOUT_CARDS.map((card, index) => (
              <div
                key={card.tag}
                className={`p-8 border transition-colors flex flex-col justify-between ${
                  darkMode
                    ? 'bg-[#121214] border-white/10 hover:border-[#D4AF37]/40'
                    : 'bg-white border-black/10 hover:border-[#B8972E]/50 shadow-xs'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#D4AF37] font-semibold">
                      {card.tag}
                    </span>
                    <div className={`p-2 rounded-xs border ${
                      darkMode ? 'bg-white/[0.03] border-white/5' : 'bg-black/[0.03] border-black/5'
                    }`}>
                      {getCardIcon(index)}
                    </div>
                  </div>

                  <h3 className={`text-lg font-light tracking-tight mb-3 ${
                    darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
                  }`}>
                    {card.title}
                  </h3>

                  <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                    darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                  }`}>
                    {card.body}
                  </p>
                </div>

                <div className={`pt-6 mt-6 border-t ${darkMode ? 'border-white/5' : 'border-black/5'}`}>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${
                    darkMode ? 'text-[#9E9B94]/60' : 'text-[#66645E]/60'
                  }`}>
                    CORE PRINCIPLE
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
