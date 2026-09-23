import React from 'react';
import { ProductItem } from '../types';
import { X, ArrowRight, Check } from 'lucide-react';
import { ProductSilhouette } from './VisualArtifacts';

interface ProductDetailModalProps {
  product: ProductItem | null;
  darkMode?: boolean;
  onClose: () => void;
  onRequestSample: (productName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  darkMode = true,
  onClose,
  onRequestSample,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-black/85 backdrop-blur-md animate-fadeIn">
      {/* Click outside to dismiss backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className={`relative z-10 w-full max-w-4xl border overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh] transition-colors ${
        darkMode
          ? 'bg-[#121214] border-[#D4AF37]/30 text-[#F7F5F0]'
          : 'bg-white border-[#B8972E]/40 text-[#121213]'
      }`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 z-20 p-2 transition-colors cursor-pointer ${
            darkMode
              ? 'text-[#9E9B94] hover:text-[#F7F5F0] hover:bg-white/5'
              : 'text-[#66645E] hover:text-[#121213] hover:bg-black/5'
          }`}
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Garment Visual Silhouette */}
        <div className={`md:w-5/12 border-b md:border-b-0 md:border-r flex flex-col justify-between p-6 ${
          darkMode
            ? 'bg-[#0c0c0d] border-white/10'
            : 'bg-[#F2EFE8] border-black/10'
        }`}>
          <div className="flex items-center justify-between text-xs font-mono text-[#D4AF37]">
            <span>ITEM NO. {product.number}</span>
            <span className="uppercase">{product.category}</span>
          </div>

          <div className="my-auto py-8">
            <ProductSilhouette productId={product.id} name={product.name} />
          </div>

          <div className={`text-[11px] text-center font-mono ${darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'}`}>
            MANUFACTURED IN TIRUPUR, INDIA
          </div>
        </div>

        {/* Right Column: Specification & Technical Parameters */}
        <div className="md:w-7/12 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#D4AF37] block mb-2 font-medium">
              PRODUCTION SPECIFICATION
            </span>
            <h3 className={`text-2xl sm:text-3xl font-light tracking-tight mb-4 ${
              darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'
            }`}>
              {product.name}
            </h3>

            <p className={`text-sm font-light leading-relaxed mb-6 ${
              darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
            }`}>
              {product.description}
            </p>

            {/* Spec Attributes Grid */}
            <div className={`grid grid-cols-2 gap-4 py-4 border-y mb-6 text-xs ${
              darkMode ? 'border-white/10' : 'border-black/10'
            }`}>
              <div>
                <span className={`block text-[10px] uppercase font-mono tracking-wider mb-1 ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  Weight / GSM
                </span>
                <span className={`font-medium ${darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'}`}>
                  {product.gsm}
                </span>
              </div>
              <div>
                <span className={`block text-[10px] uppercase font-mono tracking-wider mb-1 ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  Composition
                </span>
                <span className={`font-medium ${darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'}`}>
                  {product.composition}
                </span>
              </div>
              <div>
                <span className={`block text-[10px] uppercase font-mono tracking-wider mb-1 ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  Available Fits
                </span>
                <span className={`font-medium ${darkMode ? 'text-[#F7F5F0]' : 'text-[#121213]'}`}>
                  {product.fit}
                </span>
              </div>
              <div>
                <span className={`block text-[10px] uppercase font-mono tracking-wider mb-1 ${
                  darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
                }`}>
                  Minimum Order (MOQ)
                </span>
                <span className="font-medium text-[#D4AF37]">{product.moq}</span>
              </div>
            </div>

            {/* Construction Highlights */}
            <div className="mb-6">
              <span className={`block text-[10px] uppercase tracking-wider mb-3 font-mono ${
                darkMode ? 'text-[#9E9B94]' : 'text-[#66645E]'
              }`}>
                CONSTRUCTION STANDARDS
              </span>
              <ul className="space-y-2">
                {product.details.map((detail, idx) => (
                  <li key={idx} className={`flex items-start gap-2.5 text-xs ${
                    darkMode ? 'text-[#F7F5F0]/90' : 'text-[#121213]/90'
                  }`}>
                    <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action CTAs */}
          <div className={`pt-4 border-t flex flex-col sm:flex-row gap-3 ${
            darkMode ? 'border-white/10' : 'border-black/10'
          }`}>
            <button
              onClick={() => {
                onClose();
                onRequestSample(product.name);
              }}
              className={`flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 transition-colors text-xs uppercase tracking-[0.18em] font-semibold cursor-pointer ${
                darkMode
                  ? 'bg-[#F7F5F0] text-black hover:bg-[#D4AF37]'
                  : 'bg-[#121213] text-[#FAF8F5] hover:bg-[#B8972E] hover:text-black'
              }`}
            >
              <span>Request Sample / Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={onClose}
              className={`py-3 px-4 border transition-colors text-xs uppercase tracking-[0.18em] cursor-pointer ${
                darkMode
                  ? 'border-white/20 text-[#9E9B94] hover:text-[#F7F5F0] hover:border-white/40'
                  : 'border-black/20 text-[#66645E] hover:text-[#121213] hover:border-black/40'
              }`}
            >
              Back to Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
