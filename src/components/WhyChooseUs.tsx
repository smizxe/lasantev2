import { DollarSign, ShieldCheck, Factory, Headphones } from 'lucide-react';

const reasons = [
  {
    num: '01',
    icon: DollarSign,
    title: 'Direct-from-Manufacturer Pricing',
    desc: 'No intermediaries. Source at competitive FOB prices with full quality oversight from our Hanoi factory to your warehouse.',
  },
  {
    num: '02',
    icon: ShieldCheck,
    title: 'EU-Certified Quality Standards',
    desc: 'European TÜV health certification and Quatest 1 inspection ensure every shipment clears customs and meets international retail requirements.',
  },
  {
    num: '03',
    icon: Factory,
    title: 'Scalable Production Capacity',
    desc: 'From boutique hotel supply to mass retail rollouts — our automated, closed-loop facility handles any volume with consistent quality.',
  },
  {
    num: '04',
    icon: Headphones,
    title: 'Dedicated Export Support',
    desc: 'Your account manager handles export documentation, logistics coordination, and compliance paperwork so you focus on selling.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-28 bg-[#1A1614] relative overflow-hidden">
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '28px 28px' }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <p className="label text-[#B8924A] mb-5">— Why Partner With Us</p>
          <h2 className="font-serif font-light text-white leading-[0.92]" style={{fontSize:'clamp(2.6rem,4.5vw,4.2rem)'}}>
            The Manufacturer<br />
            <span className="text-[#D4AA6E]">Built for Global Trade</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-[#2E2924]">
          {reasons.map((r, idx) => {
            const Icon = r.icon;
            return (
              <div
                key={idx}
                className={`p-10 lg:p-12 border-[#2E2924] group hover:bg-[#2E2924] transition-colors duration-300
                  ${idx % 2 === 0 ? 'border-r' : ''}
                  ${idx < 2 ? 'border-b' : ''}
                `}
              >
                <div className="flex items-start justify-between mb-8">
                  <span className="font-serif font-light text-[#3A3330] text-6xl leading-none group-hover:text-[#4A3F38] transition-colors duration-300">{r.num}</span>
                  <Icon strokeWidth={1} className="w-7 h-7 text-[#B8924A] mt-2" />
                </div>
                <h3 className="font-serif font-light text-white text-2xl mb-4 group-hover:text-[#D4AA6E] transition-colors duration-300">{r.title}</h3>
                <p className="font-sans font-light text-[#7A6E65] text-base leading-loose group-hover:text-[#9A8E85] transition-colors duration-300">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
