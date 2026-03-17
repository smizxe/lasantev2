import Link from 'next/link';

export default function Lookbook() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-4 hover:text-[#C9A96E] transition-colors">Inspiration Journey</h2>
          <p className="text-gray-600 text-lg">Elevate your living space with curated aesthetic standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {/* Large Left */}
          <div className="md:col-span-2 md:row-span-2 relative rounded-2xl overflow-hidden group aspect-square md:aspect-auto h-[400px] md:h-auto shadow-md">
            <img 
              src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" 
              alt="Lookbook" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-0 group-hover:blur-[2px]" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-serif text-3xl text-white mb-4 drop-shadow-lg text-center px-4">The Parisian Suite - French Style</h3>
              <Link href="/products" className="px-8 py-3 bg-white text-[#2d2d2d] rounded-full font-medium hover:bg-[#C9A96E] hover:text-white transition-colors active:scale-95 shadow-lg">View Details</Link>
            </div>
          </div>
          
          {/* Top Right */}
          <div className="relative rounded-2xl overflow-hidden group aspect-square h-[300px] md:h-[350px] shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1616627547584-bf28cee262db?auto=format&fit=crop&q=80&w=600" 
              alt="Lookbook Minimalist" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-0 group-hover:blur-[2px]" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-serif text-2xl text-white mb-4 drop-shadow-lg text-center px-4">Modern Minimalist</h3>
              <Link href="/products" className="px-6 py-2 bg-white text-[#2d2d2d] rounded-full font-medium hover:bg-[#C9A96E] hover:text-white transition-colors active:scale-95 shadow-lg">View Details</Link>
            </div>
          </div>

          {/* Bottom Right */}
          <div className="relative rounded-2xl overflow-hidden group aspect-square h-[300px] md:h-[350px] shadow-md">
            <img 
              src="https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=600" 
              alt="Lookbook Cozy Winter" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 blur-0 group-hover:blur-[2px]" 
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <h3 className="font-serif text-2xl text-white mb-4 drop-shadow-lg text-center px-4">Cozy Winter Collection</h3>
              <Link href="/products" className="px-6 py-2 bg-white text-[#2d2d2d] rounded-full font-medium hover:bg-[#C9A96E] hover:text-white transition-colors active:scale-95 shadow-lg">View Details</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
