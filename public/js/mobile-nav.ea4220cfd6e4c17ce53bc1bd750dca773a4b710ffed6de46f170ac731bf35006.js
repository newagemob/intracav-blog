/**
 * Mobile Navigation - Clinical UX Optimized
 * 
 * Features:
 * - Bottom sheet menu (one-hand usable)
 * - Always-visible search
 * - Fast paths to emergency content
 * - Keyboard navigation support
 */

(function() {
  'use strict';

  // Mobile navigation state
  let isMenuOpen = false;
  const menuButton = document.getElementById('mobile-menu-button');
  const menuSheet = document.getElementById('mobile-menu-sheet');
  const menuOverlay = document.getElementById('mobile-menu-overlay');
  const searchInput = document.getElementById('search-input');
  const searchButton = document.getElementById('mobile-search-button');

  // Initialize mobile navigation
  function initMobileNav() {
    if (!menuButton || !menuSheet) return;

    // Menu button click
    menuButton.addEventListener('click', toggleMenu);
    
    // Overlay click (close menu)
    if (menuOverlay) {
      menuOverlay.addEventListener('click', closeMenu);
    }

    // Close button in menu
    const closeButton = menuSheet.querySelector('.mobile-menu-close');
    if (closeButton) {
      closeButton.addEventListener('click', closeMenu);
    }

    // Close on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isMenuOpen) {
        closeMenu();
      }
    });

    // Search button (mobile)
    if (searchButton) {
      searchButton.addEventListener('click', function() {
        if (searchInput) {
          searchInput.focus();
          searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      });
    }

    // Prevent body scroll when menu is open
    const body = document.body;
    const originalOverflow = body.style.overflow;

    // Watch for menu state changes
    const observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        if (mutation.attributeName === 'class') {
          const isOpen = menuSheet.classList.contains('mobile-menu-open');
          if (isOpen !== isMenuOpen) {
            isMenuOpen = isOpen;
            if (isMenuOpen) {
              body.style.overflow = 'hidden';
            } else {
              body.style.overflow = originalOverflow;
            }
          }
        }
      });
    });

    observer.observe(menuSheet, { attributes: true, attributeFilter: ['class'] });
  }

  function toggleMenu() {
    if (isMenuOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function openMenu() {
    if (!menuSheet) return;
    isMenuOpen = true;
    menuSheet.classList.add('mobile-menu-open');
    if (menuOverlay) {
      menuOverlay.classList.add('mobile-menu-overlay-visible');
    }
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Close menu');
    
    // Focus first menu item for keyboard navigation
    const firstLink = menuSheet.querySelector('a, button');
    if (firstLink) {
      setTimeout(() => firstLink.focus(), 100);
    }
  }

  function closeMenu() {
    if (!menuSheet) return;
    isMenuOpen = false;
    menuSheet.classList.remove('mobile-menu-open');
    if (menuOverlay) {
      menuOverlay.classList.remove('mobile-menu-overlay-visible');
    }
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open menu');
    menuButton.focus(); // Return focus to menu button
  }

  // Swipe down to close (touch devices)
  let touchStartY = 0;
  let touchEndY = 0;

  if (menuSheet) {
    menuSheet.addEventListener('touchstart', function(e) {
      touchStartY = e.changedTouches[0].screenY;
    }, { passive: true });

    menuSheet.addEventListener('touchend', function(e) {
      touchEndY = e.changedTouches[0].screenY;
      handleSwipe();
    }, { passive: true });
  }

  function handleSwipe() {
    const swipeThreshold = 50; // Minimum swipe distance
    const swipeDown = touchEndY - touchStartY > swipeThreshold;
    
    if (swipeDown && isMenuOpen) {
      closeMenu();
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMobileNav);
  } else {
    initMobileNav();
  }

  // Expose for external use
  window.mobileNav = {
    open: openMenu,
    close: closeMenu,
    toggle: toggleMenu
  };
})();
