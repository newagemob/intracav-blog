// Persistent theme toggle for MedWiki
(function() {
  'use strict';

  // Get theme from localStorage or system preference
  function getTheme() {
    const stored = localStorage.getItem('handbook-theme');
    if (stored) {
      return stored;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  // Set theme
  function setTheme(theme) {
    const html = document.documentElement;
    const body = document.body;
    
    if (theme === 'dark') {
      html.classList.add('dark');
      body.classList.add('dark');
    } else {
      html.classList.remove('dark');
      body.classList.remove('dark');
    }
    
    // Update localStorage
    localStorage.setItem('handbook-theme', theme);
    
    // Update toggle button icon
    updateThemeIcon(theme);
  }

  // Update theme icon
  function updateThemeIcon(theme) {
    const toggle = document.getElementById('theme-toggle');
    if (!toggle) return;
    
    const sunIcon = toggle.querySelector('#sun');
    const moonIcon = toggle.querySelector('#moon');
    
    if (theme === 'dark') {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'inline';
    } else {
      if (sunIcon) sunIcon.style.display = 'inline';
      if (moonIcon) moonIcon.style.display = 'none';
    }
  }

  // Toggle theme
  function toggleTheme() {
    const currentTheme = getTheme();
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
  }

  // Initialize theme on page load
  function initTheme() {
    const theme = getTheme();
    setTheme(theme);
    
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      // Only use system preference if no stored preference
      if (!localStorage.getItem('handbook-theme')) {
        mediaQuery.addEventListener('change', (e) => {
          setTheme(e.matches ? 'dark' : 'light');
        });
      }
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }

  // Make toggleTheme available globally
  window.toggleTheme = toggleTheme;
})();
