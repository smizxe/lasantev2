import { ArrowRight, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function News() {
  const posts = [
    {
      category: "Cẩm Nang",
      date: "Oct 15, 2023",
      title: "Chăn Lông Cừu Pháp Lasante: Ấm Áp Mùa Đông Lạnh Giá",
      desc: "Khám phá cấu tạo đặc biệt 3 lớp của chăn lông cừu Lasante giúp duy trì nhiệt độ và mang lại giấc ngủ sâu.",
      image: "https://lasantevietnam.vn/wp-content/uploads/2026/01/z7405581111937_5e70f69d688dbdfd0a9068dd11b6b633-247x296.jpg"
    },
    {
      category: "Tin Tức",
      date: "Sep 28, 2023",
      title: "La Santé Việt Nam Mở Rộng Hệ Thống Phân Phối Trọn Gói",
      desc: "Đáp ứng nhu cầu tiêu dùng ngày càng cao, chúng tôi khai trương mới thêm các đại lý cấp 1 tại miền Nam.",
      image: "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"
    },
    {
      category: "Mẹo Vặt",
      date: "Sep 12, 2023",
      title: "Hướng Dẫn Bảo Quản & Giặt Giũ Ga Gối Tencel Đúng Cách",
      desc: "Bí quyết kéo dài tuổi thọ bộ chăn ga gối lụa Tencel cao cấp của bạn, luôn giữ được sự mềm mại như ngày đầu.",
      image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section id="news" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-4 hover:text-[#f37435] transition-colors">Tin Tức & Mẹo Vặt</h2>
            <p className="text-gray-600 text-lg">Góc chia sẻ kiến thức chăm sóc giấc ngủ và xu hướng nội thất tinh trang.</p>
          </div>
          <Link href="#" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#f37435] font-medium text-lg transition-colors group">
            Xem Tất Cả Bài Viết <ArrowRight strokeWidth={1.5} className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
                <span className="text-[#f37435]">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h3 className="font-serif text-2xl text-[#2d2d2d] mb-3 group-hover:text-[#f37435] transition-colors leading-tight">{post.title}</h3>
              <p className="text-gray-600 text-lg line-clamp-2 mb-4">{post.desc}</p>
              <span className="text-[#2d2d2d] font-medium flex items-center gap-1 group-hover:text-[#f37435] transition-colors">
                Xem Thêm <ChevronRight strokeWidth={2} className="w-4 h-4 group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
