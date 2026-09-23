import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  motion,
} from './EditorialMotion';

interface FinalCtaProps {
  darkMode: boolean;
  onGetInTouch: () => void;
  onSendEnquiry?: () => void;
}

export const FinalCta: React.FC<FinalCtaProps> = ({ darkMode, onGetInTouch }) => {
  const emailSubject = 'Collection Production Inquiry - Sowndarya Exports';
  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section
      className={`w-full py-28 sm:py-36 border-t relative overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-[#0c0c0d] text-[#F7F5F0] border-white/10' : 'bg-[#FAF8F5] text-[#121213] border-black/10'
      }`}
    >
      {/* Subtle Radial Glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none ${
        darkMode
          ? 'bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)]'
          : 'bg-[radial-gradient(circle,rgba(184,151,46,0.08)_0%,transparent_70%)]'
      }`} />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <SectionHeaderMotion className="max-w-4xl mx-auto text-center flex flex-col items-center">
          <motion.span variants={editorialEyebrow} className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37] block mb-6">
            COMMERCIAL PRODUCTION PROGRAM
          </motion.span>

          {/* Oversized Editorial Headline */}
          <motion.h2 variants={editorialHeadline} className={`text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] font-light tracking-tight leading-[1.08] mb-8 ${
            darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
          }`}>
            Let’s build <br />
            <span className="text-[#D4AF37] italic font-serif">your next collection.</span>
          </motion.h2>

          <motion.p variants={editorialSubtext} className={`text-base sm:text-xl font-light leading-relaxed max-w-2xl mb-12 ${
            darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
          }`}>
            Tell us what you're looking to produce — product type, fabric, quantity and destination — and our team will get back to you with lead times and technical feasibility.
          </motion.p>

          {/* Action CTAs: Start Conversation (Scroll) + Direct Email Composer */}
          <motion.div variants={editorialSubtext} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={onGetInTouch}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 transition-all duration-300 text-xs uppercase tracking-[0.2em] font-semibold cursor-pointer group shadow-lg ${
                darkMode
                  ? 'bg-[#F7F5F0] text-black hover:bg-[#D4AF37]'
                  : 'bg-[#121213] text-[#FAF8F5] hover:bg-[#B8972E] hover:text-black'
              }`}
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <a
              href={mailtoLink}
              className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-5 border transition-all duration-300 text-xs uppercase tracking-[0.2em] font-medium cursor-pointer ${
                darkMode
                  ? 'border-[#D4AF37]/40 text-[#F7F5F0] hover:border-[#D4AF37] hover:text-[#D4AF37] bg-white/[0.02]'
                  : 'border-[#B8972E]/50 text-[#121213] hover:border-[#B8972E] hover:text-[#B8972E] bg-black/[0.02]'
              }`}
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              <span>Direct Email Inquiry</span>
            </a>
          </motion.div>
        </SectionHeaderMotion>
      </div>
    </section>
  );
};
