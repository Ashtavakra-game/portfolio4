import { useLanguage } from '../context/LanguageContext';

export function About() {
  const { t } = useLanguage();
  
  const competencies = [
    t('comp.1'),
    t('comp.2'),
    t('comp.3'),
    t('comp.4'),
    t('comp.5'),
    t('comp.6'),
    t('comp.7'),
  ];

  return (
    <section id="about" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-2 text-xs tracking-[0.2em] uppercase text-neutral-500">
          {t('about.label')}
        </div>
        <h2 className="mb-16 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
          {t('about.title')}
        </h2>

        <div className="grid md:grid-cols-12 gap-16">
          <div className="md:col-span-7 space-y-6 text-neutral-700 leading-relaxed">
            <p>{t('about.p1')}</p>
            <p>{t('about.p2')}</p>
            <p>{t('about.p3')}</p>
            <p>{t('about.p4')}</p>
          </div>

          <div className="md:col-span-5">
            <div className="sticky top-32">
              <h3 className="mb-8 text-sm tracking-[0.15em] uppercase text-neutral-500">
                {t('about.competenciesTitle')}
              </h3>
              <ul className="space-y-4">
                {competencies.map((competency, index) => (
                  <li key={index} className="flex items-start gap-3 text-neutral-700">
                    <span className="mt-2 block w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                    <span className="leading-relaxed">{competency}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}