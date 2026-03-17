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
              src="/images/about-factory.png" 
              alt="Factory" 
              className="w-full h-64 object-cover rounded-2xl shadow-sm mt-8 transition-transform hover:scale-105 duration-500"
            />
            <img 
              src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800" 
              alt="Showroom" 
              className="w-full h-72 object-cover rounded-2xl shadow-sm transition-transform hover:scale-105 duration-500"
            />
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl hidden md:block animate-bounce">
              <p className="font-serif text-[#C9A96E] text-5xl tracking-tight mb-1">10+</p>
              <p className="text-gray-500 font-medium text-base">Years Experience</p>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <span className="text-[#C9A96E] text-base font-medium uppercase tracking-wider mb-3 block animate-fade-in-up">About Us</span>
            <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-6 transition-all hover:text-[#C9A96E] duration-300">
              Sammy Vietnam Co., Ltd.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We exclusively manufacture and distribute two premium brands: <strong>LASANTE'</strong> and <strong>LATALIA</strong> from Latalia UK. We specialize in providing modern, elegant French-style blankets, sheets, pillows, and mattresses.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              In Vietnam, La Santé proudly applies modern, closed-loop automated production technology. Every process, from cotton production and quilting to packaging, is strictly controlled to ensure ultimate hygiene and absolute safety.
            </p>
            
            <div className="grid grid-cols-2 gap-8 mb-10 border-t border-gray-100 pt-10">
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#C9A96E] transition-colors">500+</p>
                <p className="text-gray-500 text-base font-medium">Distributors</p>
              </div>
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#C9A96E] transition-colors">Safety</p>
                <p className="text-gray-500 text-base font-medium">For All Skin Types</p>
              </div>
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#C9A96E] transition-colors">1M+</p>
                <p className="text-gray-500 text-base font-medium">Products Delivered</p>
              </div>
              <div className="group cursor-default">
                <p className="font-serif text-[#2d2d2d] text-4xl tracking-tight mb-1 group-hover:text-[#C9A96E] transition-colors">100%</p>
                <p className="text-gray-500 text-base font-medium">Closed-Loop Tech</p>
              </div>
            </div>

            <Link href="/about-us" className="inline-flex items-center gap-2 text-[#2d2d2d] font-medium text-lg hover:text-[#C9A96E] hover:gap-3 transition-all relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[#C9A96E] after:transition-all hover:after:w-full">
              Learn More About Us <ArrowRight strokeWidth={1.5} className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
