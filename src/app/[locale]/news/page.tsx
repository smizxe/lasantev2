import { Link } from '@/i18n/routing';
import { ChevronRight, Home, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'News & Tips - Lasante Vietnam',
  description: 'Sharing insights on sleep care and sophisticated interior trends',
};

const posts = [
  {
    id: 1,
    category: "Guide",
    date: "Oct 15, 2023",
    title: "Lasante French Fleece Blanket: Warmth for Freezing Winters",
    desc: "Discover the special 3-layer structure of the Lasante fleece blanket that maintains temperature and brings deep sleep.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/81dd27b2-fe41-4c17-bfd2-6902d13b4f65_1600w.jpg"
  },
  {
    id: 2,
    category: "News",
    date: "Sep 28, 2023",
    title: "Lasante Vietnam Expands Comprehensive Distribution System",
    desc: "To meet growing consumer demand, we are opening new tier-1 dealerships in the Southern region.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
  },
  {
    id: 3,
    category: "Tips",
    date: "Sep 12, 2023",
    title: "Guide to Proper Care & Washing of Tencel Bedding",
    desc: "Secrets to extending the life of your premium Tencel silk bedding, keeping it as soft as the first day.",
    image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 4,
    category: "News",
    date: "Aug 05, 2023",
    title: "Lasante Launches New Eco-Friendly Packaging",
    desc: "Moving towards sustainable development with 100% recyclable materials for all premium lines.",
    image: "https://images.unsplash.com/photo-1540342930491-9e7ec27b4c6e?auto=format&fit=crop&q=80&w=800"
  },
  {
    id: 5,
    category: "Guide",
    date: "Jul 20, 2023",
    title: "How to Choose the Right Pillow for Your Sleeping Position",
    desc: "Whether you sleep on your back, side, or stomach, the right pillow is crucial for spinal alignment.",
    image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/82332be2-dc18-4a18-97f2-1d59648a9b2d_1600w.jpg"
  },
  {
    id: 6,
    category: "Tips",
    date: "Jun 15, 2023",
    title: "Decorating Your Bedroom Parisian Style",
    desc: "Simple ways to bring French elegance into your personal sanctuary using color palettes and textures.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=800"
  }
];

export default function NewsPage() {
  return (
    <>
      
      {/* Banner */}
      <div className="relative h-[300px] bg-[#1a2b4a] overflow-hidden">
        <img 
          src="/images/news-banner.png" 
          alt="News & Content" 
          className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white top-10">
          <h1 className="font-serif text-5xl font-medium mb-4 drop-shadow-md">News & Tips</h1>
          <p className="text-xl tracking-widest uppercase font-light drop-shadow">Trends / Care / Updates</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#f8f8f8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#C9A96E] transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#2d2d2d] font-medium">News</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-serif text-[#2d2d2d] mb-4">Latest Insights</h2>
          <p className="text-gray-600">Discover tips for better sleep, learn how to care for premium bedding, and stay updated with Lasante's latest releases.</p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link href={`/news/${post.id}`} key={post.id} className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-8 pb-10">
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-4">
                  <span className="text-[#C9A96E] uppercase tracking-wider">{post.category}</span>
                  <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="font-serif text-2xl text-[#2d2d2d] mb-4 group-hover:text-[#C9A96E] transition-colors leading-tight line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 line-clamp-3 mb-6">
                  {post.desc}
                </p>
                
                <span className="text-[#2d2d2d] font-medium flex items-center gap-2 group-hover:text-[#C9A96E] transition-colors">
                  Read More <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Pagination placeholder */}
        <div className="mt-16 flex justify-center gap-2">
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
            <ChevronRight className="w-4 h-4 rotate-180" />
          </button>
          <button className="w-10 h-10 rounded-full bg-[#C9A96E] text-white flex items-center justify-center font-medium">1</button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors font-medium">2</button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors font-medium">3</button>
          <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </>
  );
}
