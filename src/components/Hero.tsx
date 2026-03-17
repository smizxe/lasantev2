import { Link } from '../i18n/routing';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-[92vh] w-full flex items-end overflow-hidden bg-[#1A1614]">
      {/* Background image */}
      <img
        src="/images/hero-banner.png"
        alt="La Santé Premium Bedding"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-55"
      />

      {/* Gradient overlay — bottom heavy so text is readable */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1614] via-[#1A1614]/50 to-transparent" />

      {/* Thin gold horizontal rule across hero */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B8924A]/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pb-20 lg:pb-28">

        {/* Label */}
        <p className="label text-[#B8924A] mb-6 opacity-0 animate-fade-up delay-100" style={{animationFillMode:'forwards'}}>
          — {t('label')} —
        </p>

        {/* Main headline */}
        <h1 className="font-serif font-light text-white leading-[0.92] tracking-[-0.02em] mb-8 opacity-0 animate-fade-up delay-200" style={{fontSize:'clamp(3.2rem,8vw,7.5rem)', animationFillMode:'forwards'}}>
          {t('title_1')}<br />
          <span className="text-gradient-gold">{t('title_2')}</span><br />
          {t('title_3')}
        </h1>

        {/* Sub-copy — export pitch */}
        <p className="font-sans font-light text-[#C8B8A8] text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed opacity-0 animate-fade-up delay-300" style={{animationFillMode:'forwards'}}>
          {t('desc_part1')}<strong className="text-white font-normal">{t('desc_bold')}</strong>
          {t('desc_part2')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-start gap-4 opacity-0 animate-fade-up delay-400" style={{animationFillMode:'forwards'}}>
          <Link href="/contact" className="btn-gold">
            {t('btn_pricing')}
          </Link>
          <Link href="/products" className="btn-outline">
            {t('btn_collections')}
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-16 pt-8 border-t border-white/10 grid grid-cols-3 gap-8 max-w-lg opacity-0 animate-fade-up delay-500" style={{animationFillMode:'forwards'}}>
          {[
            { num: t('stats.exp'),   label: t('stats.exp_label') },
            { num: t('stats.partners'),  label: t('stats.partners_label')  },
            { num: t('stats.units'),   label: t('stats.units_label')  },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-serif font-light text-3xl text-[#D4AA6E] leading-none mb-1">{s.num}</p>
              <p className="label text-[#7A6E65]" style={{fontSize:'0.65rem'}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 right-8 lg:right-12 flex flex-col items-center gap-2 z-10 opacity-40">
        <span className="label text-white" style={{fontSize:'0.6rem', writingMode:'vertical-rl', letterSpacing:'0.25em'}}>Scroll</span>
        <div className="w-px h-12 bg-white/50" />
      </div>
    </section>
  );
}
