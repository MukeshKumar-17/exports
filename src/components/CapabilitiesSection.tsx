import React from 'react';
import { CAPABILITIES, INITIAL_STATS } from '../data/companyData';
import {
  Layers,
  Droplets,
  Scissors,
  Wrench,
  Sparkles,
  ShieldCheck,
  Package,
  Truck,
} from 'lucide-react';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  editorialGridContainer,
  editorialGridItem,
  motion,
} from './EditorialMotion';

interface CapabilitiesSectionProps {
  darkMode: boolean;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ darkMode }) => {
  const getMonolineIcon = (iconName: string) => {
    const props = { className: 'w-6 h-6 text-[#D4AF37] stroke-[1.2]' };
    switch (iconName) {
      case 'knitting':
        return <Layers {...props} />;
      case 'dyeing':
        return <Droplets {...props} />;
      case 'cutting':
        return <Scissors {...props} />;
      case 'stitching':
        return <Wrench {...props} />;
      case 'printing':
        return <Sparkles {...props} />;
      case 'quality':
        return <ShieldCheck {...props} />;
      case 'packing':
        return <Package {...props} />;
      case 'delivery':
        return <Truck {...props} />;
      default:
        return <Layers {...props} />;
    }
  };

  return (
    <section
      id="capabilities"
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
              CAPABILITIES & FACTORY
            </motion.span>
            <motion.h2 variants={editorialHeadline} className={`text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight ${
              darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
            }`}>
              Manufacturing, <br />
              <span className="text-[#D4AF37] italic font-serif">built around control.</span>
            </motion.h2>
          </div>

          <motion.p variants={editorialSubtext} className={`text-sm sm:text-base max-w-md font-light leading-relaxed ${
            darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
          }`}>
            Our end-to-end infrastructure ensures complete technical sovereignty at every station. We monitor tension, temperature, needle integrity, and cycle time across all eight disciplines.
          </motion.p>
        </SectionHeaderMotion>

        {/* 8-Item Capability Grid with Thin Borders & Monoline Muted Gold Icons */}
        <motion.div
          variants={editorialGridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px border my-16 ${
            darkMode ? 'bg-white/10 border-white/10' : 'bg-black/10 border-black/10'
          }`}
        >
          {CAPABILITIES.map((cap) => (
            <motion.div
              key={cap.number}
              variants={editorialGridItem}
              className={`p-8 sm:p-10 flex flex-col justify-between transition-colors duration-300 group ${
                darkMode
                  ? 'bg-[#121214] hover:bg-[#161619]'
                  : 'bg-white hover:bg-[#F7F5F0]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs font-mono tracking-widest text-[#D4AF37] font-semibold">
                    {cap.number}
                  </span>
                  <div className={`p-2.5 rounded-sm border transition-colors ${
                    darkMode
                      ? 'bg-white/[0.03] border-white/5 group-hover:border-[#D4AF37]/40'
                      : 'bg-black/[0.03] border-black/5 group-hover:border-[#B8972E]/40'
                  }`}>
                    {getMonolineIcon(cap.iconName)}
                  </div>
                </div>

                <h3 className={`text-xl font-light tracking-tight transition-colors mb-3 ${
                  darkMode
                    ? 'text-[#F7F5F0] group-hover:text-[#D4AF37]'
                    : 'text-[#121213] group-hover:text-[#B8972E]'
                }`}>
                  {cap.title}
                </h3>

                <p className={`text-xs sm:text-sm font-light leading-relaxed mb-6 ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  {cap.description}
                </p>
              </div>

              <div className={`pt-4 border-t ${darkMode ? 'border-white/5' : 'border-black/5'}`}>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] block">
                  {cap.specs}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* FACTORY / CAPACITY SECTION: Strong Statistics Strip */}
        <div className={`mt-20 pt-16 border-t ${darkMode ? 'border-white/10' : 'border-black/10'}`}>
          <div className="mb-10">
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-1">
              PRODUCTION METRICS & SCALE
            </span>
            <h3 className={`text-xl sm:text-2xl font-light ${darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'}`}>
              Factory Throughput
            </h3>
          </div>

          {/* Large Typography-Driven Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
            {INITIAL_STATS.map((stat) => (
              <div
                key={stat.id}
                className={`p-6 border-l-2 border-[#D4AF37] flex flex-col justify-between ${
                  darkMode ? 'bg-white/[0.01]' : 'bg-black/[0.01]'
                }`}
              >
                <div>
                  <div className={`text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight tabular-nums mb-3 font-serif ${
                    darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
                  }`}>
                    {stat.value}
                  </div>

                  <div className={`text-sm font-medium uppercase tracking-wider mb-1 ${
                    darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
                  }`}>
                    {stat.label}
                  </div>
                </div>

                <p className={`text-xs font-light mt-3 ${darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'}`}>
                  {stat.sublabel}
                </p>
              </div>
            ))}
          </div>

          <p className={`text-[11px] font-mono tracking-wider uppercase mt-8 text-right ${
            darkMode ? 'text-[#9E9B94]/60' : 'text-[#66645E]/60'
          }`}>
            * Capacity calibrated to order volume and single/double line shifts
          </p>
        </div>
      </div>
    </section>
  );
};
