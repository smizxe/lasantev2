import { Link } from '../i18n/routing';
import { ArrowUpRight } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const MARKETS = [
  { region: 'Vietnam', detail: '63 / 63 provinces · 500+ showrooms' },
  { region: 'Southeast Asia', detail: 'Thailand · Malaysia · Singapore · Philippines' },
  { region: 'East Asia', detail: 'Japan · South Korea · Taiwan' },
  { region: 'Europe', detail: 'France · Germany · UK · Netherlands' },
];

export default function GlobalReach() {
  return (
    <section className="py-28 bg-[#1A1614] text-white relative overflow-hidden">
      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <FadeIn className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left */}
          <div>
            <p className="label text-[#B8924A] mb-5">— Global Distribution Network</p>
            <h2 className="font-serif font-light text-white leading-[0.92] mb-8" style={{fontSize:'clamp(2.6rem,4.5vw,4.2rem)'}}>
              Vietnam to the World.<br />
              <span className="text-[#D4AA6E]">Consistently Delivered.</span>
            </h2>
            <p className="font-sans font-light text-[#7A6E65] text-lg leading-loose mb-10 max-w-md">
              Our products reach households, hotels, and retail shelves across four continents.
              With a robust logistics infrastructure and export-ready packaging, La Santé is
              built to serve international partners at scale.
            </p>
            <Link href="/contact" className="btn-gold">
              Enquire About Export Terms
              <ArrowUpRight strokeWidth={1.5} className="w-4 h-4" />
            </Link>
          </div>

          {/* Right — market list */}
          <div className="flex flex-col gap-0 border border-[#2E2924]">
            {MARKETS.map((m, idx) => (
              <div
                key={m.region}
                className={`flex items-start justify-between gap-8 p-7 hover:bg-[#2E2924] transition-colors duration-300 group ${idx < MARKETS.length - 1 ? 'border-b border-[#2E2924]' : ''}`}
              >
                <div>
                  <p className="font-serif font-light text-white text-xl mb-1 group-hover:text-[#D4AA6E] transition-colors duration-300">{m.region}</p>
                  <p className="label text-[#5A5050]" style={{fontSize:'0.62rem'}}>{m.detail}</p>
                </div>
                <ArrowUpRight strokeWidth={1} className="w-5 h-5 text-[#3A3330] group-hover:text-[#B8924A] shrink-0 mt-1 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom stats bar */}
        <div className="mt-20 pt-10 border-t border-[#2E2924] grid grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: '500+',  label: 'Distribution Partners'    },
            { num: '63/63', label: 'Vietnamese Provinces'     },
            { num: '4',     label: 'Continents Reached'       },
            { num: '1M+',   label: 'Units Shipped Annually'   },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif font-light text-[#D4AA6E] text-4xl leading-none mb-2">{s.num}</p>
              <p className="label text-[#5A5050]" style={{fontSize:'0.62rem'}}>{s.label}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
