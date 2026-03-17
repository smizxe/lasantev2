import { Link } from '@/i18n/routing';
import { ChevronRight, Home, CheckCircle2 } from 'lucide-react';
import Certifications from '@/components/Certifications';

export const metadata = {
  title: 'About Us - Lasante Vietnam',
  description: 'Company Profile & Story',
};

const categories = [
  "Duvet Cover",
  "Bedsheets",
  "Pillow",
  "Mattress Protector",
  "Blanket",
  "Bedding Set"
];

export default function AboutUsPage() {
  return (
    <>
      {/* Banner */}
      <div className="relative h-[300px] bg-[#1a2b4a] overflow-hidden">
        <img 
          src="/images/about-factory.png" 
          alt="About Us" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white top-10">
          <h1 className="font-serif text-5xl font-medium mb-4 drop-shadow-md">Company Profile</h1>
          <p className="text-xl tracking-widest uppercase font-light drop-shadow">Quality / Innovation / Service</p>
        </div>
      </div>

      {/* Breadcrumbs */}
      <div className="bg-[#f8f8f8] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-[#C9A96E] transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" /> Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#2d2d2d] font-medium">About Us</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden sticky top-32">
            <h3 className="bg-[#1a2b4a] text-white text-lg font-medium py-4 px-6">Product Categories</h3>
            <ul className="divide-y divide-gray-100">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <Link href={`/products?category=${encodeURIComponent(cat.toLowerCase())}`} className="block py-4 px-6 text-gray-600 hover:text-[#C9A96E] hover:bg-[#C9A96E]/5 transition-colors group flex items-center justify-between">
                    {cat}
                    <ChevronRight className="w-4 h-4 text-gray-300 group-hover:text-[#C9A96E] transition-colors" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Story & Info */}
        <div className="w-full lg:w-3/4">
          <div className="prose prose-lg max-w-none text-gray-600">
            <h2 className="text-4xl font-serif text-[#2d2d2d] mb-8">Sammy Vietnam Co., Ltd.</h2>
            
            <p className="mb-6 leading-relaxed text-lg">
              Lasante Vietnam (Sammy Vietnam Co., Ltd.) is a pioneer in manufacturing and distributing premium bedding products with authentic French design aesthetics. Born from the passion to elevate sleep quality, we combine elegant European styling with state-of-the-art materials like Tencel, Modal, and high-density cotton.
            </p>
            
            <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
              <img src="/images/about-factory.png" alt="Factory View" className="rounded-2xl shadow-md w-full h-[300px] object-cover" />
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-2xl font-serif text-[#2d2d2d]">Our Commitment</h3>
                <ul className="space-y-4">
                  {[
                    "100% Closed-loop production technology",
                    "European TUV & Quatest 1 health safety certifications",
                    "Over 500+ authorized distributors nationwide",
                    "Exporting to international markets seamlessly"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-[#C9A96E] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="mb-6 leading-relaxed text-lg">
              Our modern factory system operates on a closed-loop principle, ensuring every product—from raw material selection to weaving, dyeing, and finishing—meets strict international standards. We do not just sell bedding; we provide comprehensive sleep health solutions.
            </p>
          </div>

          <div className="mt-16 pt-16 border-t border-gray-100">
             <h3 className="text-2xl font-serif text-[#2d2d2d] mb-8 text-center">Quality Certifications</h3>
             <Certifications />
          </div>
        </div>
      </div>
    </>
  );
}
