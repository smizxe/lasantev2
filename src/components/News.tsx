import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function News() {
  const posts = [
    {
      category: "Guide",
      date: "Oct 15, 2023",
      title: "Lasante French Fleece Blanket: Warmth for Freezing Winters",
      desc: "Discover the special 3-layer structure of the Lasante fleece blanket that maintains temperature and brings deep sleep.",
      image: "https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405581111937_5e70f69d688dbdfd0a9068dd11b6b633-247x296.jpg"
    },
    {
      category: "News",
      date: "Sep 28, 2023",
      title: "Lasante Vietnam Expands Comprehensive Distribution System",
      desc: "To meet growing consumer demand, we are opening new tier-1 dealerships in the Southern region.",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
    },
    {
      category: "Tips",
      date: "Sep 12, 2023",
      title: "Guide to Proper Care & Washing of Tencel Bedding",
      desc: "Secrets to extending the life of your premium Tencel silk bedding, keeping it as soft as the first day.",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-4 hover:text-[#C9A96E] transition-colors">News & Tips</h2>
            <p className="text-gray-600 text-lg">Sharing insights on sleep care and sophisticated interior trends.</p>
          </div>
          <Link href="/news" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#C9A96E] font-medium text-lg transition-colors group">
            View All Articles <ArrowRight strokeWidth={1.5} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, idx) => (
            <Link key={idx} href="#" className="group block">
              <div className="overflow-hidden rounded-2xl mb-6 aspect-video shadow-md">
                <img 
                  src={post.image} 
                  alt="Blog" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-3">
                <span className="text-[#C9A96E]">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#2d2d2d] mb-3 group-hover:text-[#C9A96E] transition-colors leading-tight">{post.title}</h3>
              <p className="text-gray-600 text-lg line-clamp-2 mb-4">{post.desc}</p>
              <span className="text-[#2d2d2d] font-medium flex items-center gap-1 group-hover:text-[#C9A96E] transition-colors">
                Read More <ChevronRight strokeWidth={2} className="w-4 h-4 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
