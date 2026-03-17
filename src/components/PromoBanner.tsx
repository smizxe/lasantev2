import { Link } from '../i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './animations/FadeIn';

export default function PromoBanner() {
  return (
    <section className="py-16 bg-[#FAF7F2]">
      <FadeIn className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden h-[420px] lg:h-[500px] flex items-end group">
          <img
            src="/images/products-banner.png"
            alt="La Santé Export Collection"
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.03] transition-transform duration-1000"
          />
          {/* Gradient from left */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1614]/90 via-[#1A1614]/50 to-transparent" />
          {/* Thin top line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#B8924A]/60 to-transparent" />

          <div className="relative z-10 p-8 lg:p-14 max-w-xl">
            <p className="label text-[#B8924A] mb-5">— New Season Export Programme</p>
            <h2 className="font-serif font-light text-white leading-[0.92] mb-6" style={{fontSize:'clamp(2.4rem,4.5vw,4rem)'}}>
              Holiday Collection<br />
              <span className="text-[#D4AA6E]">Now Available for Wholesale</span>
            </h2>
            <p className="font-sans font-light text-[#C8B8A8] text-base leading-loose mb-8 max-w-md">
              Secure your Q4 inventory with La Santé's limited-edition seasonal collection.
              Premium packaging, export-ready documentation, flexible MOQ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">
                Request Wholesale Access
              </Link>
              <Link href="/products" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.14em] uppercase text-white/60 hover:text-white transition-colors duration-300 group/link pt-3 sm:pt-0">
                View Full Catalogue
                <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
