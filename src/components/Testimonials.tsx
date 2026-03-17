import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      text: "Lasante's Tencel collection is truly this season's best-seller. The quality matches European premium brands but at a much more competitive price. The export packaging is excellent.",
      name: "Ms. Lan Anh",
      role: "Distributor, Hanoi",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "We just equipped our entire hotel chain with Latalia mattresses and bedding. Customer feedback on their sleep quality has been overwhelmingly positive. Highly recommended for long-term partnerships.",
      name: "Mr. Hoang Nam",
      role: "Hotel Owner, Da Nang",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      text: "As a retail partner, working with Lasante Vietnam has been a major turning point. The customer service and dealership policies are always transparent, and deliveries are punctual.",
      name: "Ms. Minh Thu",
      role: "Retail CEO, HCMC",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f8f8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#2d2d2d] tracking-tight text-center mb-16 hover:text-[#C9A96E] transition-colors">
          Trusted Partners
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="flex items-center gap-1 text-[#C9A96E] mb-6 transform group-hover:scale-110 transition-transform origin-left">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} strokeWidth={2} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg italic mb-8 relative z-10">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden border-2 border-transparent group-hover:border-[#C9A96E] transition-colors">
                  <img src={item.avatar} alt="Avatar" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-medium text-[#2d2d2d] text-lg group-hover:text-[#C9A96E] transition-colors">{item.name}</h4>
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
