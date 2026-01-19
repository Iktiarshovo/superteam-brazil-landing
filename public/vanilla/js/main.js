/**
 * Superteam Brazil - Main JavaScript
 * Premium Web3 Landing Page Interactions
 * Version: 1.0.0
 */

// ========================================
// 1. NAVBAR SCROLL EFFECT
// ========================================
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Mobile menu toggle
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    spans.forEach((span, index) => {
      if (navMenu.classList.contains('active')) {
        if (index === 0) span.style.transform = 'rotate(45deg) translateY(7px)';
        if (index === 1) span.style.opacity = '0';
        if (index === 2) span.style.transform = 'rotate(-45deg) translateY(-7px)';
      } else {
        span.style.transform = 'none';
        span.style.opacity = '1';
      }
    });
  });

  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('.navbar__link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      const spans = navToggle.querySelectorAll('span');
      spans.forEach(span => {
        span.style.transform = 'none';
        span.style.opacity = '1';
      });
    });
  });
}

// ========================================
// 2. SMOOTH SCROLL FOR ANCHOR LINKS
// ========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// ========================================
// 3. SCROLL ANIMATIONS
// ========================================
const animateElements = document.querySelectorAll('[data-animate]');

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const observerCallback = (entries, observer) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Add staggered delay
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 100);
      observer.unobserve(entry.target);
    }
  });
};

const scrollObserver = new IntersectionObserver(observerCallback, observerOptions);

animateElements.forEach(element => {
  scrollObserver.observe(element);
});

// ========================================
// 4. ANIMATED COUNTERS
// ========================================
const counterElements = document.querySelectorAll('[data-counter]');

const animateCounter = (element) => {
  const target = parseInt(element.getAttribute('data-counter'));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += step;
    if (current < target) {
      element.textContent = Math.floor(current);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };

  updateCounter();
};

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counterElements.forEach(element => {
  counterObserver.observe(element);
});

// ========================================
// 5. FAQ ACCORDION
// ========================================
const faqItems = document.querySelectorAll('.faq__item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq__question');
  
  question.addEventListener('click', () => {
    // Close other items
    faqItems.forEach(otherItem => {
      if (otherItem !== item && otherItem.classList.contains('active')) {
        otherItem.classList.remove('active');
      }
    });
    
    // Toggle current item
    item.classList.toggle('active');
  });
});

// ========================================
// 6. MEMBERS PAGE - SEARCH & FILTER
// ========================================
const memberSearch = document.getElementById('memberSearch');
const membersGrid = document.getElementById('membersGrid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Filter functionality
if (filterBtns.length > 0 && membersGrid) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      const cards = membersGrid.querySelectorAll('.member-card');
      
      cards.forEach(card => {
        const tags = card.getAttribute('data-tags') || '';
        
        if (filter === 'all' || tags.includes(filter)) {
          card.style.display = 'block';
          card.style.animation = 'fadeInUp 0.4s ease forwards';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
}

// Search functionality
if (memberSearch && membersGrid) {
  memberSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const cards = membersGrid.querySelectorAll('.member-card');
    
    cards.forEach(card => {
      const name = card.getAttribute('data-name') || '';
      const tags = card.getAttribute('data-tags') || '';
      const role = card.querySelector('.member-card__role')?.textContent || '';
      
      const searchContent = `${name} ${tags} ${role}`.toLowerCase();
      
      if (searchContent.includes(searchTerm)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Reset filter buttons
    if (searchTerm) {
      filterBtns.forEach(btn => btn.classList.remove('active'));
    } else {
      filterBtns.forEach(btn => {
        if (btn.getAttribute('data-filter') === 'all') {
          btn.classList.add('active');
        }
      });
    }
  });
}

// ========================================
// 7. LOAD MORE BUTTON (Members Page)
// ========================================
const loadMoreBtn = document.getElementById('loadMoreBtn');

if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', () => {
    // Simulate loading more members
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
    
    setTimeout(() => {
      loadMoreBtn.innerHTML = '<i class="fas fa-check"></i> Todos Carregados';
      loadMoreBtn.disabled = true;
      loadMoreBtn.style.opacity = '0.6';
    }, 1500);
  });
}

// ========================================
// 8. PARALLAX EFFECT FOR HERO
// ========================================
const heroVisual = document.querySelector('.hero__visual-card');

if (heroVisual) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
  });
}

// ========================================
// 9. HOVER EFFECTS FOR CARDS
// ========================================
const cards = document.querySelectorAll('.card, .member-card, .event-card, .tweet-card, .mission__card');

cards.forEach(card => {
  card.addEventListener('mouseenter', function(e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    this.style.setProperty('--mouse-x', `${x}px`);
    this.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ========================================
// 10. TYPING EFFECT FOR HERO (Optional)
// ========================================
const typeWriter = (element, text, speed = 100) => {
  let i = 0;
  element.textContent = '';
  
  const type = () => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  
  type();
};

// ========================================
// 11. LAZY LOADING IMAGES
// ========================================
const lazyImages = document.querySelectorAll('img[data-src]');

const lazyLoadObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => {
  lazyLoadObserver.observe(img);
});

// ========================================
// 12. DARK MODE TOGGLE (Future Feature)
// ========================================
// const darkModeToggle = document.getElementById('darkModeToggle');
// Currently the site is dark mode by default

// ========================================
// 13. PRELOADER (Optional)
// ========================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Animate hero elements on load
  const heroElements = document.querySelectorAll('.hero__badge, .hero__title, .hero__subtitle, .hero__cta, .hero__stats');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 200 * index);
  });
});

// ========================================
// 14. CURSOR GLOW EFFECT (Optional)
// ========================================
const createCursorGlow = () => {
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transform: translate(-50%, -50%);
    transition: opacity 0.3s;
    opacity: 0;
  `;
  document.body.appendChild(glow);
  
  document.addEventListener('mousemove', (e) => {
    glow.style.left = e.clientX + 'px';
    glow.style.top = e.clientY + 'px';
    glow.style.opacity = '1';
  });
  
  document.addEventListener('mouseleave', () => {
    glow.style.opacity = '0';
  });
};

// Enable cursor glow on desktop only
if (window.innerWidth > 1024) {
  createCursorGlow();
}

// ========================================
// 15. CONSOLE EASTER EGG
// ========================================
console.log(`
%c⚡ Superteam Brazil ⚡
%cO Hub de Talento Web3 do Brasil
%c🇧🇷 Junte-se a nós: https://t.me/superteambr
`, 
  'color: #6366F1; font-size: 24px; font-weight: bold;',
  'color: #009C3B; font-size: 14px;',
  'color: #FFCC00; font-size: 12px;'
);

// ========================================
// 16. PERFORMANCE OPTIMIZATION
// ========================================
// Debounce scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (scrollTimeout) {
    window.cancelAnimationFrame(scrollTimeout);
  }
  scrollTimeout = window.requestAnimationFrame(() => {
    // Scroll-dependent updates here
  });
}, { passive: true });

// ========================================
// INITIALIZATION
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  console.log('Superteam Brazil - Landing Page Loaded');
  
  // Add initial animation states
  const heroElements = document.querySelectorAll('.hero__badge, .hero__title, .hero__subtitle, .hero__cta, .hero__stats');
  heroElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.6s ease';
  });
});
