/**
 * MedWiki - Table of Contents Scroll Spy
 * Highlights current section heading in ToC as user scrolls
 */
(function() {
  'use strict';

  var tocNav = document.getElementById('toc-nav');
  if (!tocNav) return;

  var links = tocNav.querySelectorAll('a');
  if (!links.length) return;

  // Collect heading IDs from ToC links
  var headingIds = [];
  links.forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      headingIds.push(href.slice(1));
    }
  });

  if (!headingIds.length) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var id = entry.target.id;
        links.forEach(function(link) {
          var href = link.getAttribute('href');
          if (href === '#' + id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    rootMargin: '-80px 0px -70% 0px',
    threshold: 0
  });

  headingIds.forEach(function(id) {
    var el = document.getElementById(id);
    if (el) observer.observe(el);
  });
})();
