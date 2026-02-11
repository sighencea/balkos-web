import React, { useRef } from 'react';
import { ChevronRight, Users, Wrench, PipetteIcon as Pipe, TimerReset, CheckCircle, ArrowRight, ChevronLeft } from 'lucide-react';
interface HomePageProps {
  onNavigate: (page: string) => void;
}
export default function HomePage({
  onNavigate
}: HomePageProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -400,
        behavior: 'smooth'
      });
    }
  };
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 400,
        behavior: 'smooth'
      });
    }
  };
  return <div className="min-h-screen bg-black">
      {/* Hero Section - Full Screen with High-Contrast Dark Overlay */}
      <section id="1" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Layer */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1600")'
        }}></div>
          {/* High-Contrast Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-slate-900/90 to-black/85"></div>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-6xl mx-auto text-center">
            {/* Bold, Oversized Typography */}
            <h1 id="6" className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none tracking-tight">
              <span className="block text-white">INDUSTRIELLE</span>
              <span className="block text-white mt-2">DIENST</span>
              <span className="block bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent mt-2">LEISTUNGEN</span>
            </h1>
            <p className="text-xl md:text-3xl text-slate-300 mb-12 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
              Verlässliches Personal, Instandhaltung und industrielle Services für sicherheitskritische Umgebungen
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => onNavigate('kontakt')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/50">
                ANGEBOT ANFORDERN
              </button>
              <button onClick={() => onNavigate('leistungen')} className="border-2 border-white hover:bg-white hover:text-black text-white px-12 py-5 rounded-lg font-bold text-xl transition-all transform hover:scale-105">
                LEISTUNGEN
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-3 bg-white/50 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-slate-950 border-b border-slate-800 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-slate-300 font-medium">
              Tätig in regulierten Industrieumgebungen in ganz Deutschland
            </p>
            <button onClick={() => onNavigate('zertifikate')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
              Zertifikate & Compliance ansehen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-16 text-center tracking-tight">
            UNSERE LEISTUNGEN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="border border-slate-800 p-8 hover:border-orange-500 transition-all bg-slate-950 hover:bg-slate-900 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Personalleasing
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Qualifiziertes Industriepersonal verfügbar für kurz- und langfristige Einsätze.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Service Card 2 */}
            <div className="border border-slate-800 p-8 hover:border-orange-500 transition-all bg-slate-950 hover:bg-slate-900 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Wrench className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Anlagenwartung
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Geplante und reaktive Instandhaltung zur Aufrechterhaltung eines sicheren Betriebs.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Service Card 3 */}
            <div className="border border-slate-800 p-8 hover:border-orange-500 transition-all bg-slate-950 hover:bg-slate-900 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Pipe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Rohrleitungsbau
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Fertigung und Installation industrieller Rohrleitungssysteme nach Spezifikation.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Service Card 4 */}
            <div className="border border-slate-800 p-8 hover:border-orange-500 transition-all bg-slate-950 hover:bg-slate-900 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <TimerReset className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Shutdown Service
              </h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Zuverlässige Ausführung während geplanter Stillstände und kritischer Wartungsfenster.
              </p>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center transition-colors">
                Mehr erfahren
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served - Horizontal Scrolling Gallery */}
      <section id="54" className="py-24 md:py-32 bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              BRANCHEN
            </h2>
            <p className="text-xl text-slate-400 font-light">
              Erfahrung in regulierten, sicherheitskritischen Industrieumgebungen
            </p>
          </div>
        </div>

        {/* Horizontal Scrolling Gallery */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button onClick={scrollLeft} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-sm hover:bg-orange-500 text-white p-4 rounded-full transition-all shadow-2xl border border-slate-800">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button onClick={scrollRight} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/80 backdrop-blur-sm hover:bg-orange-500 text-white p-4 rounded-full transition-all shadow-2xl border border-slate-800">
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Scrolling Container */}
          <div ref={scrollRef} className="flex gap-8 overflow-x-auto scrollbar-hide px-4 md:px-8 pb-4 snap-x snap-mandatory" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}>
            {[{
            name: 'Chemieindustrie',
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800'
          }, {
            name: 'Petrochemie',
            image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800'
          }, {
            name: 'Energie & Versorgung',
            image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800'
          }, {
            name: 'Industrieproduktion',
            image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800'
          }].map((industry, index) => <button key={index} onClick={() => onNavigate('branchen')} className="group relative flex-shrink-0 w-[400px] h-[500px] md:w-[500px] md:h-[600px] overflow-hidden snap-center">
                {/* Large, Impactful Image */}
                <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110" style={{
              backgroundImage: `url(${industry.image})`
            }}></div>
                
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
                
                {/* Floating Text Label */}
                <div className="absolute inset-0 flex items-end justify-center p-8">
                  <div className="transform transition-all duration-500 group-hover:scale-105 group-hover:-translate-y-4">
                    <h3 className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">
                      {industry.name}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto group-hover:w-32 transition-all duration-500"></div>
                  </div>
                </div>

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-orange-500 transition-all duration-500"></div>
              </button>)}
          </div>
        </div>

        <div className="text-center mt-12">
          <button onClick={() => onNavigate('branchen')} className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center text-xl transition-colors">
            ALLE BRANCHEN ANSEHEN
            <ChevronRight className="w-6 h-6 ml-2" />
          </button>
        </div>
      </section>

      {/* Proof of Experience */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
              BEWÄHRTE AUSFÜHRUNG
            </h2>
            <p className="text-xl text-slate-400 font-light">
              Ausgewählte Beispiele abgeschlossener Projekte und laufender industrieller Unterstützung
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[1, 2, 3, 4].map(i => <div key={i} className="aspect-video bg-slate-900 rounded-lg overflow-hidden border border-slate-800 hover:border-orange-500 transition-all group">
                <img src={`https://images.unsplash.com/photo-${i === 1 ? '1581092160562-40aa08e78837' : i === 2 ? '1611273426858-450d8e3c9fce' : i === 3 ? '1581094794329-c8112a89af12' : '1504328345606-18bbc8c9d7d1'}?w=600`} alt="Project" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>)}
          </div>

          <div className="text-center">
            <button onClick={() => onNavigate('projekte')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/30">
              PROJEKTE & REFERENZEN
              <ChevronRight className="w-6 h-6 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Compliance & Safety */}
      <section className="py-24 md:py-32 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6 text-center tracking-tight">
              COMPLIANCE & SICHERHEIT
            </h2>
            <p className="text-xl text-slate-400 mb-12 text-center font-light">
              Alle Dienstleistungen werden gemäß geltenden industriellen, Sicherheits- und Qualitätsstandards erbracht
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {['Qualifiziertes und zertifiziertes Personal', 'Sicherheitsorientierte Ausführung', 'Dokumentation und Nachverfolgbarkeit', 'Einhaltung von Kunden- und behördlichen Anforderungen'].map((item, index) => <div key={index} className="flex items-start space-x-4 bg-black p-6 rounded-lg border border-slate-800">
                  <CheckCircle className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                  <span className="text-slate-300 text-lg">{item}</span>
                </div>)}
            </div>

            <div className="text-center">
              <button onClick={() => onNavigate('zertifikate')} className="text-orange-400 hover:text-orange-300 font-bold inline-flex items-center text-xl transition-colors">
                ZERTIFIKATE ANSEHEN
                <ChevronRight className="w-6 h-6 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Split */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-y border-slate-700">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-black mb-4 text-white tracking-tight">
              AUF DER SUCHE NACH INDUSTRIEARBEIT?
            </h2>
            <p className="text-slate-300 mb-8 text-lg font-light">
              Wir vermitteln qualifizierte Fachkräfte in Industrieprojekte in ganz Deutschland
            </p>
            <button onClick={() => onNavigate('karriere')} className="border-2 border-white hover:bg-white hover:text-black text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105">
              OFFENE STELLEN
              <ChevronRight className="w-6 h-6 ml-2 inline" />
            </button>
          </div>
        </div>
      </section>

      {/* Primary Conversion Block */}
      <section className="py-24 md:py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-white tracking-tight leading-tight">
              BENÖTIGEN SIE INDUSTRIEUNTERSTÜTZUNG?
            </h2>
            <p className="text-2xl text-slate-400 mb-12 font-light">
              Teilen Sie uns Ihr Projekt oder Ihren Personalbedarf mit. Wir reagieren schnell und professionell.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button onClick={() => onNavigate('kontakt')} className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-12 py-5 rounded-lg font-bold text-xl transition-all transform hover:scale-105 shadow-2xl shadow-orange-500/50">
                ANGEBOT ANFRAGEN
              </button>
              <button onClick={() => onNavigate('kontakt')} className="border-2 border-white hover:bg-white hover:text-black text-white px-12 py-5 rounded-lg font-bold text-xl transition-all transform hover:scale-105">
                KONTAKT AUFNEHMEN
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}