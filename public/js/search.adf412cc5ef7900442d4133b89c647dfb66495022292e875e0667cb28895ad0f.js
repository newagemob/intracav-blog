/**
 * Intracav Wiki - Premium Search Functionality
 * Client-side search with instant results
 */

(function() {
  'use strict';

  // Search index (will be populated from Hugo)
  let searchIndex = [];
  let searchInput = null;
  let searchResults = null;

  // Initialize search when DOM is ready
  function initSearch() {
    searchInput = document.getElementById('search-input');
    searchResults = document.getElementById('search-results');

    if (!searchInput || !searchResults) {
      return;
    }

    // Load search index
    loadSearchIndex();

    // Handle input
    let debounceTimer;
    searchInput.addEventListener('input', function(e) {
      clearTimeout(debounceTimer);
      debounceTimer = setTimeout(() => {
        performSearch(e.target.value);
      }, 150);
    });

    // Handle focus
    searchInput.addEventListener('focus', function() {
      if (searchInput.value.length > 0) {
        performSearch(searchInput.value);
      }
    });

    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.classList.remove('active');
      }
    });

    // Handle keyboard navigation
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        searchResults.classList.remove('active');
        searchInput.blur();
      }
    });
  }

  // Load search index from JSON
  function loadSearchIndex() {
    // Try to load from inline JSON first
    const inlineIndex = document.getElementById('search-index-data');
    if (inlineIndex) {
      try {
        const jsonText = inlineIndex.textContent.trim();
        if (jsonText) {
          searchIndex = JSON.parse(jsonText);
          console.log('Search index loaded:', searchIndex.length, 'items');
          return;
        }
      } catch (e) {
        console.error('Failed to parse inline search index:', e);
      }
    }
    
    // Try to load from Hugo-generated index
    fetch('/search-index.json')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
      .then(data => {
        searchIndex = data;
        console.log('Search index loaded from file:', searchIndex.length, 'items');
      })
      .catch(() => {
        // Fallback: build index from page content
        console.log('Building search index from DOM...');
        buildSearchIndex();
      });
  }

  // Build search index from DOM (fallback)
  function buildSearchIndex() {
    // Build index from data attributes on the page
    const articles = document.querySelectorAll('[data-searchable]');
    searchIndex = Array.from(articles).map(article => ({
      title: article.dataset.title || '',
      url: article.dataset.url || '',
      description: article.dataset.description || '',
      content: article.textContent || ''
    }));
    console.log('Search index built from DOM:', searchIndex.length, 'items');
  }

  // Perform search
  function performSearch(query) {
    if (!query || query.length < 2) {
      searchResults.classList.remove('active');
      return;
    }

    if (searchIndex.length === 0) {
      console.warn('Search index is empty');
      searchResults.innerHTML = `
        <div class="search-no-results">
          Search index not loaded. Please refresh the page.
        </div>
      `;
      searchResults.classList.add('active');
      return;
    }

    const searchText = query.toLowerCase().trim();
    const results = searchIndex.filter(item => {
      const title = (item.title || '').toLowerCase();
      const desc = (item.description || '').toLowerCase();
      const content = (item.content || '').toLowerCase();
      return title.includes(searchText) || desc.includes(searchText) || content.includes(searchText);
    }).slice(0, 10); // Limit to 10 results

    displayResults(results, query);
  }

  // Display search results
  function displayResults(results, query) {
    if (results.length === 0) {
      searchResults.innerHTML = `
        <div class="search-no-results">
          No results found for "${query}"
        </div>
      `;
    } else {
      searchResults.innerHTML = results.map(item => `
        <a href="${item.url}" class="search-result-item">
          <div class="search-result-title">${highlightMatch(item.title, query)}</div>
          ${item.description ? `<div class="search-result-description">${highlightMatch(item.description, query)}</div>` : ''}
          <div class="search-result-meta">
            <span>${new URL(item.url, window.location.origin).pathname}</span>
          </div>
        </a>
      `).join('');
    }

    searchResults.classList.add('active');
  }

  // Highlight matching text
  function highlightMatch(text, query) {
    if (!query || !text) return text;
    // Escape special regex characters
    const escapedQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${escapedQuery})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }

  // Initialize when DOM is ready
  // Since script is loaded at end of body, DOM should be ready
  // But we'll wait a tick to ensure search index data is available
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() {
      // Small delay to ensure search index data is parsed
      setTimeout(initSearch, 10);
    });
  } else {
    // DOM already loaded, but wait a tick for search index
    setTimeout(initSearch, 10);
  }
})();
