import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Bộ sưu tập Tencel của Lasante thực sự là sản phẩm bán chạy nhất mùa này. Chất lượng tương đương các thương hiệu cao cấp Châu Âu nhưng mức giá cạnh tranh hơn rất nhiều. Bao bì xuất khẩu tuyệt hảo.",
      name: "Chị Lan Anh",
      role: "Đại lý phân phối, Hà Nội",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "Chúng tôi vừa trang bị toàn bộ hệ thống khách sạn bằng đệm và chăn ga Latalia. Phản hồi của khách hàng về chất lượng giấc ngủ là vô cùng tích cực. Rất đáng để hợp tác lâu dài.",
      name: "Anh Hoàng Nam",
      role: "Chủ Khách Sạn, Đà Nẵng",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "Là một đối tác bán lẻ, đồng hành cùng La Santé Việt Nam đã mang lại bước ngoặt lớn. Dịch vụ chăm sóc khách hàng và chính sách đại lý luôn minh bạch, giao hàng đúng hẹn.",
      name: "Chị Minh Thư",
      role: "CEO Retail, TP.HCM",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight text-center mb-16 hover:text-[#f37435] transition-colors">
          Đối Tác Niềm Tin
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-1 text-[#f8c131] mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} strokeWidth={2} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-8 relative z-10">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#f37435] transition-colors">
                  <img src={item.avatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2d2d2d] text-lg group-hover:text-[#f37435] transition-colors">{item.name}</h4>
                  <p className="text-gray-500 text-base">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
