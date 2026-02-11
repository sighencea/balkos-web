import React, { useState } from 'react';
import { ChevronRight, Mail, Phone, MapPin, Send, Briefcase } from 'lucide-react';
interface ContactPageProps {
  onNavigate: (page: string) => void;
}
export default function ContactPage({
  onNavigate
}: ContactPageProps) {
  const [formData, setFormData] = useState({
    company: '',
    contact: '',
    email: '',
    phone: '',
    industry: '',
    service: '',
    location: '',
    startDate: '',
    description: ''
  });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  return <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kontakt
            </h1>
            <p className="text-xl text-slate-200 mb-4 leading-relaxed">
              Teilen Sie uns Ihren industriellen Dienstleistungs- oder Personalbedarf mit.
            </p>
            <p className="text-lg text-slate-300">
              Wir reagieren schnell mit einem klaren und realistischen Angebot.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Routing */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Wie können wir helfen?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border-2 border-slate-200 hover:border-orange-400 p-6 transition-colors">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  Industrielle Dienstleistungen & Personalanfragen
                </h3>
                <p className="text-slate-600 mb-4">
                  Für Projekte, Wartungsunterstützung, Personalleasing und Shutdown-Dienstleistungen.
                </p>
                <p className="text-sm text-orange-600 font-medium">
                  → Formular unten ausfüllen
                </p>
              </div>

              <div className="bg-white border-2 border-slate-200 hover:border-orange-400 p-6 transition-colors">
                <div className="flex items-start space-x-3 mb-3">
                  <Briefcase className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-slate-900">
                    Bewerbungen
                  </h3>
                </div>
                <p className="text-slate-600 mb-4">
                  Für offene Stellen und Industrieeinsätze.
                </p>
                <button onClick={() => onNavigate('karriere')} className="text-orange-600 hover:text-orange-700 font-medium inline-flex items-center transition-colors">
                  Zur Karriereseite
                  <ChevronRight className="w-5 h-5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
              Industrieunterstützung anfragen
            </h2>
            <p className="text-center text-slate-600 mb-8">
              Geben Sie die wichtigsten Details Ihres Bedarfs an. Wir werden uns mit Ihnen in Verbindung setzen, um Umfang und Verfügbarkeit zu klären.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Firmenname *
                  </label>
                  <input type="text" name="company" value={formData.company} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Ihre Firma" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Ansprechpartner *
                  </label>
                  <input type="text" name="contact" value={formData.contact} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Ihr Name" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    E-Mail-Adresse *
                  </label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="ihre.email@firma.de" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Telefonnummer
                  </label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="+49 ..." />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Branche
                  </label>
                  <select name="industry" value={formData.industry} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
                    <option value="">Bitte wählen</option>
                    <option value="chemie">Chemieindustrie</option>
                    <option value="petrochemie">Petrochemie</option>
                    <option value="energie">Energie & Versorgung</option>
                    <option value="produktion">Industrieproduktion</option>
                    <option value="andere">Andere</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Dienstleistungsart
                  </label>
                  <select name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white">
                    <option value="">Bitte wählen</option>
                    <option value="personalleasing">Personalleasing</option>
                    <option value="wartung">Anlagenwartung</option>
                    <option value="rohrleitungsbau">Rohrleitungsbau</option>
                    <option value="shutdown">Shutdown & Turnaround</option>
                    <option value="mehrere">Mehrere Dienstleistungen</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Projektstandort
                  </label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Stadt / Region" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Voraussichtlicher Starttermin
                  </label>
                  <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Kurzbeschreibung des Bedarfs
                </label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows={6} className="w-full px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="Beschreiben Sie bitte Ihr Projekt oder Ihren Personalbedarf..."></textarea>
              </div>

              <div className="bg-slate-50 border border-slate-200 p-4 text-sm text-slate-600">
                Ihre Informationen werden nur zur Beantwortung Ihrer Anfrage verwendet.
              </div>

              <div className="text-center">
                <button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded font-medium text-lg transition-colors inline-flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Anfrage Senden
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Direct Contact Details */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Direkter Kontakt
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white border border-slate-200 p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Telefon</h3>
                <a href="tel:+4967507680" className="text-orange-600 hover:text-orange-700 transition-colors">
                  +49 6751 507 7680
                </a>
              </div>

              <div className="bg-white border border-slate-200 p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">E-Mail</h3>
                <a href="mailto:info@balkos.de" className="text-orange-600 hover:text-orange-700 transition-colors">
                  info@balkos.de
                </a>
              </div>

              <div className="bg-white border border-slate-200 p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">Adresse</h3>
                <p className="text-slate-600 text-sm">
                  Simbacher Straße 33<br />
                  84524 Neuötting<br />
                  Deutschland
                </p>
              </div>
            </div>

            <div className="text-center bg-white border border-slate-200 p-6">
              <p className="text-slate-700">
                Für dringende oder zeitkritische Anfragen kontaktieren Sie uns bitte direkt.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Legal Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
              Unternehmensinformationen
            </h2>
            <div className="bg-slate-50 border border-slate-200 p-6 text-slate-700 space-y-2">
              <p><span className="font-semibold">Firmenname:</span> Balkos Industrieservice Germany GmbH</p>
              <p><span className="font-semibold">Registrierte Adresse:</span> Simbacher Straße 33, 84524 Neuötting, Deutschland</p>
              <p><span className="font-semibold">Handelsregister:</span> HRB [Nummer]</p>
              <p><span className="font-semibold">USt-IdNr.:</span> DE [Nummer]</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
              Was passiert nach Ihrer Kontaktaufnahme
            </h2>
            <div className="space-y-4">
              {[{
              num: '1',
              text: 'Überprüfung Ihrer Anfrage'
            }, {
              num: '2',
              text: 'Klärung von Umfang und Anforderungen'
            }, {
              num: '3',
              text: 'Bestätigung der Verfügbarkeit'
            }, {
              num: '4',
              text: 'Angebot oder nächste Schritte'
            }].map(step => <div key={step.num} className="flex items-center space-x-4 p-4 bg-white border border-slate-200">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {step.num}
                  </div>
                  <span className="text-slate-700">{step.text}</span>
                </div>)}
            </div>
            <p className="text-center text-slate-600 mt-6">
              Klare Kommunikation vom ersten Kontakt an.
            </p>
          </div>
        </div>
      </section>

      {/* Reinforcement Block */}
      <section className="py-12 bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Erfahren in regulierten Industrieumgebungen.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button onClick={() => onNavigate('leistungen')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Leistungen ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <button onClick={() => onNavigate('branchen')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Branchen ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
              <button onClick={() => onNavigate('zertifikate')} className="text-orange-400 hover:text-orange-300 font-medium inline-flex items-center transition-colors">
                Zertifikate ansehen
                <ChevronRight className="w-5 h-5 ml-1" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>;
}