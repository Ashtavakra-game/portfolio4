import { useLanguage } from '../context/LanguageContext';

export function Skills() {
  const { t, language } = useLanguage();
  
  const getSkillsData = () => {
    if (language === 'pl') {
      return [
        {
          category: 'Core UX / Product Skills',
          items: [
            'Projektowanie end-to-end złożonych produktów cyfrowych (B2B, systemy eksperckie)',
            'Redesign i rozwój istniejących aplikacji z dużym długiem technologicznym',
            'Przekładanie złożonej domeny biznesowej i danych na użyteczne interfejsy',
            'Projektowanie narzędzi analitycznych i raportowych',
            'Praca na produktach o wysokiej złożoności poznawczej (high cognitive load)',
            'Świadome balansowanie między użytecznością, ograniczeniami technicznymi i biznesem',
          ],
        },
        {
          category: 'UX Architecture & Information Design',
          items: [
            'Projektowanie struktur informacji dla rozbudowanych systemów',
            'Modelowanie relacji między zbiorami danych, filtrami i zależnościami logicznymi',
            'Projektowanie wizualnych systemów budowania zapytań (Query Builders)',
            'Upraszczanie skomplikowanych procesów decyzyjnych użytkownika',
            'Projektowanie interfejsów dla użytkowników eksperckich (power users)',
          ],
        },
        {
          category: 'Interaction Design & Flows',
          items: [
            'Projektowanie i optymalizacja złożonych flow operacyjnych',
            'Redukcja liczby kroków, kliknięć i czasu wykonania zadań',
            'Projektowanie interakcji dla powtarzalnych, masowych czynności',
            'Optymalizacja UX pod efektywność, a nie tylko estetykę',
            'Projektowanie mikrointerakcji wspierających szybkość pracy',
          ],
        },
        {
          category: 'Prototyping & Validation',
          items: [
            'Prototypowanie (low / mid / high fidelity) jako kluczowe narzędzie projektowe',
            'Testowanie użyteczności prototypów z realnymi użytkownikami',
            'Walidacja rozwiązań w kontekście czasu wykonania, błędów i obciążenia poznawczego',
            'Iteracyjne dopracowywanie rozwiązań na podstawie obserwacji, nie założeń',
          ],
        },
        {
          category: 'Design Systems',
          items: [
            'Projektowanie i rozwijanie design systemów w produktach legacy',
            'Ewolucyjne podejście do design systemu (nie greenfield)',
            'Standaryzacja komponentów, layoutów i wzorców interakcji',
            'Utrzymywanie spójności UX w rozbudowanych aplikacjach',
            'Współpraca z devami przy wdrażaniu i skalowaniu systemu',
          ],
        },
        {
          category: 'Data-Driven & Analytical Thinking',
          items: [
            'Praca z danymi jakościowymi i ilościowymi',
            'Projektowanie interfejsów opartych o filtry, segmentację i agregację danych',
            'Rozumienie analityki, sentymentu, kategoryzacji treści',
            'Projektowanie UI wspierającego analizę i podejmowanie decyzji',
            'Myślenie systemowe i logiczne (AND / OR / NOT, relacje zbiorów)',
          ],
        },
        {
          category: 'Domain Expertise (B2B / Analytics / Monitoring)',
          items: [
            'Systemy monitoringu treści i marek',
            'Analiza sentymentu i danych jakościowych',
            'Narzędzia dla agencji PR, komunikacji i analityków',
            'Zarządzanie kryzysami wizerunkowymi (damage control – z perspektywy produktu)',
            'Praca w środowiskach o dużej skali danych i użytkowników',
          ],
        },
        {
          category: 'Collaboration & Process',
          items: [
            'Praca w dużych, interdyscyplinarnych zespołach',
            'Ścisła współpraca z developerami i QA',
            'Projektowanie w realnych ograniczeniach technicznych',
            'Odpowiedzialność za spójność UX w całym produkcie',
            'Samodzielność i ownership obszarów produktowych',
          ],
        },
        {
          category: 'Meta-Skills',
          items: [
            'Myślenie systemowe',
            'Wysoka precyzja projektowa',
            'Odporność na złożoność',
            'Praca bez „happy pathów"',
            'Projektowanie dla realnej pracy, nie dla prezentacji',
            'Umiejętność pracy bez pełnej dokumentacji i w chaosie legacy systemów',
          ],
        },
      ];
    } else {
      return [
        {
          category: 'Core UX / Product Skills',
          items: [
            'End-to-end design of complex digital products (B2B, expert systems)',
            'Redesign and development of existing applications with high technical debt',
            'Translating complex business domains and data into usable interfaces',
            'Designing analytical and reporting tools',
            'Working on products with high cognitive load',
            'Conscious balancing between usability, technical constraints, and business',
          ],
        },
        {
          category: 'UX Architecture & Information Design',
          items: [
            'Designing information structures for complex systems',
            'Modeling relationships between data sets, filters, and logical dependencies',
            'Designing visual query building systems (Query Builders)',
            'Simplifying complex user decision-making processes',
            'Designing interfaces for power users',
          ],
        },
        {
          category: 'Interaction Design & Flows',
          items: [
            'Designing and optimizing complex operational flows',
            'Reducing the number of steps, clicks, and task execution time',
            'Designing interactions for repetitive, mass actions',
            'Optimizing UX for efficiency, not just aesthetics',
            'Designing micro-interactions supporting work speed',
          ],
        },
        {
          category: 'Prototyping & Validation',
          items: [
            'Prototyping (low / mid / high fidelity) as a key design tool',
            'Usability testing of prototypes with real users',
            'Validating solutions in terms of execution time, errors, and cognitive load',
            'Iteratively refining solutions based on observation, not assumptions',
          ],
        },
        {
          category: 'Design Systems',
          items: [
            'Designing and developing design systems in legacy products',
            'Evolutionary approach to design systems (not greenfield)',
            'Standardization of components, layouts, and interaction patterns',
            'Maintaining UX consistency in complex applications',
            'Collaborating with developers on implementation and scaling',
          ],
        },
        {
          category: 'Data-Driven & Analytical Thinking',
          items: [
            'Working with qualitative and quantitative data',
            'Designing interfaces based on filters, segmentation, and data aggregation',
            'Understanding analytics, sentiment, content categorization',
            'Designing UI supporting analysis and decision-making',
            'Systemic and logical thinking (AND / OR / NOT, set relationships)',
          ],
        },
        {
          category: 'Domain Expertise (B2B / Analytics / Monitoring)',
          items: [
            'Content and brand monitoring systems',
            'Sentiment analysis and qualitative data',
            'Tools for PR agencies, communication, and analysts',
            'Brand crisis management (damage control – from product perspective)',
            'Working in environments with large scale of data and users',
          ],
        },
        {
          category: 'Collaboration & Process',
          items: [
            'Working in large, interdisciplinary teams',
            'Close collaboration with developers and QA',
            'Designing within real technical constraints',
            'Responsibility for UX consistency across the entire product',
            'Independence and ownership of product areas',
          ],
        },
        {
          category: 'Meta-Skills',
          items: [
            'Systems thinking',
            'High design precision',
            'Resistance to complexity',
            'Working without "happy paths"',
            'Designing for real work, not for presentations',
            'Ability to work without full documentation and in legacy system chaos',
          ],
        },
      ];
    }
  };

  const skills = getSkillsData();

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-2 text-xs tracking-[0.2em] uppercase text-neutral-500">
          {t('skills.label')}
        </div>
        <h2 className="mb-16 text-[clamp(1.75rem,4vw,2.5rem)] leading-tight">
          {t('skills.title')}
        </h2>

        <div className="space-y-12">
          {skills.map((skillGroup, index) => (
            <div key={index} className="border-l-2 border-neutral-300 pl-8">
              <h3 className="mb-6 text-neutral-900">
                {skillGroup.category}
              </h3>
              <ul className="space-y-3">
                {skillGroup.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-neutral-600 leading-relaxed">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}