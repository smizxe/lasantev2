import { Search, ShoppingBag, Menu } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/95 backdrop-blur-md z-40 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-serif font-medium text-2xl tracking-tight text-[#2d2d2d]">La Santé</span>
          <span className="text-xs tracking-widest text-gray-500 uppercase">Vietnam</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10 text-lg font-medium text-gray-600">
          <Link href="/" className="text-[#f37435]">Home</Link>
          <Link href="#about" className="hover:text-[#f37435] transition-colors">About Us</Link>
          <Link href="#products" className="hover:text-[#f37435] transition-colors">Products</Link>
          <Link href="#collections" className="hover:text-[#f37435] transition-colors">Collections</Link>
          <Link href="#dealer" className="hover:text-[#f37435] transition-colors">Become a Dealer</Link>
          <Link href="#news" className="hover:text-[#f37435] transition-colors">News</Link>
        </nav>

        <div className="flex items-center gap-6">
          <button className="text-gray-600 hover:text-[#f37435] transition-colors">
            <Search strokeWidth={1.5} className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-[#f37435] transition-colors relative">
            <ShoppingBag strokeWidth={1.5} className="w-5 h-5" />
            <span className="absolute -top-1.5 -right-1.5 gradient-primary text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">0</span>
          </button>
          <button className="lg:hidden text-gray-600">
            <Menu strokeWidth={1.5} className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}
