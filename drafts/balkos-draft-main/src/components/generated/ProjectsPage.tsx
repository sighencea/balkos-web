import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Filter } from 'lucide-react';
interface ProjectsPageProps {
  onNavigate: (page: string) => void;
}
export default function ProjectsPage({
  onNavigate
}: ProjectsPageProps) {
  const [serviceFilter, setServiceFilter] = useState<string>('all');
  const [industryFilter, setIndustryFilter] = useState<string>('all');
  const projects = [{
    id: 1,
    title: 'Instandhaltungsunterstützung – Chemieanlage',
    industry: 'Chemie',
    service: 'Anlagenwartung',
    type: 'Langzeitvertrag',
    description: 'Bereitstellung qualifizierten Personals und Wartungsunterstützung für laufenden Anlagenbetrieb.',
    scope: ['Einsatz von Arbeitskräften', 'Durchführung von Instandhaltungsarbeiten', 'Koordination mit Kundenteams', 'Einhaltung der Standortanforderungen'],
    outcome: 'Dienstleistungen entsprechend Betriebsplänen und Sicherheitsanforderungen erbracht.'
  }, {
    id: 2,
    title: 'Shutdown-Unterstützung – Petrochemische Anlage',
    industry: 'Petrochemie',
    service: 'Shutdown',
    type: 'Projektbasiert',
    description: 'Bereitstellung von Personal und Unterstützung während eines geplanten Anlagenstillstands.',
    scope: ['Schnelle Personalskalierung', 'Mechanische und Wartungsarbeiten', 'Strikte Zeitplanverwaltung', 'Sicherheitsprotokollkonformität'],
    outcome: 'Projekt innerhalb des Zeitrahmens und gemäß Kundenspezifikationen abgeschlossen.'
  }, {
    id: 3,
    title: 'Rohrleitungsmodifikation – Energieanlage',
    industry: 'Energie',
    service: 'Rohrleitungsbau',
    type: 'Projektbasiert',
    description: 'Modifikation und Erweiterung bestehender Rohrleitungssysteme während des Anlagenbetriebs.',
    scope: ['Detaillierte Planung und Koordination', 'Fertigung und Installation', 'Integration in bestehende Systeme', 'Vollständige Dokumentation'],
    outcome: 'Arbeiten ohne Betriebsunterbrechung mit vollständiger Konformitätsdokumentation abgeschlossen.'
  }, {
    id: 4,
    title: 'Personalleasing – Industrieproduktion',
    industry: 'Produktion',
    service: 'Personalleasing',
    type: 'Langzeitvertrag',
    description: 'Bereitstellung qualifizierter Produktions- und Wartungstechniker für kontinuierliche Betriebsunterstützung.',
    scope: ['Mehrjährige Personalsupplementierung', 'Technische und mechanische Rollen', 'Laufendes Training und Entwicklung', 'Qualitätssicherung'],
    outcome: 'Konsistente, qualitativ hochwertige Personalunterstützung über die gesamte Vertragslaufzeit.'
  }, {
    id: 5,
    title: 'Turnaround-Koordination – Chemieanlage',
    industry: 'Chemie',
    service: 'Shutdown',
    type: 'Projektbasiert',
    description: 'Umfassende Personalbereitstellung und Koordination für großen Anlagen-Turnaround.',
    scope: ['Über 50 qualifizierte Fachkräfte mobilisiert', 'Multidisziplinäre Arbeitspakete', 'Enge Kundenkoordination', 'Sicherheits- und Zeitplanfokus'],
    outcome: 'Turnaround erfolgreich und sicher innerhalb des geplanten Zeitrahmens abgeschlossen.'
  }, {
    id: 6,
    title: 'Wartungsprogramm – Petrochemische Anlage',
    industry: 'Petrochemie',
    service: 'Anlagenwartung',
    type: 'Langzeitvertrag',
    description: 'Laufende vorbeugende und reaktive Wartungsunterstützung für kritische Produktionsanlagen.',
    scope: ['Geplante Wartungszyklen', 'Notfall-Reaktionsfähigkeit', 'Ersatzteilmanagement', 'Betriebliche Berichterstattung'],
    outcome: 'Reduzierte Ausfallzeiten und verbesserte Anlagenverfügbarkeit über die Vertragslaufzeit.'
  }] as any[];
  const filteredProjects = projects.filter(project => {
    const serviceMatch = serviceFilter === 'all' || project.service === serviceFilter;
    const industryMatch = industryFilter === 'all' || project.industry === industryFilter;
    return serviceMatch && industryMatch;
  });
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Projekte & Referenzen
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Ausgewählte Beispiele industrieller Projekte und laufender Unterstützung, die in regulierten und sicherheitskritischen Umgebungen erbracht werden.
            </p>
            <p className="text-lg text-slate-300">
              Fokussiert auf zuverlässige Ausführung, Compliance und Koordination mit Kundenbetrieben.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-slate-50 border-b border-slate-200 sticky top-16 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex items-center space-x-2 text-slate-700">
              <Filter className="w-5 h-5" />
              <span className="font-medium">Projekte filtern:</span>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nach Dienstleistung</label>
                <select value={serviceFilter} onChange={e => setServiceFilter(e.target.value)} className="px-4 py-2 border border-slate-300 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="all">Alle Dienstleistungen</option>
                  <option value="Personalleasing">Personalleasing</option>
                  <option value="Anlagenwartung">Anlagenwartung</option>
                  <option value="Rohrleitungsbau">Rohrleitungsbau</option>
                  <option value="Shutdown">Shutdown & Turnaround</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Nach Branche</label>
                <select value={industryFilter} onChange={e => setIndustryFilter(e.target.value)} className="px-4 py-2 border border-slate-300 rounded bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500">
                  <option value="all">Alle Branchen</option>
                  <option value="Chemie">Chemieindustrie</option>
                  <option value="Petrochemie">Petrochemie</option>
                  <option value="Energie">Energie & Versorgung</option>
                  <option value="Produktion">Industrieproduktion</option>
                </select>
              </div>
            </div>
          </div>

          <p className="text-sm text-slate-600 mt-4">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Projekt' : 'Projekte'} gefunden
          </p>
        </div>
      </section>

      {/* Project Listing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {filteredProjects.map(project => <div key={project.id} className="border border-slate-200 bg-white hover:border-orange-400 transition-colors">
                <div className="p-6 md:p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-orange-100 text-orange-700 text-sm font-medium rounded">
                      {project.industry}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded">
                      {project.service}
                    </span>
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 text-sm font-medium rounded">
                      {project.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {project.title}
                  </h3>

                  <p className="text-lg text-slate-700 mb-6">
                    {project.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mb-6">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Verantwortlichkeiten</h4>
                      <ul className="space-y-2">
                        {project.scope.map((item, i) => <li key={i} className="flex items-start space-x-2">
                            <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                            <span className="text-slate-700">{item}</span>
                          </li>)}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-3">Ergebnis</h4>
                      <div className="bg-slate-50 border border-slate-200 p-4">
                        <p className="text-slate-700">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-200">
                    <button onClick={() => onNavigate('leistungen')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                      Verwandte Leistungen ansehen
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                    <button onClick={() => onNavigate('kontakt')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                      Ähnliche Unterstützung anfragen
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </section>

      {/* Execution Statement */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Konsistente Ausführung über alle Projekte
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {['Definierte Umfänge und Verantwortlichkeiten', 'Qualifiziertes und erfahrenes Personal', 'Einhaltung von Sicherheits- und Qualitätsstandards', 'Klare Koordination mit Kundenbetrieben', 'Dokumentation und Berichterstattung'].map((item, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>)}
            </div>
            <p className="text-center text-slate-600 mt-6">
              Anwendbar auf alle Projekte und Branchen.
            </p>
          </div>
        </div>
      </section>

      {/* Compliance Reference */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Alle Projekte werden gemäß geltenden industriellen, Sicherheits- und Qualitätsanforderungen erbracht.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('zertifikate')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Zertifikate & Compliance ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <button onClick={() => onNavigate('leistungen')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Leistungen ansehen
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
              Suchen Sie einen zuverlässigen Industriepartner?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Teilen Sie uns Ihr Projekt oder Ihren Unterstützungsbedarf mit. Wir antworten mit einem klaren und realistischen Angebot.
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