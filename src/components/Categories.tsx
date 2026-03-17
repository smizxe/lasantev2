import { ArrowUpRight } from 'lucide-react';
import { Link } from '../i18n/routing';

const categories = [
  {
    name: 'Winter Blankets',
    desc: 'French-weave wool & fleece',
    image: 'https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405581111937_5e70f69d688dbdfd0a9068dd11b6b633-247x296.jpg',
    href: '/products',
  },
  {
    name: 'Premium Bedsheets',
    desc: 'Tencel · Modal · Egyptian Cotton',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp',
    href: '/products',
  },
  {
    name: 'Ergonomic Pillows',
    desc: 'Orthopaedic & soft-fill options',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg',
    href: '/products',
  },
  {
    name: 'Quality Mattresses',
    desc: 'Hotel-grade comfort & support',
    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600',
    href: '/products',
  },
];

export default function Categories() {
  return (
    <section className="py-28 bg-[#F0EAE0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header row */}
        <div className="flex items-end justify-between mb-16">
          <div>
            <p className="label text-[#B8924A] mb-4">— Product Range</p>
            <h2 className="font-serif font-light text-[#1A1614] leading-[0.92]" style={{fontSize:'clamp(2.4rem,4vw,3.8rem)'}}>
              Our Collections
            </h2>
          </div>
          <Link
            href="/products"
            className="hidden md:inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.14em] uppercase text-[#4A3F38] hover:text-[#B8924A] transition-colors duration-300 group"
          >
            Browse All
            <ArrowUpRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {categories.map((cat, idx) => (
            <Link
              key={idx}
              href={cat.href}
              className={`group relative overflow-hidden bg-[#1A1614] ${idx === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`relative overflow-hidden ${idx === 0 ? 'aspect-[16/9] lg:aspect-[4/3]' : 'aspect-[3/4]'}`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-75 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/80 via-transparent to-transparent" />

                <div className="absolute bottom-0 left-0 p-5 lg:p-6">
                  <p className="font-serif font-light text-white text-xl lg:text-2xl leading-tight mb-1">{cat.name}</p>
                  <p className="label text-[#D4AA6E]" style={{fontSize:'0.6rem'}}>{cat.desc}</p>
                </div>

                <div className="absolute top-5 right-5 w-8 h-8 border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5 text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
