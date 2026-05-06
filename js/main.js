/**
 * ZENIAL — main.js
 * Interactividad global: navbar, animaciones, contador, formulario
 */

// ─── Navbar scroll effect ───
const navbar = document.querySelector('.navbar');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('scrolled');
  else navbar.classList.remove('scrolled');
});

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    navLinks.classList.toggle('open');
    document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
  });
}

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger?.classList.remove('open');
    navLinks?.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ─── Marcar enlace activo en navbar ───
(function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
})();

// ─── Animaciones de reveal al hacer scroll ───
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));

// ─── Contador animado de estadísticas ───
function animateCounter(el, target, duration = 1800) {
  const suffix = el.dataset.suffix || '';
  const start = 0;
  const step = (timestamp) => {
    if (!start_time) start_time = timestamp;
    const progress = Math.min((timestamp - start_time) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target.toLocaleString() + suffix;
  };
  let start_time = null;
  requestAnimationFrame(step);
}

const counterEls = document.querySelectorAll('.stat-number[data-target]');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = parseInt(entry.target.dataset.target);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

counterEls.forEach(el => counterObserver.observe(el));

// ─── Formulario de contacto ───
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const msgEl = document.getElementById('form-message');
    const btn = contactForm.querySelector('button[type="submit"]');

    // Validación básica
    const fields = contactForm.querySelectorAll('[required]');
    let valid = true;
    fields.forEach(field => {
      field.style.borderColor = '';
      if (!field.value.trim()) {
        field.style.borderColor = '#EF4444';
        valid = false;
      }
    });

    // Validar email
    const emailField = contactForm.querySelector('[type="email"]');
    if (emailField && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
      emailField.style.borderColor = '#EF4444';
      valid = false;
    }

    if (!valid) {
      msgEl.className = 'form-msg error';
      msgEl.textContent = '⚠️ Por favor completa todos los campos correctamente.';
      return;
    }

    // Simular envío
    btn.textContent = 'Enviando...';
    btn.disabled = true;

    setTimeout(() => {
      msgEl.className = 'form-msg success';
      msgEl.textContent = '✅ ¡Mensaje enviado exitosamente! Nos pondremos en contacto pronto.';
      contactForm.reset();
      btn.textContent = 'Enviar Mensaje';
      btn.disabled = false;
      setTimeout(() => { msgEl.className = 'form-msg'; }, 6000);
    }, 1500);
  });
}

// ─── Smooth reveal para hero content ───
document.addEventListener('DOMContentLoaded', () => {
  const heroContent = document.querySelector('.hero-content');
  if (heroContent) {
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    setTimeout(() => {
      heroContent.style.opacity = '1';
      heroContent.style.transform = 'translateY(0)';
    }, 100);
  }
});

// ─── Tabs de productos (si existen) ───
const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    tabPanels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.add('active');
  });
});
