import { Link } from '../i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface ProductCardProps {
  product: {
    name: string;
    price?: string;
    oldPrice?: string;
    image: string;
    tag?: string;
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const t = useTranslations('ProductCard');

  return (
    <div className="group border border-[#E8DFD4] bg-white hover:border-[#D4AA6E] transition-colors duration-300">
      {/* Image container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#F0EAE0]">
        {product.tag && (
          <span className={`absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-sans tracking-widest uppercase ${product.tag === 'Sale' ? 'bg-[#B8924A] text-white' : 'bg-[#1A1614] text-[#D4AA6E]'}`}>
            {product.tag}
          </span>
        )}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-[#1A1614]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <Link href="/contact" className="btn-gold text-[10px] py-2.5 px-5">
            {t('requestQuote')}
          </Link>
        </div>
      </div>

      {/* Info container */}
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-serif font-light text-[#1A1614] text-lg leading-snug group-hover:text-[#B8924A] transition-colors duration-300 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-end justify-between mt-auto pt-2">
          <div className="flex flex-col">
            <Link href="/contact" className="font-sans font-medium text-sm text-[#B8924A] hover:text-[#D4AA6E] transition-colors border-b border-[#B8924A]/30 hover:border-[#D4AA6E] pb-0.5">
              {t('contactUs')}
            </Link>
          </div>
          <Link href="/contact" className="text-[#B8924A] opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:scale-110">
            <ArrowUpRight strokeWidth={1.5} className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
