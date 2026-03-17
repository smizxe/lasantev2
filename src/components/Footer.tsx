import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1a1a1a] pt-20 pb-10 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Col 1: Brand */}
          <div className="lg:pr-8">
            <Link href="/" className="flex items-center mb-6 inline-block group gap-2">
              <img src="/logo.png" alt="Lasante Vietnam" className="h-10 w-auto object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Exclusive manufacturer and distributor of French designer brands: Lasante' and Latalia. Elevating Vietnamese sleep through premium quality.
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
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-base">
              <li><Link href="/" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Home</Link></li>
              <li><Link href="/products" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Products</Link></li>
              <li><Link href="/about-us" className="hover:text-[#C9A96E] hover:pl-2 transition-all">About Us</Link></li>
              <li><Link href="/cases" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Cases</Link></li>
              <li><Link href="/news" className="hover:text-[#C9A96E] hover:pl-2 transition-all">News</Link></li>
              <li><Link href="/contact" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Contact Us</Link></li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">Customer Support</h4>
            <ul className="flex flex-col gap-4 text-gray-400 text-base">
              <li><Link href="#" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Shipping Policy</Link></li>
              <li><Link href="#" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Warranty Policy</Link></li>
              <li><Link href="#" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Returns & Exchanges</Link></li>
              <li><Link href="#" className="hover:text-[#C9A96E] hover:pl-2 transition-all">Terms of Use</Link></li>
              <li><Link href="#" className="hover:text-[#C9A96E] hover:pl-2 transition-all">FAQ</Link></li>
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h4 className="text-white font-medium text-lg mb-6 tracking-wide">Contact Information</h4>
            <ul className="flex flex-col gap-5 text-gray-400 text-base">
              <li className="flex items-start gap-3 group">
                <MapPin strokeWidth={1.5} className="w-5 h-5 text-[#C9A96E] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <span>Sammy Vietnam Co., Ltd.<br />Hanoi, Vietnam</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Phone strokeWidth={1.5} className="w-5 h-5 text-[#C9A96E] shrink-0 group-hover:scale-110 transition-transform" />
                <div className="flex flex-col">
                  <a href="tel:+84921999066" className="hover:text-[#fff] transition-colors">+84 921 999 066</a>
                  <a href="tel:+84975580486" className="hover:text-[#fff] transition-colors">+84 975 580 486</a>
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <Mail strokeWidth={1.5} className="w-5 h-5 text-[#C9A96E] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="mailto:export@lasantevietnam.vn" className="hover:text-[#fff] transition-colors">export@lasantevietnam.vn</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-500 text-sm">
          <p>© 2026 La Santé Vietnam. Copyright Sammy Vietnam Co., Ltd.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Exclusive Design</Link>
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
