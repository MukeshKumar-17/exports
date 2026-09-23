import React, { useState, useEffect, useRef } from 'react';
import { JOURNEY_STAGES } from '../data/companyData';
import {
  StageCottonVisual,
  StageYarnVisual,
  StageFabricVisual,
  StageCuttingVisual,
  StageFinishingVisual,
  StageDeliveryVisual,
} from './VisualArtifacts';
import { CheckCircle2, ChevronRight, ArrowDown } from 'lucide-react';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  motion,
} from './EditorialMotion';

interface JourneySectionProps {
  darkMode: boolean;
}

export const JourneySection: React.FC<JourneySectionProps> = ({ darkMode }) => {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const stageRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Render contextual technical visual based on active stage
  const renderVisual = (visualType: string) => {
    switch (visualType) {
      case 'cotton':
        return <StageCottonVisual />;
      case 'yarn':
        return <StageYarnVisual />;
      case 'fabric':
        return <StageFabricVisual />;
      case 'cutting':
        return <StageCuttingVisual />;
      case 'finishing':
        return <StageFinishingVisual />;
      case 'delivery':
        return <StageDeliveryVisual />;
      default:
        return <StageCottonVisual />;
    }
  };

  // Scroll listener for sticky active stage tracking
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight * 0.45;
      stageRefs.current.forEach((el, index) => {
        if (!el) return;
        const top = el.offsetTop;
        const height = el.offsetHeight;
        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveStageIndex(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStage = (index: number) => {
    setActiveStageIndex(index);
    const target = stageRefs.current[index];
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const currentStage = JOURNEY_STAGES[activeStageIndex];

  return (
    <section
      id="journey"
      className={`relative w-full py-24 sm:py-32 border-t transition-colors duration-300 ${
        darkMode ? 'bg-[#0c0c0d] text-[#F7F5F0] border-white/10' : 'bg-[#FAF8F5] text-[#121213] border-black/10'
      }`}
    >
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-16 sm:mb-24">
        <SectionHeaderMotion className={`flex flex-col md:flex-row md:items-end justify-between gap-8 pb-10 border-b ${darkMode ? 'border-[#D4AF37]/20' : 'border-[#B8972E]/30'}`}>
          <div>
            <motion.span variants={editorialEyebrow} className="text-[11px] uppercase tracking-[0.3em] font-medium text-[#D4AF37] block mb-3">
              THE JOURNEY — INTEGRATED MANUFACTURING
            </motion.span>
            <motion.h2 variants={editorialHeadline} className={`text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight ${darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'}`}>
              From Raw Fiber <br />
              <span className="text-[#D4AF37] italic font-serif">to Global Dispatch</span>
            </motion.h2>
          </div>

          <motion.p variants={editorialSubtext} className={`text-sm sm:text-base max-w-md font-light leading-relaxed ${darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'}`}>
            Every garment moves through six uninterrupted stages of technical custody. Explore our disciplined manufacturing sequence below.
          </motion.p>
        </SectionHeaderMotion>

        {/* Quick Stage Timeline Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 mt-8">
          {JOURNEY_STAGES.map((stage, idx) => {
            const isActive = activeStageIndex === idx;
            return (
              <button
                key={stage.id}
                onClick={() => scrollToStage(idx)}
                className={`text-left p-3.5 sm:p-4 border transition-all duration-300 relative group cursor-pointer ${
                  isActive
                    ? darkMode
                      ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                      : 'border-[#B8972E] bg-[#B8972E]/10'
                    : darkMode
                    ? 'border-white/10 hover:border-white/30 bg-white/[0.02]'
                    : 'border-black/10 hover:border-black/25 bg-black/[0.02]'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-[10px] font-mono tracking-widest ${
                      isActive ? 'text-[#D4AF37] font-semibold' : darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                    }`}
                  >
                    STAGE {stage.stageNumber}
                  </span>
                  {isActive && <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />}
                </div>
                <span
                  className={`text-xs uppercase tracking-wider block font-medium truncate ${
                    isActive
                      ? darkMode
                        ? 'text-[#F7F5F0]'
                        : 'text-[#121213]'
                      : darkMode
                      ? 'text-[#9E9B94] group-hover:text-[#F7F5F0]'
                      : 'text-[#66645E] group-hover:text-[#121213]'
                  }`}
                >
                  {stage.stageTitle}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Sticky Storytelling Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Sequential Scroll Stages */}
          <div className="lg:col-span-7 flex flex-col gap-24 sm:gap-36">
            {JOURNEY_STAGES.map((stage, index) => {
              const isCurrent = activeStageIndex === index;
              return (
                <div
                  key={stage.id}
                  ref={(el) => {
                    stageRefs.current[index] = el;
                  }}
                  className={`min-h-[70vh] flex flex-col justify-center transition-all duration-500 pt-12 pb-16 border-b last:border-b-0 ${
                    darkMode ? 'border-white/5' : 'border-black/5'
                  } ${isCurrent ? 'opacity-100' : 'opacity-40 hover:opacity-75'}`}
                >
                  {/* Eyebrow Number & Title */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
                      STAGE {stage.stageNumber} — {stage.stageTitle}
                    </span>
                    <div className="h-[1px] w-12 bg-[#D4AF37]/30" />
                  </div>

                  {/* Huge Editorial Headline with Intentional Line Breaks */}
                  <h3 className={`text-3xl sm:text-5xl lg:text-[3.75rem] font-light leading-[1.12] tracking-tight mb-8 whitespace-pre-line ${
                    darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
                  }`}>
                    {stage.headline}
                  </h3>

                  {/* Supporting Paragraph */}
                  <p className={`text-base sm:text-lg leading-relaxed mb-8 max-w-xl font-normal ${
                    darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                  }`}>
                    {stage.description}
                  </p>

                  {/* Technical Bullet Highlights */}
                  <div className="space-y-3 mb-8">
                    {stage.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-1" />
                        <span className={`text-sm font-light ${darkMode ? 'text-[#F7F5F0]/90' : 'text-[#121213]/90'}`}>
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Key Specification Matrix */}
                  <div className={`grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 border ${
                    darkMode
                      ? 'bg-[#141416] border-white/10'
                      : 'bg-[#F2EFE8] border-black/10'
                  }`}>
                    {stage.specs.map((s, sIdx) => (
                      <div key={sIdx} className={`border-r last:border-r-0 pr-2 ${darkMode ? 'border-white/5' : 'border-black/5'}`}>
                        <span className={`block text-[9px] uppercase tracking-wider mb-1 font-mono ${darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'}`}>
                          {s.label}
                        </span>
                        <span className={`text-xs font-medium tracking-wide ${darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'}`}>
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Mobile Preview Visual */}
                  <div className="mt-8 lg:hidden">
                    {renderVisual(stage.visualType)}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Visual & Technical Dossier Carrier */}
          <div className="hidden lg:block lg:col-span-5 sticky top-28 self-start transition-all duration-300">
            <div className="space-y-4">
              {/* Sticky Stage Number & Live Status Header */}
              <div className={`flex items-center justify-between text-xs font-mono py-2 px-1 border-b ${
                darkMode ? 'border-white/10 text-[#9E9B94]' : 'border-black/10 text-[#66645E]'
              }`}>
                <span>
                  PROCESS CUSTODY · <span className="text-[#D4AF37] font-semibold">{currentStage.stageNumber} / 06</span>
                </span>
                <span className="uppercase tracking-wider">
                  ACTIVE PHASE: {currentStage.stageTitle}
                </span>
              </div>

              {/* The Bespoke Stage Visual Container */}
              <div className="shadow-2xl transition-all duration-500">
                {renderVisual(currentStage.visualType)}
              </div>

              {/* Stage Progress Bar */}
              <div className="pt-2">
                <div className={`w-full h-1 overflow-hidden ${darkMode ? 'bg-white/10' : 'bg-black/10'}`}>
                  <div
                    className="bg-[#D4AF37] h-full transition-all duration-500 ease-out"
                    style={{ width: `${((activeStageIndex + 1) / JOURNEY_STAGES.length) * 100}%` }}
                  />
                </div>
                <div className={`flex justify-between items-center mt-2 text-[10px] font-mono ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  <span>FIBRE INTAKE</span>
                  <span>DISPATCH READY</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
