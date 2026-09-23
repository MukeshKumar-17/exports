import React from 'react';
import { CLIENTS } from '../data/companyData';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  motion,
} from './EditorialMotion';

interface ClientsSectionProps {
  darkMode: boolean;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ darkMode }) => {
  return (
    <section
      id="brands"
      className={`w-full py-24 sm:py-32 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#0c0c0d] text-[#F7F5F0] border-white/10' : 'bg-[#FAF8F5] text-[#121213] border-black/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <SectionHeaderMotion className={`flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b ${
          darkMode ? 'border-[#D4AF37]/20' : 'border-[#B8972E]/30'
        }`}>
          <div>
            <motion.span variants={editorialEyebrow} className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37] block mb-3">
              SELECTED CLIENTS
            </motion.span>
            <motion.h2 variants={editorialHeadline} className={`text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight ${
              darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
            }`}>
              Brands we have <br />
              <span className="text-[#D4AF37] italic font-serif">produced for.</span>
            </motion.h2>
          </div>

          <motion.div variants={editorialSubtext} className="flex flex-col items-start md:items-end gap-3">
            <p className={`text-sm sm:text-base max-w-md font-light leading-relaxed md:text-right ${
              darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
            }`}>
              A clean editorial showcase of international fashion brands and retail labels manufactured across our production facilities in Tirupur.
            </p>
          </motion.div>
        </SectionHeaderMotion>

        {/* 4-column x 2-row Grid with Thin Borders, Large Whitespace, Centered Typography */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border my-16 ${
          darkMode ? 'bg-white/10 border-white/10' : 'bg-black/10 border-black/10'
        }`}>
          {CLIENTS.map((client, idx) => (
            <div
              key={client.id}
              className={`min-h-[180px] p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-all duration-300 group cursor-default relative ${
                darkMode
                  ? 'bg-[#121214] hover:bg-[#18181b]'
                  : 'bg-white hover:bg-[#F7F5F0] shadow-2xs'
              }`}
            >
              {/* Corner Index */}
              <span className={`absolute top-4 left-4 text-[9px] font-mono ${
                darkMode ? 'text-[#9E9B94]/50' : 'text-[#66645E]/50'
              }`}>
                0{idx + 1}
              </span>

              <div className="space-y-2 transform transition-transform duration-300 group-hover:scale-105">
                <div className={`text-base sm:text-lg font-light tracking-[0.25em] uppercase transition-colors ${
                  darkMode
                    ? 'text-[#F7F5F0] group-hover:text-[#D4AF37]'
                    : 'text-[#121213] group-hover:text-[#B8972E]'
                }`}>
                  {client.code}
                </div>
                <div className={`text-[11px] tracking-wider uppercase font-mono ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  {client.market} <span className="opacity-40">·</span> {client.segment}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* OEM Quality & Compliance Notice */}
        <div className={`p-6 border flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs ${
          darkMode ? 'bg-[#141416] border-white/10' : 'bg-white border-black/10'
        }`}>
          <p className={`font-light ${darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'}`}>
            All garment programs are executed according to international export benchmarks and client tech specifications. Commercial references and compliance dossiers available upon verified request.
          </p>
          <span className="text-[#D4AF37] font-mono shrink-0 uppercase tracking-widest text-[10px]">
            VERIFIED OEM SUPPLY
          </span>
        </div>
      </div>
    </section>
  );
};
