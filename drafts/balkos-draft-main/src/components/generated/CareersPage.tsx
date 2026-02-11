import React from 'react';
import { ChevronRight, CheckCircle, Briefcase, ArrowRight } from 'lucide-react';
interface CareersPageProps {
  onNavigate: (page: string) => void;
}
export default function CareersPage({
  onNavigate
}: CareersPageProps) {
  const openPositions = [{
    title: 'Industriemechaniker (m/w/d)',
    industry: 'Chemieindustrie',
    type: 'Projektbasiert',
    location: 'Verschiedene Standorte in Deutschland'
  }, {
    title: 'Schweißer / Rohrleitungsbauer (m/w/d)',
    industry: 'Petrochemie',
    type: 'Langzeitvertrag',
    location: 'Norddeutschland'
  }, {
    title: 'Instandhaltungstechniker (m/w/d)',
    industry: 'Energie & Versorgung',
    type: 'Temporär',
    location: 'Süddeutschland'
  }, {
    title: 'Industriehelfer (m/w/d)',
    industry: 'Industrieproduktion',
    type: 'Projektbasiert',
    location: 'Bundesweit'
  }] as any[];
  const typicalRoles = ['Industriemechaniker', 'Schweißer und Rohrleitungsbauer', 'Instandhaltungstechniker', 'Industriehelfer', 'Aufsichts- und technische Unterstützungsrollen'];
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Karriere
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Wir vermitteln qualifizierte Fachkräfte in Industrieprojekte in ganz Deutschland.
            </p>
            <p className="text-lg text-slate-300">
              Einsätze in regulierten und sicherheitskritischen Umgebungen.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Warum mit Balkos arbeiten
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['Strukturierte Industrieeinsätze', 'Klare Leistungsumfänge und Verantwortlichkeiten', 'Zuverlässige Projektplanung', 'Einhaltung von Sicherheits- und Standortanforderungen', 'Lang- und projektbasierte Möglichkeiten'].map((item, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Briefcase className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-slate-900">
                Offene Stellen
              </h2>
            </div>

            <div className="space-y-4 mb-8">
              {openPositions.map((position, i) => <div key={i} className="border border-slate-200 bg-white hover:border-orange-400 transition-colors">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{position.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded">
                            {position.industry}
                          </span>
                          <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded">
                            {position.type}
                          </span>
                        </div>
                      </div>
                      <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded font-medium transition-colors self-start whitespace-nowrap">
                        Details / Bewerben
                      </button>
                    </div>
                    <p className="text-slate-600">
                      <span className="font-medium">Standort:</span> {position.location}
                    </p>
                  </div>
                </div>)}
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 text-center">
              <p className="text-slate-700">
                Zusätzliche Positionen können je nach Projektanforderungen verfügbar sein.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Typical Roles */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Typische Rollen, für die wir rekrutieren
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Bewerber mit relevanter Industrieerfahrung werden ermutigt, sich zu bewerben.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {typicalRoles.map((role, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{role}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Bewerbungsprozess
            </h2>
            <div className="space-y-4 mb-6">
              {[{
              num: '1',
              title: 'Bewerbung oder Kontaktdaten einreichen',
              desc: 'Senden Sie uns Ihren Lebenslauf oder Ihre Kontaktinformationen'
            }, {
              num: '2',
              title: 'Überprüfung von Qualifikationen und Erfahrung',
              desc: 'Wir prüfen Ihre Fähigkeiten und Erfahrungen'
            }, {
              num: '3',
              title: 'Klärung der Verfügbarkeit und Projekteignung',
              desc: 'Abstimmung Ihrer Verfügbarkeit mit verfügbaren Projekten'
            }, {
              num: '4',
              title: 'Einsatzplatzierung und Standortanforderungen',
              desc: 'Detaillierte Einweisung in Projektanforderungen'
            }, {
              num: '5',
              title: 'Einsatz zum Projekt',
              desc: 'Start Ihrer Arbeit am Projektstandort'
            }].map(step => <div key={step.num} className="flex items-start space-x-4 p-4 bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-600">{step.desc}</p>
                  </div>
                </div>)}
            </div>
            <p className="text-center text-slate-600">
              Klare Kommunikation in jeder Phase.
            </p>
          </div>
        </div>
      </section>

      {/* Safety & Professional Standards */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Sicherheits- und Berufsstandards
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Von allen Mitarbeitern wird erwartet, dass sie gemäß Sicherheitsvorschriften, Standortanforderungen und Berufsstandards arbeiten.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {['Einhaltung von Sicherheitsvorschriften', 'Standort-Einweisungen und Unterweisungen', 'Verwendung erforderlicher persönlicher Schutzausrüstung', 'Professionelles Verhalten an Kundenstandorten'].map((item, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action - Apply */}
      <section className="py-16 bg-orange-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Für Industrieeinsätze bewerben
            </h2>
            <p className="text-xl text-orange-50 mb-8">
              Senden Sie uns Ihre Daten und Ihre Verfügbarkeit. Wir werden Sie kontaktieren, wenn ein geeignetes Projekt verfügbar ist.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate('kontakt')} className="bg-white hover:bg-slate-100 text-orange-600 px-8 py-4 rounded font-medium text-lg transition-colors">
                Jetzt Bewerben
              </button>
              <button onClick={() => onNavigate('kontakt')} className="border-2 border-white hover:bg-white hover:text-orange-600 text-white px-8 py-4 rounded font-medium text-lg transition-all">
                Fragen stellen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-Link to Company Credibility */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Unsere Einsätze werden für Industriebetreiber in mehreren Sektoren durchgeführt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('branchen')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Branchen ansehen, die wir bedienen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <button onClick={() => onNavigate('projekte')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Projekte & Referenzen ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}