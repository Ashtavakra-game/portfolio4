import { CaseStudy } from './CaseStudy';
import { useLanguage } from '../context/LanguageContext';

export function CaseStudies() {
  const { t, language } = useLanguage();
  
  const getCaseStudiesData = () => {
    if (language === 'pl') {
      return [
        {
          number: '01',
          title: 'Modernizacja systemu do zarządzania projektami, zasobami i finansami',
          context: {
            firma: 'wewnętrzna aplikacja enterprise (NDA)',
            produkt: 'system do zarządzania projektami, zasobami ludzkimi, finansami projektów i rentownością organizacji — wykorzystywany codziennie przez Project Managers, HR, Finanse/Controlling, Administrację',
            rola: 'Senior UX/UI Designer',
            zakres: 'UX strategy, IA, process mapping, UI, design system — projekt długofalowy, iteracyjny',
          },
          problem: [
            'Brak jasno zmapowanych procesów (np. procesy HR istniały „tylko formalnie")',
            'Niska czytelność stanu procesów i odpowiedzialności',
            'Niejednoznaczny i niespójny system ról i uprawnień',
            'Chaotyczna architektura informacji i trudna nawigacja',
            'Bardzo rozbudowane, mało elastyczne widoki tabelaryczne',
            'Wysoki poziom adaptacji użytkowników do złych rozwiązań i silny opór przed zmianą',
            'Brak możliwości stopniowej modernizacji — stare rozwiązania musiały być zastępowane nowymi w całości',
          ],
          process: [
            'Discovery: audyt heurystyczny, analiza istniejących flow i logiki systemu, mapowanie procesów „as-is", ograniczone wywiady z użytkownikami (duże bariery czasowe)',
            'Zidentyfikowano główne grupy użytkowników: pracownicy szeregowi, team leaderzy, project managerowie, HR, finanse/controlling, administratorzy. Kluczowe role: PM, HR, Finanse/Controlling',
            'Procesy jako fundament: zmapowanie kluczowych procesów, ujednolicenie struktury, zapewnienie pełnej transparentności stanu (np. proces zmian HR i dodawania nowego klienta)',
            'System ról i uprawnień: dwupoziomowy model (Trust Level + Rola organizacyjna), projektowanie panelu administracyjnego jako pierwszego modułu nowej aplikacji',
            'Architektura informacji: przełączanie kontekstu aplikacji per rola, menu z sekcją „Ulubione", globalnym wyszukiwaniem, ekranami podsumowań, breadcrumbs jako stały element orientacyjny',
            'Dane tabelaryczne: elastyczne zarządzanie kolumnami, sortowanie, filtrowanie, spójne statusy, dwa typy powiadomień (kontekstowe i systemowe)',
            'UI i Design System: zaprojektowanie pełnego design systemu od podstaw (od atomów po organizmy), z naciskiem na hierarchię informacji; kolor wyłącznie funkcja informacyjna',
            'Adaptacja komercyjnego design systemu: translacja na nowy standard narzucony organizacji',
          ],
          solution: [
            'Pełne usystematyzowanie kluczowych procesów i spójny model dodawania/edycji zasobów',
            'Czytelna kontrola stanu aplikacji i procesów dla wszystkich stron (pracownik, lider, HR)',
            'Znaczące ograniczenie chaosu uprawnień i dostępu poprzez dwupoziomowy model (Trust Level + Rola)',
            'Transparentne przepływy pracy z podziałem na etapy, śledzeniem postępu i spójną komunikacją',
            'Solidna podstawa pod dalszy, skalowalny rozwój systemu',
          ],
          images: [
            {
              url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NTUyODY1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
              caption: 'Dashboard systemu',
            },
            {
              url: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdGFibGUlMjBmaWx0ZXJzfGVufDF8fHx8MTc2NTUyODY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
              caption: 'Zarządzanie kolumnami i filtrowanie',
            },
            {
              url: 'https://images.unsplash.com/photo-1586474222559-dbbbb41dd70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZvcm0lMjBkZXNpZ258ZW58MXx8fHwxNzY1NTI4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
              caption: 'Panel administracyjny',
            },
          ],
          results: [
            'Pełne usystematyzowanie kluczowych procesów',
            'Spójny model dodawania i edycji zasobów',
            'Czytelna kontrola stanu aplikacji i procesów',
            'Znaczące ograniczenie chaosu uprawnień i dostępu',
            'Solidna podstawa pod dalszy, skalowalny rozwój systemu',
          ],
        },
        {
          number: '02',
          title: 'Platforma do monitoringu sentymentu marek w internecie (B2B)',
          context: {
            firma: 'platforma B2B do monitorowania, analizy i raportowania sentymentu marek',
            produkt: 'system dla agencji komunikacyjnych i PR — agregacja treści z portali i social media, wykrywanie kryzysów wizerunkowych, analiza nastrojów',
            rola: 'UX Designer / Lead UX',
            zakres: 'redesign istniejącej aplikacji, złożone interfejsy analityczne i raportowe, design system, współpraca z dev i QA, testy z użytkownikami',
          },
          problem: [
            'Bardzo wysoka złożoność domenowa przy dużym długu technologicznym',
            'Brak wcześniejszego spójnego podejścia UX',
            'Potrzeba maksymalnej optymalizacji czasu dla operatorów (praca powtarzalna, setki czynności dziennie)',
            'Złożony system raportowania z Query Builderem i skomplikowanymi relacjami logicznymi (AND/OR/NOT, sentyment, kategorie, kontekst)',
            'Chaotyczny i niespójny interfejs w aplikacji analitycznej',
          ],
          process: [
            'Discovery: analiza dwóch kluczowych obszarów — wtyczka przeglądarkowa do indeksowania + główna aplikacja analityczna',
            'Identyfikacja użytkowników: operatorzy/analitycy treści (ręczne indeksowanie) oraz konsultanci/specjaliści PR (analiza, raporty, reakcja na kryzysy)',
            'Wtyczka: optymalizacja flow indeksowania, redukcja kroków i decyzji, projekt interfejsu do szybkiego skanowania treści',
            'Główna aplikacja: porządkowanie systemu raportowania, projektowanie wizualnego Query Buildera, zarządzanie relacjami między zbiorami danych',
            'Prototypowanie wysokiej wierności — kluczowe dla oceny efektywności pracy (czas wykonania, liczba błędów)',
            'Testy użyteczności na prototypach z realnymi użytkownikami',
            'Design system: podejście ewolucyjne, tworzenie na bazie realnych potrzeb produktu równolegle z rozwojem',
            'Współpraca z zespołem developerskim i QA (w szczytowym momencie kilkanaście osób)',
          ],
          solution: [
            'Zoptymalizowany flow indeksowania we wtyczce — redukcja czasu i błędów',
            'Wizualny system budowania zapytań obsługujący bardzo złożone relacje logiczne (np. marka A + wariant X + sentyment negatywny + marka B + sentyment pozytywny + lokalizacja)',
            'Interfejsy analityczne wspierające pracę na złożonych filtrach',
            'Design system rozwijany ewolucyjnie jako narzędzie redukcji chaosu i zwiększenia spójności',
          ],
          images: [
            {
              url: '/img/main-panel.png',
              caption: 'Main panel',
            },
            {
              url: '/img/edit-chart.png',
              caption: 'Edit chart',
            },
            {
              url: '/img/query-builder.png',
              caption: 'Query Builder',
            },
          ],
          results: [
            'Skrócenie czasu reakcji zespołów agencyjnych na kryzysy wizerunkowe',
            'Poprawa efektywności pracy operatorów dzięki optymalizacji flow',
            'Ustandaryzowanie i zwiększenie skalowalności produktu',
            'System przez lata wspierał agencje w wykrywaniu i reagowaniu na kryzysy',
          ],
        },
      ];
    } else {
      return [
        {
          number: '01',
          title: 'Modernization of project, resource, and finance management system',
          context: {
            firma: 'internal enterprise application (NDA)',
            produkt: 'system for managing projects, human resources, project finances, and organizational profitability — used daily by Project Managers, HR, Finance/Controlling, Administration',
            rola: 'Senior UX/UI Designer',
            zakres: 'UX strategy, IA, process mapping, UI, design system — long-term, iterative project',
          },
          problem: [
            'Lack of clearly mapped processes (e.g., HR processes existed "only formally")',
            'Low readability of process states and responsibilities',
            'Ambiguous and inconsistent role and permission system',
            'Chaotic information architecture and difficult navigation',
            'Highly complex, inflexible tabular views',
            'High level of user adaptation to poor solutions and strong resistance to change',
            'No possibility of gradual modernization — old solutions had to be completely replaced with new ones',
          ],
          process: [
            'Discovery: heuristic audit, analysis of existing flows and system logic, "as-is" process mapping, limited user interviews (significant time barriers)',
            'Identified main user groups: regular employees, team leaders, project managers, HR, finance/controlling, administrators. Key roles: PM, HR, Finance/Controlling',
            'Processes as foundation: mapping key processes, unifying structure, ensuring full state transparency (e.g., HR change process and new client addition)',
            'Role and permission system: two-level model (Trust Level + Organizational Role), designing admin panel as first module of new application',
            'Information architecture: switching application context per role, menu with "Favorites" section, global search, summary screens, breadcrumbs as constant orientation element',
            'Tabular data: flexible column management, sorting, filtering, consistent statuses, two types of notifications (contextual and system)',
            'UI and Design System: designing complete design system from scratch (from atoms to organisms), emphasizing information hierarchy; color exclusively for informational function',
            'Commercial design system adaptation: translation to new standard imposed on the organization',
          ],
          solution: [
            'Complete systematization of key processes and consistent resource addition/editing model',
            'Clear application and process state control for all parties (employee, leader, HR)',
            'Significant reduction of permission and access chaos through two-level model (Trust Level + Role)',
            'Transparent workflows with stage division, progress tracking, and consistent communication',
            'Solid foundation for further, scalable system development',
          ],
          images: [
            {
              url: 'https://images.unsplash.com/photo-1575388902449-6bca946ad549?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwZGFzaGJvYXJkJTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2NTUyODY1M3ww&ixlib=rb-4.1.0&q=80&w=1080',
              caption: 'System dashboard',
            },
            {
              url: 'https://images.unsplash.com/photo-1633412802994-5c058f151b66?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdGFibGUlMjBmaWx0ZXJzfGVufDF8fHx8MTc2NTUyODY1NHww&ixlib=rb-4.1.0&q=80&w=1080',
              caption: 'Column management and filtering',
            },
            {
              url: 'https://images.unsplash.com/photo-1586474222559-dbbbb41dd70f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhbiUyMGZvcm0lMjBkZXNpZ258ZW58MXx8fHwxNzY1NTI4NjU0fDA&ixlib=rb-4.1.0&q=80&w=1080',
              caption: 'Admin panel',
            },
          ],
          results: [
            'Complete systematization of key processes',
            'Consistent resource addition and editing model',
            'Clear application and process state control',
            'Significant reduction of permission and access chaos',
            'Solid foundation for further, scalable system development',
          ],
        },
        {
          number: '02',
          title: 'Internet brand sentiment monitoring platform (B2B)',
          context: {
            firma: 'B2B platform for monitoring, analyzing, and reporting brand sentiment',
            produkt: 'system for communication agencies and PR — aggregation of content from portals and social media, detection of brand crises, sentiment analysis',
            rola: 'UX Designer / Lead UX',
            zakres: 'redesign of existing application, complex analytical and reporting interfaces, design system, collaboration with dev and QA, user testing',
          },
          problem: [
            'Very high domain complexity with long technological history',
            'Lack of previous consistent UX approach',
            'Need for maximum time optimization for operators (repetitive work, hundreds of tasks daily)',
            'Complex reporting system with Query Builder and complicated logical relationships (AND/OR/NOT, sentiment, categories, context)',
            'Chaotic and inconsistent interface in the analytical application',
          ],
          process: [
            'Discovery: analysis of two key areas — browser extension for indexing + main analytical application',
            'User identification: content operators/analytics (manual indexing) and consultants/PR specialists (analysis, reports, crisis response)',
            'Extension: optimization of indexing flow, reduction of steps and decisions, design of interface for quick content scanning',
            'Main application: organizing the reporting system, designing visual Query Builder, managing data set relationships',
            'High-fidelity prototyping — crucial for evaluating work efficiency (execution time, error count)',
            'Usability testing on prototypes with real users',
            'Design system: evolutionary approach, creation based on real product needs in parallel with development',
            'Collaboration with the development team and QA (up to a dozen people at peak)',
          ],
          solution: [
            'Optimized indexing flow in the extension — time and error reduction',
            'Visual query building system supporting very complex logical relationships (e.g., Brand A + Variant X + negative sentiment + Brand B + positive sentiment + location)',
            'Analytical interfaces supporting work on complex filters',
            'Design system evolving evolutionarily as a tool for reducing chaos and increasing consistency',
          ],
          images: [
            {
              url: '/img/main-panel.png',
              caption: 'Main panel',
            },
            {
              url: '/img/edit-chart.png',
              caption: 'Edit chart',
            },
            {
              url: '/img/query-builder.png',
              caption: 'Query Builder',
            },
          ],
          results: [
            'Shortened reaction time of agency teams to brand crises',
            'Improved operator work efficiency through flow optimization',
            'Standardization and scalability of the product',
            'The system supported agencies in detecting and responding to crises for years',
          ],
        },
      ];
    }
  };

  const caseStudies = getCaseStudiesData();

  return (
    <section id="case-studies" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-2 text-xs tracking-[0.2em] uppercase text-neutral-500">
          {t('cs.label')}
        </div>
        <h2 className="mb-4 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
          {t('cs.title')}
        </h2>
        <p className="mb-24 text-neutral-600 max-w-3xl">
          {t('cs.description')}
        </p>

        <div className="space-y-32">
          {caseStudies.map((caseStudy) => (
            <CaseStudy key={caseStudy.number} {...caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}