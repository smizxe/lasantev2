import Link from 'next/link';
import { ArrowUpRight, CheckCircle } from 'lucide-react';

const perks = [
  'Competitive FOB export pricing with volume tiers',
  'Flexible MOQ — from boutique to mass retail',
  'Private label & OEM capability available',
  'Dedicated export account manager',
  'TÜV & Quatest 1 certified documentation included',
  'Full marketing assets & product photography',
];

export default function DealerCTA() {
  return (
    <section id="dealer" className="py-28 bg-[#F0EAE0] relative overflow-hidden">
      {/* Decorative large background letter */}
      <div
        className="absolute right-0 top-0 h-full flex items-center opacity-[0.04] pointer-events-none select-none"
        aria-hidden
      >
        <span className="font-serif font-light text-[#1A1614]" style={{fontSize:'40vw', lineHeight:1}}>L</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — copy */}
          <div>
            <p className="label text-[#B8924A] mb-6">— Become a Distribution Partner</p>
            <h2 className="font-serif font-light text-[#1A1614] leading-[0.92] mb-8" style={{fontSize:'clamp(2.8rem,5vw,5rem)'}}>
              Your Next Premium<br />
              Bedding Supplier<br />
              <span className="text-[#B8924A]">Is Ready.</span>
            </h2>
            <p className="font-sans font-light text-[#4A3F38] text-lg leading-loose mb-10 max-w-md">
              Whether you're a hotel chain, retail network, or international distributor —
              La Santé offers custom sourcing solutions, private label capability, and a
              dedicated export team. Let's build something exceptional together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-gold">
                Start a Partnership
                <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
              </Link>
              <Link href="/about-us" className="btn-dark">
                Our Credentials
              </Link>
            </div>
          </div>

          {/* Right — perks */}
          <div className="bg-[#FAF7F2] p-10 lg:p-12 border border-[#E8DFD4]">
            <p className="label text-[#B8924A] mb-8">What's included in every partnership</p>
            <ul className="flex flex-col gap-5">
              {perks.map((perk) => (
                <li key={perk} className="flex items-start gap-4">
                  <CheckCircle strokeWidth={1} className="w-5 h-5 text-[#B8924A] shrink-0 mt-0.5" />
                  <span className="font-sans font-light text-[#2E2924] text-base leading-relaxed">{perk}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-8 border-t border-[#E8DFD4] flex items-center gap-4">
              <div>
                <p className="font-serif font-light text-[#B8924A] text-4xl leading-none">500+</p>
                <p className="label text-[#7A6E65] mt-1" style={{fontSize:'0.6rem'}}>Active partners worldwide</p>
              </div>
              <div className="w-px h-10 bg-[#E8DFD4]" />
              <div>
                <p className="font-serif font-light text-[#B8924A] text-4xl leading-none">63</p>
                <p className="label text-[#7A6E65] mt-1" style={{fontSize:'0.6rem'}}>Provinces covered in Vietnam</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
