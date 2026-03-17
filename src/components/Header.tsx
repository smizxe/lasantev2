import { Search, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.png" alt="Lasante Vietnam" className="h-12 w-auto object-contain" />
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-[#1a2b4a]">
          <Link href="/" className="text-[#C9A96E] hover:text-[#C9A96E] transition-colors">Home</Link>
          <Link href="/products" className="hover:text-[#C9A96E] transition-colors">Products</Link>
          <Link href="/about-us" className="hover:text-[#C9A96E] transition-colors">About Us</Link>
          <Link href="/cases" className="hover:text-[#C9A96E] transition-colors">Cases</Link>
          <Link href="/news" className="hover:text-[#C9A96E] transition-colors">News</Link>
          <Link href="/contact" className="hover:text-[#C9A96E] transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-[#1a2b4a] hover:text-[#C9A96E] transition-colors">
            <Search strokeWidth={1.5} className="w-5 h-5" />
          </button>
          <button className="lg:hidden text-[#1a2b4a]">
            <Menu strokeWidth={1.5} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
