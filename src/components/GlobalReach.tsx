import { Map as MapIcon } from 'lucide-react';

export default function GlobalReach() {
  return (
    <section className="py-24 bg-[#2d2d2d] text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif font-medium text-4xl lg:text-5xl tracking-tight mb-4">Hệ Thống Phân Phối Toàn Quốc</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Tự hào mang giấc ngủ Pháp đến hàng triệu gia đình với mạng lưới đại lý phủ khắp 63 tỉnh thành.</p>
        </div>

        {/* Stylized Map Placeholder */}
        <div className="relative w-full h-[400px] bg-gray-800/50 rounded-3xl border border-gray-700 flex items-center justify-center overflow-hidden group hover:border-gray-500 transition-colors">
          <MapIcon className="absolute w-[80%] h-[80%] text-gray-700/30 group-hover:text-gray-600/50 transition-colors duration-1000" strokeWidth={0.5} />
          
          {/* Pulse Dots (simulating locations) */}
          <div className="absolute top-[30%] left-[20%] w-3 h-3 bg-[#f8c131] rounded-full shadow-[0_0_15px_rgba(248,193,49,0.8)]"><div className="animate-ping absolute inset-0 rounded-full bg-[#f8c131] opacity-50"></div></div>
          <div className="absolute top-[40%] left-[50%] w-4 h-4 bg-[#f37435] rounded-full shadow-[0_0_20px_rgba(243,116,53,0.8)]"><div className="animate-ping absolute inset-0 rounded-full bg-[#f37435] opacity-50"></div></div> {/* Vietnam/HQ */}
          <div className="absolute top-[25%] left-[45%] w-3 h-3 bg-[#f8c131] rounded-full shadow-[0_0_15px_rgba(248,193,49,0.8)]"><div className="animate-ping absolute inset-0 rounded-full bg-[#f8c131] opacity-50"></div></div>
          <div className="absolute top-[60%] left-[70%] w-3 h-3 bg-[#f8c131] rounded-full shadow-[0_0_15px_rgba(248,193,49,0.8)]"><div className="animate-ping absolute inset-0 rounded-full bg-[#f8c131] opacity-50"></div></div>
        </div>
        
        <div className="mt-12 flex justify-center">
          <div className="bg-gray-800 rounded-full px-8 py-4 inline-flex items-center gap-6 border border-gray-700 shadow-xl hover:shadow-[#f37435]/20 transition-all duration-300">
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-[#f8c131]">500+</span>
              <span className="text-sm text-gray-400">Đại Lý Phân Phối</span>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif text-[#f37435]">63/63</span>
              <span className="text-sm text-gray-400">Tỉnh Thành Bao Phủ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
