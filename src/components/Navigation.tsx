import { useLanguage } from '../context/LanguageContext';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-neutral-200 z-50">
      <div className="max-w-5xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => scrollToSection('hero')}
            className="tracking-tight hover:text-neutral-600 transition-colors text-[16px] font-bold text-[rgb(0,0,0)]"
          >
            Michał Sitek - Portfolio
          </button>
          <div className="flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-sm tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('case-studies')}
              className="text-sm tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('nav.caseStudies')}
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-sm tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('nav.skills')}
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-sm tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('nav.gallery')}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-sm tracking-wide uppercase text-neutral-600 hover:text-neutral-900 transition-colors"
            >
              {t('nav.contact')}
            </button>
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-neutral-200">
              <button
                onClick={() => setLanguage('pl')}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  language === 'pl' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                PL
              </button>
              <span className="text-neutral-300">/</span>
              <button
                onClick={() => setLanguage('en')}
                className={`text-sm tracking-wide uppercase transition-colors ${
                  language === 'en' ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-600'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}