/**
 * MedWiki - Command Palette Search (Cmd+K)
 * Global search overlay with keyboard navigation
 */
(function() {
  'use strict';

  var overlay = document.getElementById('command-palette');
  var input = document.getElementById('command-palette-input');
  var resultsContainer = document.getElementById('command-palette-results');
  if (!overlay || !input || !resultsContainer) return;

  var searchIndex = [];
  var selectedIndex = -1;
  var debounceTimer;
  var indexLoaded = false;

  // Load search index
  function loadIndex(callback) {
    if (indexLoaded) { callback(); return; }

    // Try inline JSON first (homepage)
    var inlineEl = document.getElementById('search-index-data');
    if (inlineEl) {
      try {
        var text = inlineEl.textContent.trim();
        if (text) {
          var parsed = JSON.parse(text);
          // Hugo's minifier double-encodes JSON in <script type="application/json"> tags,
          // so the first parse may return a string that needs a second parse
          searchIndex = typeof parsed === 'string' ? JSON.parse(parsed) : parsed;
          indexLoaded = true;
          callback();
          return;
        }
      } catch (e) { /* fall through */ }
    }

    // Fetch from /index.json
    fetch('/index.json')
      .then(function(r) {
        if (!r.ok) throw new Error('not ok');
        return r.json();
      })
      .then(function(data) {
        searchIndex = data;
        indexLoaded = true;
        callback();
      })
      .catch(function() {
        indexLoaded = true;
        callback();
      });
  }

  // Open palette
  function open() {
    overlay.classList.add('active');
    input.value = '';
    selectedIndex = -1;
    resultsContainer.innerHTML = '<div class="command-palette-empty">Type to search policies, guidelines, and blog posts</div>';
    // Small delay to avoid the triggering keystroke appearing in input
    setTimeout(function() { input.focus(); }, 50);
    document.body.style.overflow = 'hidden';
    loadIndex(function() {});
  }

  // Close palette
  function close() {
    overlay.classList.remove('active');
    input.blur();
    document.body.style.overflow = '';
    selectedIndex = -1;
  }

  // Perform search with title-weighted scoring
  function search(query) {
    if (!query || query.length < 2) {
      resultsContainer.innerHTML = '<div class="command-palette-empty">Type to search policies, guidelines, and blog posts</div>';
      selectedIndex = -1;
      return;
    }

    if (!searchIndex.length) {
      resultsContainer.innerHTML = '<div class="command-palette-empty">Loading search index...</div>';
      return;
    }

    var q = query.toLowerCase().trim();
    var scored = [];

    for (var i = 0; i < searchIndex.length; i++) {
      var item = searchIndex[i];
      var title = (item.title || '').toLowerCase();
      var desc = (item.description || '').toLowerCase();
      var content = (item.content || '').toLowerCase();
      var score = 0;

      if (title.includes(q)) score += 10;
      if (desc.includes(q)) score += 5;
      if (content.includes(q)) score += 1;

      // Bonus for title starting with query
      if (title.startsWith(q)) score += 5;

      if (score > 0) {
        scored.push({ item: item, score: score });
      }
    }

    scored.sort(function(a, b) { return b.score - a.score; });
    var results = scored.slice(0, 10);

    if (!results.length) {
      resultsContainer.innerHTML = '<div class="command-palette-empty">No results found for &ldquo;' + escapeHtml(query) + '&rdquo;</div>';
      selectedIndex = -1;
      return;
    }

    var html = '';
    for (var j = 0; j < results.length; j++) {
      var r = results[j].item;
      html += '<a href="' + escapeHtml(r.url) + '" class="command-palette-result" role="option" data-index="' + j + '">';
      html += '<div class="command-palette-result-title">' + highlight(r.title, query) + '</div>';
      if (r.description) {
        html += '<div class="command-palette-result-description">' + escapeHtml(r.description) + '</div>';
      }
      html += '<div class="command-palette-result-meta">' + escapeHtml(r.url) + '</div>';
      html += '</a>';
    }

    resultsContainer.innerHTML = html;
    selectedIndex = -1;
  }

  function highlight(text, query) {
    if (!text || !query) return escapeHtml(text);
    var escaped = escapeHtml(text);
    var escapedQuery = escapeRegex(escapeHtml(query));
    return escaped.replace(new RegExp('(' + escapedQuery + ')', 'gi'), '<mark>$1</mark>');
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function updateSelection() {
    var items = resultsContainer.querySelectorAll('.command-palette-result');
    items.forEach(function(el, i) {
      if (i === selectedIndex) {
        el.classList.add('selected');
        el.scrollIntoView({ block: 'nearest' });
      } else {
        el.classList.remove('selected');
      }
    });
  }

  // Keyboard: Cmd+K / Ctrl+K to open
  document.addEventListener('keydown', function(e) {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (overlay.classList.contains('active')) {
        close();
      } else {
        open();
      }
    }

    if (!overlay.classList.contains('active')) return;

    var items = resultsContainer.querySelectorAll('.command-palette-result');
    var count = items.length;

    if (e.key === 'Escape') {
      e.preventDefault();
      close();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (count > 0) {
        selectedIndex = (selectedIndex + 1) % count;
        updateSelection();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (count > 0) {
        selectedIndex = selectedIndex <= 0 ? count - 1 : selectedIndex - 1;
        updateSelection();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (selectedIndex >= 0 && selectedIndex < count) {
        var href = items[selectedIndex].getAttribute('href');
        if (href) window.location.href = href;
      }
    }
  });

  // Input handler with debounce
  input.addEventListener('input', function() {
    clearTimeout(debounceTimer);
    var val = input.value;
    debounceTimer = setTimeout(function() {
      loadIndex(function() { search(val); });
    }, 150);
  });

  // Close on overlay click (outside dialog)
  overlay.addEventListener('click', function(e) {
    if (e.target === overlay) close();
  });

  // Wire up all search trigger buttons
  document.querySelectorAll('[data-search-trigger]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      open();
    });
  });
})();
