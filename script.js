const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const scrollProgress = document.getElementById('scrollProgress');
const toast = document.getElementById('toast');

menuToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  scrollProgress.style.width = `${progress}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });
updateProgress();

document.getElementById('year').textContent = new Date().getFullYear();

const revealTargets = document.querySelectorAll(
  '.section-heading, .about-note, .about-copy, .timeline-item, .score-card, .skill-card, .project-card, .experience-card, .certificate-card, .interest-grid > div'
);
revealTargets.forEach(target => target.classList.add('reveal'));

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealTargets.forEach(target => observer.observe(target));
} else {
  revealTargets.forEach(target => target.classList.add('visible'));
}

let toastTimer;
function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
}

document.getElementById('copyEmail').addEventListener('click', async () => {
  const email = 'krishna.mishra.batch2024@sitnagpur.siu.edu.in';
  try {
    await navigator.clipboard.writeText(email);
    showToast('Email copied to clipboard');
  } catch {
    const field = document.createElement('textarea');
    field.value = email;
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    showToast(copied ? 'Email copied to clipboard' : email);
  }
});
