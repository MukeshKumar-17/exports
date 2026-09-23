import React, { useState } from 'react';
import { PRODUCTS } from '../data/companyData';
import { ProductItem } from '../types';
import { ProductSilhouette } from './VisualArtifacts';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import {
  SectionHeaderMotion,
  editorialEyebrow,
  editorialHeadline,
  editorialSubtext,
  motion,
} from './EditorialMotion';

interface ProductsSectionProps {
  darkMode: boolean;
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ darkMode, onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Knitwear', 'Fleece & Hoodies', 'Bottoms', 'Active & Specialty'];

  const filteredProducts =
    selectedCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="products"
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
              WHAT WE PRODUCE
            </motion.span>
            <motion.h2 variants={editorialHeadline} className={`text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight ${
              darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
            }`}>
              Knitwear, <br />
              <span className="text-[#D4AF37] italic font-serif">built to your specification.</span>
            </motion.h2>
          </div>

          <motion.p variants={editorialSubtext} className={`text-sm sm:text-base max-w-md font-light leading-relaxed ${
            darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
          }`}>
            Every product is developed around your required fabric, fit, construction, colour and production quantity.
          </motion.p>
        </SectionHeaderMotion>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 my-10">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.16em] transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? darkMode
                      ? 'border-[#D4AF37] bg-[#D4AF37]/15 text-[#F7F5F0] font-medium'
                      : 'border-[#B8972E] bg-[#B8972E]/15 text-[#121213] font-medium'
                    : darkMode
                    ? 'border-white/10 text-[#9E9B94] hover:text-[#F7F5F0] hover:border-white/30 bg-white/[0.02]'
                    : 'border-black/10 text-[#66645E] hover:text-[#121213] hover:border-black/30 bg-black/[0.02]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Large Editorial Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product)}
                className={`group relative border transition-all duration-400 flex flex-col justify-between overflow-hidden cursor-pointer ${
                  darkMode
                    ? 'bg-[#121214] border-white/10 hover:border-[#D4AF37]/50'
                    : 'bg-white border-black/10 hover:border-[#B8972E]/60 shadow-xs'
                }`}
              >
                {/* Top Bar on Card: Number & Category */}
                <div className="p-6 pb-2 flex items-center justify-between text-xs font-mono">
                  <span className="text-[#D4AF37] tracking-widest font-semibold">
                    {product.number}
                  </span>
                  <span className={`text-[10px] uppercase tracking-[0.2em] ${
                    darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                  }`}>
                    {product.gsm}
                  </span>
                </div>

                {/* Center Product Visual with subtle hover zoom */}
                <div className="relative w-full aspect-[4/3] sm:aspect-square flex items-center justify-center p-6 overflow-hidden">
                  <div className="w-full h-full transform transition-transform duration-500 ease-out group-hover:scale-105">
                    <ProductSilhouette productId={product.id} name={product.name} />
                  </div>
                </div>

                {/* Bottom Content */}
                <div className={`p-6 pt-3 border-t flex flex-col justify-between transition-colors ${
                  darkMode
                    ? 'border-white/5 bg-[#141417] group-hover:bg-[#18181c]'
                    : 'border-black/5 bg-[#FAF8F5] group-hover:bg-[#F2EFE8]'
                }`}>
                  <div className="flex items-center justify-between">
                    <div className="transform transition-transform duration-300 group-hover:-translate-y-1">
                      <h3 className={`text-xl font-light tracking-tight transition-colors ${
                        darkMode
                          ? 'text-[#F7F5F0] group-hover:text-[#D4AF37]'
                          : 'text-[#121213] group-hover:text-[#B8972E]'
                      }`}>
                        {product.name}
                      </h3>
                      <p className={`text-xs font-mono tracking-wide mt-1 truncate max-w-[220px] ${
                        darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                      }`}>
                        {product.composition}
                      </p>
                    </div>

                    {/* Small arrow icon revealing on hover */}
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      darkMode
                        ? 'border-white/10 text-[#9E9B94] group-hover:border-[#D4AF37] group-hover:text-[#D4AF37] group-hover:bg-[#D4AF37]/10'
                        : 'border-black/10 text-[#66645E] group-hover:border-[#B8972E] group-hover:text-[#B8972E] group-hover:bg-[#B8972E]/10'
                    }`}>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Customization Callout */}
        <div className={`mt-16 p-8 border flex flex-col md:flex-row md:items-center justify-between gap-6 ${
          darkMode
            ? 'border-[#D4AF37]/20 bg-[#121214]'
            : 'border-[#B8972E]/30 bg-white shadow-xs'
        }`}>
          <div>
            <span className="text-[10px] uppercase font-mono tracking-[0.25em] text-[#D4AF37] block mb-1">
              CUSTOM DEVELOPMENT
            </span>
            <h4 className={`text-lg sm:text-xl font-light ${darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'}`}>
              Need a bespoke knit blend, custom garment dye, or proprietary silhouette?
            </h4>
            <p className={`text-xs sm:text-sm mt-1 font-light ${darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'}`}>
              We engineer custom lab dips, pattern digitizing, and pre-production prototypes directly from your design files.
            </p>
          </div>

          <button
            onClick={() => onSelectProduct(PRODUCTS[0])}
            className={`inline-flex items-center gap-2 px-5 py-3 border transition-colors text-xs uppercase tracking-[0.18em] font-medium shrink-0 cursor-pointer ${
              darkMode
                ? 'border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black'
                : 'border-[#B8972E] text-[#B8972E] hover:bg-[#B8972E] hover:text-white'
            }`}
          >
            <span>View Technical Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
};
