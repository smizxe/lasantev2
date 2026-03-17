import { ArrowUpRight } from 'lucide-react';
import { Link } from '../i18n/routing';

const posts = [
  {
    category: 'Industry Guide',
    date: 'Oct 15, 2025',
    title: 'How La Santé\'s Tencel Bedding Outperforms European Competitors at Half the Price',
    desc: 'A detailed look at our 3-layer Tencel weave technology and why international buyers are switching to Vietnamese manufacture.',
    image: 'https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405581111937_5e70f69d688dbdfd0a9068dd11b6b633-247x296.jpg',
  },
  {
    category: 'Partner News',
    date: 'Sep 28, 2025',
    title: 'La Santé Opens New Export Partnerships Across Southeast Asia',
    desc: 'We welcome 12 new international distribution partners as demand for premium Vietnamese bedding continues to rise globally.',
    image: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp',
  },
  {
    category: 'Sourcing Tips',
    date: 'Sep 12, 2025',
    title: 'What to Ask Before Sourcing Bedding from Vietnam: A Buyer\'s Checklist',
    desc: 'MOQ, certification, lead times, and private label options — everything an import buyer should verify before placing the first order.',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800',
  },
];

export default function News() {
  return (
    <section id="news" className="py-28 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <p className="label text-[#B8924A] mb-4">— Industry Insights</p>
            <h2 className="font-serif font-light text-[#1A1614] leading-[0.92]" style={{fontSize:'clamp(2.4rem,4vw,3.8rem)'}}>
              News & Resources
            </h2>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 font-sans text-[11px] tracking-[0.14em] uppercase text-[#4A3F38] hover:text-[#B8924A] transition-colors duration-300 group">
            All Articles
            <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((p, idx) => (
            <Link key={idx} href="#" className="group block">
              {/* Image */}
              <div className="overflow-hidden aspect-video mb-6 bg-[#E8DFD4]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
              </div>
              {/* Meta */}
              <div className="flex items-center gap-3 mb-3">
                <span className="label text-[#B8924A]" style={{fontSize:'0.62rem'}}>{p.category}</span>
                <span className="w-1 h-1 rounded-full bg-[#C8B8A8]" />
                <span className="label text-[#9A8E85]" style={{fontSize:'0.62rem'}}>{p.date}</span>
              </div>
              {/* Title */}
              <h3 className="font-serif font-light text-[#1A1614] text-xl lg:text-2xl mb-3 group-hover:text-[#B8924A] transition-colors duration-300 leading-snug">{p.title}</h3>
              <p className="font-sans font-light text-[#7A6E65] text-sm leading-loose line-clamp-2 mb-4">{p.desc}</p>
              <span className="inline-flex items-center gap-1.5 font-sans text-[11px] tracking-[0.12em] uppercase text-[#2E2924] group-hover:text-[#B8924A] transition-colors duration-300">
                Read More
                <ArrowUpRight strokeWidth={1.5} className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
