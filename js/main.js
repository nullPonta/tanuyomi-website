/**
 * Tanuyomi（たぬヨミ）- Official Website JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  if (window.TanuyomiI18n) {
    window.TanuyomiI18n.initLanguageSwitcher();
  }
  initHeaderScroll();
  initScrollspy();
  initFeatureTabs();
  initFaqAccordion();
  initScrollAnimations();
  initSmoothScroll();
  initHeroMockupInteraction();
  initFeaturePreviewInteraction();
});

/**
 * Header scroll background effect
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/**
 * Scrollspy: Highlight current section in header navigation
 */
function initScrollspy() {
  const navButtons = document.querySelectorAll('.nav-pill-btn');
  if (navButtons.length === 0) return;

  const sectionIds = Array.from(navButtons)
    .map(btn => btn.getAttribute('href'))
    .filter(href => href && href.startsWith('#') && href.length > 1);

  const sections = sectionIds
    .map(id => document.querySelector(id))
    .filter(el => el !== null);

  if (sections.length === 0) return;

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 120;
    let currentActiveId = '';

    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.offsetTop <= scrollPosition) {
        currentActiveId = '#' + section.id;
        break;
      }
    }

    navButtons.forEach(btn => {
      if (btn.getAttribute('href') === currentActiveId) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  };

  window.addEventListener('scroll', updateActiveNav, { passive: true });
  updateActiveNav();
}

/**
 * Feature showcase tabs switching
 */
function initFeatureTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  if (tabButtons.length === 0 || tabPanels.length === 0) return;

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');

      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      tabPanels.forEach(panel => {
        if (panel.getAttribute('data-panel') === targetTab) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });
}

/**
 * FAQ accordion toggle
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (isActive) {
        item.classList.remove('active');
      } else {
        item.classList.add('active');
      }
    });
  });
}

/**
 * Intersection Observer for scroll animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.fade-in-element');
  if (animatedElements.length === 0) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    animatedElements.forEach(el => el.classList.add('is-visible'));
  }
}

/**
 * Smooth anchor scrolling
 */
function initSmoothScroll() {
  const internalLinks = document.querySelectorAll('a[href^="#"]');

  internalLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href === '#' || href === '') return;

      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        const header = document.querySelector('.site-header');
        const headerOffset = header ? header.offsetHeight + 10 : 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

/**
 * Interactive Hero Mockup: sidebar navigation & grid/list toggle
 */
function initHeroMockupInteraction() {
  const sidebarItems = document.querySelectorAll('.sidebar-nav-item[data-mock-filter]');
  const cardsGrid = document.querySelector('.app-cards-grid');
  const activeBreadcrumb = document.querySelector('.toolbar-breadcrumbs .bc-active');
  const viewButtons = document.querySelectorAll('.vt-btn[data-view]');

  if (cardsGrid && sidebarItems.length > 0) {
    const originalCards = Array.from(cardsGrid.querySelectorAll('.media-mock-card'));

    const applyFilter = (item) => {
      const filter = item.getAttribute('data-mock-filter');

      sidebarItems.forEach(el => el.classList.remove('active'));
      item.classList.add('active');

      const labelEl = item.querySelector('.sb-label');
      if (activeBreadcrumb && labelEl) {
        activeBreadcrumb.textContent = labelEl.textContent;
      }

      if (filter === 'all') {
        originalCards.forEach(card => {
          card.classList.remove('is-dimmed', 'is-highlighted');
          cardsGrid.appendChild(card);
        });
        return;
      }

      if (filter === 'random') {
        const shuffled = [...originalCards].sort(() => Math.random() - 0.5);
        shuffled.forEach((card, idx) => {
          card.classList.remove('is-dimmed');
          card.classList.toggle('is-highlighted', idx === 0);
          cardsGrid.appendChild(card);
        });
        return;
      }

      const isMatch = (card) => {
        const cat = card.getAttribute('data-category');
        if (filter === 'continue') return cat === 'manga' || cat === 'video';
        if (filter === 'favorites') return cat === 'manga' || cat === 'art';
        return cat === filter;
      };

      const matched = originalCards.filter(isMatch);
      const others = originalCards.filter(card => !isMatch(card));

      matched.forEach(card => {
        card.classList.remove('is-dimmed');
        card.classList.add('is-highlighted');
        cardsGrid.appendChild(card);
      });
      others.forEach(card => {
        card.classList.remove('is-highlighted');
        card.classList.add('is-dimmed');
        cardsGrid.appendChild(card);
      });
    };

    sidebarItems.forEach(item => {
      item.addEventListener('click', () => applyFilter(item));
      item.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          applyFilter(item);
        }
      });
    });
  }

  if (cardsGrid && viewButtons.length > 0) {
    const applyView = (btn) => {
      const view = btn.getAttribute('data-view');
      viewButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      cardsGrid.classList.toggle('list-view', view === 'list');
    };

    viewButtons.forEach(btn => {
      btn.addEventListener('click', () => applyView(btn));
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          applyView(btn);
        }
      });
    });
  }
}

/**
 * Interactive Feature Showcase Previews (Manga Viewer & Video Seekbar)
 */
function initFeaturePreviewInteraction() {
  // Tab 1: Manga Viewer controls & page drawer
  const mangaCanvas = document.querySelector('.fv-manga-canvas');
  const mangaInfo = document.querySelector('.fv-tb-info');
  const leftPageNum = document.querySelector('.fv-page-left .page-corner-num');
  const rightPageNum = document.querySelector('.fv-page-right .page-corner-num');
  const drawerThumbs = document.querySelectorAll('.fv-drawer-thumb[data-pages]');
  const tbButtons = document.querySelectorAll('.fv-tb-btn[data-action]');
  const mangaVisualBox = document.querySelector('[data-panel="viewer"] .feature-visual-box');

  if (mangaCanvas && drawerThumbs.length > 0) {
    const selectPages = (thumb) => {
      const pages = thumb.getAttribute('data-pages');
      if (!pages) return;

      drawerThumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');

      const parts = pages.split('-');
      if (leftPageNum && parts[0]) leftPageNum.textContent = parts[0];
      if (rightPageNum && parts[1]) rightPageNum.textContent = parts[1];
      if (mangaInfo) {
        const display = mangaCanvas.classList.contains('single-mode') && parts[1]
          ? parts[1]
          : pages;
        mangaInfo.textContent = `P. ${display} / 184`;
      }
    };

    drawerThumbs.forEach(thumb => {
      thumb.addEventListener('click', () => selectPages(thumb));
      thumb.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          selectPages(thumb);
        }
      });
    });

    tbButtons.forEach(btn => {
      const triggerAction = () => {
        const action = btn.getAttribute('data-action');
        if (action === 'spread') {
          const isSingle = mangaCanvas.classList.toggle('single-mode');
          btn.classList.toggle('active', !isSingle);
          const activeThumb = document.querySelector('.fv-drawer-thumb.active');
          if (activeThumb) selectPages(activeThumb);
        } else if (action === 'rotate') {
          const isRotated = mangaCanvas.classList.toggle('rotated');
          btn.classList.toggle('active', isRotated);
        } else if (action === 'fullscreen' && mangaVisualBox) {
          const isFull = mangaVisualBox.classList.toggle('is-fullscreen-preview');
          btn.classList.toggle('active', isFull);
        }
      };

      btn.addEventListener('click', triggerAction);
      btn.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          triggerAction();
        }
      });
    });
  }

  // Tab 2: Video 100-thumbnail seek strip
  const filmFrames = document.querySelectorAll('.film-frame[data-time]');
  const videoTimeEl = document.querySelector('.fv-video-time');
  const cursorPin = document.querySelector('.film-cursor-pin');

  if (filmFrames.length > 0 && cursorPin) {
    const moveSeek = (frame) => {
      const time = frame.getAttribute('data-time');
      if (!time) return;

      filmFrames.forEach(f => f.classList.remove('current'));
      frame.classList.add('current');
      cursorPin.textContent = `▼ ${time}`;
      frame.appendChild(cursorPin);

      if (videoTimeEl) {
        videoTimeEl.textContent = `${time} / 45:10`;
      }
    };

    filmFrames.forEach(frame => {
      frame.addEventListener('mouseenter', () => moveSeek(frame));
      frame.addEventListener('click', () => moveSeek(frame));
      frame.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          moveSeek(frame);
        }
      });
    });
  }
}
