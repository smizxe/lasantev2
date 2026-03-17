import { Award, Shield, FileCheck2, Hotel, MapPinCheckInside } from 'lucide-react';

export default function Certifications() {
  return (
    <section className="py-16 border-y border-gray-100 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-center text-gray-400 font-medium text-sm tracking-widest uppercase mb-8">
          Trusted Partners & Quality Certifications
        </p>
        {/* Added animate-scroll or standard flex gap for logos */}
        <div className="flex items-center justify-between gap-12 overflow-x-auto pb-4 scrollbar-hide grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100">
          <div className="flex items-center gap-2 min-w-max hover:text-[#C9A96E] transition-colors cursor-default">
            <Award className="w-8 h-8" />
            <span className="font-serif text-2xl font-medium">European TUV</span>
          </div>
          <div className="flex items-center gap-2 min-w-max hover:text-[#C9A96E] transition-colors cursor-default">
            <Shield className="w-8 h-8" />
            <span className="font-serif text-2xl font-medium">Quatest 1</span>
          </div>
          <div className="flex items-center gap-2 min-w-max hover:text-[#C9A96E] transition-colors cursor-default">
            <FileCheck2 className="w-8 h-8" />
            <span className="font-serif text-2xl font-medium">Health Safety</span>
          </div>
          <div className="flex items-center gap-2 min-w-max hover:text-[#C9A96E] transition-colors cursor-default">
            <Hotel className="w-8 h-8" />
            <span className="font-serif text-2xl font-medium">Hospitality</span>
          </div>
          <div className="flex items-center gap-2 min-w-max hover:text-[#C9A96E] transition-colors cursor-default">
            <MapPinCheckInside className="w-8 h-8" />
            <span className="font-serif text-2xl font-medium">500+ Showrooms</span>
          </div>
        </div>
      </div>
    </section>
  );
}
