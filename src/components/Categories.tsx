import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Categories() {
  const categories = [
    {
      name: "Chăn Mùa Đông",
      image: "https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405581111937_5e70f69d688dbdfd0a9068dd11b6b633-247x296.jpg",
      link: "#"
    },
    {
      name: "Ga Giường Cao Cấp",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
      link: "#"
    },
    {
      name: "Gối Công Thái Học",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
      link: "#"
    },
    {
      name: "Đệm Chất Lượng Chuyên Sâu",
      image: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80&w=600",
      link: "#"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <span className="text-[#c9a96e] text-base font-medium uppercase tracking-wider mb-3 block animate-fade-in-up">DANH MỤC</span>
          <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight hover:text-[#f37435] transition-colors duration-300">Sản Phẩm Của Chúng Tôi</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link key={idx} href={cat.link} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="relative overflow-hidden aspect-square">
                <img 
                  src={cat.image} 
                  alt={cat.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowRight strokeWidth={1.5} className="w-5 h-5 text-[#2d2d2d] group-hover:text-[#f37435]" />
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="font-medium text-xl text-[#2d2d2d] group-hover:text-[#f37435] transition-colors">{cat.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
