import React from 'react';
import { ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
interface IndustriesPageProps {
  onNavigate: (page: string) => void;
}
export default function IndustriesPage({
  onNavigate
}: IndustriesPageProps) {
  const industries = [{
    id: 'chemie',
    name: 'Chemieindustrie',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1200',
    description: 'Unterstützung für chemische Produktionsanlagen, die strenge Einhaltung von Sicherheits-, Umwelt- und Betriebsstandards erfordern.',
    services: ['Personalleasing für Betrieb und Instandhaltung', 'Mechanische und industrielle Instandhaltung', 'Rohrleitungsbau und -modifikationen', 'Shutdown- und Turnaround-Unterstützung']
  }, {
    id: 'petrochemie',
    name: 'Petrochemische Industrie',
    image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=1200',
    description: 'Industrielle Dienstleistungen und Personalvermittlung für komplexe petrochemische Anlagen mit hohen Sicherheits- und Zuverlässigkeitsanforderungen.',
    services: ['Einsatz qualifizierter Fachkräfte', 'Instandhaltungs- und mechanische Unterstützung', 'Rohrleitungsfertigung und -installation', 'Shutdown- und Turnaround-Ausführung']
  }, {
    id: 'energie',
    name: 'Energie & Versorgung',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200',
    description: 'Unterstützung für Stromerzeugung, Energieinfrastruktur und Versorgungsanlagen, wo Betriebskontinuität entscheidend ist.',
    services: ['Wartungsunterstützung', 'Personalleasing für operative Rollen', 'Mechanische und Rohrleitungsarbeiten', 'Unterstützung bei geplanten Ausfällen']
  }, {
    id: 'produktion',
    name: 'Industrieproduktion',
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1200',
    description: 'Flexible industrielle Dienstleistungen und Personalvermittlung für Fertigungs- und Produktionsanlagen.',
    services: ['Instandhaltungs- und technische Unterstützung', 'Personalleasing', 'Mechanische und Rohrleitungsarbeiten', 'Shutdown- und Produktionsstillstandsunterstützung']
  }] as any[];
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Branchen, die wir bedienen
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Wir sind in regulierten, sicherheitskritischen Industrieumgebungen tätig. Unsere Dienstleistungen und unser Personal werden dort eingesetzt, wo Compliance, Erfahrung und kontrollierte Ausführung obligatorisch sind.
            </p>
            <p className="text-lg text-slate-300">
              Erfahrung in mehreren Schwerindustriesektoren in Deutschland.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview - Quick Scan */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <p className="text-lg text-slate-700 mb-6">
            Unsere Teams unterstützen Industriebetreiber in den folgenden Sektoren:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {industries.map(industry => <a key={industry.id} href={`#${industry.id}`} className="block p-4 bg-white border border-slate-200 hover:border-orange-400 transition-colors">
                <h3 className="font-semibold text-slate-900">{industry.name}</h3>
              </a>)}
          </div>
        </div>
      </section>

      {/* Industry Details */}
      {industries.map((industry, index) => <React.Fragment key={industry.id}>
          <section id={industry.id} className={`py-16 scroll-mt-16 ${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-video bg-slate-200 rounded overflow-hidden">
                    <img src={industry.image} alt={industry.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-slate-900 mb-4">
                    {industry.name}
                  </h2>
                  <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                    {industry.description}
                  </p>

                  <h3 className="text-xl font-semibold text-slate-900 mb-3">
                    Typische Dienstleistungen in dieser Branche
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {industry.services.map((service, i) => <li key={i} className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{service}</span>
                      </li>)}
                  </ul>

                  <div className="bg-slate-100 border border-slate-200 p-4 mb-6">
                    <p className="text-slate-700">
                      Arbeiten durchgeführt mit qualifiziertem Personal und in Übereinstimmung mit standortspezifischen Sicherheitsanforderungen.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button onClick={() => onNavigate('leistungen')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                      Relevante Leistungen ansehen
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                    <button onClick={() => onNavigate('kontakt')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                      Unterstützung anfragen
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {index < industries.length - 1 && <div className="border-t border-slate-200"></div>}
        </React.Fragment>)}

      {/* Cross-Industry Capabilities */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Branchenübergreifende Fähigkeiten
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {['Qualifiziertes und erfahrenes Personal', 'Einhaltung von Sicherheits- und Qualitätsstandards', 'Flexible Einsatzmodelle', 'Koordination mit Kundenteams und Auftragnehmern', 'Dokumentation und Berichterstattung'].map((capability, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-slate-50 border border-slate-200">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{capability}</span>
                </div>)}
            </div>
            <p className="text-center text-slate-600">
              Anwendbar auf alle von uns bedienten Industriesektoren.
            </p>
          </div>
        </div>
      </section>

      {/* Proof & Compliance */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Unsere Arbeit wird durch dokumentierte Prozesse, qualifiziertes Personal und Einhaltung geltender Standards unterstützt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('projekte')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Projekte & Referenzen ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <button onClick={() => onNavigate('zertifikate')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Zertifikate & Compliance ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Conversion */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Benötigen Sie Unterstützung in Ihrer Branche?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Teilen Sie uns mit, was Sie über Ihre Anlage, Ihr Projekt oder Ihren Personalbedarf benötigen. Wir antworten mit einem klaren und realistischen Angebot.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium transition-colors">
                Angebot Anfragen
              </button>
              <button onClick={() => onNavigate('kontakt')} className="border-2 border-white hover:bg-white hover:text-slate-900 text-white px-8 py-3 rounded font-medium transition-all">
                Kontakt Aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}