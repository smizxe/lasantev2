import { Link } from '../i18n/routing';
import { ArrowUpRight } from 'lucide-react';

export default function Lookbook() {
  return (
    <section className="py-28 bg-[#F0EAE0]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="text-center mb-16">
          <p className="label text-[#B8924A] mb-4">— The Collection in Context</p>
          <h2 className="font-serif font-light text-[#1A1614] leading-[0.92]" style={{fontSize:'clamp(2.4rem,4vw,3.8rem)'}}>
            Inspiration Gallery
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
          {/* Large left — Parisian Suite */}
          <div className="md:col-span-7 relative overflow-hidden group bg-[#1A1614]" style={{minHeight:'480px'}}>
            <img
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"
              alt="The Parisian Suite"
              className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:opacity-50 group-hover:scale-[1.04] transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/70 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 lg:p-10">
              <p className="label text-[#B8924A] mb-3">— No. 01</p>
              <h3 className="font-serif font-light text-white text-3xl lg:text-4xl leading-tight mb-4">The Parisian Suite<br />— French Style Collection</h3>
              <Link href="/products" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.14em] uppercase text-white/70 hover:text-white transition-colors duration-300 group/link">
                View Details
                <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right column — 2 stacked */}
          <div className="md:col-span-5 grid grid-rows-2 gap-3">
            <div className="relative overflow-hidden group bg-[#1A1614]" style={{minHeight:'235px'}}>
              <img
                src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=600"
                alt="Modern Minimalist"
                className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:opacity-50 group-hover:scale-[1.06] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="label text-[#B8924A] mb-2">— No. 02</p>
                <h3 className="font-serif font-light text-white text-xl leading-tight">Modern Minimalist</h3>
              </div>
            </div>

            <div className="relative overflow-hidden group bg-[#1A1614]" style={{minHeight:'235px'}}>
              <img
                src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600"
                alt="Cozy Winter Collection"
                className="w-full h-full object-cover absolute inset-0 opacity-70 group-hover:opacity-50 group-hover:scale-[1.06] transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614]/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="label text-[#B8924A] mb-2">— No. 03</p>
                <h3 className="font-serif font-light text-white text-xl leading-tight">Cozy Winter Collection</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
