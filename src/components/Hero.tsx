import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden">
      <img 
        src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" 
        alt="Luxury Bedroom" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mt-16 animate-fade-in-up">
        <span className="text-white text-base md:text-lg tracking-[0.2em] uppercase mb-6 block drop-shadow-md">
          Lasante De Paris - L'amour De Paris
        </span>
        <h1 className="font-serif font-medium text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-[1.1] mb-8 drop-shadow-lg">
          Đón năm mới <br /> 
          <span className="text-[#f8c131]">ẤM TỪ NHÀ - ÊM TỪ GIẤC</span>
        </h1>
        <p className="text-gray-200 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
          Sản phẩm chăm sóc sức khỏe người tiêu dùng, thiết kế phong cách Pháp hiện đại tinh trang, độ bền cao, mềm mại và an toàn tuyệt đối.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <Link 
            href="#collections" 
            className="w-full sm:w-auto px-10 py-4 rounded-full gradient-primary text-white font-medium text-lg hover:shadow-lg hover:shadow-[#f37435]/30 transition-all transform hover:-translate-y-0.5"
          >
            Explore Collections
          </Link>
          <Link 
            href="#contact" 
            className="w-full sm:w-auto px-10 py-4 rounded-full bg-white/10 backdrop-blur-sm text-white border border-white/30 font-medium text-lg hover:bg-white hover:text-[#2d2d2d] transition-all"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        <div className="w-10 h-1 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full cursor-pointer hover:bg-white transition-colors"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full cursor-pointer hover:bg-white transition-colors"></div>
      </div>
    </section>
  );
}
