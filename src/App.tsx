import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Skills } from './components/Skills';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { LanguageProvider } from './context/LanguageContext';

export default function App() {
  return (
    <LanguageProvider>
      <div className="bg-white text-neutral-900">
        <Navigation />
        <main>
          <Hero />
          <About />
          <CaseStudies />
          <Skills />
          <Gallery />
          <Contact />
        </main>
      </div>
    </LanguageProvider>
  );
}