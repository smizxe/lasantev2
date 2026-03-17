import { Mail, Phone, Facebook, Instagram, MessageCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import LanguageSwitcher from './LanguageSwitcher';

export default function TopBar() {
  const t = useTranslations('TopBar');

  return (
    <div className="bg-[#1A1614] text-[#9A8E85] py-2.5 px-6 lg:px-12 text-[11px] flex flex-col sm:flex-row justify-between items-center z-50 relative tracking-widest uppercase">
      <div className="flex items-center gap-6 mb-2 sm:mb-0">
        <a href="mailto:export@lasantevietnam.vn" className="flex items-center gap-2 hover:text-[#D4AA6E] transition-colors duration-300">
          <Mail strokeWidth={1.5} className="w-3.5 h-3.5" />
          <span>export@lasantevietnam.vn</span>
        </a>
        <span className="w-px h-3 bg-[#3A3330]" />
        <a href="tel:+84921999066" className="flex items-center gap-2 hover:text-[#D4AA6E] transition-colors duration-300">
          <Phone strokeWidth={1.5} className="w-3.5 h-3.5" />
          <span>+84 921 999 066</span>
        </a>
      </div>
      <div className="flex items-center gap-5">
        <span className="text-[#D4AA6E] hidden sm:inline">{t('partner')}</span>
        <span className="w-px h-3 bg-[#3A3330] hidden sm:block" />
        <div className="flex items-center gap-3.5">
          <a href="#" className="hover:text-[#D4AA6E] transition-colors duration-300">
            <Facebook strokeWidth={1.5} className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-[#D4AA6E] transition-colors duration-300">
            <Instagram strokeWidth={1.5} className="w-3.5 h-3.5" />
          </a>
          <a href="#" className="hover:text-[#D4AA6E] transition-colors duration-300">
            <MessageCircle strokeWidth={1.5} className="w-3.5 h-3.5" />
          </a>
        </div>
        <span className="w-px h-3 bg-[#3A3330] hidden sm:block" />
        <LanguageSwitcher />
      </div>
    </div>
  );
}
