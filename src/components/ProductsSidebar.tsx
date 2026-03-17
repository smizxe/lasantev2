"use client";

import { useTranslations } from 'next-intl';
import { ChevronRight } from 'lucide-react';
import { useState } from 'react';

const CATEGORIES = [
  'duvetCover',
  'bedsheets',
  'pillow',
  'mattressProtector',
  'blanket',
  'beddingSet'
];

export default function ProductsSidebar() {
  const t = useTranslations('Categories');
  const [active, setActive] = useState('all');

  return (
    <div className="w-full lg:w-64 shrink-0 bg-white border border-[#E8DFD4] rounded-sm sticky top-24 h-fit">
      <div className="bg-[#1A1614] p-4 rounded-t-sm">
        <h3 className="font-sans font-medium text-white tracking-wide">{t('productCategories')}</h3>
      </div>
      <div className="flex flex-col">
        {/* All Products */}
        <button 
          onClick={() => setActive('all')}
          className={`flex items-center justify-between p-4 border-b border-[#F0EAE0] last:border-0 transition-colors duration-300 text-left ${active === 'all' ? 'text-[#B8924A] bg-[#FAF7F2]' : 'text-[#4A3F38] hover:text-[#B8924A] hover:bg-[#FAF7F2]'}`}
        >
          <span className="font-sans font-light text-sm">{t('allProducts')}</span>
          <ChevronRight strokeWidth={1} className="w-4 h-4 opacity-50" />
        </button>

        {/* Individual Categories */}
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`flex items-center justify-between p-4 border-b border-[#F0EAE0] last:border-0 transition-colors duration-300 text-left ${active === cat ? 'text-[#B8924A] bg-[#FAF7F2]' : 'text-[#4A3F38] hover:text-[#B8924A] hover:bg-[#FAF7F2]'}`}
          >
            <span className="font-sans font-light text-sm">{t(cat)}</span>
            <ChevronRight strokeWidth={1} className="w-4 h-4 opacity-50" />
          </button>
        ))}
      </div>
    </div>
  );
}
