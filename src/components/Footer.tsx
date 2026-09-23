import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { ArrowUp } from 'lucide-react';
import { EditorialLegalModal, LegalDocType } from './EditorialLegalModal';

interface FooterProps {
  darkMode?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ darkMode = true }) => {
  const [activeLegalDoc, setActiveLegalDoc] = useState<LegalDocType>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'The Journey', href: '#journey' },
    { label: 'Products', href: '#products' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Brands', href: '#brands' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={`w-full py-20 sm:py-28 border-t transition-colors duration-300 ${
      darkMode
        ? 'bg-[#FAF8F5] text-[#121213] border-white/10'
        : 'bg-[#121214] text-[#F7F5F0] border-black/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Row */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b ${
          darkMode ? 'border-black/10' : 'border-white/10'
        }`}>
          {/* Left Column: Brand & Mandate */}
          <div className="md:col-span-6 space-y-4">
            <h3 className={`text-xl sm:text-2xl font-semibold tracking-[0.2em] uppercase ${
              darkMode ? 'text-[#121213]' : 'text-[#F7F5F0]'
            }`}>
              {COMPANY_INFO.name}
            </h3>
            <p className={`text-sm sm:text-base max-w-md font-light leading-relaxed ${
              darkMode ? 'text-[#66645E]' : 'text-[#9E9B94]'
            }`}>
              Garment and textile manufacturing for brands, retailers and private-label buyers.
            </p>
            <div className={`pt-2 text-xs font-mono tracking-wider uppercase ${
              darkMode ? 'text-[#8C8270]' : 'text-[#D4AF37]'
            }`}>
              Tirupur, Tamil Nadu · South India Export Belt
            </div>

            {/* Direct Contact Links */}
            <div className="pt-3 flex flex-col sm:flex-row sm:items-center gap-y-2 gap-x-6 text-xs font-mono">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className={`transition-colors underline-offset-4 hover:underline ${
                  darkMode ? 'text-[#121213] hover:text-[#B8972E]' : 'text-[#F7F5F0] hover:text-[#D4AF37]'
                }`}
              >
                {COMPANY_INFO.email}
              </a>
              <span className={darkMode ? 'text-black/30 hidden sm:inline' : 'text-white/30 hidden sm:inline'}>·</span>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className={`transition-colors tabular-nums underline-offset-4 hover:underline ${
                  darkMode ? 'text-[#121213] hover:text-[#B8972E]' : 'text-[#F7F5F0] hover:text-[#D4AF37]'
                }`}
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-8">
            <nav className="flex flex-wrap gap-x-8 gap-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs uppercase tracking-[0.18em] transition-colors relative py-1 group font-medium ${
                    darkMode ? 'text-[#66645E] hover:text-[#121213]' : 'text-[#9E9B94] hover:text-[#F7F5F0]'
                  }`}
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </nav>

            {/* Back to top affordance */}
            <button
              onClick={scrollToTop}
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer group ${
                darkMode ? 'text-[#66645E] hover:text-[#121213]' : 'text-[#9E9B94] hover:text-[#F7F5F0]'
              }`}
            >
              <span>Back to Top</span>
              <div className={`w-7 h-7 rounded-full border flex items-center justify-center transition-colors ${
                darkMode ? 'border-black/15 group-hover:border-black' : 'border-white/15 group-hover:border-white'
              }`}>
                <ArrowUp className="w-3.5 h-3.5" />
              </div>
            </button>
          </div>
        </div>

        {/* Bottom Legal & Copyright Strip */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-light ${
          darkMode ? 'text-[#8C8270]' : 'text-[#9E9B94]'
        }`}>
          <p>© 2026 Sowndarya Exports. All rights reserved.</p>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider font-mono">
            <button
              type="button"
              onClick={() => setActiveLegalDoc('privacy')}
              className={`transition-colors cursor-pointer underline-offset-4 hover:underline ${
                darkMode ? 'hover:text-[#121213]' : 'hover:text-[#F7F5F0]'
              }`}
            >
              Privacy Policy
            </button>
            <span className={darkMode ? 'text-black/20' : 'text-white/20'}>/</span>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('terms')}
              className={`transition-colors cursor-pointer underline-offset-4 hover:underline ${
                darkMode ? 'hover:text-[#121213]' : 'hover:text-[#F7F5F0]'
              }`}
            >
              Terms of Supply
            </button>
            <span className={darkMode ? 'text-black/20' : 'text-white/20'}>/</span>
            <button
              type="button"
              onClick={() => setActiveLegalDoc('compliance')}
              className={`transition-colors cursor-pointer underline-offset-4 hover:underline ${
                darkMode ? 'hover:text-[#121213]' : 'hover:text-[#F7F5F0]'
              }`}
            >
              Export Compliance
            </button>
          </div>
        </div>
      </div>

      {/* Legal & Governance Policy Modal */}
      <EditorialLegalModal
        type={activeLegalDoc}
        darkMode={darkMode}
        onClose={() => setActiveLegalDoc(null)}
      />
    </footer>
  );
};
