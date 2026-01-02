import { Mail, Linkedin, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Contact() {
  const { t } = useLanguage();
  
  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto">
        <div className="mb-2 text-xs tracking-[0.2em] uppercase text-neutral-400">
          {t('contact.label')}
        </div>
        <h2 className="mb-16 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
          {t('contact.title')}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Mail className="w-5 h-5 text-neutral-400" />
                <span className="text-xs tracking-[0.15em] uppercase text-neutral-400">{t('contact.email')}</span>
              </div>
              <a 
                href="mailto:michal.p.sitek@gmail.com"
                className="text-lg hover:text-neutral-300 transition-colors"
              >
                michal.p.sitek@gmail.com
              </a>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-3">
                <Linkedin className="w-5 h-5 text-neutral-400" />
                <span className="text-xs tracking-[0.15em] uppercase text-neutral-400">{t('contact.linkedin')}</span>
              </div>
              <a 
                href="https://www.linkedin.com/in/michał-sitek-1879bb109/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-neutral-300 transition-colors"
              >
                linkedin.com/in/michał-sitek
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <FileText className="w-5 h-5 text-neutral-400" />
                <span className="text-xs tracking-[0.15em] uppercase text-neutral-400">{t('contact.documents')}</span>
              </div>
              <div className="space-y-3">
                <a 
                  href="https://drive.google.com/file/d/179tKJa5WXTSlEX0L6PhUKQAEyBkuFeeV/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 border border-neutral-700 hover:border-neutral-500 transition-colors"
                >
                  <span className="text-sm">{t('contact.downloadCV')}</span>
                </a>
                <button 
                  className="w-full p-4 border border-neutral-700 hover:border-neutral-500 transition-colors text-left"
                  onClick={() => alert(t('contact.caseAlert'))}
                >
                  <span className="text-sm">{t('contact.downloadCase')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-12 border-t border-neutral-800 text-sm text-neutral-500">
          <p>{t('contact.footer')}</p>
          <p className="mt-2">{t('contact.footerDesc')}</p>
        </div>
      </div>
    </section>
  );
}