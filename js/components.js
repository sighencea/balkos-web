// Balkos Industrieservice - Shared Components (Header & Footer)

(function () {
  'use strict';

  function getCurrentPage() {
    var path = window.location.pathname;
    var file = path.split('/').pop().replace('.html', '');
    if (!file || file === '' || file === 'index') return 'home';
    return file;
  }

  function headerHTML(currentPage) {
    var navItems = [
      { id: 'home', label: 'Home', href: 'index.html' },
      { id: 'leistungen', label: 'Leistungen', href: 'leistungen.html' },
      { id: 'branchen', label: 'Branchen', href: 'branchen.html' },
      { id: 'projekte', label: 'Projekte', href: 'projekte.html' },
      { id: 'zertifikate', label: 'Zertifikate', href: 'zertifikate.html' },
      { id: 'uber-uns', label: 'Über uns', href: 'uber-uns.html' }
    ];

    var desktopNav = navItems.map(function (item) {
      var active = currentPage === item.id ? 'text-orange-500' : 'text-slate-700';
      return '<a href="' + item.href + '" class="nav-link text-sm font-semibold hover:text-orange-500 transition-colors ' + active + '">' + item.label + '</a>';
    }).join('');

    var mobileNav = navItems.map(function (item) {
      var active = currentPage === item.id ? 'text-orange-500' : 'text-slate-700';
      return '<a href="' + item.href + '" class="nav-link block text-left px-2 py-2 text-sm font-semibold hover:text-orange-500 transition-colors ' + active + '">' + item.label + '</a>';
    }).join('');

    return '<header class="bg-white text-slate-900 fixed top-0 left-0 w-full z-50 border-b border-slate-200 shadow-sm">'
      + '<div class="container mx-auto px-4">'
      + '<div class="flex items-center justify-between h-16">'
      + '<a href="index.html" class="flex items-center space-x-3 hover:opacity-80 transition-opacity">'
      + '<img src="assets/Balkos-Service-Logo.jpg" alt="Balkos Service Logo" class="h-9">'
      + '</a>'
      + '<nav class="hidden lg:flex items-center space-x-6">' + desktopNav + '</nav>'
      + '<div class="hidden lg:flex items-center space-x-4">'
      + '<a href="tel:+4986715077600" class="flex items-center space-x-2 text-sm text-slate-700 hover:text-orange-500 transition-colors font-medium">'
      + '<i data-lucide="phone" class="w-4 h-4"></i><span>+49 8671 507 7600</span></a>'
      + '<a href="kontakt.html" class="btn-gradient text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50">ANGEBOT ANFRAGEN</a>'
      + '</div>'
      + '<button onclick="toggleMobileMenu()" id="mobile-menu-btn" class="lg:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors text-slate-700">'
      + '<i data-lucide="menu" class="w-6 h-6"></i></button>'
      + '</div>'
      + '<div id="mobile-menu" class="mobile-menu lg:hidden border-t border-slate-200">'
      + '<nav class="flex flex-col space-y-3 py-4">'
      + mobileNav
      + '<a href="tel:+4986715077600" class="flex items-center space-x-2 px-2 py-2 text-sm text-slate-700 hover:text-orange-500 transition-colors font-medium">'
      + '<i data-lucide="phone" class="w-4 h-4"></i><span>+49 8671 507 7600</span></a>'
      + '<a href="kontakt.html" class="btn-gradient text-white px-6 py-3 rounded-lg text-sm font-bold transition-all text-left shadow-lg shadow-orange-500/30">ANGEBOT ANFRAGEN</a>'
      + '</nav></div>'
      + '</div></header>';
  }

  function footerHTML() {
    var year = new Date().getFullYear();
    return '<footer class="bg-slate-900 text-slate-300">'
      + '<div class="container mx-auto px-4 py-12">'
      + '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">'
      // Company Info
      + '<div>'
      + '<div class="flex items-center space-x-3 mb-4">'
      + '<img src="assets/Balkos-Service-Logo.jpg" alt="Balkos Service Logo" class="h-8">'
      + '</div>'
      + '<div class="space-y-2 text-sm">'
      + '<div class="flex items-start space-x-2"><i data-lucide="map-pin" class="w-4 h-4 mt-1 flex-shrink-0"></i><div>Simbacher Straße 35<br>84524 Neuötting<br>Deutschland</div></div>'
      + '<div class="flex items-center space-x-2"><i data-lucide="phone" class="w-4 h-4 flex-shrink-0"></i><a href="tel:+4986715077600" class="hover:text-orange-400 transition-colors">+49 8671 507 7600</a></div>'
      + '<div class="flex items-center space-x-2"><i data-lucide="mail" class="w-4 h-4 flex-shrink-0"></i><a href="mailto:info@balkos-service.de" class="hover:text-orange-400 transition-colors">info@balkos-service.de</a></div>'
      + '</div></div>'
      // Services
      + '<div><h3 class="font-semibold text-white mb-4">Leistungen</h3>'
      + '<ul class="space-y-2 text-sm">'
      + '<li><a href="leistungen.html" class="hover:text-orange-400 transition-colors">Personalleasing</a></li>'
      + '<li><a href="leistungen.html" class="hover:text-orange-400 transition-colors">Anlagenwartung</a></li>'
      + '<li><a href="leistungen.html" class="hover:text-orange-400 transition-colors">Rohrleitungsbau</a></li>'
      + '<li><a href="leistungen.html" class="hover:text-orange-400 transition-colors">Shutdown-Service</a></li>'
      + '</ul></div>'
      // Industries
      + '<div><h3 class="font-semibold text-white mb-4">Branchen</h3>'
      + '<ul class="space-y-2 text-sm">'
      + '<li><a href="branchen.html" class="hover:text-orange-400 transition-colors">Chemieindustrie</a></li>'
      + '<li><a href="branchen.html" class="hover:text-orange-400 transition-colors">Petrochemie</a></li>'
      + '<li><a href="branchen.html" class="hover:text-orange-400 transition-colors">Energie &amp; Versorgung</a></li>'
      + '<li><a href="branchen.html" class="hover:text-orange-400 transition-colors">Industrieproduktion</a></li>'
      + '</ul></div>'
      // Quick Links
      + '<div><h3 class="font-semibold text-white mb-4">Schnellzugriff</h3>'
      + '<ul class="space-y-2 text-sm">'
      + '<li><a href="projekte.html" class="hover:text-orange-400 transition-colors">Projekte</a></li>'
      + '<li><a href="zertifikate.html" class="hover:text-orange-400 transition-colors">Zertifikate</a></li>'
      + '<li><a href="karriere.html" class="hover:text-orange-400 transition-colors">Karriere</a></li>'
      + '<li><a href="uber-uns.html" class="hover:text-orange-400 transition-colors">Über uns</a></li>'
      + '<li><a href="kontakt.html" class="hover:text-orange-400 transition-colors">Kontakt</a></li>'
      + '</ul></div>'
      + '</div>'
      // Bottom Bar
      + '<div class="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">'
      + '<div class="text-sm">&copy; ' + year + ' Balkos Industrieservice Germany GmbH. Alle Rechte vorbehalten.</div>'
      + '<div class="text-sm">Made with <span class="heart-icon">&hearts;</span> by <a href="https://www.sighencea.com" target="_blank" rel="noopener noreferrer" class="text-orange-400 hover:text-orange-300 transition-colors">Sighencea</a></div>'
      + '</div></div></footer>';
  }

  // Mobile menu toggle
  window.toggleMobileMenu = function () {
    var menu = document.getElementById('mobile-menu');
    var btn = document.getElementById('mobile-menu-btn');
    if (!menu) return;
    menu.classList.toggle('open');
    var isOpen = menu.classList.contains('open');
    if (btn) {
      btn.innerHTML = isOpen
        ? '<i data-lucide="x" class="w-6 h-6"></i>'
        : '<i data-lucide="menu" class="w-6 h-6"></i>';
      if (typeof lucide !== 'undefined') lucide.createIcons();
    }
  };

  // Back to top button
  function backToTopHTML() {
    return '<button id="back-to-top" onclick="window.scrollTo({top:0,behavior:\'smooth\'})" class="fixed bottom-6 right-6 z-50 bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full shadow-lg shadow-orange-500/30 transition-all opacity-0 pointer-events-none" aria-label="Nach oben scrollen">'
      + '<i data-lucide="chevron-up" class="w-6 h-6"></i></button>';
  }

  function initBackToTop() {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        btn.classList.remove('opacity-0', 'pointer-events-none');
        btn.classList.add('opacity-100');
      } else {
        btn.classList.add('opacity-0', 'pointer-events-none');
        btn.classList.remove('opacity-100');
      }
    });
  }

  // Initialize header and footer
  window.initComponents = function () {
    var currentPage = getCurrentPage();
    var headerEl = document.getElementById('site-header');
    var footerEl = document.getElementById('site-footer');
    if (headerEl) {
      headerEl.innerHTML = headerHTML(currentPage);
      headerEl.style.height = '64px';
    }
    if (footerEl) footerEl.innerHTML = footerHTML();
    document.body.insertAdjacentHTML('beforeend', backToTopHTML());
    if (typeof lucide !== 'undefined') lucide.createIcons();
    initBackToTop();
  };

})();
