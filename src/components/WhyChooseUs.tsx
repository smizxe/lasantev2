import { Feather, Settings, ShieldCheck, Globe } from 'lucide-react';

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Feather strokeWidth={1.5} className="w-8 h-8 text-[#C9A96E] group-hover:text-[#C9A96E] transition-colors" />,
      title: "Premium Materials",
      desc: "Global sourcing of raw materials, authentic French design applications, combining high-density woven Tencel, modal, and cotton."
    },
    {
      icon: <Settings strokeWidth={1.5} className="w-8 h-8 text-[#C9A96E] group-hover:text-[#C9A96E] transition-colors" />,
      title: "Advanced Technology",
      desc: "Modern closed-loop automated manufacturing system ensures precision, durability, and flawless finishes."
    },
    {
      icon: <ShieldCheck strokeWidth={1.5} className="w-8 h-8 text-[#C9A96E] group-hover:text-[#C9A96E] transition-colors" />,
      title: "Certified Quality",
      desc: "European TUV health protection certification and Quatest 1 inspection, ensuring absolute safety and eco-friendliness."
    },
    {
      icon: <Globe strokeWidth={1.5} className="w-8 h-8 text-[#C9A96E] group-hover:text-[#C9A96E] transition-colors" />,
      title: "Export Standards",
      desc: "Seamless B2B logistics and dedicated service support for domestic and international distributors."
    }
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight mb-4 hover:text-[#C9A96E] transition-colors">Why Choose Lasante?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">Setting the global standard for premium bedding manufacturing and dedicated service.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group border border-transparent hover:border-[#C9A96E]/30">
              <div className="w-16 h-16 rounded-full bg-[#f8f8f8] flex items-center justify-center mb-6 group-hover:bg-[#C9A96E]/10 transition-colors transform group-hover:rotate-6">
                {item.icon}
              </div>
              <h3 className="font-medium text-xl text-[#2d2d2d] mb-3 group-hover:text-[#C9A96E] transition-colors">{item.title}</h3>
              <p className="text-gray-600 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
