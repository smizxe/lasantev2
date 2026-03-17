"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '../i18n/routing';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (newLocale: string) => {
    startTransition(() => {
      router.replace(pathname, { locale: newLocale });
    });
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleLocaleChange('en')}
        disabled={isPending}
        className={`hover:text-[#D4AA6E] transition-colors duration-300 ${locale === 'en' ? 'text-[#D4AA6E] font-medium' : 'text-[#9A8E85]'}`}
      >
        EN
      </button>
      <span className="text-[#3A3330]">/</span>
      <button
        onClick={() => handleLocaleChange('vi')}
        disabled={isPending}
        className={`hover:text-[#D4AA6E] transition-colors duration-300 ${locale === 'vi' ? 'text-[#D4AA6E] font-medium' : 'text-[#9A8E85]'}`}
      >
        VI
      </button>
    </div>
  );
}
