import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { Mail, Phone, ArrowUpRight, Copy, Check } from 'lucide-react';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  editorialGridContainer,
  editorialGridItem,
  motion,
} from './EditorialMotion';

interface ContactSectionProps {
  darkMode: boolean;
  preselectedProduct?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ darkMode, preselectedProduct }) => {
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => {
      setCopiedType(null);
    }, 2000);
  };

  const emailSubject = preselectedProduct
    ? `Commercial Production Enquiry - ${preselectedProduct}`
    : 'Commercial Production Enquiry - Sowndarya Exports';

  const mailtoLink = `mailto:${COMPANY_INFO.email}?subject=${encodeURIComponent(emailSubject)}`;

  return (
    <section
      id="contact"
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
              COMMERCIAL DESK
            </motion.span>
            <motion.h2 variants={editorialHeadline} className={`text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight ${
              darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
            }`}>
              START A CONVERSATION.
            </motion.h2>
          </div>
          <motion.p variants={editorialSubtext} className={`text-sm sm:text-base max-w-md font-light leading-relaxed ${
            darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
          }`}>
            Direct commercial liaison for fashion brands, merchandisers, and private labels. Reach out directly via email or telephone to initiate production review.
          </motion.p>
        </SectionHeaderMotion>

        {/* Focused Contact Cards: Email & Phone Only */}
        <motion.div
          variants={editorialGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {/* Card 1: Direct Email */}
          <motion.div
            variants={editorialGridItem}
            className={`p-8 sm:p-12 border flex flex-col justify-between transition-all duration-300 group ${
              darkMode
                ? 'bg-[#121214] border-white/10 hover:border-[#D4AF37]/40'
                : 'bg-white border-black/10 hover:border-[#B8972E]/40 shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 rounded-xs border text-[#D4AF37] transition-colors ${
                  darkMode ? 'bg-white/[0.03] border-white/10 group-hover:border-[#D4AF37]/40' : 'bg-black/[0.03] border-black/10 group-hover:border-[#B8972E]/40'
                }`}>
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                  DIRECT EMAIL INBOX
                </span>
              </div>

              <span className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
              }`}>
                Export & Sourcing Desk
              </span>

              <a
                href={mailtoLink}
                className={`block text-xl sm:text-2xl md:text-3xl font-light tracking-tight break-all transition-colors mb-4 ${
                  darkMode ? 'text-[#F7F5F0] group-hover:text-[#D4AF37]' : 'text-[#121213] group-hover:text-[#B8972E]'
                }`}
              >
                {COMPANY_INFO.email}
              </a>

              <p className={`text-xs sm:text-sm font-light leading-relaxed mb-8 ${
                darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
              }`}>
                Send tech packs, specification sheets, sampling briefs, or target quantity projections for technical evaluation.
              </p>
            </div>

            <div className={`pt-6 border-t flex flex-wrap items-center gap-3 ${
              darkMode ? 'border-white/10' : 'border-black/10'
            }`}>
              <a
                href={mailtoLink}
                className={`inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#F7F5F0] text-[#121213] hover:bg-[#D4AF37]'
                    : 'bg-[#121213] text-[#F7F5F0] hover:bg-[#B8972E]'
                }`}
              >
                <span>Compose Email</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(COMPANY_INFO.email, 'email')}
                className={`inline-flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-wider border cursor-pointer transition-colors ${
                  copiedType === 'email'
                    ? 'border-emerald-500 text-emerald-500 bg-emerald-500/10'
                    : darkMode
                    ? 'border-white/10 text-[#9E9B94] hover:text-[#F7F5F0] hover:border-white/30'
                    : 'border-black/10 text-[#66645E] hover:text-[#121213] hover:border-black/30'
                }`}
              >
                {copiedType === 'email' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Address</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>

          {/* Card 2: Direct Phone */}
          <motion.div
            variants={editorialGridItem}
            className={`p-8 sm:p-12 border flex flex-col justify-between transition-all duration-300 group ${
              darkMode
                ? 'bg-[#121214] border-white/10 hover:border-[#D4AF37]/40'
                : 'bg-white border-black/10 hover:border-[#B8972E]/40 shadow-xs'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <div className={`p-3 rounded-xs border text-[#D4AF37] transition-colors ${
                  darkMode ? 'bg-white/[0.03] border-white/10 group-hover:border-[#D4AF37]/40' : 'bg-black/[0.03] border-black/10 group-hover:border-[#B8972E]/40'
                }`}>
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                  COMMERCIAL PHONE LINE
                </span>
              </div>

              <span className={`block text-xs font-mono uppercase tracking-wider mb-2 ${
                darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
              }`}>
                Direct Commercial Line
              </span>

              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className={`block text-xl sm:text-2xl md:text-3xl font-light tracking-tight tabular-nums transition-colors mb-4 ${
                  darkMode ? 'text-[#F7F5F0] group-hover:text-[#D4AF37]' : 'text-[#121213] group-hover:text-[#B8972E]'
                }`}
              >
                {COMPANY_INFO.phone}
              </a>

              <p className={`text-xs sm:text-sm font-light leading-relaxed mb-8 ${
                darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
              }`}>
                Direct phone coordination for live order status, capacity inquiries, and factory visit schedules in Tirupur.
              </p>
            </div>

            <div className={`pt-6 border-t flex flex-wrap items-center gap-3 ${
              darkMode ? 'border-white/10' : 'border-black/10'
            }`}>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className={`inline-flex items-center gap-2 px-5 py-3 text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 ${
                  darkMode
                    ? 'bg-[#F7F5F0] text-[#121213] hover:bg-[#D4AF37]'
                    : 'bg-[#121213] text-[#F7F5F0] hover:bg-[#B8972E]'
                }`}
              >
                <span>Call Commercial Desk</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() => handleCopy(COMPANY_INFO.phone, 'phone')}
                className={`inline-flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-wider border cursor-pointer transition-colors ${
                  copiedType === 'phone'
                    ? 'border-emerald-500 text-emerald-500 bg-emerald-500/10'
                    : darkMode
                    ? 'border-white/10 text-[#9E9B94] hover:text-[#F7F5F0] hover:border-white/30'
                    : 'border-black/10 text-[#66645E] hover:text-[#121213] hover:border-black/30'
                }`}
              >
                {copiedType === 'phone' ? (
                  <>
                    <Check className="w-3.5 h-3.5" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Number</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
