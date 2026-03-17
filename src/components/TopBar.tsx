import { Mail, Phone, Facebook, Instagram, MessageCircle, ChevronDown } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#2d2d2d] text-gray-300 py-2.5 px-6 lg:px-12 text-sm flex flex-col sm:flex-row justify-between items-center z-50 relative">
      <div className="flex items-center gap-6 mb-2 sm:mb-0">
        <a href="mailto:export@lasantevietnam.vn" className="flex items-center gap-2 hover:text-white transition-colors">
          <Mail strokeWidth={1.5} className="w-4 h-4" /> export@lasantevietnam.vn
        </a>
        <a href="tel:+84921999066" className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone strokeWidth={1.5} className="w-4 h-4" /> +84 921 999 066
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white transition-colors"><Facebook strokeWidth={1.5} className="w-4 h-4" /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram strokeWidth={1.5} className="w-4 h-4" /></a>
          <a href="#" className="hover:text-white transition-colors"><MessageCircle strokeWidth={1.5} className="w-4 h-4" /></a>
        </div>
        <div className="h-4 w-px bg-gray-600"></div>
        <button className="flex items-center gap-1 hover:text-white transition-colors">
          EN <ChevronDown strokeWidth={1.5} className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
