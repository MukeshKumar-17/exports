import React from 'react';
import { VALUES } from '../data/companyData';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  editorialGridContainer,
  editorialGridItem,
  motion,
} from './EditorialMotion';

interface ValuesSectionProps {
  darkMode: boolean;
}

export const ValuesSection: React.FC<ValuesSectionProps> = ({ darkMode }) => {
  return (
    <section
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
              OUR VALUES
            </motion.span>
            <motion.h2 variants={editorialHeadline} className={`text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight ${
              darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
            }`}>
              Guiding Principles
            </motion.h2>
          </div>
          <motion.p variants={editorialSubtext} className={`text-sm sm:text-base max-w-md font-light leading-relaxed ${
            darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
          }`}>
            Our values shape how we work with our people, partners and customers across every production cycle.
          </motion.p>
        </SectionHeaderMotion>

        {/* Five Horizontal / Editorial Columns with Staggered Entrance */}
        <motion.div
          variants={editorialGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-px border my-16 ${
            darkMode ? 'bg-white/10 border-white/10' : 'bg-black/10 border-black/10'
          }`}
        >
          {VALUES.map((val) => (
            <motion.div
              key={val.number}
              variants={editorialGridItem}
              className={`p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 group ${
                darkMode
                  ? 'bg-[#121214] hover:bg-[#161619]'
                  : 'bg-white hover:bg-[#F7F5F0]'
              }`}
            >
              <div>
                {/* Large Italic / Serif Number Treatment */}
                <div className="text-4xl sm:text-5xl font-serif italic text-[#D4AF37] mb-8 font-light group-hover:translate-x-1 transition-transform">
                  {val.number}
                </div>

                {/* Bold Title */}
                <h3 className={`text-lg font-medium tracking-wide mb-3 transition-colors ${
                  darkMode
                    ? 'text-[#F7F5F0] group-hover:text-[#D4AF37]'
                    : 'text-[#121213] group-hover:text-[#B8972E]'
                }`}>
                  {val.title}
                </h3>

                {/* Short Description */}
                <p className={`text-xs sm:text-sm font-light leading-relaxed ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  {val.description}
                </p>
              </div>

              <div className={`pt-6 mt-8 border-t ${darkMode ? 'border-white/5' : 'border-black/5'}`}>
                <span className={`text-[9px] font-mono uppercase tracking-[0.2em] ${
                  darkMode ? 'text-[#9E9B94]/60' : 'text-[#66645E]/60'
                }`}>
                  STANDARD
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
