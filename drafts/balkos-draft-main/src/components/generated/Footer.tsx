import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
interface FooterProps {
  onNavigate: (page: string) => void;
}
export default function Footer({
  onNavigate
}: FooterProps) {
  return <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-slate-900 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
              </div>
              <div>
                <div className="font-bold text-white">Balkos</div>
                <div className="text-xs">INDUSTRIESERVICE</div>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <div>
                  Simbacher Straße 33<br />
                  84524 Neuötting<br />
                  Deutschland
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:+4967507680" className="hover:text-orange-400 transition-colors">
                  +49 6751 507 7680
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:info@balkos.de" className="hover:text-orange-400 transition-colors">
                  info@balkos.de
                </a>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Leistungen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('leistungen')} className="hover:text-orange-400 transition-colors">
                  Personalleasing
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leistungen')} className="hover:text-orange-400 transition-colors">
                  Anlagenwartung
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leistungen')} className="hover:text-orange-400 transition-colors">
                  Rohrleitungsbau
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('leistungen')} className="hover:text-orange-400 transition-colors">
                  Shutdown-Service
                </button>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-semibold text-white mb-4">Branchen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('branchen')} className="hover:text-orange-400 transition-colors">
                  Chemieindustrie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('branchen')} className="hover:text-orange-400 transition-colors">
                  Petrochemie
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('branchen')} className="hover:text-orange-400 transition-colors">
                  Energie & Versorgung
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('branchen')} className="hover:text-orange-400 transition-colors">
                  Industrieproduktion
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Schnellzugriff</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => onNavigate('projekte')} className="hover:text-orange-400 transition-colors">
                  Projekte
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('zertifikate')} className="hover:text-orange-400 transition-colors">
                  Zertifikate
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('karriere')} className="hover:text-orange-400 transition-colors">
                  Karriere
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('uber-uns')} className="hover:text-orange-400 transition-colors">
                  Über uns
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('kontakt')} className="hover:text-orange-400 transition-colors">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm">
            © 2024 Balkos Industrieservice Germany GmbH. Alle Rechte vorbehalten.
          </div>
          <div className="flex space-x-6 text-sm">
            <button className="hover:text-orange-400 transition-colors">
              Impressum
            </button>
            <button className="hover:text-orange-400 transition-colors">
              Datenschutz
            </button>
          </div>
        </div>
      </div>
    </footer>;
}