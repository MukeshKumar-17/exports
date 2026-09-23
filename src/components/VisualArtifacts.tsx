import React from 'react';

// Hero Cinematic Factory Background (SVG Vector Art + Canvas Atmospheric Gradient)
export const HeroFactoryVisual: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Background Architectural Layer */}
      <svg
        className="w-full h-full object-cover opacity-35"
        viewBox="0 0 1440 900"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="heroDarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#151518" />
            <stop offset="50%" stopColor="#0d0d0e" />
            <stop offset="100%" stopColor="#080809" />
          </linearGradient>
          <linearGradient id="goldBeam" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#D4AF37" stopOpacity="0" />
            <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#D4AF37" stopOpacity="0" />
          </linearGradient>
          <pattern id="millGrid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(212, 175, 55, 0.04)" strokeWidth="1" />
          </pattern>
          <pattern id="warpLines" width="12" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="12" stroke="rgba(255, 255, 255, 0.02)" strokeWidth="0.5" />
          </pattern>
        </defs>

        <rect width="1440" height="900" fill="url(#heroDarkGrad)" />
        <rect width="1440" height="900" fill="url(#millGrid)" />
        <rect width="1440" height="900" fill="url(#warpLines)" />

        {/* Industrial Loom & Overhead Creel Beams */}
        <g stroke="rgba(212, 175, 55, 0.12)" strokeWidth="1">
          {/* Overhead gantry structure */}
          <line x1="120" y1="80" x2="1320" y2="80" />
          <line x1="120" y1="130" x2="1320" y2="130" strokeDasharray="4 6" />
          <line x1="280" y1="80" x2="280" y2="760" strokeOpacity="0.08" />
          <line x1="720" y1="80" x2="720" y2="820" strokeOpacity="0.08" />
          <line x1="1160" y1="80" x2="1160" y2="760" strokeOpacity="0.08" />

          {/* Yarn guide paths radiating from top creels */}
          {Array.from({ length: 18 }).map((_, i) => (
            <line
              key={`yarn-${i}`}
              x1={300 + i * 50}
              y1={130}
              x2={400 + i * 36}
              y2={650}
              stroke="rgba(212, 175, 55, 0.06)"
              strokeWidth="0.8"
            />
          ))}

          {/* Precision Circular Knitting Cylinder Silhouette (Right Side) */}
          <circle cx="1060" cy="520" r="240" stroke="rgba(212, 175, 55, 0.18)" strokeWidth="1.2" />
          <circle cx="1060" cy="520" r="190" stroke="rgba(255, 255, 255, 0.07)" strokeDasharray="3 4" />
          <circle cx="1060" cy="520" r="90" stroke="rgba(212, 175, 55, 0.22)" strokeWidth="1" />
          <circle cx="1060" cy="520" r="28" fill="rgba(212, 175, 55, 0.1)" stroke="rgba(212, 175, 55, 0.3)" />

          {/* Needle bed radial ticks */}
          {Array.from({ length: 36 }).map((_, i) => {
            const angle = (i * 10 * Math.PI) / 180;
            const x1 = 1060 + Math.cos(angle) * 230;
            const y1 = 520 + Math.sin(angle) * 230;
            const x2 = 1060 + Math.cos(angle) * 248;
            const y2 = 520 + Math.sin(angle) * 248;
            return (
              <line
                key={`needle-${i}`}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={i % 4 === 0 ? 'rgba(212, 175, 55, 0.4)' : 'rgba(255, 255, 255, 0.12)'}
                strokeWidth={i % 4 === 0 ? '1.5' : '1'}
              />
            );
          })}
        </g>

        {/* Ambient Horizontal Glow line */}
        <line x1="0" y1="460" x2="1440" y2="460" stroke="url(#goldBeam)" strokeWidth="2" />
      </svg>

      {/* Cinematic Vignette Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0d] via-transparent to-[#0c0c0d]/90" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0d] via-transparent to-[#0c0c0d]/80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_45%,rgba(212,175,55,0.06)_0%,transparent_65%)]" />
    </div>
  );
};

// Stage 01: Raw Cotton Fiber & Grading Visual
export const StageCottonVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[380px] bg-[#121214] border border-[#D4AF37]/20 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
      {/* Editorial Watermark & Tag */}
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
          RAW STAPLE AUDIT · BALE #SK-0428
        </span>
        <span className="text-[11px] font-mono text-[#9E9B94] tracking-widest tabular-nums">
          MIC: 4.1 · LEN: 31.8mm
        </span>
      </div>

      {/* Center Macro Cotton Tuft & Fiber Structure Diagram */}
      <div className="relative my-auto flex items-center justify-center py-6">
        <svg viewBox="0 0 400 240" className="w-full max-w-[340px] h-auto" fill="none">
          {/* Subtle grid background */}
          <line x1="20" y1="120" x2="380" y2="120" stroke="rgba(212, 175, 55, 0.15)" strokeDasharray="4 4" />
          <line x1="200" y1="20" x2="200" y2="220" stroke="rgba(212, 175, 55, 0.15)" strokeDasharray="4 4" />

          {/* Organic Combed Staple Fiber curves */}
          <g stroke="rgba(247, 245, 240, 0.25)" strokeWidth="1.2">
            <path d="M 60 140 C 110 90, 160 160, 210 110 C 260 70, 310 130, 350 90" />
            <path d="M 70 120 C 120 70, 170 150, 220 100 C 270 50, 320 120, 360 80" stroke="rgba(212, 175, 55, 0.4)" />
            <path d="M 80 150 C 130 110, 180 170, 230 120 C 280 80, 330 140, 370 105" />
            <path d="M 90 100 C 140 60, 190 130, 240 90 C 290 60, 340 110, 380 75" stroke="rgba(247, 245, 240, 0.15)" />
            <path d="M 50 130 C 100 80, 150 140, 200 100 C 250 60, 300 120, 340 85" stroke="rgba(212, 175, 55, 0.25)" />
          </g>

          {/* Cotton Boll Core Nodes */}
          <circle cx="150" cy="120" r="32" fill="rgba(247, 245, 240, 0.04)" stroke="rgba(212, 175, 55, 0.3)" strokeDasharray="3 3" />
          <circle cx="230" cy="115" r="40" fill="rgba(247, 245, 240, 0.06)" stroke="rgba(247, 245, 240, 0.25)" />
          <circle cx="190" cy="140" r="28" fill="rgba(212, 175, 55, 0.08)" stroke="rgba(212, 175, 55, 0.4)" />

          {/* Caliper Staple Length Measurement Guides */}
          <line x1="80" y1="190" x2="320" y2="190" stroke="#D4AF37" strokeWidth="1.5" />
          <line x1="80" y1="182" x2="80" y2="198" stroke="#D4AF37" strokeWidth="1.5" />
          <line x1="320" y1="182" x2="320" y2="198" stroke="#D4AF37" strokeWidth="1.5" />
          <text x="200" y="210" fill="#F7F5F0" fontSize="10" textAnchor="middle" letterSpacing="0.15em" fontFamily="sans-serif">
            STAPLE LENGTH: 31.8 MM (EXTRA LONG)
          </text>
        </svg>
      </div>

      {/* Bottom Technical Spec Bar */}
      <div className="pt-4 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-3 text-left">
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Strength</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">31.2 g/tex</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Uniformity</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">84.5% UI</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Trash Content</span>
          <span className="text-xs text-[#D4AF37] font-medium tabular-nums">&lt; 1.8%</span>
        </div>
      </div>
    </div>
  );
};

// Stage 02: Spun Yarn Bobbin & Creel Mechanics
export const StageYarnVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[380px] bg-[#121214] border border-[#D4AF37]/20 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
          RING SPINNING · TWIST CONTROL
        </span>
        <span className="text-[11px] font-mono text-[#9E9B94] tracking-widest tabular-nums">
          30s Ne · COMPACT COMBED
        </span>
      </div>

      <div className="relative my-auto flex items-center justify-center py-6">
        <svg viewBox="0 0 400 240" className="w-full max-w-[340px] h-auto" fill="none">
          {/* Spindle & Cone Conical Profiles */}
          <g stroke="rgba(212, 175, 55, 0.25)" strokeWidth="1">
            {/* Center Cone Outline */}
            <polygon points="175,45 225,45 245,190 155,190" fill="rgba(212, 175, 55, 0.04)" stroke="rgba(212, 175, 55, 0.4)" />
            <ellipse cx="200" cy="45" rx="25" ry="7" fill="rgba(20, 20, 22, 0.8)" stroke="#D4AF37" />
            <ellipse cx="200" cy="190" rx="45" ry="12" fill="rgba(20, 20, 22, 0.8)" stroke="#D4AF37" />

            {/* Yarn Helix Windings */}
            {Array.from({ length: 16 }).map((_, i) => {
              const y = 60 + i * 8;
              const w = 26 + i * 2.3;
              return (
                <path
                  key={`wind-${i}`}
                  d={`M ${200 - w} ${y} Q 200 ${y + 5} ${200 + w} ${y}`}
                  stroke={i % 2 === 0 ? 'rgba(247, 245, 240, 0.45)' : 'rgba(212, 175, 55, 0.4)'}
                  strokeWidth="1.2"
                />
              );
            })}

            {/* Traveler & Yarn Thread Delivery Line */}
            <line x1="200" y1="20" x2="200" y2="45" stroke="#D4AF37" strokeWidth="2" />
            <line x1="200" y1="20" x2="290" y2="10" stroke="rgba(247, 245, 240, 0.5)" strokeDasharray="3 3" />
            <circle cx="200" cy="20" r="4" fill="#D4AF37" />

            {/* Spindle Base */}
            <rect x="188" y="198" width="24" height="26" fill="rgba(255, 255, 255, 0.05)" stroke="rgba(255, 255, 255, 0.2)" />
          </g>

          {/* Left / Right Tension Vectors */}
          <g stroke="rgba(255, 255, 255, 0.15)" strokeWidth="0.8">
            <line x1="80" y1="50" x2="80" y2="190" strokeDasharray="4 4" />
            <line x1="320" y1="50" x2="320" y2="190" strokeDasharray="4 4" />
            <circle cx="80" cy="120" r="16" stroke="#D4AF37" />
            <text x="80" y="123" fill="#D4AF37" fontSize="8" textAnchor="middle" fontFamily="sans-serif">Z-TWIST</text>
            <circle cx="320" cy="120" r="16" stroke="rgba(255, 255, 255, 0.3)" />
            <text x="320" y="123" fill="#9E9B94" fontSize="8" textAnchor="middle" fontFamily="sans-serif">TPI: 18.5</text>
          </g>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-3 text-left">
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Count Range</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">16s – 60s Ne</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Hairiness (H)</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">&lt; 4.2 Zweigle</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Tensile Rkm</span>
          <span className="text-xs text-[#D4AF37] font-medium tabular-nums">22.4 cN/tex</span>
        </div>
      </div>
    </div>
  );
};

// Stage 03: Precision Knitting Fabric Loop Structure
export const StageFabricVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[380px] bg-[#121214] border border-[#D4AF37]/20 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
          CIRCULAR KNITTING · SINGLE JERSEY
        </span>
        <span className="text-[11px] font-mono text-[#9E9B94] tracking-widest tabular-nums">
          24 GAUGE · 220 GSM
        </span>
      </div>

      <div className="relative my-auto flex items-center justify-center py-6">
        <svg viewBox="0 0 400 240" className="w-full max-w-[340px] h-auto" fill="none">
          {/* Knit Loop Interlocking Weft System */}
          {Array.from({ length: 4 }).map((_, row) => {
            const yOffset = 50 + row * 40;
            return (
              <g key={`row-${row}`}>
                {Array.from({ length: 6 }).map((_, col) => {
                  const xOffset = 60 + col * 50;
                  const isGold = (row + col) % 3 === 0;
                  return (
                    <path
                      key={`loop-${row}-${col}`}
                      d={`M ${xOffset} ${yOffset + 25} 
                          C ${xOffset} ${yOffset}, ${xOffset + 12} ${yOffset - 15}, ${xOffset + 24} ${yOffset - 15}
                          C ${xOffset + 36} ${yOffset - 15}, ${xOffset + 48} ${yOffset}, ${xOffset + 48} ${yOffset + 25}
                          C ${xOffset + 48} ${yOffset + 35}, ${xOffset + 38} ${yOffset + 40}, ${xOffset + 24} ${yOffset + 40}
                          C ${xOffset + 10} ${yOffset + 40}, ${xOffset} ${yOffset + 35}, ${xOffset} ${yOffset + 25}`}
                      stroke={isGold ? '#D4AF37' : 'rgba(247, 245, 240, 0.35)'}
                      strokeWidth={isGold ? '1.8' : '1.2'}
                      fill={isGold ? 'rgba(212, 175, 55, 0.08)' : 'none'}
                    />
                  );
                })}
              </g>
            );
          })}

          {/* Knitting Needle Cylinder Cam Indicator */}
          <line x1="40" y1="220" x2="360" y2="220" stroke="rgba(212, 175, 55, 0.3)" strokeWidth="1" />
          <circle cx="200" cy="220" r="5" fill="#D4AF37" />
          <text x="200" y="208" fill="#F7F5F0" fontSize="9" textAnchor="middle" letterSpacing="0.2em" fontFamily="sans-serif">
            FEEDER SPEED: 28 RPM · 100% UNIFORM TENSION
          </text>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-3 text-left">
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Knitting Gauge</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">24 / 28 GG</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Compaction</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">&lt; 3% Shrinkage</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Color Fastness</span>
          <span className="text-xs text-[#D4AF37] font-medium tabular-nums">Grade 4.5 Washing</span>
        </div>
      </div>
    </div>
  );
};

// Stage 04: CAD Pattern Cutting & Stitch Assembly
export const StageCuttingVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[380px] bg-[#121214] border border-[#D4AF37]/20 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
          CAD MARKER NESTING · SEWING
        </span>
        <span className="text-[11px] font-mono text-[#9E9B94] tracking-widest tabular-nums">
          12 SPI · FLATLOCK SEAMS
        </span>
      </div>

      <div className="relative my-auto flex items-center justify-center py-6">
        <svg viewBox="0 0 400 240" className="w-full max-w-[340px] h-auto" fill="none">
          {/* Garment Panel Pattern Pieces on Cutting Bed */}
          <rect x="30" y="30" width="340" height="180" fill="none" stroke="rgba(212, 175, 55, 0.15)" strokeDasharray="3 3" />

          {/* Front Body Panel */}
          <path
            d="M 120 45 L 170 45 L 190 70 L 190 190 L 100 190 L 100 70 Z"
            fill="rgba(212, 175, 55, 0.06)"
            stroke="#D4AF37"
            strokeWidth="1.2"
          />
          {/* Back Body Panel */}
          <path
            d="M 210 45 L 260 45 L 280 70 L 280 190 L 190 190 L 190 70 Z"
            fill="rgba(255, 255, 255, 0.03)"
            stroke="rgba(247, 245, 240, 0.4)"
            strokeWidth="1.2"
          />
          {/* Sleeve Pattern Left */}
          <path
            d="M 45 60 L 90 75 L 75 145 L 35 130 Z"
            fill="rgba(212, 175, 55, 0.04)"
            stroke="rgba(212, 175, 55, 0.5)"
            strokeWidth="1"
          />
          {/* Sleeve Pattern Right */}
          <path
            d="M 290 75 L 335 60 L 345 130 L 305 145 Z"
            fill="rgba(212, 175, 55, 0.04)"
            stroke="rgba(212, 175, 55, 0.5)"
            strokeWidth="1"
          />
          {/* Neck Rib Arc */}
          <path d="M 120 45 Q 145 65 170 45" stroke="#D4AF37" strokeWidth="2" strokeDasharray="2 3" />

          {/* Stitch Seam Detail Line at Bottom */}
          <line x1="60" y1="215" x2="340" y2="215" stroke="#D4AF37" strokeWidth="1" strokeDasharray="6 4" />
          <text x="200" y="210" fill="#9E9B94" fontSize="8" textAnchor="middle" letterSpacing="0.2em" fontFamily="sans-serif">
            NEEDLE PATH: TWIN-NEEDLE COVERSTITCH · SPI 12
          </text>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-3 text-left">
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Marker Yield</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">&gt; 88.5% Efficiency</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Needle Pitch</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">10 – 12 SPI</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Seam Strength</span>
          <span className="text-xs text-[#D4AF37] font-medium tabular-nums">&gt; 250 N Pull</span>
        </div>
      </div>
    </div>
  );
};

// Stage 05: Finishing, Ironing, Metal Detection & Packing
export const StageFinishingVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[380px] bg-[#121214] border border-[#D4AF37]/20 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
          STEAM PRESSING · 100% QA AUDIT
        </span>
        <span className="text-[11px] font-mono text-[#9E9B94] tracking-widest tabular-nums">
          DUAL-HEAD NEEDLE SCAN
        </span>
      </div>

      <div className="relative my-auto flex items-center justify-center py-6">
        <svg viewBox="0 0 400 240" className="w-full max-w-[340px] h-auto" fill="none">
          {/* Garment Silhouette on Vacuum Pressing Form */}
          <path
            d="M 140 50 L 170 50 L 190 70 L 260 70 L 280 50 L 310 50 L 340 100 L 290 120 L 275 95 L 275 200 L 175 200 L 175 95 L 160 120 L 110 100 Z"
            fill="rgba(212, 175, 55, 0.05)"
            stroke="#D4AF37"
            strokeWidth="1.2"
          />

          {/* Calibrated Measurement Tape Indicators */}
          {/* Chest width */}
          <line x1="175" y1="110" x2="275" y2="110" stroke="#F7F5F0" strokeWidth="1" strokeDasharray="3 3" />
          <circle cx="175" cy="110" r="3" fill="#F7F5F0" />
          <circle cx="275" cy="110" r="3" fill="#F7F5F0" />
          <text x="225" y="105" fill="#F7F5F0" fontSize="8" textAnchor="middle" fontFamily="sans-serif">CHEST: ±0.5 CM TOL</text>

          {/* Body Length */}
          <line x1="225" y1="50" x2="225" y2="200" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" strokeDasharray="3 3" />
          <text x="240" y="160" fill="#D4AF37" fontSize="8" textAnchor="start" fontFamily="sans-serif">LENGTH: 74 CM</text>

          {/* Barcode Tag Graphic */}
          <rect x="290" y="140" width="60" height="35" rx="3" fill="#18181B" stroke="#D4AF37" strokeWidth="1" />
          <line x1="298" y1="148" x2="298" y2="168" stroke="#F7F5F0" strokeWidth="1.5" />
          <line x1="304" y1="148" x2="304" y2="168" stroke="#F7F5F0" strokeWidth="2" />
          <line x1="310" y1="148" x2="310" y2="168" stroke="#F7F5F0" strokeWidth="1" />
          <line x1="316" y1="148" x2="316" y2="168" stroke="#F7F5F0" strokeWidth="2.5" />
          <line x1="324" y1="148" x2="324" y2="168" stroke="#F7F5F0" strokeWidth="1" />
          <line x1="330" y1="148" x2="330" y2="168" stroke="#F7F5F0" strokeWidth="1.8" />
          <text x="320" y="172" fill="#9E9B94" fontSize="5" textAnchor="middle" fontFamily="monospace">SKU-77042</text>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-3 text-left">
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Tolerance</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">±0.5 cm Spec</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Metal Detection</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">1.0mm Fe Calibrated</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Inspection</span>
          <span className="text-xs text-[#D4AF37] font-medium tabular-nums">AQL 1.5 Standard</span>
        </div>
      </div>
    </div>
  );
};

// Stage 06: Containerized Export & Port Delivery
export const StageDeliveryVisual: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[380px] bg-[#121214] border border-[#D4AF37]/20 relative overflow-hidden flex flex-col justify-between p-6 sm:p-8">
      <div className="flex items-center justify-between z-10">
        <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-medium">
          EXPORT LOGISTICS · CONTAINER LOADOUT
        </span>
        <span className="text-[11px] font-mono text-[#9E9B94] tracking-widest tabular-nums">
          TUTICORIN / CHENNAI PORT
        </span>
      </div>

      <div className="relative my-auto flex items-center justify-center py-6">
        <svg viewBox="0 0 400 240" className="w-full max-w-[340px] h-auto" fill="none">
          {/* Shipping Container Isometric Profile */}
          <g stroke="#D4AF37" strokeWidth="1.2">
            {/* Front Panel */}
            <rect x="100" y="60" width="200" height="120" fill="rgba(212, 175, 55, 0.05)" />
            {/* Corrugated vertical ribs */}
            {Array.from({ length: 9 }).map((_, i) => (
              <line key={`rib-${i}`} x1={120 + i * 19} y1="60" x2={120 + i * 19} y2="180" stroke="rgba(212, 175, 55, 0.3)" />
            ))}
            {/* Tamper-evident Seal Lock */}
            <circle cx="200" cy="120" r="10" fill="#18181B" stroke="#D4AF37" strokeWidth="1.5" />
            <text x="200" y="123" fill="#D4AF37" fontSize="7" textAnchor="middle" fontFamily="sans-serif">SEALED</text>
            <line x1="200" y1="60" x2="200" y2="180" stroke="#F7F5F0" strokeWidth="1.2" />

            {/* Container ID Markings */}
            <text x="110" y="80" fill="#F7F5F0" fontSize="8" fontFamily="monospace">SE-XPRT-40HC</text>
            <text x="110" y="94" fill="#9E9B94" fontSize="7" fontFamily="monospace">MAX GROSS: 30,480 KG</text>
          </g>

          {/* Export Route Vectors */}
          <path d="M 40 210 L 360 210" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="80" cy="210" r="4" fill="#D4AF37" />
          <text x="80" y="224" fill="#D4AF37" fontSize="7" textAnchor="middle" fontFamily="sans-serif">TIRUPUR</text>
          <circle cx="200" cy="210" r="4" fill="#F7F5F0" />
          <text x="200" y="224" fill="#F7F5F0" fontSize="7" textAnchor="middle" fontFamily="sans-serif">VTC PORT</text>
          <circle cx="320" cy="210" r="4" fill="#D4AF37" />
          <text x="320" y="224" fill="#D4AF37" fontSize="7" textAnchor="middle" fontFamily="sans-serif">GLOBAL HUB</text>
        </svg>
      </div>

      <div className="pt-4 border-t border-[#D4AF37]/15 grid grid-cols-3 gap-3 text-left">
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Transit Port</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">Tuticorin & Chennai</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Terms</span>
          <span className="text-xs text-[#F7F5F0] font-medium tabular-nums">FOB / CIF / DDP</span>
        </div>
        <div>
          <span className="block text-[9px] uppercase tracking-wider text-[#9E9B94]">Container Seal</span>
          <span className="text-xs text-[#D4AF37] font-medium tabular-nums">ISO 17712 High-Sec</span>
        </div>
      </div>
    </div>
  );
};

// Product Editorial Silhouette Visual
export const ProductSilhouette: React.FC<{ productId: string; name: string }> = ({ productId, name }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-8 relative overflow-hidden bg-gradient-to-b from-[#18181b] to-[#121214]">
      {/* Background Micro Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      <div className="absolute inset-0 opacity-15 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Vector Line Garment Silhouette */}
      <div className="relative z-10 w-full max-w-[220px] aspect-[4/5] flex items-center justify-center">
        {productId === 't-shirts' && (
          <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
            <path
              d="M 60 40 Q 100 65 140 40 L 180 80 L 155 110 L 140 95 L 140 210 L 60 210 L 60 95 L 45 110 L 20 80 Z"
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            {/* Rib collar */}
            <path d="M 60 40 Q 100 65 140 40" stroke="#F7F5F0" strokeWidth="2.5" />
            {/* Hem line */}
            <line x1="60" y1="202" x2="140" y2="202" stroke="rgba(212, 175, 55, 0.4)" strokeWidth="1" strokeDasharray="3 2" />
          </svg>
        )}

        {productId === 'polo-shirts' && (
          <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
            <path
              d="M 65 40 L 100 50 L 135 40 L 175 75 L 155 105 L 140 95 L 140 210 L 60 210 L 60 95 L 45 105 L 25 75 Z"
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            {/* Flatknit Collar */}
            <polygon points="65,40 100,55 95,85 75,45" fill="rgba(247, 245, 240, 0.1)" stroke="#F7F5F0" strokeWidth="1.2" />
            <polygon points="135,40 100,55 105,85 125,45" fill="rgba(247, 245, 240, 0.1)" stroke="#F7F5F0" strokeWidth="1.2" />
            {/* Placket */}
            <rect x="95" y="55" width="10" height="40" stroke="#D4AF37" strokeWidth="1" fill="#151517" />
            <circle cx="100" cy="65" r="1.5" fill="#D4AF37" />
            <circle cx="100" cy="80" r="1.5" fill="#D4AF37" />
          </svg>
        )}

        {productId === 'hoodies' && (
          <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
            <path
              d="M 70 50 L 130 50 L 180 85 L 155 120 L 145 105 L 145 210 L 55 210 L 55 105 L 45 120 L 20 85 Z"
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            {/* Hood contour */}
            <path d="M 68 50 C 60 15, 140 15, 132 50 Z" stroke="#D4AF37" strokeWidth="1.5" fill="rgba(247, 245, 240, 0.06)" />
            {/* Kangaroo pocket */}
            <path d="M 75 145 L 125 145 L 135 185 L 65 185 Z" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="1.2" fill="none" />
            {/* Rib Hem */}
            <rect x="55" y="198" width="90" height="12" stroke="rgba(247, 245, 240, 0.3)" strokeWidth="1" />
          </svg>
        )}

        {(productId === 'sweatshirts' || productId === 'kidswear') && (
          <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
            <path
              d="M 65 42 Q 100 60 135 42 L 180 85 L 155 120 L 140 100 L 140 210 L 60 210 L 60 100 L 45 120 L 20 85 Z"
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            {/* Crewneck rib with V-notch */}
            <path d="M 65 42 Q 100 60 135 42" stroke="#F7F5F0" strokeWidth="2.5" />
            <polygon points="95,54 105,54 100,64" stroke="rgba(212, 175, 55, 0.8)" strokeWidth="1" fill="none" />
            {/* Cuffs & Hem */}
            <rect x="60" y="198" width="80" height="12" stroke="rgba(247, 245, 240, 0.3)" strokeWidth="1" />
          </svg>
        )}

        {(productId === 'joggers' || productId === 'track-pants') && (
          <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
            <path
              d="M 60 30 L 140 30 L 135 210 L 105 210 L 100 90 L 95 210 L 65 210 Z"
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            {/* Drawstring Waist */}
            <rect x="60" y="30" width="80" height="14" stroke="#F7F5F0" strokeWidth="1.2" fill="rgba(247, 245, 240, 0.08)" />
            <line x1="97" y1="44" x2="94" y2="58" stroke="#D4AF37" strokeWidth="1.5" />
            <line x1="103" y1="44" x2="106" y2="58" stroke="#D4AF37" strokeWidth="1.5" />
            {/* Side pockets */}
            <path d="M 62 48 Q 78 65 72 85" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="1" />
            <path d="M 138 48 Q 122 65 128 85" stroke="rgba(212, 175, 55, 0.6)" strokeWidth="1" />
          </svg>
        )}

        {(productId === 'shorts') && (
          <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
            <path
              d="M 55 40 L 145 40 L 140 150 L 108 150 L 100 85 L 92 150 L 60 150 Z"
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            <rect x="55" y="40" width="90" height="14" stroke="#F7F5F0" strokeWidth="1.2" fill="rgba(247, 245, 240, 0.08)" />
            <line x1="97" y1="54" x2="95" y2="68" stroke="#D4AF37" strokeWidth="1.5" />
            <line x1="103" y1="54" x2="105" y2="68" stroke="#D4AF37" strokeWidth="1.5" />
          </svg>
        )}

        {(productId === 'activewear' || productId === 'loungewear') && (
          <svg viewBox="0 0 200 240" className="w-full h-full" fill="none">
            <path
              d="M 70 45 Q 100 65 130 45 L 165 75 L 145 105 L 135 95 L 135 210 L 65 210 L 65 95 L 55 105 L 35 75 Z"
              fill="rgba(212, 175, 55, 0.05)"
              stroke="#D4AF37"
              strokeWidth="1.5"
            />
            {/* Raglan seam lines */}
            <line x1="70" y1="45" x2="65" y2="95" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1.2" strokeDasharray="3 2" />
            <line x1="130" y1="45" x2="135" y2="95" stroke="rgba(212, 175, 55, 0.5)" strokeWidth="1.2" strokeDasharray="3 2" />
          </svg>
        )}
      </div>

      {/* Technical Spec Footnote */}
      <div className="mt-4 text-center z-10">
        <span className="text-[10px] tracking-[0.2em] uppercase font-mono text-[#D4AF37]/90">
          TECH PACK READY
        </span>
      </div>
    </div>
  );
};
