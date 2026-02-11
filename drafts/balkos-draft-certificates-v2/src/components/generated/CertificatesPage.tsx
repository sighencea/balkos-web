import React, { useState } from 'react';
import { ChevronRight, CheckCircle, Award, FileText, Users, Shield } from 'lucide-react';
interface CertificatesPageProps {
  onNavigate: (page: string) => void;
}
export default function CertificatesPage({
  onNavigate
}: CertificatesPageProps) {
  const [activeTab, setActiveTab] = useState<'sicherheit' | 'qualitat' | 'technisch'>('sicherheit');

  // Trust Bar Badges
  const trustBadges = [{
    name: 'ISO 9001',
    year: '2015'
  }, {
    name: 'SCC**',
    year: ''
  }, {
    name: 'DIN EN 1090',
    year: ''
  }, {
    name: 'ISO 14001',
    year: ''
  }, {
    name: 'ISO 45001',
    year: ''
  }] as any[];

  // Certificate data organized by category
  const certificatesByCategory = {
    sicherheit: [{
      name: 'SCC** Zertifizierung',
      scope: 'Sicherheit, Gesundheit und Umwelt',
      status: 'Gültig',
      description: 'Safety Certificate Contractors für sichere Arbeitsausführung. Garantiert die Einhaltung höchster Sicherheitsstandards auf allen Baustellen und Industrieanlagen.',
      validUntil: 'Dezember 2025'
    }, {
      name: 'ISO 45001',
      scope: 'Arbeitsschutzmanagement',
      status: 'Gültig',
      description: 'Zertifiziertes Arbeitsschutz- und Sicherheitsmanagementsystem für alle Geschäftsbereiche. Systematischer Ansatz zur Vermeidung von Arbeitsunfällen und Berufskrankheiten.',
      validUntil: 'Mai 2026'
    }, {
      name: 'Befähigte Person § 12 BetrSichV',
      scope: 'Prüfung von Arbeitsmitteln',
      status: 'Gültig',
      description: 'Qualifiziertes Personal für die Prüfung und Inspektion von Arbeitsmitteln gemäß Betriebssicherheitsverordnung.',
      validUntil: 'Laufend'
    }],
    qualitat: [{
      name: 'ISO 9001:2015',
      scope: 'Qualitätsmanagementsystem',
      status: 'Gültig',
      description: 'Zertifiziertes Qualitätsmanagementsystem für alle Dienstleistungsbereiche. Gewährleistet konsistente Qualität und kontinuierliche Verbesserung in allen Prozessen.',
      validUntil: 'März 2026'
    }, {
      name: 'ISO 14001',
      scope: 'Umweltmanagement',
      status: 'Gültig',
      description: 'Umweltmanagementsystem zur Minimierung der Umweltauswirkungen und Förderung nachhaltiger Praktiken in allen Projekten.',
      validUntil: 'März 2026'
    }, {
      name: 'Werkseigene Produktionskontrolle (WPK)',
      scope: 'Qualitätssicherung',
      status: 'Gültig',
      description: 'Internes Qualitätssicherungssystem für die Herstellung und Überwachung von Bauprodukten nach DIN EN 1090.',
      validUntil: 'Laufend'
    }],
    technisch: [{
      name: 'DIN EN 1090',
      scope: 'Herstellung von Stahltragwerken',
      status: 'Gültig',
      description: 'Konformitätsbescheinigung für Stahlbau und Schweißarbeiten. Berechtigung zur Herstellung und Montage von tragenden Stahlkonstruktionen gemäß europäischer Norm.',
      validUntil: 'Juli 2026'
    }, {
      name: 'Schweißfachbetrieb DIN 18800-7',
      scope: 'Schweißtechnische Arbeiten',
      status: 'Gültig',
      description: 'Zertifizierung als Schweißfachbetrieb mit qualifizierten Schweißern und dokumentierten Schweißverfahren für tragende Konstruktionen.',
      validUntil: 'Laufend'
    }, {
      name: 'DGUV Vorschrift 3 Prüfungen',
      scope: 'Elektrische Anlagen und Betriebsmittel',
      status: 'Gültig',
      description: 'Qualifikation für die Prüfung elektrischer Anlagen und Betriebsmittel gemäß Unfallverhütungsvorschriften.',
      validUntil: 'Laufend'
    }, {
      name: 'Kranführer-Qualifikation',
      scope: 'Bedienung von Hebezeugen',
      status: 'Gültig',
      description: 'Zertifiziertes Personal für die Bedienung von Kranen und Hebezeugen in industriellen Umgebungen.',
      validUntil: 'Laufend'
    }]
  };
  const tabs = [{
    key: 'sicherheit' as const,
    label: 'Sicherheit',
    count: certificatesByCategory.sicherheit.length
  }, {
    key: 'qualitat' as const,
    label: 'Qualität',
    count: certificatesByCategory.qualitat.length
  }, {
    key: 'technisch' as const,
    label: 'Technische Zulassungen',
    count: certificatesByCategory.technisch.length
  }] as any[];
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Zertifikate & Compliance
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Unsere Dienstleistungen werden in Übereinstimmung mit geltenden industriellen, Sicherheits- und Qualitätsstandards erbracht.
            </p>
            <p className="text-lg text-slate-300">
              Alle Personal- und Projektausführungen folgen definierten Verfahren und dokumentierten Anforderungen.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Bar - Certification Badges */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
              {trustBadges.map((badge, i) => <div key={i} className="flex flex-col items-center justify-center bg-white rounded-lg p-4 shadow-lg min-w-[100px] h-[100px] hover:scale-105 transition-transform">
                  <div className="flex items-center justify-center mb-1">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-slate-900 text-sm">{badge.name}</div>
                    {badge.year && <div className="text-xs text-slate-600">{badge.year}</div>}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 mb-8 text-center">
              Compliance ist eine betriebliche Anforderung, keine Option.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[{
              icon: <Users className="w-6 h-6" />,
              title: 'Qualifiziertes und zertifiziertes Personal',
              desc: 'Alle eingesetzten Mitarbeiter verfügen über erforderliche Qualifikationen'
            }, {
              icon: <Shield className="w-6 h-6" />,
              title: 'Definierte Sicherheits- und Qualitätsverfahren',
              desc: 'Dokumentierte Prozesse für alle Dienstleistungsbereiche'
            }, {
              icon: <CheckCircle className="w-6 h-6" />,
              title: 'Einhaltung von Kunden- und Standortanforderungen',
              desc: 'Anpassung an spezifische Kundenanforderungen und Standortvorschriften'
            }, {
              icon: <FileText className="w-6 h-6" />,
              title: 'Dokumentation und Nachverfolgbarkeit',
              desc: 'Vollständige Dokumentation aller Arbeiten und Qualifikationen'
            }].map((item, i) => <div key={i} className="flex items-start space-x-4 p-6 bg-white border border-slate-200">
                  <div className="w-12 h-12 bg-orange-100 rounded flex items-center justify-center text-orange-600 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Tabbed Certificates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-8">
              <Award className="w-8 h-8 text-orange-500" />
              <h2 className="text-3xl font-bold text-slate-900">
                Zertifikate & Akkreditierungen
              </h2>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-8 border-b border-slate-200">
              {tabs.map(tab => <button key={tab.key} onClick={() => setActiveTab(tab.key)} className={`px-6 py-3 font-medium transition-all relative ${activeTab === tab.key ? 'text-orange-600 border-b-2 border-orange-600' : 'text-slate-600 hover:text-slate-900'}`}>
                  {tab.label}
                  <span className="ml-2 text-sm bg-slate-100 px-2 py-0.5 rounded-full">
                    {tab.count}
                  </span>
                </button>)}
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {certificatesByCategory[activeTab].map((cert, i) => <div key={i} className="border border-slate-200 bg-white hover:border-orange-400 hover:shadow-md transition-all">
                  <div className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{cert.name}</h3>
                        <p className="text-slate-600 mb-2">{cert.scope}</p>
                        <p className="text-slate-700 leading-relaxed">{cert.description}</p>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="px-4 py-2 bg-green-100 text-green-700 font-medium rounded">
                          {cert.status}
                        </span>
                        <span className="text-sm text-slate-500">
                          Gültig bis: {cert.validUntil}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>)}
            </div>

            <div className="bg-slate-50 border border-slate-200 p-6 text-center mt-8">
              <p className="text-slate-700">
                Zertifikate und Dokumentation sind für Ausschreibungs- und Qualifizierungsverfahren verfügbar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Personnel Qualification */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Personalqualifikation
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              An industriellen Standorten eingesetztes Personal ist für die zugewiesenen Rollen qualifiziert und mit geltenden Sicherheits- und Betriebsanforderungen vertraut.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {['Rollenspezifische Qualifikationen', 'Standort-Einweisungskonformität', 'Sicherheitsschulungen und Unterweisungen', 'Erfahrung in regulierten Industrieumgebungen'].map((item, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200">
                  <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Safety & Quality Management */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Sicherheits- & Qualitätsmanagement
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Sicherheit und Qualität sind in alle Dienstleistungsaktivitäten integriert, von der Planung bis zur Ausführung.
            </p>

            <div className="bg-slate-50 border-l-4 border-orange-500 p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-3">Schlüsselelemente</h3>
              <ul className="space-y-3">
                {['Definierte Arbeitsverfahren', 'Risikobewusstsein und -minderung', 'Koordination mit Kunden-HSE-Anforderungen', 'Laufende Überwachung und Berichterstattung'].map((item, i) => <li key={i} className="flex items-start space-x-2">
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>)}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industry & Project Alignment */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Unser Compliance-Rahmen unterstützt Arbeiten in Chemie-, Petrochemie-, Energie- und Industrieproduktionsumgebungen.
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

      {/* Procurement & Tender Support */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Beschaffungs- & Ausschreibungsunterstützung
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Wir unterstützen Qualifizierungs-, Ausschreibungs- und Auditprozesse mit klarer und strukturierter Dokumentation.
            </p>
            <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-medium transition-colors inline-flex items-center">
              Kontakt für Compliance-Dokumentation
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
              Benötigen Sie einen konformen Industriepartner?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Teilen Sie uns Ihr Projekt oder Ihren Personalbedarf mit. Wir antworten mit einem konformen und realistischen Angebot.
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