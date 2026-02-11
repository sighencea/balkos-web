// Balkos Industrieservice - Main JavaScript

(function () {
  'use strict';

  // ============================================
  // Horizontal Scroll Gallery (Home Page)
  // ============================================
  window.scrollGalleryLeft = function () {
    var el = document.getElementById('industries-scroll');
    if (el) el.scrollBy({ left: -400, behavior: 'smooth' });
  };

  window.scrollGalleryRight = function () {
    var el = document.getElementById('industries-scroll');
    if (el) el.scrollBy({ left: 400, behavior: 'smooth' });
  };

  // ============================================
  // Project Filters (Projects Page)
  // ============================================
  window.filterProjects = function () {
    var sf = document.getElementById('service-filter');
    var inf = document.getElementById('industry-filter');
    if (!sf || !inf) return;
    var service = sf.value;
    var industry = inf.value;
    var cards = document.querySelectorAll('.project-card');
    var count = 0;
    cards.forEach(function (card) {
      var sm = service === 'all' || card.dataset.service === service;
      var im = industry === 'all' || card.dataset.industry === industry;
      card.style.display = (sm && im) ? '' : 'none';
      if (sm && im) count++;
    });
    var ce = document.getElementById('project-count');
    if (ce) ce.textContent = count + (count === 1 ? ' Projekt' : ' Projekte') + ' gefunden';
  };

  // ============================================
  // Certificate Tab Switching (Certificates Page)
  // ============================================
  window.switchCertTab = function (tabKey) {
    var tabs = document.querySelectorAll('.cert-tab');
    var panels = document.querySelectorAll('.cert-panel');
    tabs.forEach(function (tab) {
      tab.classList.remove('text-orange-600', 'border-b-2', 'border-orange-600');
      tab.classList.add('text-slate-600');
    });
    panels.forEach(function (panel) {
      panel.classList.add('hidden');
    });
    var activeTab = document.getElementById('tab-' + tabKey);
    var activePanel = document.getElementById('panel-' + tabKey);
    if (activeTab) {
      activeTab.classList.remove('text-slate-600');
      activeTab.classList.add('text-orange-600', 'border-b-2', 'border-orange-600');
    }
    if (activePanel) {
      activePanel.classList.remove('hidden');
    }
    if (typeof lucide !== 'undefined') lucide.createIcons();
  };

  // ============================================
  // Contact Form Placeholder
  // ============================================
  window.handleContactSubmit = function (e) {
    e.preventDefault();
    alert('Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.');
    e.target.reset();
  };

  // ============================================
  // Stats Counter Animation (Certificates Page)
  // ============================================
  function initStatsAnimation() {
    var strip = document.getElementById('stats-strip');
    if (!strip) return;
    var animated = false;
    var observer = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        animateStats();
      }
    }, { threshold: 0.2 });
    observer.observe(strip);
  }

  function animateStats() {
    document.querySelectorAll('.stat-value').forEach(function (el) {
      var target = parseInt(el.dataset.value, 10);
      var prefix = el.dataset.prefix || '';
      var suffix = el.dataset.suffix || '';
      var duration = 2000;
      var steps = 60;
      var interval = duration / steps;
      var step = 0;
      var timer = setInterval(function () {
        step++;
        var p = step / steps;
        var eased = 1 - Math.pow(1 - p, 4);
        el.textContent = prefix + Math.floor(target * eased).toLocaleString('de-DE') + suffix;
        if (step >= steps) {
          clearInterval(timer);
          el.textContent = prefix + target.toLocaleString('de-DE') + suffix;
        }
      }, interval);
    });
  }

  // ============================================
  // Initialize
  // ============================================
  document.addEventListener('DOMContentLoaded', function () {
    // Inject shared header & footer
    if (typeof initComponents === 'function') initComponents();
    // Init Lucide icons for page content
    if (typeof lucide !== 'undefined') lucide.createIcons();
    // Init stats animation if on certificates page
    initStatsAnimation();
  });

})();
