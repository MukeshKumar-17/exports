import React, { useEffect } from 'react';
import { X, ShieldCheck, FileText, CheckCircle2 } from 'lucide-react';

export type LegalDocType = 'privacy' | 'terms' | 'compliance' | null;

interface EditorialLegalModalProps {
  type: LegalDocType;
  darkMode: boolean;
  onClose: () => void;
}

const LEGAL_CONTENT = {
  privacy: {
    tag: 'GOVERNANCE & DATA',
    title: 'Commercial Privacy & Confidentiality Policy',
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: '1. Proprietary Design & Tech Pack Non-Disclosure',
        body: 'All client technical specifications, pattern files, CAD markers, grading rules, and sample photographs shared with Sowndarya Exports remain the exclusive intellectual property of the client. Under no circumstances are client specifications repurposed, exhibited, or disclosed to third-party brands.',
      },
      {
        heading: '2. Commercial Correspondence & Order Data',
        body: 'Client commercial records, including purchase order volumes, destination ports, and invoicing data, are maintained within secure enterprise infrastructure. We do not sell, barter, or distribute client contact details to external marketing agencies or trade brokers.',
      },
      {
        heading: '3. Fabric Formula & Color Recipe Custody',
        body: 'Custom lab dip recipes, Pantone references, and bespoke yarn blends formulated for specific client production runs are archived under dedicated client ID codes to preserve competitive trade differentiation.',
      },
    ],
  },
  terms: {
    tag: 'COMMERCIAL TERMS',
    title: 'Standard Terms of Manufacturing & Export Supply',
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: '1. Minimum Order Quantities & Capacity Booking',
        body: 'Production runs are scheduled upon tech pack review and signed pro forma invoice. Standard MOQs vary by silhouette (starting from 1,000 pieces per style across designated size breakdowns). Dedicated line reservation requires approved production deposit.',
      },
      {
        heading: '2. Pre-Production Sampling & Sign-Off',
        body: 'Bulk knitting and cutting proceed only after formal written approval of the Pre-Production (PP) sample and lab dips. All production is calibrated to conform to the approved gold seal master sample.',
      },
      {
        heading: '3. Quality Assurance & Tolerance Thresholds',
        body: 'All shipments comply with AQL 1.5 standard inspection criteria. Garments undergo 100% calibration through multi-head calibrated needle detection prior to carton sealing.',
      },
      {
        heading: '4. International Shipping & IncoTerms',
        body: 'Standard export contracts are quoted on FOB (Tuticorin / Chennai Port) or CIF basis. Vessel bookings and port dispatch customs declarations are coordinated through accredited logistics partners.',
      },
    ],
  },
  compliance: {
    tag: 'ETHICAL & REGULATORY',
    title: 'Export Compliance & Manufacturing Standards',
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: '1. Ethical Labor & Fair Workplace Standards',
        body: 'Sowndarya Exports strictly enforces zero-tolerance policies regarding underage labor, forced labor, or unsafe working environments. All workers receive fair statutory compensation, regulated work hours, and workplace health safety protections.',
      },
      {
        heading: '2. Environmental & Chemical Management',
        body: 'Our wet processing and dyeing affiliates operate under zero liquid discharge (ZLD) effluent protocols mandated in Tirupur, utilizing eco-certified dyestuffs compliant with REACH and OEKO-TEX Standard 100 guidelines.',
      },
      {
        heading: '3. Customs & Export Certification',
        body: 'We provide full Certificate of Origin (COO), GSP compliance paperwork, commercial invoices, and packing lists required for seamless customs clearance across European, North American, and Asia-Pacific ports.',
      },
    ],
  },
};

export const EditorialLegalModal: React.FC<EditorialLegalModalProps> = ({
  type,
  darkMode,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  const content = LEGAL_CONTENT[type];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div
        className={`relative z-10 w-full max-w-3xl border shadow-2xl overflow-hidden max-h-[85vh] flex flex-col transition-colors ${
          darkMode
            ? 'bg-[#121214] border-[#D4AF37]/30 text-[#F7F5F0]'
            : 'bg-white border-[#B8972E]/40 text-[#121213]'
        }`}
      >
        {/* Modal Header */}
        <div
          className={`p-6 sm:p-8 border-b flex items-start justify-between ${
            darkMode ? 'border-white/10' : 'border-black/10'
          }`}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37]">
                {content.tag}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-light tracking-tight">
              {content.title}
            </h3>
            <span
              className={`text-xs font-mono mt-1 block ${
                darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
              }`}
            >
              {content.lastUpdated} · Sowndarya Exports, Tirupur, India
            </span>
          </div>

          <button
            onClick={onClose}
            className={`p-2 rounded-xs transition-colors cursor-pointer ${
              darkMode
                ? 'text-[#9E9B94] hover:text-[#F7F5F0] hover:bg-white/5'
                : 'text-[#66645E] hover:text-[#121213] hover:bg-black/5'
            }`}
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          {content.sections.map((section, idx) => (
            <div
              key={idx}
              className={`p-5 border ${
                darkMode
                  ? 'bg-white/[0.02] border-white/5'
                  : 'bg-black/[0.02] border-black/5'
              }`}
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <h4
                    className={`text-sm font-medium tracking-wide mb-2 ${
                      darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
                    }`}
                  >
                    {section.heading}
                  </h4>
                  <p
                    className={`text-xs sm:text-sm font-light leading-relaxed ${
                      darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                    }`}
                  >
                    {section.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div
          className={`p-4 sm:p-6 border-t flex items-center justify-between text-xs ${
            darkMode
              ? 'border-white/10 bg-[#0c0c0d]'
              : 'border-black/10 bg-[#FAF8F5]'
          }`}
        >
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#D4AF37]" />
            <span
              className={`font-mono text-[11px] ${
                darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
              }`}
            >
              Official Documentation
            </span>
          </div>

          <button
            onClick={onClose}
            className={`px-5 py-2.5 text-xs uppercase tracking-[0.18em] font-medium transition-colors cursor-pointer ${
              darkMode
                ? 'bg-[#F7F5F0] text-black hover:bg-[#D4AF37]'
                : 'bg-[#121213] text-white hover:bg-[#B8972E]'
            }`}
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
