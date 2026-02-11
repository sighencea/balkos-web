import React from 'react';
import { Users, Wrench, PipetteIcon as Pipe, TimerReset, ChevronRight, CheckCircle } from 'lucide-react';
interface ServicesPageProps {
  onNavigate: (page: string) => void;
}
export default function ServicesPage({
  onNavigate
}: ServicesPageProps) {
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Industrielle Dienstleistungen
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Wir bieten qualifiziertes Personal und industrielle Dienstleistungen für sicherheitskritische Umgebungen. Unser Leistungsspektrum umfasst Personalvermittlung, Instandhaltung, Rohrleitungsbau und Shutdown-Unterstützung — zuverlässig und in Übereinstimmung mit industriellen Standards geliefert.
            </p>
            <p className="text-lg text-slate-300">
              Dienstleistungen verfügbar für kurzfristige Einsätze, Langzeitverträge und projektbezogene Arbeiten.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview - Quick Navigation */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Schnellübersicht</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[{
            id: 'personalleasing',
            title: 'Personalleasing & Zeitarbeit',
            desc: 'Qualifiziertes Industriepersonal für flexible und projektbasierte Einsätze.'
          }, {
            id: 'wartung',
            title: 'Anlagenwartung',
            desc: 'Geplante und reaktive Instandhaltung zur Gewährleistung der Betriebskontinuität.'
          }, {
            id: 'rohrleitungsbau',
            title: 'Rohrleitungsbau & Fertigung',
            desc: 'Fertigung und Installation industrieller Rohrleitungssysteme.'
          }, {
            id: 'shutdown',
            title: 'Shutdown & Turnaround',
            desc: 'Zuverlässige Ausführung während geplanter Stillstände und kritischer Wartungsphasen.'
          }].map(service => <a key={service.id} href={`#${service.id}`} className="block p-4 bg-white border border-slate-200 hover:border-orange-400 transition-colors">
                <h3 className="font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-600">{service.desc}</p>
              </a>)}
          </div>
        </div>
      </section>

      {/* Service Detail 1 - Personnel Leasing */}
      <section id="personalleasing" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                <Users className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Personalleasing & Zeitarbeit
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Wir stellen qualifiziertes und erfahrenes Industriepersonal zur Unterstützung von Betrieb, Instandhaltung und Projekten bereit. Unser Personal wird gemäß Kundenanforderungen, Sicherheitsvorschriften und geltenden Standards eingesetzt.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-6">
              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Typische Rollen</h3>
                <ul className="space-y-2 text-slate-700">
                  {['Industriemechaniker und Monteure', 'Schweißer und Rohrleitungsbauer', 'Instandhaltungstechniker', 'Aufsichts- und Unterstützungspersonal'].map((role, i) => <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{role}</span>
                    </li>)}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">Einsatzbereiche</h3>
                <ul className="space-y-2 text-slate-700">
                  {['Kurzfristige Überbrückung', 'Langfristige Personalergänzung', 'Projekt- und Shutdown-Unterstützung'].map((use, i) => <li key={i} className="flex items-start space-x-2">
                      <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span>{use}</span>
                    </li>)}
                </ul>
              </div>
            </div>

            <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors inline-flex items-center">
              Personal Anfragen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200"></div>

      {/* Service Detail 2 - Industrial Maintenance */}
      <section id="wartung" className="py-16 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                <Wrench className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Anlagenwartung & Instandhaltung
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Wir unterstützen Industrieanlagen mit geplanten und reaktiven Instandhaltungsdienstleistungen, um einen sicheren und unterbrechungsfreien Betrieb zu gewährleisten.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Leistungsumfang</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Mechanische Instandhaltung', 'Vorbeugende Wartungsunterstützung', 'Störungsreaktion während des Betriebs', 'Wartungsunterstützung bei Stillständen'].map((item, i) => <div key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 mb-6">
              <p className="text-slate-700">
                Alle Wartungsarbeiten werden von qualifiziertem Personal in Übereinstimmung mit Sicherheits- und Qualitätsanforderungen durchgeführt.
              </p>
            </div>

            <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors inline-flex items-center">
              Wartungsunterstützung Anfragen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200"></div>

      {/* Service Detail 3 - Piping */}
      <section id="rohrleitungsbau" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center flex-shrink-0">
                <Pipe className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Rohrleitungsbau & Fertigung
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Wir bieten Fertigung und Installation industrieller Rohrleitungssysteme gemäß Projektspezifikationen und geltenden Standards.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Leistungsumfang</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Rohrfertigung', 'Vor-Ort-Installation', 'Modifikationen und Erweiterungen', 'Koordination mit bestehenden Systemen'].map((item, i) => <div key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 mb-6">
              <p className="text-slate-700">
                Die Arbeiten werden mit vollständiger Dokumentation und unter Einhaltung technischer Anforderungen ausgeführt.
              </p>
            </div>

            <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors inline-flex items-center">
              Rohrleitungsbau Anfragen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      <div className="border-t border-slate-200"></div>

      {/* Service Detail 4 - Shutdown */}
      <section id="shutdown" className="py-16 bg-slate-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="flex items-start space-x-4 mb-6">
              <div className="w-16 h-16 bg-white rounded flex items-center justify-center flex-shrink-0">
                <TimerReset className="w-8 h-8 text-slate-700" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Shutdown & Turnaround-Service
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Wir unterstützen geplante Stillstände und Turnarounds mit qualifiziertem Personal und strukturierter Ausführung, um Ausfallzeiten und Risiken zu minimieren.
                </p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Leistungsumfang</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {['Personalskalierung für Stillstandsphasen', 'Instandhaltungs- und mechanische Unterstützung', 'Koordination mit Kundenteams', 'Ausführung unter strengen Zeitvorgaben'].map((item, i) => <div key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </div>)}
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-6 mb-6">
              <p className="text-slate-700">
                Fokussiert auf Sicherheit, Termintreue und kontrollierte Ausführung.
              </p>
            </div>

            <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded font-medium transition-colors inline-flex items-center">
              Shutdown-Unterstützung Anfragen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Wie wir arbeiten
            </h2>
            <div className="space-y-4">
              {[{
              num: '1',
              title: 'Anforderungsklärung',
              desc: 'Verstehen Ihrer spezifischen Bedürfnisse'
            }, {
              num: '2',
              title: 'Personal- oder Leistungsumfang definieren',
              desc: 'Klare Festlegung des Projektumfangs'
            }, {
              num: '3',
              title: 'Einsatzplanung',
              desc: 'Strukturierte Planung und Vorbereitung'
            }, {
              num: '4',
              title: 'Ausführung mit laufender Koordination',
              desc: 'Durchführung mit kontinuierlicher Kommunikation'
            }, {
              num: '5',
              title: 'Abschluss und Dokumentation',
              desc: 'Vollständige Berichterstattung und Übergabe'
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
            <p className="text-center text-slate-600 mt-6">
              Klare Kommunikation und definierte Verantwortlichkeiten in jeder Phase.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Reference */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Alle Dienstleistungen werden in Übereinstimmung mit geltenden Sicherheits-, Qualitäts- und Industriestandards erbracht.
            </p>
            <button onClick={() => onNavigate('zertifikate')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
              Zertifikate & Compliance ansehen
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Primary Conversion */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Besprechen Sie Ihren industriellen Dienstleistungsbedarf
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Teilen Sie uns mit, welche Unterstützung Sie benötigen. Wir antworten mit einem klaren und realistischen Angebot.
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