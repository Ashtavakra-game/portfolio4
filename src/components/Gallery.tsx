import { useLanguage } from '../context/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const { t } = useLanguage();
  
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1586474222559-dbbbb41dd70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZvcm0lMjBkZXNpZ258ZW58MXx8fHwxNzY1NTI4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Formularz',
    },
    {
      url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NTUyODY1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Dashboard',
    },
    {
      url: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdGFibGUlMjBmaWx0ZXJzfGVufDF8fHx8MTc2NTUyODY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Tabela z filtrami',
    },
    {
      url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2RhbCUyMGludGVyZmFjZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjU1Mjg2NTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Modal',
    },
    {
      url: 'https://images.unsplash.com/photo-1743385779347-1549dabf1320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9jZXNzJTIwd29ya2Zsb3clMjBkaWFncmFtfGVufDF8fHx8MTc2NTUyODY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Flow procesowy',
    },
    {
      url: 'https://images.unsplash.com/photo-1556360853-5c1e1b64ff6a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1aSUyMGNvbXBvbmVudHMlMjBsaWJyYXJ5fGVufDF8fHx8MTc2NTUyODY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
      caption: 'Komponenty UI',
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-2 text-xs tracking-[0.2em] uppercase text-neutral-500">
          {t('gallery.label')}
        </div>
        <h2 className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
          {t('gallery.title')}
        </h2>
        <p className="mb-16 text-neutral-600 max-w-3xl">
          {t('gallery.description')}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {images.map((image, index) => (
            <figure key={index} className="space-y-4">
              <div className="aspect-[16/10] bg-neutral-100 overflow-hidden">
                <ImageWithFallback 
                  src={image.url} 
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
              </div>
              <figcaption className="text-sm text-neutral-500">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}