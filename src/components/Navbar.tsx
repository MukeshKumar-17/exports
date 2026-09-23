import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
  onOpenEnquiry: (productName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode, onOpenEnquiry }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? darkMode
              ? 'bg-[#0c0c0d]/90 backdrop-blur-md border-b border-[#D4AF37]/15 py-4'
              : 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-black/10 py-4 shadow-xs'
            : 'bg-transparent border-b border-white/5 py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Typography-based Minimal Wordmark */}
          <a
            href="#top"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-sm sm:text-base font-semibold tracking-[0.2em] uppercase transition-colors shrink-0 cursor-pointer ${
              darkMode ? 'text-[#F7F5F0] hover:text-[#D4AF37]' : 'text-[#121213] hover:text-[#B8972E]'
            }`}
          >
            {COMPANY_INFO.name}
          </a>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-xs uppercase tracking-[0.18em] transition-colors relative py-1 group ${
                  darkMode ? 'text-[#9E9B94] hover:text-[#F7F5F0]' : 'text-[#66645E] hover:text-[#121213]'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Zone 3: Actions (Theme Toggle & CTA) */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Dark / Light Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 transition-colors rounded-sm border ${
                darkMode
                  ? 'border-white/10 text-[#9E9B94] hover:text-[#F7F5F0] hover:border-[#D4AF37]/30 bg-white/5'
                  : 'border-black/10 text-[#66645E] hover:text-[#121213] hover:border-black/30 bg-black/5'
              }`}
              title={darkMode ? 'Switch to Light Editorial Mode' : 'Switch to Dark Cinematic Mode'}
              aria-label="Toggle visual theme"
            >
              {darkMode ? <Sun className="w-4 h-4 text-[#D4AF37]" /> : <Moon className="w-4 h-4 text-[#121213]" />}
            </button>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenEnquiry()}
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs uppercase tracking-[0.16em] font-medium transition-all duration-200 ${
                darkMode
                  ? 'bg-[#F7F5F0] text-[#0c0c0d] hover:bg-[#D4AF37] hover:text-black'
                  : 'bg-[#121213] text-[#FAF8F5] hover:bg-[#B8972E] hover:text-black'
              }`}
            >
              <span>Enquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 transition-colors ${
                darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
              }`}
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Clean Fullscreen Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between p-8 pt-28 transition-all ${
            darkMode ? 'bg-[#0c0c0d]' : 'bg-[#FAF8F5]'
          }`}
        >
          <nav className="flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37]">
              NAVIGATION
            </span>
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-2xl font-light tracking-wide flex items-center justify-between border-b pb-4 ${
                  darkMode
                    ? 'border-white/10 text-[#F7F5F0] hover:text-[#D4AF37]'
                    : 'border-black/10 text-[#121213] hover:text-[#B8972E]'
                }`}
              >
                <span>{link.label}</span>
                <span className="text-xs font-mono text-[#D4AF37]">0{idx + 1}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className={`w-full py-4 text-center text-xs uppercase tracking-[0.2em] font-medium ${
                darkMode
                  ? 'bg-[#F7F5F0] text-black hover:bg-[#D4AF37]'
                  : 'bg-black text-white hover:bg-[#B8972E]'
              }`}
            >
              Start a Conversation
            </button>
            <div className="flex flex-col items-center gap-1.5 pt-2 text-xs font-mono">
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-[#D4AF37] hover:underline"
              >
                {COMPANY_INFO.email}
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9+]/g, '')}`}
                className={`transition-colors tabular-nums ${
                  darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
                }`}
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
            <p className="text-[11px] text-[#9E9B94] text-center tracking-wider uppercase">
              Tirupur, Tamil Nadu · India
            </p>
          </div>
        </div>
      )}
    </>
  );
};
