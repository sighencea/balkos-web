import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}
export default function Header({
  onNavigate,
  currentPage
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [{
    id: 'leistungen',
    label: 'Leistungen'
  }, {
    id: 'branchen',
    label: 'Branchen'
  }, {
    id: 'projekte',
    label: 'Projekte'
  }, {
    id: 'zertifikate',
    label: 'Zertifikate & Compliance'
  }, {
    id: 'karriere',
    label: 'Karriere'
  }, {
    id: 'uber-uns',
    label: 'Über uns'
  }] as any[];
  return <header className="bg-slate-950 text-white sticky top-0 z-50 border-b border-slate-800 shadow-lg shadow-slate-950/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button onClick={() => onNavigate('home')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg shadow-orange-500/30">
              <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">Balkos</div>
              <div className="text-xs text-orange-500 font-semibold">INDUSTRIESERVICE</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map(item => <button key={item.id} onClick={() => onNavigate(item.id)} className={`text-sm font-medium hover:text-orange-500 transition-colors ${currentPage === item.id ? 'text-orange-500' : 'text-white'}`}>
                {item.label}
              </button>)}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="tel:+4967507680" className="flex items-center space-x-2 text-sm hover:text-orange-500 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+49 6751 507 7680</span>
            </a>
            <button onClick={() => onNavigate('kontakt')} className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded text-sm font-medium transition-colors shadow-lg shadow-orange-500/20">
              Angebot Anfragen
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 hover:text-orange-500 transition-colors">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && <div className="lg:hidden py-4 border-t border-slate-800">
            <nav className="flex flex-col space-y-3">
              {navItems.map(item => <button key={item.id} onClick={() => {
            onNavigate(item.id);
            setMobileMenuOpen(false);
          }} className={`text-left px-2 py-2 text-sm font-medium hover:text-orange-500 transition-colors ${currentPage === item.id ? 'text-orange-500' : 'text-white'}`}>
                  {item.label}
                </button>)}
              <a href="tel:+4967507680" className="flex items-center space-x-2 px-2 py-2 text-sm hover:text-orange-500 transition-colors">
                <Phone className="w-4 h-4" />
                <span>+49 6751 507 7680</span>
              </a>
              <button onClick={() => {
            onNavigate('kontakt');
            setMobileMenuOpen(false);
          }} className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded text-sm font-medium transition-colors text-left shadow-lg shadow-orange-500/20">
                Angebot Anfragen
              </button>
            </nav>
          </div>}
      </div>
    </header>;
}