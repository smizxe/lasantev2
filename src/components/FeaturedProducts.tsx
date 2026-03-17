import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from '../i18n/routing';
import FadeIn from './animations/FadeIn';

const products = [
  {
    name: 'Diamond Wool Blanket — Thao',
    price: '1,250,000₫',
    image: 'https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405585165267_a7a888084d3e236746798a03ea582f14-247x296.jpg',
    tag: 'Best Seller',
    moq: 'MOQ: 50 pcs',
  },
  {
    name: 'Diamond Wool Blanket — Kim',
    price: '1,450,000₫',
    oldPrice: '1,850,000₫',
    image: 'https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405581111937_5e70f69d688dbdfd0a9068dd11b6b633-247x296.jpg',
    tag: '−20%',
    moq: 'MOQ: 50 pcs',
  },
  {
    name: 'Diamond Wool Blanket — Tuyết',
    price: '1,350,000₫',
    image: 'https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405578036303_128672caf32438d267bd8489cda60305-247x296.jpg',
    tag: 'New Arrival',
    moq: 'MOQ: 50 pcs',
  },
  {
    name: 'Premium Fleece Blanket — Sương Lam',
    price: '1,600,000₫',
    image: 'https://lasantevietnam.vn/wp-content/uploads/2025/12/z7288035982539_6c09f3c8aa6de7ef42b22b427f8ffdb3-247x296.jpg',
    tag: 'Limited',
    moq: 'MOQ: 30 pcs',
  },
];

export default function FeaturedProducts() {
  return (
    <section id="products" className="py-28 bg-[#FAF7F2]">
      <FadeIn className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="label text-[#B8924A] mb-4">— Wholesale Catalogue</p>
            <h2 className="font-serif font-light text-[#1A1614] leading-[0.92]" style={{fontSize:'clamp(2.4rem,4vw,3.8rem)'}}>
              Featured Products
            </h2>
          </div>
          <div className="flex gap-8 text-[11px] font-sans tracking-[0.14em] uppercase">
            {['All', 'Blankets', 'Bedsheets', 'Mattresses'].map((f, i) => (
              <button key={f} className={`pb-1 transition-colors duration-300 ${i === 0 ? 'text-[#B8924A] border-b border-[#B8924A]' : 'text-[#7A6E65] hover:text-[#2E2924]'}`}>
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* Product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="group">
              {/* Image */}
              <div className="relative bg-[#F0EAE0] overflow-hidden aspect-[4/5] mb-5">
                {/* Tag */}
                <span className={`absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-sans tracking-widest uppercase ${p.tag.startsWith('−') ? 'bg-[#B8924A] text-white' : 'bg-[#1A1614] text-[#D4AA6E]'}`}>
                  {p.tag}
                </span>
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Hover overlay — wholesale note */}
                <div className="absolute inset-0 bg-[#1A1614]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                  <Link href="/contact" className="btn-gold text-[10px] py-2.5 px-5">
                    Request Wholesale
                  </Link>
                </div>
              </div>

              {/* Info */}
              <div>
                <div className="flex items-center gap-0.5 text-[#B8924A] mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} strokeWidth={0} className="w-3.5 h-3.5 fill-current" />)}
                  <span className="font-sans text-[11px] text-[#9A8E85] ml-2">(42)</span>
                </div>
                <h3 className="font-serif font-light text-[#1A1614] text-lg mb-1 group-hover:text-[#B8924A] transition-colors duration-300 leading-snug">{p.name}</h3>
                <p className="label text-[#9A8E85] mb-2" style={{fontSize:'0.6rem'}}>{p.moq}</p>
                <div className="flex items-center gap-3">
                  <span className={`font-sans font-medium text-base ${p.oldPrice ? 'text-[#B8924A]' : 'text-[#2E2924]'}`}>{p.price}</span>
                  {p.oldPrice && <span className="font-sans text-sm text-[#9A8E85] line-through">{p.oldPrice}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-[#E8DFD4]">
          <p className="font-serif font-light text-[#4A3F38] text-xl">
            Wholesale pricing available for orders above minimum quantities.
          </p>
          <Link href="/products" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.14em] uppercase text-[#2E2924] hover:text-[#B8924A] transition-colors duration-300 group whitespace-nowrap">
            Full Catalogue
            <ArrowUpRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>
      </FadeIn>
    </section>
  );
}
