import React from 'react';
import { ChevronRight, Users, Wrench, PipetteIcon as Pipe, TimerReset, CheckCircle, ArrowRight } from 'lucide-react';
import StatsStrip from './StatsStrip';
interface HomePageProps {
  onNavigate: (page: string) => void;
}
export default function HomePage({
  onNavigate
}: HomePageProps) {
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
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-transparent z-10"></div>
        <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: 'linear-gradient(rgba(2, 6, 23, 0.8), rgba(2, 6, 23, 0.95)), url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}></div>
        <div className="container mx-auto px-4 py-24 md:py-32 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Industrielle Dienstleistungen und qualifiziertes Personal für kritische Anlagenbetriebe
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-8 leading-relaxed">
              Wir liefern verlässliches Personal, Instandhaltung und industrielle Dienstleistungen für sicherheitskritische Umgebungen — konform, erfahren und einsatzbereit.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-medium text-lg transition-colors inline-flex items-center justify-center shadow-lg shadow-orange-500/20">
                Jetzt Angebot Anfordern
              </button>
              <button onClick={() => onNavigate('leistungen')} className="border-2 border-orange-500 hover:bg-orange-500 hover:border-orange-500 text-white px-8 py-4 rounded font-medium text-lg transition-all inline-flex items-center justify-center">
                Unsere Leistungen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip - Data-Driven Trust */}
      <StatsStrip stats={trustStats} theme="dark" />

      {/* Credibility Strip */}
      <section className="bg-slate-950 border-b border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-300 font-medium">
              Tätig in regulierten Industrieumgebungen in ganz Deutschland
            </p>
            <button onClick={() => onNavigate('zertifikate')} className="text-orange-500 hover:text-orange-400 font-medium inline-flex items-center transition-colors">
              Zertifikate & Compliance ansehen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
            Unsere Leistungen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="border border-slate-200 p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Personalleasing
              </h3>
              <p className="text-slate-600 mb-4">
                Qualifiziertes Industriepersonal verfügbar für kurz- und langfristige Einsätze.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="border border-slate-200 p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Anlagenwartung
              </h3>
              <p className="text-slate-600 mb-4">
                Geplante und reaktive Instandhaltung zur Aufrechterhaltung eines sicheren Betriebs.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="border border-slate-200 p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-4">
                <Pipe className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Rohrleitungsbau & Fertigung
              </h3>
              <p className="text-slate-600 mb-4">
                Fertigung und Installation industrieller Rohrleitungssysteme nach Spezifikation.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>

            {/* Service Card 4 */}
            <div className="border border-slate-200 p-6 hover:border-orange-500 hover:shadow-lg hover:shadow-orange-500/10 transition-all bg-white">
              <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-4">
                <TimerReset className="w-6 h-6 text-slate-700" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                Shutdown & Turnaround-Service
              </h3>
              <p className="text-slate-600 mb-4">
                Zuverlässige Ausführung während geplanter Stillstände und kritischer Wartungsfenster.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Branchen, die wir bedienen
            </h2>
            <p className="text-lg text-slate-600">
              Erfahrung in regulierten, sicherheitskritischen Industrieumgebungen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[{
            name: 'Chemieindustrie',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600'
          }, {
            name: 'Petrochemie',
            image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600'
          }, {
            name: 'Energie & Versorgung',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600'
          }, {
            name: 'Industrieproduktion',
            image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600'
          }].map((industry, index) => <button key={index} onClick={() => onNavigate('branchen')} className="group relative h-64 overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110" style={{
              backgroundImage: `url(${industry.image})`
            }}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
              </button>)}
          </div>

          <div className="text-center">
            <button onClick={() => onNavigate('branchen')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center text-lg transition-colors">
              Alle Branchen ansehen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Proof of Experience */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Bewährte Ausführung in Industrieprojekten
            </h2>
            <p className="text-lg text-slate-600">
              Ausgewählte Beispiele abgeschlossener Projekte und laufender industrieller Unterstützung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[1, 2, 3, 4].map(i => <div key={i} className="aspect-video bg-slate-200 rounded-lg overflow-hidden">
                <img src={`https://images.unsplash.com/photo-${i === 1 ? '1581092160562-40aa08e78837' : i === 2 ? '1611273426858-450d8e3c9fce' : i === 3 ? '1581094794329-c8112a89af12' : '1504328345606-18bbc8c9d7d1'}?w=600`} alt="Project" className="w-full h-full object-cover" />
              </div>)}
          </div>

          <div className="text-center">
            <button onClick={() => onNavigate('projekte')} className="bg-slate-900 hover:bg-slate-950 text-white px-8 py-3 rounded font-medium transition-colors inline-flex items-center">
              Projekte & Referenzen ansehen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Compliance & Safety */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
              Compliance, Sicherheit und Standards
            </h2>
            <p className="text-lg text-slate-600 mb-8 text-center">
              Alle Dienstleistungen werden gemäß geltenden industriellen, Sicherheits- und Qualitätsstandards erbracht.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {['Qualifiziertes und zertifiziertes Personal', 'Sicherheitsorientierte Ausführung', 'Dokumentation und Nachverfolgbarkeit', 'Einhaltung von Kunden- und behördlichen Anforderungen'].map((item, index) => <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-700">{item}</span>
                </div>)}
            </div>

            <div className="text-center">
              <button onClick={() => onNavigate('zertifikate')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center text-lg transition-colors">
                Zertifikate & Compliance ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Split */}
      <section className="py-12 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Auf der Suche nach Industriearbeit?
            </h2>
            <p className="text-slate-300 mb-6">
              Wir vermitteln qualifizierte Fachkräfte in Industrieprojekte in ganz Deutschland.
            </p>
            <button onClick={() => onNavigate('karriere')} className="border-2 border-orange-500 hover:bg-orange-500 hover:border-orange-500 text-white px-8 py-3 rounded font-medium transition-all inline-flex items-center">
              Offene Stellen ansehen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Primary Conversion Block */}
      <section className="py-16 md:py-24 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Benötigen Sie zuverlässige Industrieunterstützung?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Teilen Sie uns Ihr Projekt oder Ihren Personalbedarf mit. Wir reagieren schnell und professionell.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-medium text-lg transition-colors shadow-lg shadow-orange-500/20">
                Angebot Anfragen
              </button>
              <button onClick={() => onNavigate('kontakt')} className="border-2 border-orange-500 hover:bg-orange-500 hover:border-orange-500 text-white px-8 py-4 rounded font-medium text-lg transition-all">
                Kontakt Aufnehmen
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}