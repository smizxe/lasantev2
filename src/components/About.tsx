import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const STATS = [
  { num: '10+',  label: 'Years in Operation'        },
  { num: '500+', label: 'Distribution Partners'     },
  { num: '1M+',  label: 'Products Delivered Yearly' },
  { num: '100%', label: 'Closed-Loop Manufacturing' },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* Images — editorial overlapping grid */}
          <div className="relative">
            <img
              src="/images/about-factory.png"
              alt="La Santé manufacturing facility"
              className="w-full h-[420px] object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
              alt="La Santé showroom"
              className="absolute -bottom-10 -right-6 w-2/3 h-56 object-cover border-4 border-[#FAF7F2] shadow-2xl hidden md:block"
            />
            {/* Floating badge */}
            <div className="absolute -top-4 -left-4 bg-[#1A1614] text-white px-6 py-5 hidden md:block">
              <p className="font-serif font-light text-5xl text-[#D4AA6E] leading-none">10+</p>
              <p className="label text-[#9A8E85] mt-1" style={{fontSize:'0.62rem'}}>Years of Excellence</p>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:pl-6">
            <p className="label text-[#B8924A] mb-5">— About the Manufacturer</p>
            <h2 className="font-serif font-light text-[#1A1614] leading-[0.95] mb-8" style={{fontSize:'clamp(2.6rem,4vw,4rem)'}}>
              Sammy Vietnam Co., Ltd.<br />
              <span className="text-[#B8924A]">Maker of La Santé &amp; LaTalia</span>
            </h2>

            <p className="font-sans font-light text-[#4A3F38] text-lg leading-loose mb-5">
              We are the exclusive manufacturer and distributor of two premium brands —
              <strong className="font-normal text-[#2E2924]"> La Santé De Paris</strong> and{' '}
              <strong className="font-normal text-[#2E2924]"> LaTalia (UK)</strong>. Our product range covers
              blankets, bedsheets, pillows, and mattresses crafted in authentic French style.
            </p>
            <p className="font-sans font-light text-[#4A3F38] text-lg leading-loose mb-10">
              Our Hanoi facility runs a fully closed-loop, automated production system — from raw cotton
              processing and quilting to final packaging — guaranteeing hygiene, consistency, and export-grade
              quality in every single unit. <strong className="font-normal text-[#2E2924]">No intermediaries.
              Direct from our factory to your market.</strong>
            </p>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-0 border border-[#E8DFD4] mb-10">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-6 ${i % 2 === 0 ? 'border-r border-[#E8DFD4]' : ''} ${i < 2 ? 'border-b border-[#E8DFD4]' : ''} group cursor-default`}
                >
                  <p className="font-serif font-light text-[#B8924A] text-4xl leading-none mb-1 group-hover:text-[#1A1614] transition-colors duration-300">{s.num}</p>
                  <p className="label text-[#7A6E65]" style={{fontSize:'0.65rem'}}>{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/about-us"
              className="inline-flex items-center gap-3 font-sans text-[12px] font-500 tracking-[0.14em] uppercase text-[#2E2924] hover:text-[#B8924A] transition-colors duration-300 group"
            >
              Our Full Story
              <ArrowRight strokeWidth={1.5} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
