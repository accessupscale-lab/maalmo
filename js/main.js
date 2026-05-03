/* ============================================
   MAALMO STEELS - MAIN JAVASCRIPT
   ============================================ */

(function () {
  'use strict';

  /* ---- 1. Sticky Header ---- */
  const header = document.querySelector('.site-header');
  if (header) {
    const onScroll = () => {
      if (window.scrollY > 40) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---- 2. Mobile Nav Toggle ---- */
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      navToggle.innerHTML = open ? '&times;' : '&#9776;';
      document.body.style.overflow = open ? 'hidden' : '';
    });
    // Close on link click (mobile)
    navMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', (e) => {
        const li = a.parentElement;
        // Toggle dropdown on mobile when clicking parent link
        if (window.innerWidth <= 880 && li.classList.contains('has-dropdown') && a.parentElement === li) {
          // Only toggle if clicking the top-level link, not a submenu item
          if (a === li.querySelector(':scope > a')) {
            e.preventDefault();
            li.classList.toggle('open');
            return;
          }
        }
        if (window.innerWidth <= 880 && !li.classList.contains('has-dropdown')) {
          navMenu.classList.remove('open');
          navToggle.innerHTML = '&#9776;';
          document.body.style.overflow = '';
        }
      });
    });
  }

  /* ---- 3. Scroll Reveal ---- */
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => io.observe(el));
  } else {
    reveals.forEach(el => el.classList.add('visible'));
  }

  /* ---- 4. Stat Counter ---- */
  const counters = document.querySelectorAll('[data-count]');
  if ('IntersectionObserver' in window && counters.length) {
    const counterObs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute('data-count'), 10);
          const suffix = el.getAttribute('data-suffix') || '';
          const duration = 1400;
          const start = performance.now();
          const step = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const val = Math.floor(progress * target);
            el.textContent = val + suffix;
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
          counterObs.unobserve(el);
        }
      });
    }, { threshold: 0.5 });
    counters.forEach(c => counterObs.observe(c));
  }

  /* ---- 5. Product Filters ---- */
  const filterBtns = document.querySelectorAll('[data-filter-btn]');
  const filterItems = document.querySelectorAll('[data-category]');
  if (filterBtns.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-filter-btn');
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterItems.forEach(item => {
          const cat = item.getAttribute('data-category');
          item.style.display = (target === 'all' || cat === target) ? '' : 'none';
        });
      });
    });
  }

  /* ---- 6. Tabs (Product Detail) ---- */
  const tabBtns = document.querySelectorAll('.tab-btn');
  if (tabBtns.length) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-tab');
        const parent = btn.closest('.tabs');
        if (!parent) return;
        parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        parent.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        const content = parent.querySelector('#' + target);
        if (content) content.classList.add('active');
      });
    });
  }

  /* ---- 7. Product Gallery ---- */
  const thumbs = document.querySelectorAll('.product-gallery .thumb');
  const mainImg = document.querySelector('.product-gallery .main-img img');
  if (thumbs.length && mainImg) {
    thumbs.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const src = thumb.querySelector('img').getAttribute('src');
        thumbs.forEach(t => t.classList.remove('active'));
        thumb.classList.add('active');
        mainImg.src = src;
      });
    });
  }

  /* ---- 8. Form Validation ---- */
  document.querySelectorAll('form[data-validate]').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll('[required]').forEach(field => {
        if (!field.value.trim()) {
          field.style.borderColor = '#ef4444';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
        if (field.type === 'email' && field.value.trim()) {
          const emailRx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRx.test(field.value.trim())) {
            field.style.borderColor = '#ef4444';
            valid = false;
          }
        }
      });
      const msg = form.querySelector('.form-msg');
      if (valid) {
        if (msg) {
          msg.textContent = 'Thank you! Your inquiry has been received. Our team will contact you within 24 hours.';
          msg.style.cssText = 'background:#d1fae5;color:#065f46;padding:14px 18px;border-radius:8px;margin-top:16px;font-size:0.95rem;';
        }
        form.reset();
      } else if (msg) {
        msg.textContent = 'Please fill in all required fields with valid information.';
        msg.style.cssText = 'background:#fee2e2;color:#991b1b;padding:14px 18px;border-radius:8px;margin-top:16px;font-size:0.95rem;';
      }
    });
  });

  /* ---- 9. Year in Footer ---- */
  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---- 10. Lazy-load fade-in ---- */
  document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    if (img.complete) {
      img.classList.add('loaded');
    } else {
      img.addEventListener('load', () => img.classList.add('loaded'), { once: true });
      img.addEventListener('error', () => img.classList.add('loaded'), { once: true });
    }
  });

  /* ---- 11. Smooth Anchor Scroll ---- */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if (id.length > 1) {
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          const offset = 100;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

})();
