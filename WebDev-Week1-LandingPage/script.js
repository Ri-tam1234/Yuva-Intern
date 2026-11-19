/* =====================================================
   Flowly Landing Page - script.js
   Vanilla JS: (1) responsive menu toggle, (2) form validation,
   (3) dynamic footer year.
   ===================================================== */
document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 1. Mobile menu toggle ---------- */
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-nav');

  // Open/close helper keeps the CSS class and ARIA state in sync
  const setMenu = (open) => {
    nav.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };

  toggle.addEventListener('click', () => {
    setMenu(toggle.getAttribute('aria-expanded') !== 'true');
  });

  // Close the menu after a link is tapped (better mobile UX)
  nav.querySelectorAll('a').forEach(link =>
    link.addEventListener('click', () => setMenu(false)));

  // Close with the Escape key (keyboard accessibility)
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setMenu(false); });

  // Reset state if the window is resized up to desktop width
  window.matchMedia('(min-width: 1024px)')
    .addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  /* ---------- 2. Sign-up form validation ---------- */
  const form = document.querySelector('.signup');
  const msg = document.querySelector('.form-msg');

  form.addEventListener('submit', (e) => {
    e.preventDefault();                       // no real backend in this demo
    const email = form.email.value.trim();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    msg.textContent = valid
      ? 'Thanks! You are on the list. 🎉'
      : 'Please enter a valid email address.';
    if (valid) form.reset();
  });

  /* ---------- 3. Keep footer year current ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();
});
