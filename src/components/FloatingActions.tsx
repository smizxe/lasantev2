"use client";
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

export default function FloatingActions() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Hotline */}
      <a href="tel:+84921999066" className="w-14 h-14 bg-white text-[#f37435] rounded-full flex items-center justify-center shadow-lg border border-gray-100 hover:scale-110 transition-all group relative animate-bounce-slow">
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0">Gọi Hotline</span>
        <Phone strokeWidth={1.5} className="w-6 h-6 animate-pulse" />
      </a>
      {/* Zalo / Message */}
      <a href="#" className="w-14 h-14 gradient-primary text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all group relative">
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm py-1.5 px-3 rounded-lg shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none transform translate-x-2 group-hover:translate-x-0">Chat Zalo</span>
        <MessageCircle strokeWidth={1.5} className="w-6 h-6" />
      </a>
      {/* Back to Top */}
      <button onClick={scrollToTop} className="w-10 h-10 bg-gray-800/80 backdrop-blur text-white rounded-full flex items-center justify-center shadow-lg hover:bg-[#2d2d2d] transition-colors mt-2 self-end hover:-translate-y-1">
        <ChevronUp strokeWidth={2} className="w-5 h-5" />
      </button>

      {/* Adding a simple custom bounce animation to globals via style to avoid extending tailwind config immediately if not needed */}
      <style jsx global>{`
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(-5%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
