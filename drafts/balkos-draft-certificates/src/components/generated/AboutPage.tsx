import React from 'react';
import { ChevronRight, CheckCircle, Building, Target, Users } from 'lucide-react';
import StatsStrip from './StatsStrip';
interface AboutPageProps {
  onNavigate: (page: string) => void;
}
export default function AboutPage({
  onNavigate
}: AboutPageProps) {
  const trustStats = [{
    label: 'Abgeschlossene Projekte',
    value: 250,
    suffix: '+'
  }, {
    label: 'Zertifizierte Mitarbeiter',
    value: 180,
    suffix: '+'
  }, {
    label: 'Jahre Erfahrung',
    value: 15,
    suffix: '+'
  }] as any[];
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Über Balkos Industrieservice Germany GmbH
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Balkos Industrieservice Germany GmbH bietet industrielle Dienstleistungen und qualifiziertes Personal für sicherheitskritische Umgebungen.
            </p>
            <p className="text-lg text-slate-300">
              Tätig in regulierten Industriesektoren in ganz Deutschland.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Strip - Data-Driven Trust */}
      <StatsStrip stats={trustStats} theme="dark" />

      {/* Company Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Building className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-slate-900">
                Unternehmensübersicht
              </h2>
            </div>

            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Balkos Industrieservice Germany GmbH ist ein in Deutschland ansässiger Anbieter industrieller Dienstleistungen, der Betreiber in den Bereichen Chemie, Petrochemie, Energie und Industrieproduktion unterstützt.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">Fakten</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Registriert in Deutschland</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Industrielle Dienstleistungen und Personalleasing</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Projekt- und langfristige Unterstützung</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Einsatz an mehreren Industriestandorten</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white border border-slate-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-slate-900 mb-3 text-lg">Tagline</h3>
                <p className="text-lg text-slate-700 italic">
                  "Industrielle Dienstleistungen. Qualifiziertes Personal. Zuverlässige Ausführung."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-slate-900">
                Was wir tun
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              {['Personalleasing für Industriebetrieb und -wartung', 'Industrielle Instandhaltungsunterstützung', 'Rohrleitungsbau und -fertigung', 'Shutdown- und Turnaround-Dienstleistungen'].map((service, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-slate-50 border border-slate-200 rounded-lg hover:border-orange-500 transition-colors">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{service}</span>
                </div>)}
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg">
              <p className="text-slate-700">
                Dienstleistungen entsprechend definierten Umfängen, Sicherheitsanforderungen und Kundenerwartungen erbracht.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Data-Driven Performance Metrics */}
      <section className="py-16 bg-gradient-to-br from-slate-950 to-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Unsere Leistungsdaten sprechen für sich
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">98%</div>
                <div className="text-slate-300">Kundenzufriedenheit</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">99.5%</div>
                <div className="text-slate-300">Termingerechte Fertigstellung</div>
              </div>
              <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-orange-500 mb-2">Zero</div>
                <div className="text-slate-300">Schwere Sicherheitsvorfälle</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Wie wir arbeiten
            </h2>
            <div className="space-y-4 mb-6">
              {[{
              num: '1',
              title: 'Klärung der Kundenanforderungen',
              desc: 'Verstehen spezifischer Bedürfnisse und Erwartungen'
            }, {
              num: '2',
              title: 'Definition von Umfang und Verantwortlichkeiten',
              desc: 'Klare Festlegung aller Projektelemente'
            }, {
              num: '3',
              title: 'Auswahl qualifizierten Personals oder Dienstleistungen',
              desc: 'Matching der richtigen Ressourcen mit Anforderungen'
            }, {
              num: '4',
              title: 'Koordinierte Ausführung vor Ort',
              desc: 'Strukturierte Umsetzung mit kontinuierlicher Kommunikation'
            }, {
              num: '5',
              title: 'Abschluss und Dokumentation',
              desc: 'Vollständige Berichterstattung und Projektübergabe'
            }].map(step => <div key={step.num} className="flex items-start space-x-4 p-4 bg-white border border-slate-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-lg shadow-lg shadow-orange-500/20">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>)}
            </div>
            <p className="text-center text-slate-600">
              Klare Verantwortlichkeiten und Kommunikation in jeder Phase.
            </p>
          </div>
        </div>
      </section>

      {/* Management & Responsibility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-slate-900">
                Management & Verantwortung
              </h2>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-8 rounded-lg">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  Geschäftsführung
                </h3>
                <p className="text-slate-700">
                  Gesamtverantwortung für Betrieb, Compliance und Kundenkoordination.
                </p>
              </div>
              <div className="bg-white border border-orange-200 p-4 rounded-lg">
                <p className="text-slate-700">
                  Klare Verantwortlichkeit für alle Dienstleistungen und Personaleinsätze.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Reference */}
      <section className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Alle Aktivitäten werden gemäß geltenden industriellen, Sicherheits- und Qualitätsstandards durchgeführt.
            </p>
            <button onClick={() => onNavigate('zertifikate')} className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center transition-colors">
              Zertifikate & Compliance ansehen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Industries & Experience Reference */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Erfahrung in regulierten Industriesektoren.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('branchen')} className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center transition-colors">
                Branchen ansehen, die wir bedienen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <button onClick={() => onNavigate('projekte')} className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center transition-colors">
                Projekte & Referenzen ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Clients Work With Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Warum Kunden mit uns arbeiten
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['Qualifiziertes und erfahrenes Personal', 'Zuverlässige Ausführung in kritischen Umgebungen', 'Einhaltung von Standort- und behördlichen Anforderungen', 'Klare Koordination und Kommunikation', 'Strukturierte Projekt- und Personalunterstützung'].map((item, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-orange-500 hover:shadow-md transition-all">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Primary Conversion */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Suchen Sie einen zuverlässigen Industriepartner?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Teilen Sie uns Ihr Projekt oder Ihren Personalbedarf mit. Wir antworten klar und professionell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium transition-colors shadow-lg shadow-orange-500/20">
                Angebot Anfragen
              </button>
              <button onClick={() => onNavigate('kontakt')} className="border-2 border-orange-500 hover:bg-orange-500 hover:border-orange-500 text-white px-8 py-3 rounded font-medium transition-all">
                Kontakt Aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}