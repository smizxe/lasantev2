import Link from 'next/link';

export default function DealerCTA() {
  return (
    <section id="dealer" className="py-20 gradient-primary relative overflow-hidden group">
      {/* Abstract shapes */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] rounded-full border-[100px] border-white/10 pointer-events-none group-hover:scale-110 transition-transform duration-1000"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/3 w-[400px] h-[400px] rounded-full bg-white/10 pointer-events-none blur-3xl group-hover:scale-110 transition-transform duration-1000 delay-100"></div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-fade-in-up">
        <h2 className="font-serif font-medium text-4xl lg:text-5xl text-white tracking-tight mb-6 drop-shadow-md">Become a Lasante Dealer</h2>
        <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Join our extensive distribution network. Enjoy exclusive discount policies, marketing support, and highly profitable business opportunities.
        </p>
        <Link href="/contact" className="inline-block px-12 py-4 rounded-full bg-white text-[#C9A96E] font-medium text-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all outline outline-2 outline-white outline-offset-4 hover:outline-offset-2">
          Register Now
        </Link>
      </div>
    </section>
  );
}
