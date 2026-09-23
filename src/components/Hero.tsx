import React from 'react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HeroFactoryVisual } from './VisualArtifacts';
import { COMPANY_INFO } from '../data/companyData';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  motion,
} from './EditorialMotion';

interface HeroProps {
  darkMode: boolean;
  onStartConversation: () => void;
  onExploreProcess: () => void;
}

export const Hero: React.FC<HeroProps> = ({ darkMode, onStartConversation, onExploreProcess }) => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#0c0c0d]">
      {/* Background Cinematic Factory Visual Artwork */}
      <HeroFactoryVisual />

      {/* Hero Content Container */}
      <SectionHeaderMotion className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 my-auto py-12 lg:py-16">
        {/* Eyebrow Label */}
        <motion.div variants={editorialEyebrow} className="inline-flex items-center gap-3 mb-8">
          <span className="w-8 h-[1px] bg-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.3em] font-medium text-[#D4AF37]">
            {COMPANY_INFO.tagline}
          </span>
        </motion.div>

        {/* Oversized Editorial Main Headline with intentional line breaks and champagne/gold accent */}
        <motion.h1
          variants={editorialHeadline}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] xl:text-[5.75rem] font-light leading-[1.06] tracking-[-0.02em] text-[#F7F5F0] max-w-5xl mb-8"
        >
          <span>From fibre to </span>
          <span className="text-[#D4AF37] font-normal italic">
            finished garment,
          </span>
          <br className="hidden sm:inline" />
          <span className="block mt-1 sm:mt-0">made to your specification.</span>
        </motion.h1>

        {/* Supporting Paragraph */}
        <motion.div variants={editorialSubtext} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end max-w-5xl">
          <p className="lg:col-span-8 text-base sm:text-lg lg:text-xl text-[#9E9B94] font-normal leading-relaxed">
            {COMPANY_INFO.heroDescription}
          </p>

          {/* Action Triggers */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5">
            <button
              onClick={onStartConversation}
              className="inline-flex items-center justify-between px-6 py-4 bg-[#F7F5F0] text-[#0c0c0d] hover:bg-[#D4AF37] hover:text-black transition-all duration-300 group text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <button
              onClick={onExploreProcess}
              className="inline-flex items-center justify-between px-6 py-4 border border-[#D4AF37]/30 text-[#F7F5F0] hover:border-[#D4AF37] hover:text-[#D4AF37] bg-white/[0.02] transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium cursor-pointer"
            >
              <span>Explore Our Process</span>
              <ArrowDown className="w-4 h-4 text-[#D4AF37]" />
            </button>
          </div>
        </motion.div>

        {/* Key Manufacturing Pillars Strip */}
        <motion.div
          variants={editorialSubtext}
          className="mt-16 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl text-left"
        >
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-1">
              ORIGIN
            </span>
            <span className="text-xs sm:text-sm text-[#F7F5F0] font-light">
              Tirupur Textile Hub
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-1">
              INTEGRATION
            </span>
            <span className="text-xs sm:text-sm text-[#F7F5F0] font-light">
              Fibre to Final Dispatch
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-1">
              QUALITY STANDARD
            </span>
            <span className="text-xs sm:text-sm text-[#F7F5F0] font-light">
              AQL 1.5 Export Tolerance
            </span>
          </div>
          <div>
            <span className="block text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] mb-1">
              CLIENT COMPLIANCE
            </span>
            <span className="text-xs sm:text-sm text-[#F7F5F0] font-light">
              100% Needle Detector Audit
            </span>
          </div>
        </motion.div>
      </SectionHeaderMotion>

      {/* Scroll The Process - Bottom Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <button
            onClick={onExploreProcess}
            className="flex items-center gap-3 text-left group cursor-pointer"
          >
            <div className="w-5 h-8 border border-[#D4AF37]/40 rounded-full flex items-start justify-center p-1">
              <div className="w-1 h-2 bg-[#D4AF37] rounded-full animate-bounce" />
            </div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E9B94] group-hover:text-[#F7F5F0] transition-colors">
              Scroll The Process
            </span>
          </button>

          <div className="text-[11px] font-mono tracking-widest text-[#9E9B94]/60 hidden sm:block">
            STAGE 01 — 06 · MANUFACTURING CHRONOLOGY
          </div>
        </div>
      </div>
    </section>
  );
};
