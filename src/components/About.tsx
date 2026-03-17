import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4 relative">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" 
              alt="Factory" 
              className="w-full h-64 object-cover rounded-2xl shadow-sm mt-8 transition-transform hover:scale-105 duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" 
              alt="Showroom" 
              className="w-full h-72 object-cover rounded-2xl shadow-sm transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce">
              <p className="font-serif text-[#c9a96e] text-5xl tracking-tight mb-1">10+</p>
              <p className="text-gray-500 font-medium text-base">Năm Hình Thành</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-[#c9a96e] text-base font-medium uppercase tracking-wider mb-3 block animate-fade-in-up">Về Chúng Tôi</span>
            <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-6 transition-all hover:text-[#f37435] duration-300">
              Công Ty TNHH Sammy Việt Nam
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Chúng tôi sở hữu độc quyền sản xuất và thương mại hai thương hiệu <strong>LASANTE'</strong> và <strong>LATALIA</strong> từ Latalia Anh Quốc. Chuyên cung cấp các sản phẩm chăn, ga, gối, đệm phong cách Pháp hiện đại, tinh gọn.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Tại Việt Nam, La Santé tự hào ứng dụng công nghệ dây chuyền tự động khép kín hiện đại. Mọi quy trình từ sản xuất bông, may chần gòn đến đóng gói đều được kiểm soát nghiêm ngặt, đảm bảo tính vệ sinh và độ an toàn tuyệt đối.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-gray-100 pt-10">
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#f8c131] transition-colors">500+</p>
                <p className="text-gray-500 text-base font-medium">Đại Lý Phân Phối</p>
              </div>
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#f37435] transition-colors">An Toàn</p>
                <p className="text-gray-500 text-base font-medium">Cho Mọi Làn Da</p>
              </div>
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#f8c131] transition-colors">1M+</p>
                <p className="text-gray-500 text-base font-medium">Sản phẩm đến tay KH</p>
              </div>
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#f37435] transition-colors">100%</p>
                <p className="text-gray-500 text-base font-medium">Công Nghệ Khép Kín</p>
              </div>
            </div>

            <Link href="#" className="inline-flex items-center gap-2 text-[#f37435] font-medium text-lg hover:gap-3 transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#f37435] after:transition-all hover:after:w-full">
              Tìm Hiểu Thêm Về Chúng Tôi <ArrowRight strokeWidth={1.5} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
