const animated = [...document.querySelectorAll("[data-animate]")];
const scrollMeter = document.querySelector(".scroll-meter");
const heroImage = document.querySelector(".hero-image");
const cards = document.querySelectorAll(".article-card");
const newsletterForm = document.querySelector(".newsletter-form");

const revealObserver = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.18 }
);

animated.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 50, 220)}ms`;
  revealObserver.observe(item);
});

const updateScroll = () => {
  const scrollTop = window.scrollY;
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = pageHeight > 0 ? scrollTop / pageHeight : 0;

  scrollMeter.style.transform = `scaleX(${progress})`;

  if (heroImage) {
    heroImage.style.transform = `translateY(${scrollTop * 0.08}px) scale(1.04)`;
  }
};

let ticking = false;

window.addEventListener(
  "scroll",
  () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateScroll();
        ticking = false;
      });
      ticking = true;
    }
  },
  { passive: true }
);

cards.forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const bounds = card.getBoundingClientRect();
    const x = event.clientX - bounds.left;
    const y = event.clientY - bounds.top;
    const rotateY = ((x / bounds.width) - 0.5) * 5;
    const rotateX = ((y / bounds.height) - 0.5) * -5;

    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
  });

  card.addEventListener("pointerleave", () => {
    card.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateY(0)";
  });
});

newsletterForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = newsletterForm.querySelector("button");
  const original = button.textContent;

  button.textContent = "Listo";
  window.setTimeout(() => {
    button.textContent = original;
  }, 1800);
});

updateScroll();
