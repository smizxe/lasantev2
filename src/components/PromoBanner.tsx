import Link from 'next/link';

export default function PromoBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative rounded-3xl overflow-hidden h-[400px] flex items-center shadow-xl group">
          <img 
            src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" 
            alt="Promo Background" 
            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/20"></div>
          
          <div className="relative z-10 p-10 lg:p-20 max-w-2xl animate-fade-in-up">
            <span className="text-[#f8c131] text-base font-medium uppercase tracking-wider mb-4 block">Thời Gian Có Hạn</span>
            <h2 className="font-serif font-medium text-4xl lg:text-6xl text-white tracking-tight leading-tight mb-6 drop-shadow-md">
              Ưu Đãi Đặc Biệt <br /> Mùa Lễ Hội
            </h2>
            <p className="text-gray-300 text-lg mb-8">Trải nghiệm sự sang trọng và thoải mái tối đa với bộ sưu tập chăn lông cừu Pháp cao cấp từ Lasante.</p>
            <Link href="#" className="inline-block px-10 py-4 border border-[#f37435] rounded-full gradient-primary text-white font-medium text-lg hover:shadow-lg hover:shadow-[#f37435]/30 transition-all transform hover:-translate-y-1 active:scale-95">
              Mua Sắm Ngay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
