import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  pl: {
    // Navigation
    'nav.about': 'O mnie',
    'nav.caseStudies': 'Case Studies',
    'nav.skills': 'Skills / Tools',
    'nav.gallery': 'Mini UI Gallery',
    'nav.contact': 'Kontakt',
    
    // Hero
    'hero.subtitle': 'Portfolio UX/UI — Mid/Regular UX Designer',
    'hero.title': 'Mid/Regular UX Designer specjalizujący się w złożonych systemach i narzędziach B2B',
    'hero.description': 'Projektuję doświadczenia i narzędzia dla użytkowników eksperckich w środowiskach o wysokiej złożoności. Łączę myślenie systemowe, analizy procesów i pragmatyczny design, aby upraszczać skomplikowane operacje i podnosić efektywność zespołów.',
    
    // About
    'about.label': '01 — O mnie',
    'about.title': 'O mnie',
    'about.p1': 'Przez ostatnie 10 lat projektowałem produkty wewnętrzne i narzędzia operacyjne dla dużych organizacji, często objęte NDA. Moje projekty dotyczyły m.in. systemów back‑office, platform B2B i środowisk eksperckich, w których kluczowa jest wydajność, spójność procesów i klarowna architektura informacji.',
    'about.p2': 'Specjalizuję się w mapowaniu i porządkowaniu złożonych przepływów pracy, odkrywaniu źródeł tarć w procesach oraz projektowaniu rozwiązań, które realnie skracają czas wykonywania zadań. Interesuje mnie trwała poprawa operacyjna, a nie tylko warstwa wizualna.',
    'about.p3': 'W pracy ściśle współpracuję z Product Managerami, developerami i architektami, aby decyzje projektowe były wykonalne, skalowalne i korzystne biznesowo. Dla złożonych rozwiązań stosuję podejście iteracyjne: szybkie prototypowanie, testy z użytkownikami eksperckimi i ciągłe doskonalenie.',
    'about.p4': 'Warstwę UI traktuję jako wsparcie dla jasności interakcji i ergonomii - zwłaszcza w środowiskach o dużej gęstości informacji. Korzystam z komponentów systemowych i projektuję design systemy, które zwiększają spójność i szybkość dostarczania.',
    'about.competenciesTitle': 'Kompetencje',
    
    // Competencies
    'comp.1': 'UX strategy',
    'comp.2': 'Research: audyt, wywiady, shadowing, analizy procesów',
    'comp.3': 'IA, flowcharts, mapowanie end‑to‑end',
    'comp.4': 'Wireframing, prototypowanie (low‑/mid‑/hi‑fi)',
    'comp.5': 'UI dla narzędzi eksperckich i back‑office',
    'comp.6': 'Design systems i komponenty',
    'comp.7': 'Product thinking i priorytetizacja wartości',
    
    // Case Studies
    'cs.label': '02 — Projekty',
    'cs.title': 'Case Studies',
    'cs.description': 'Poniższe projekty opisują wewnętrzne narzędzia objęte NDA. Przedstawione materiały zostały stworzone na potrzeby portfolio i nie zawierają rzeczywistych danych.',
    'cs.caseStudy': 'Case Study',
    'cs.contextTitle': 'Kontekst & rola',
    'cs.contextCompany': 'Firma:',
    'cs.contextProduct': 'Produkt:',
    'cs.contextRole': 'Rola:',
    'cs.contextScope': 'Zakres:',
    'cs.problemTitle': 'Problem',
    'cs.processTitle': 'Proces projektowy',
    'cs.solutionTitle': 'Rozwiązanie',
    'cs.resultsTitle': 'Rezultaty',
    
    // Case Study 1
    'cs1.title': 'Optymalizacja narzędzia operacyjnego dla branży finansowej',
    'cs1.company': 'duża organizacja z sektora finansowego, narzędzie back‑office do obsługi procesów operacyjnych',
    'cs1.product': 'system o wysokiej złożoności domenowej, wiele ról użytkowników, duża ilość danych tabelarycznych',
    'cs1.role': 'UX (discovery, badania, architektura informacji, prototypy), UI (komponenty do zadań eksperckich), współpraca z PM i dev',
    'cs1.scope': 'audyt, analizy procesów, priorytety funkcjonalne, iteracje prototypów, współtworzenie design systemu',
    
    // Skills
    'skills.label': '03 — Narzędzia',
    'skills.title': 'Skills / Tools',
    
    // Gallery
    'gallery.label': '04 — Galeria',
    'gallery.title': 'Mini UI Gallery',
    'gallery.description': 'Przykładowe rekonstrukcje UI stworzone na potrzeby portfolio; nie przedstawiają rzeczywistych danych ani layoutów.',
    
    // Contact
    'contact.label': '05 — Kontakt',
    'contact.title': 'Kontakt',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.documents': 'CV & Dokumenty',
    'contact.downloadCV': 'Pobierz CV',
    'contact.downloadCase': 'Pobierz case study PDF (na żądanie)',
    'contact.footer': '© 2024 Michał Sitek — Mid/Regular UX Designer',
    'contact.footerDesc': 'Projektuję doświadczenia dla użytkowników eksperckich w środowiskach B2B.',
    'contact.caseAlert': 'Case study PDF dostępny na żądanie. Skontaktuj się mailowo.',
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.caseStudies': 'Case Studies',
    'nav.skills': 'Skills / Tools',
    'nav.gallery': 'Mini UI Gallery',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.subtitle': 'UX/UI Portfolio — Mid/Regular UX Designer',
    'hero.title': 'Mid/Regular UX Designer specializing in complex systems and B2B tools',
    'hero.description': 'I design experiences and tools for expert users in high-complexity environments. I combine systems thinking, process analysis, and pragmatic design to simplify complex operations and improve team efficiency.',
    
    // About
    'about.label': '01 — About',
    'about.title': 'About me',
    'about.p1': 'Over the past 10 years, I have designed internal products and operational tools for large organizations, often covered by NDAs. My projects included back-office systems, B2B platforms, and expert environments where efficiency, process consistency, and clear information architecture are key.',
    'about.p2': 'I specialize in mapping and organizing complex workflows, discovering sources of friction in processes, and designing solutions that genuinely reduce task completion time. I am interested in lasting operational improvement, not just the visual layer.',
    'about.p3': 'I work closely with Product Managers, developers, and architects to ensure design decisions are feasible, scalable, and business-beneficial. For complex solutions, I use an iterative approach: rapid prototyping, testing with expert users, and continuous refinement.',
    'about.p4': 'I treat the UI layer as support for interaction clarity and ergonomics - especially in high-information-density environments. I use system components and design design systems that increase consistency and delivery speed.',
    'about.competenciesTitle': 'Competencies',
    
    // Competencies
    'comp.1': 'UX strategy',
    'comp.2': 'Research: audits, interviews, shadowing, process analysis',
    'comp.3': 'IA, flowcharts, end-to-end mapping',
    'comp.4': 'Wireframing, prototyping (low/mid/hi-fi)',
    'comp.5': 'UI for expert tools and back-office',
    'comp.6': 'Design systems and components',
    'comp.7': 'Product thinking and value prioritization',
    
    // Case Studies
    'cs.label': '02 — Projects',
    'cs.title': 'Case Studies',
    'cs.description': 'The following projects describe internal tools covered by NDAs. The materials presented were created for portfolio purposes and do not contain real data.',
    'cs.caseStudy': 'Case Study',
    'cs.contextTitle': 'Context & role',
    'cs.contextCompany': 'Company:',
    'cs.contextProduct': 'Product:',
    'cs.contextRole': 'Role:',
    'cs.contextScope': 'Scope:',
    'cs.problemTitle': 'Problem',
    'cs.processTitle': 'Design process',
    'cs.solutionTitle': 'Solution',
    'cs.resultsTitle': 'Results',
    
    // Case Study 1
    'cs1.title': 'Optimization of an operational tool for the financial industry',
    'cs1.company': 'large financial sector organization, back-office tool for operational processes',
    'cs1.product': 'system with high domain complexity, multiple user roles, large amount of tabular data',
    'cs1.role': 'UX (discovery, research, information architecture, prototypes), UI (components for expert tasks), collaboration with PM and dev',
    'cs1.scope': 'audit, process analysis, functional priorities, prototype iterations, co-creating design system',
    
    // Skills
    'skills.label': '03 — Tools',
    'skills.title': 'Skills / Tools',
    
    // Gallery
    'gallery.label': '04 — Gallery',
    'gallery.title': 'Mini UI Gallery',
    'gallery.description': 'Sample UI reconstructions created for portfolio purposes; they do not represent real data or layouts.',
    
    // Contact
    'contact.label': '05 — Contact',
    'contact.title': 'Contact',
    'contact.email': 'Email',
    'contact.linkedin': 'LinkedIn',
    'contact.documents': 'CV & Documents',
    'contact.downloadCV': 'Download CV',
    'contact.downloadCase': 'Download case study PDF (on request)',
    'contact.footer': '© 2024 Michał Sitek — Mid/Regular UX Designer',
    'contact.footerDesc': 'I design experiences for expert users in B2B environments.',
    'contact.caseAlert': 'Case study PDF available on request. Contact me via email.',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}