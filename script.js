// SUBSTITUIR: confirmar data/hora exata do evento (13/08, 19h) com a organização
const EVENT_DATE = new Date('2026-08-13T19:00:00-03:00');

function updateCountdown() {
  const el = {
    days: document.getElementById('cd-days'),
    hours: document.getElementById('cd-hours'),
    minutes: document.getElementById('cd-minutes'),
    seconds: document.getElementById('cd-seconds'),
  };
  if (!el.days) return;

  const diff = EVENT_DATE.getTime() - Date.now();

  if (diff <= 0) {
    el.days.textContent = '00';
    el.hours.textContent = '00';
    el.minutes.textContent = '00';
    el.seconds.textContent = '00';
    return;
  }

  const pad = (n) => String(n).padStart(2, '0');
  const totalSeconds = Math.floor(diff / 1000);

  el.days.textContent = pad(Math.floor(totalSeconds / 86400));
  el.hours.textContent = pad(Math.floor((totalSeconds % 86400) / 3600));
  el.minutes.textContent = pad(Math.floor((totalSeconds % 3600) / 60));
  el.seconds.textContent = pad(totalSeconds % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Reveal-on-scroll animations
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach((el) => observer.observe(el));
