import Link from 'next/link';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center shadow-xl group">
          <img 
            src="/images/products-banner.png" 
            alt="Promo Background" 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/20"></div>
          
          <div className="relative z-10 p-10 lg:p-20 max-w-2xl animate-fade-in-up">
            <span className="text-[#C9A96E] text-base font-medium uppercase tracking-wider mb-4 block">Limited Time Offer</span>
            <h2 className="font-serif font-medium text-4xl lg:text-6xl text-white tracking-tight leading-tight mb-6 drop-shadow-md">
              Special Holiday <br /> Collection
            </h2>
            <p className="text-gray-300 text-lg mb-8">Experience ultimate luxury and comfort with Lasante's premium French-style bedding.</p>
            <Link href="/products" className="inline-block px-10 py-4 border border-[#C9A96E] rounded-full gradient-primary text-white font-medium text-lg hover:shadow-lg hover:shadow-[#C9A96E]/30 transition-all transform hover:-translate-y-1 active:scale-95">
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
