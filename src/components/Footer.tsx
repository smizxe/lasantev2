import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1614] pt-20 pb-10 border-t border-[#2E2924]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Top — brand + columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10 mb-16">

          {/* Brand */}
          <div className="lg:pr-6">
            <Link href="/" className="inline-block mb-6">
              <img src="/logo.png" alt="La Santé Vietnam" className="h-10 w-auto object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity" />
            </Link>
            <p className="font-sans font-light text-[#5A5050] text-sm leading-loose mb-6">
              Exclusive manufacturer of <em>La Santé De Paris</em> &amp; <em>LaTalia (UK)</em>.
              Elevating sleep quality globally through French-inspired craftsmanship.
            </p>
            <div className="flex items-center gap-3">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <Link key={i} href="#" className="w-9 h-9 border border-[#2E2924] flex items-center justify-center text-[#5A5050] hover:border-[#B8924A] hover:text-[#B8924A] transition-colors duration-300">
                  <Icon strokeWidth={1.5} className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="label text-[#7A6E65] mb-6">Navigation</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                ['Home', '/'],
                ['Products', '/products'],
                ['About Us', '/about-us'],
                ['Cases', '/cases'],
                ['News', '/news'],
                ['Contact Us', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="font-sans font-light text-[#5A5050] text-sm hover:text-[#D4AA6E] transition-colors duration-300">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="label text-[#7A6E65] mb-6">Customer Support</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                'Shipping Policy',
                'Warranty Policy',
                'Returns & Exchanges',
                'Terms of Use',
                'FAQ',
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="font-sans font-light text-[#5A5050] text-sm hover:text-[#D4AA6E] transition-colors duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="label text-[#7A6E65] mb-6">Contact</h4>
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-3">
                <MapPin strokeWidth={1} className="w-4 h-4 text-[#B8924A] shrink-0 mt-0.5" />
                <span className="font-sans font-light text-[#5A5050] text-sm leading-loose">Sammy Vietnam Co., Ltd.<br />Hanoi, Vietnam</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone strokeWidth={1} className="w-4 h-4 text-[#B8924A] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+84921999066" className="font-sans font-light text-[#5A5050] text-sm hover:text-white transition-colors duration-300">+84 921 999 066</a>
                  <a href="tel:+84975580486" className="font-sans font-light text-[#5A5050] text-sm hover:text-white transition-colors duration-300">+84 975 580 486</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail strokeWidth={1} className="w-4 h-4 text-[#B8924A] shrink-0" />
                <a href="mailto:export@lasantevietnam.vn" className="font-sans font-light text-[#5A5050] text-sm hover:text-white transition-colors duration-300">export@lasantevietnam.vn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Export CTA strip */}
        <div className="mb-10 py-8 px-8 border border-[#2E2924] flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-serif font-light text-white text-xl mb-1">Ready to source premium bedding?</p>
            <p className="font-sans font-light text-[#5A5050] text-sm">Wholesale pricing · Private label · Export documentation</p>
          </div>
          <Link href="/contact" className="btn-gold whitespace-nowrap">
            Request Export Pricing
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#2E2924] pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans font-light text-[#3A3330] text-xs tracking-wider">
            © 2026 La Santé Vietnam — Sammy Vietnam Co., Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-sans font-light text-[#3A3330] text-xs tracking-wider hover:text-[#B8924A] transition-colors duration-300">Privacy Policy</Link>
            <Link href="#" className="font-sans font-light text-[#3A3330] text-xs tracking-wider hover:text-[#B8924A] transition-colors duration-300">Exclusive Design</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
