import { useLanguage } from '../context/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  
  return (
    <section id="hero" className="pt-32 pb-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-4 text-xs tracking-[0.2em] uppercase text-neutral-500">
          {t('hero.subtitle')}
        </div>
        <h1 className="mb-12 max-w-4xl leading-[1.1] text-[clamp(2rem,5vw,3.5rem)]">
          {t('hero.title')}
        </h1>
        <p className="max-w-3xl text-neutral-600 text-lg leading-relaxed mb-16">
          {t('hero.description')}
        </p>
        <div className="h-px bg-neutral-200 max-w-3xl"></div>
      </div>
    </section>
  );
}