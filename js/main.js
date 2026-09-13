/**
 * Tanuyomi（たぬヨミ）- Official Website JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initScrollspy();
  initFeatureTabs();
  initFaqAccordion();
  initScrollAnimations();
  initSmoothScroll();
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

  // Track target sections defined in nav buttons
  const sectionIds = Array.from(navButtons)
    .map(btn => btn.getAttribute('href'))
    .filter(href => href && href.startsWith('#') && href.length > 1);

  const sections = sectionIds
    .map(id => document.querySelector(id))
    .filter(el => el !== null);

  if (sections.length === 0) return;

  const updateActiveNav = () => {
    const scrollPosition = window.scrollY + 120; // Header offset + threshold
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

      // Update button active state
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Update panel visibility
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

      // Close all other items (accordion behavior)
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      // Toggle current item
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
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  } else {
    // Fallback: show immediately
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
