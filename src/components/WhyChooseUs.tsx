import { Feather, Settings, ShieldCheck, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Feather strokeWidth={1.5} className="w-8 h-8 text-[#c9a96e] group-hover:text-[#f37435] transition-colors" />,
      title: "Chất Liệu Cao Cấp",
      desc: "Nguồn nguyên liệu toàn cầu, ứng dụng thiết kế Pháp đích thực, kết hợp Tencel, modal và cotton dệt mật độ cao."
    },
    {
      icon: <Settings strokeWidth={1.5} className="w-8 h-8 text-[#c9a96e] group-hover:text-[#f37435] transition-colors" />,
      title: "Công Nghệ Tiên Tiến",
      desc: "Hệ thống nhà máy sản xuất tự động khép kín hiện đại, đảm bảo độ chính xác, độ bền và hoàn thiện không tì vết."
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} className="w-8 h-8 text-[#c9a96e] group-hover:text-[#f37435] transition-colors" />,
      title: "Chất Lượng Chứng Nhận",
      desc: "Chứng nhận TUV Châu Âu cho đệm bảo vệ sức khỏe và kiểm định Quatest 1, đảm bảo tính an toàn thân thiện môi trường."
    },
    {
      icon: <Globe strokeWidth={1.5} className="w-8 h-8 text-[#c9a96e] group-hover:text-[#f37435] transition-colors" />,
      title: "Chuẩn Xuất Khẩu",
      desc: "Hỗ trợ logistics B2B liền mạch và dịch vụ phục vụ tận tâm cho các đại lý phân phối trong và ngoài nước."
    }
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-4 hover:text-[#f37435] transition-colors">Vì Sao Chọn La Santé?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Thiết lập tiêu chuẩn sản xuất đáp ứng tiêu chuẩn chất lượng toàn cầu cùng dịch vụ chăm sóc tận tâm chuyên nghiệp.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-[#f37435]/30">
              <div className="w-16 h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center mb-6 group-hover:bg-[#f37435]/10 transition-colors transform group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="font-medium text-xl text-[#2d2d2d] mb-3 group-hover:text-[#f37435] transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
