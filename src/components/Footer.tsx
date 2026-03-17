import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="flex flex-col mb-6 inline-block group">
              <span className="font-serif font-medium text-3xl tracking-tight text-white group-hover:text-[#f8c131] transition-colors">La Santé</span>
              <span className="text-xs tracking-widest text-gray-400 uppercase">Vietnam</span>
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Nhà sản xuất và phân phối độc quyền thương hiệu thiết kế Pháp: Lasante' và Latalia. Nâng tầm giấc ngủ Việt thông qua những tinh túy chất lượng.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#f37435] hover:text-white transition-colors hover:scale-110">
                <Facebook strokeWidth={1.5} className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#f37435] hover:text-white transition-colors hover:scale-110">
                <Instagram strokeWidth={1.5} className="w-5 h-5" />
              </Link>
              <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-[#f37435] hover:text-white transition-colors hover:scale-110">
                <Linkedin strokeWidth={1.5} className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">Truy Cập Nhanh</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-base">
              <li><Link href="#about" className="hover:text-[#f8c131] hover:pl-2 transition-all">Về Chúng Tôi</Link></li>
              <li><Link href="#products" className="hover:text-[#f8c131] hover:pl-2 transition-all">Sản Phẩm</Link></li>
              <li><Link href="#collections" className="hover:text-[#f8c131] hover:pl-2 transition-all">Tạp Chí Nội Thất</Link></li>
              <li><Link href="#news" className="hover:text-[#f8c131] hover:pl-2 transition-all">Tin Tức</Link></li>
              <li><Link href="#dealer" className="hover:text-[#f8c131] hover:pl-2 transition-all">Đăng Ký Đại Lý</Link></li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">Hỗ Trợ Khách Hàng</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-base">
              <li><Link href="#" className="hover:text-[#f8c131] hover:pl-2 transition-all">Chính Sách Vận Chuyển</Link></li>
              <li><Link href="#" className="hover:text-[#f8c131] hover:pl-2 transition-all">Chính Sách Bảo Hành</Link></li>
              <li><Link href="#" className="hover:text-[#f8c131] hover:pl-2 transition-all">Đổi Trả Hàng</Link></li>
              <li><Link href="#" className="hover:text-[#f8c131] hover:pl-2 transition-all">Điều Khoản Sửa Dụng</Link></li>
              <li><Link href="#" className="hover:text-[#f8c131] hover:pl-2 transition-all">Hỏi Đáp (FAQ)</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">Thông Tin Liên Hệ</h4>
            <ul className="flex flex-col gap-5 text-gray-400 text-base">
              <li className="flex items-start gap-3 group">
                <MapPin strokeWidth={1.5} className="w-5 h-5 text-[#f8c131] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Công ty TNHH Sammy Việt Nam<br />Hà Nội, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone strokeWidth={1.5} className="w-5 h-5 text-[#f8c131] shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <a href="tel:+84921999066" className="hover:text-[#fff] transition-colors">+84 921 999 066</a>
                  <a href="tel:+84975580486" className="hover:text-[#fff] transition-colors">+84 975 580 486</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail strokeWidth={1.5} className="w-5 h-5 text-[#f8c131] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:export@lasantevietnam.vn" className="hover:text-[#fff] transition-colors">export@lasantevietnam.vn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2024 La Santé Vietnam. Bản quyền thuộc Sammy Vietnam Co., Ltd.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Thiết Kế Độc Quyền</Link>
            <Link href="#" className="hover:text-white transition-colors">Bảo Mật</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
