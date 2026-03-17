const testimonials = [
  {
    text: 'We have been sourcing from La Santé for three years. Their MOQ flexibility, consistent EU-grade quality, and on-time delivery have been crucial to scaling our retail network across the region.',
    name: 'Ms. Lan Anh',
    role: 'CEO, Premium Retail Chain · Hanoi',
    initial: 'L',
  },
  {
    text: 'Our 5-star hotel group equips over 800 rooms with La Santé bedding. Guest satisfaction scores on sleep quality improved noticeably within the first season. The quality-to-cost ratio is unmatched.',
    name: 'Mr. Hoang Nam',
    role: 'Procurement Director · Da Nang Hospitality Group',
    initial: 'H',
  },
  {
    text: "La Santé's export team made onboarding seamless. Certifications were in order, shipments arrived on schedule, and the private label packaging looked exceptional. Exactly what we needed for our market.",
    name: 'Ms. Minh Thu',
    role: 'International Distribution Partner · Southeast Asia',
    initial: 'M',
  },
];

import FadeIn from './animations/FadeIn';

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#FAF7F2]">
      <FadeIn className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="label text-[#B8924A] mb-4">— Partner Voices</p>
            <h2 className="font-serif font-light text-[#1A1614] leading-[0.92]" style={{fontSize:'clamp(2.4rem,4vw,3.8rem)'}}>
              Trusted by Businesses<br />Across the Region
            </h2>
          </div>
          {/* Gold rule accent */}
          <div className="hidden md:flex flex-col items-end gap-1">
            <div className="w-20 h-px bg-[#B8924A]" />
            <div className="w-10 h-px bg-[#D4AA6E]" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-[#F0EAE0] p-8 lg:p-10 flex flex-col group hover:bg-[#1A1614] transition-colors duration-500"
            >
              {/* Decorative quote */}
              <span className="font-serif text-6xl text-[#D4AA6E] leading-none mb-6 group-hover:text-[#B8924A] transition-colors duration-500">"</span>
              <p className="font-sans font-light text-[#4A3F38] text-base leading-loose mb-8 flex-1 group-hover:text-[#C8B8A8] transition-colors duration-500">
                {t.text}
              </p>
              <div className="flex items-center gap-4 pt-6 border-t border-[#E8DFD4] group-hover:border-[#3A3330] transition-colors duration-500">
                <div className="w-11 h-11 bg-[#B8924A] flex items-center justify-center shrink-0">
                  <span className="font-serif text-white text-xl font-light">{t.initial}</span>
                </div>
                <div>
                  <p className="font-sans font-medium text-[#2E2924] text-sm group-hover:text-white transition-colors duration-500">{t.name}</p>
                  <p className="label text-[#7A6E65] group-hover:text-[#5A5050] transition-colors duration-500" style={{fontSize:'0.6rem'}}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
