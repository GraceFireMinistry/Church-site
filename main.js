/* Grace Fire Deliverance Healing Global World Ministry — main.js */

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Header scroll state ---------- */
  const header = document.querySelector('.site-header');
  const onScroll = () => {
    if (!header) return;
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const expanded = navLinks.classList.contains('open');
      navToggle.setAttribute('aria-expanded', expanded);
    });
    navLinks.querySelectorAll('a').forEach(a =>
      a.addEventListener('click', () => navLinks.classList.remove('open'))
    );
  }

  /* ---------- Hero slider ---------- */
  const slides = document.querySelectorAll('.hero-slide');
  const dotsWrap = document.querySelector('.hero-dots');
  if (slides.length) {
    let current = 0;
    if (dotsWrap) {
      slides.forEach((_, i) => {
        const b = document.createElement('button');
        if (i === 0) b.classList.add('active');
        b.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        b.addEventListener('click', () => showSlide(i));
        dotsWrap.appendChild(b);
      });
    }
    function showSlide(i) {
      slides[current].classList.remove('active');
      dotsWrap?.children[current]?.classList.remove('active');
      current = i;
      slides[current].classList.add('active');
      dotsWrap?.children[current]?.classList.add('active');
      // restart ken burns animation
      const img = slides[current].querySelector('img');
      if (img) { img.style.animation = 'none'; void img.offsetWidth; img.style.animation = ''; }
    }
    if (slides.length > 1) {
      setInterval(() => showSlide((current + 1) % slides.length), 6000);
    }
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  /* ---------- Lightbox (gallery page) ---------- */
  const lightbox = document.querySelector('.lightbox');
  if (lightbox) {
    const lightboxImg = lightbox.querySelector('img');
    document.querySelectorAll('.gallery-grid a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        lightboxImg.src = link.getAttribute('href');
        lightboxImg.alt = link.querySelector('img')?.alt || '';
        lightbox.classList.add('open');
      });
    });
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
        lightbox.classList.remove('open');
      }
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') lightbox.classList.remove('open');
    });
  }

  /* ---------- Copy-to-clipboard (partnership page) ---------- */
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-copy');
      navigator.clipboard?.writeText(text).then(() => {
        const original = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => (btn.textContent = original), 1800);
      });
    });
  });

  /* ---------- Forms (Prayer request + Contact) via Formspree ----------
     Beginner note: replace YOUR_FORM_ID in each <form action="..."> with
     your real Formspree endpoint. See README "Connect the forms" section. */
  document.querySelectorAll('form[data-ajax-form]').forEach(form => {
    const successBox = form.parentElement.querySelector('.form-success');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Sending…';
      submitBtn.disabled = true;
      try {
        const data = new FormData(form);
        const res = await fetch(form.action, {
          method: 'POST',
          body: data,
          headers: { Accept: 'application/json' }
        });
        if (res.ok) {
          form.reset();
          if (successBox) successBox.classList.add('show');
          form.style.display = 'none';
        } else {
          alert('Something went wrong. Please try again, or reach us directly on WhatsApp.');
        }
      } catch (err) {
        alert('Network error. Please check your connection or message us on WhatsApp.');
      } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  });

  /* ---------- Current year in footer ---------- */
  document.querySelectorAll('.year').forEach(el => (el.textContent = new Date().getFullYear()));

  /* ---------- Register service worker for PWA ---------- */
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js').catch(() => {});
    });
  }
});
