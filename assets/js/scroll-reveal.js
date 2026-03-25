/* Scroll Reveal — IntersectionObserver-based fade-up animations */
(function () {
  'use strict';

  function initScrollReveal() {
    if (!('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal, .stagger-children').forEach(function (el) {
      observer.observe(el);
    });
  }

  function initScrollProgress() {
    var bar = document.querySelector('.reading-progress');
    if (!bar) return;

    window.addEventListener('scroll', function () {
      var docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        bar.style.width = (window.scrollY / docHeight * 100) + '%';
      }
    }, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      initScrollReveal();
      initScrollProgress();
    });
  } else {
    initScrollReveal();
    initScrollProgress();
  }
})();
