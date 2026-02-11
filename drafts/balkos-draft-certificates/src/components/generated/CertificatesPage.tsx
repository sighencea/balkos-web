import React from 'react';
import { ChevronRight, CheckCircle, Award, FileText, Users, Shield, Download, CheckCircle2 } from 'lucide-react';
interface CertificatesPageProps {
  onNavigate: (page: string) => void;
}
export default function CertificatesPage({
  onNavigate
}: CertificatesPageProps) {
  const certificates = [{
    name: 'ISO 9001:2015',
    scope: 'Qualitätsmanagementsystem',
    status: 'Gültig',
    description: 'Zertifiziertes Qualitätsmanagementsystem für alle Dienstleistungsbereiche',
    verified: true,
    issueDate: '2023',
    color: 'blue'
  }, {
    name: 'SCC** Zertifizierung',
    scope: 'Sicherheit, Gesundheit und Umwelt',
    status: 'Gültig',
    description: 'Safety Certificate Contractors für sichere Arbeitsausführung',
    verified: true,
    issueDate: '2023',
    color: 'green'
  }, {
    name: 'DIN EN 1090',
    scope: 'Herstellung von Stahltragwerken',
    status: 'Gültig',
    description: 'Konformitätsbescheinigung für Stahlbau und Schweißarbeiten',
    verified: true,
    issueDate: '2022',
    color: 'purple'
  }] as any[];
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return {
          bg: 'from-blue-500/10 to-blue-600/10',
          border: 'border-blue-500',
          badge: 'bg-blue-500',
          text: 'text-blue-500'
        };
      case 'green':
        return {
          bg: 'from-green-500/10 to-green-600/10',
          border: 'border-green-500',
          badge: 'bg-green-500',
          text: 'text-green-500'
        };
      case 'purple':
        return {
          bg: 'from-purple-500/10 to-purple-600/10',
          border: 'border-purple-500',
          badge: 'bg-purple-500',
          text: 'text-purple-500'
        };
      default:
        return {
          bg: 'from-orange-500/10 to-orange-600/10',
          border: 'border-orange-500',
          badge: 'bg-orange-500',
          text: 'text-orange-500'
        };
    }
  };
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-950 text-white py-16">
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

      {/* Compliance Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 mb-8 text-center font-medium">
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
            }].map((item, i) => <div key={i} className="flex items-start space-x-4 p-6 bg-white border border-slate-200 rounded-lg hover:border-orange-500 hover:shadow-lg transition-all">
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

      {/* High-Visibility Certificate Badges */}
      <section className="py-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-12">
              <Award className="w-10 h-10 text-orange-500" />
              <h2 className="text-4xl font-bold text-white">
                Zertifikate & Akkreditierungen
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {certificates.map((cert, i) => {
              const colors = getColorClasses(cert.color);
              return <div key={i} className={`relative bg-gradient-to-br ${colors.bg} backdrop-blur border-2 ${colors.border} rounded-xl p-8 hover:scale-105 transition-transform duration-300 shadow-2xl`}>
                  {/* Verified Badge */}
                  {cert.verified && <div className="absolute -top-4 -right-4 bg-green-500 rounded-full p-3 shadow-lg border-4 border-slate-950">
                      <CheckCircle2 className="w-8 h-8 text-white" strokeWidth={3} />
                    </div>}

                  {/* Certificate Icon */}
                  <div className={`w-20 h-20 ${colors.badge} rounded-xl flex items-center justify-center mb-6 shadow-lg mx-auto`}>
                    <Award className="w-12 h-12 text-white" strokeWidth={2.5} />
                  </div>

                  {/* Certificate Name */}
                  <h3 className="text-2xl font-bold text-white mb-3 text-center">
                    {cert.name}
                  </h3>

                  {/* Scope */}
                  <p className="text-slate-300 text-center mb-4 text-sm">
                    {cert.scope}
                  </p>

                  {/* Status Badge */}
                  <div className="flex justify-center mb-4">
                    <span className="px-4 py-2 bg-green-500 text-white font-semibold rounded-full text-sm shadow-lg">
                      ✓ {cert.status}
                    </span>
                  </div>

                  {/* Issue Date */}
                  <p className="text-slate-400 text-center text-sm mb-6">
                    Ausgestellt: {cert.issueDate}
                  </p>

                  {/* Description */}
                  <p className="text-slate-300 text-center mb-6 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Download Button */}
                  <button className={`w-full ${colors.badge} hover:opacity-90 text-white font-semibold py-3 px-6 rounded-lg transition-all inline-flex items-center justify-center space-x-2 shadow-lg`}>
                    <Download className="w-5 h-5" />
                    <span>Zertifikat herunterladen</span>
                  </button>
                </div>;
            })}
            </div>

            <div className="bg-slate-900/50 backdrop-blur border border-slate-800 p-8 rounded-xl text-center">
              <p className="text-slate-300 text-lg">
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
              {['Rollenspezifische Qualifikationen', 'Standort-Einweisungskonformität', 'Sicherheitsschulungen und Unterweisungen', 'Erfahrung in regulierten Industrieumgebungen'].map((item, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-orange-500 transition-colors">
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

            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 mb-8 rounded-r-lg">
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

      {/* Documentation & Traceability */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">
              Dokumentation & Nachverfolgbarkeit
            </h2>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Alle Dienstleistungen werden durch angemessene Dokumentation unterstützt, um Transparenz und Nachverfolgbarkeit zu gewährleisten.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {['Personalunterlagen', 'Projektdokumentation', 'Compliance-Bestätigungen', 'An Kundenanforderungen ausgerichtete Berichterstattung'].map((item, i) => <div key={i} className="flex items-start space-x-3 p-4 bg-white border border-slate-200 rounded-lg hover:border-orange-500 transition-colors">
                  <FileText className="w-6 h-6 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">{item}</span>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Industry & Project Alignment */}
      <section className="py-12 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Unser Compliance-Rahmen unterstützt Arbeiten in Chemie-, Petrochemie-, Energie- und Industrieproduktionsumgebungen.
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
            <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-medium transition-colors inline-flex items-center shadow-lg shadow-orange-500/20">
              Kontakt für Compliance-Dokumentation
              <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Primary Conversion */}
      <section className="py-16 bg-slate-950 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Benötigen Sie einen konformen Industriepartner?
            </h2>
            <p className="text-xl text-slate-300 mb-8">
              Teilen Sie uns Ihr Projekt oder Ihren Personalbedarf mit. Wir antworten mit einem konformen und realistischen Angebot.
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