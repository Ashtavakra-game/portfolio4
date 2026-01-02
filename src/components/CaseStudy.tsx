import { useLanguage } from '../context/LanguageContext';
import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface CaseStudyProps {
  number: string;
  title: string;
  context: {
    firma: string;
    produkt: string;
    rola: string;
    zakres: string;
  };
  problem: string[];
  process: string[];
  solution: string[];
  images: Array<{
    url: string;
    caption: string;
  }>;
  results: string[];
}

export function CaseStudy({
  number,
  title,
  context,
  problem,
  process,
  solution,
  images,
  results,
}: CaseStudyProps) {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<{ url: string; caption: string } | null>(null);
  
  return (
    <>
      <article className="border-t border-neutral-200 pt-12">
        <div className="mb-12">
          <div className="mb-4 text-xs tracking-[0.2em] uppercase text-neutral-400">
            {t('cs.caseStudy')} {number}
          </div>
          <h3 className="text-[clamp(1.5rem,3.5vw,2rem)] leading-tight max-w-3xl">
            {title}
          </h3>
        </div>

        {/* Context */}
        <div className="mb-16">
          <h4 className="mb-6 text-sm tracking-[0.15em] uppercase text-[rgb(52,52,52)]">
            {t('cs.contextTitle')}
          </h4>
          <dl className="space-y-4 max-w-3xl">
            <div className="grid md:grid-cols-4 gap-2">
              <dt className="text-sm text-neutral-500">{t('cs.contextCompany')}</dt>
              <dd className="md:col-span-3 text-neutral-700">{context.firma}</dd>
            </div>
            <div className="grid md:grid-cols-4 gap-2">
              <dt className="text-sm text-neutral-500">{t('cs.contextProduct')}</dt>
              <dd className="md:col-span-3 text-neutral-700">{context.produkt}</dd>
            </div>
            <div className="grid md:grid-cols-4 gap-2">
              <dt className="text-sm text-neutral-500">{t('cs.contextRole')}</dt>
              <dd className="md:col-span-3 text-neutral-700">{context.rola}</dd>
            </div>
            <div className="grid md:grid-cols-4 gap-2">
              <dt className="text-sm text-neutral-500">{t('cs.contextScope')}</dt>
              <dd className="md:col-span-3 text-neutral-700">{context.zakres}</dd>
            </div>
          </dl>
        </div>

        {/* Problem */}
        <div className="mb-16">
          <h4 className="mb-6 text-sm tracking-[0.15em] uppercase text-[#343434]">
            {t('cs.problemTitle')}
          </h4>
          <ul className="space-y-3 max-w-3xl">
            {problem.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 block w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Process */}
        <div className="mb-16">
          <h4 className="mb-6 text-sm tracking-[0.15em] uppercase text-[#343434]">
            {t('cs.processTitle')}
          </h4>
          <ul className="space-y-3 max-w-3xl">
            {process.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 block w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Solution */}
        <div className="mb-12">
          <h4 className="mb-6 text-sm tracking-[0.15em] uppercase text-[#343434]">
            {t('cs.solutionTitle')}
          </h4>
          <ul className="space-y-3 max-w-3xl mb-12">
            {solution.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 block w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>

          {/* Images */}
          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <figure key={index} className="space-y-3">
                <div 
                  className="aspect-[4/3] bg-neutral-100 overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setSelectedImage(image)}
                >
                  <ImageWithFallback 
                    src={image.url} 
                    alt={image.caption}
                    className="w-full h-full object-cover"
                  />
                </div>
                <figcaption className="text-xs text-neutral-500 tracking-wide">
                  {image.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        {/* Results */}
        <div>
          <h4 className="mb-6 text-sm tracking-[0.15em] uppercase text-[#343434]">
            {t('cs.resultsTitle')}
          </h4>
          <ul className="space-y-3 max-w-3xl">
            {results.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-2 block w-1 h-1 rounded-full bg-neutral-400 flex-shrink-0"></span>
                <span className="text-neutral-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </article>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <div className="max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={selectedImage.url}
              alt={selectedImage.caption}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <p className="mt-4 text-center text-white text-sm tracking-wide">
              {selectedImage.caption}
            </p>
          </div>
        </div>
      )}
    </>
  );
}