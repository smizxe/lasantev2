'use client';
import { Search, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { label: 'Home',       href: '/'         },
  { label: 'Products',   href: '/products' },
  { label: 'About Us',   href: '/about-us' },
  { label: 'Cases',      href: '/cases'    },
  { label: 'News',       href: '/news'     },
  { label: 'Contact',    href: '/contact'  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#E8DFD4]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo.png" alt="La Santé Vietnam" className="h-11 w-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-sans text-[12px] font-500 tracking-[0.14em] uppercase text-[#4A3F38] hover:text-[#B8924A] transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#B8924A] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-5">
            <button aria-label="Search" className="text-[#4A3F38] hover:text-[#B8924A] transition-colors duration-300">
              <Search strokeWidth={1.5} className="w-4.5 h-4.5" />
            </button>
            <Link
              href="/contact"
              className="hidden lg:inline-flex btn-gold text-[11px] py-2.5 px-6"
            >
              Request Export Pricing
            </Link>
            <button
              className="lg:hidden text-[#4A3F38] hover:text-[#B8924A] transition-colors"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Menu strokeWidth={1.5} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="absolute inset-0 bg-black/50" onClick={() => setOpen(false)} />
          <div className="relative ml-auto w-72 bg-[#FAF7F2] h-full flex flex-col p-8 shadow-2xl">
            <button
              className="self-end text-[#4A3F38] hover:text-[#B8924A] mb-10"
              onClick={() => setOpen(false)}
            >
              <X strokeWidth={1.5} className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-7">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-2xl font-light text-[#2E2924] hover:text-[#B8924A] transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto pt-8 border-t border-[#E8DFD4]">
              <Link href="/contact" onClick={() => setOpen(false)} className="btn-gold w-full justify-center text-[11px]">
                Request Export Pricing
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
