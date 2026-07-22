'use strict';

// Skrypty ładowane z atrybutem defer — DOM jest gotowy gdy ten plik się wykonuje,
// Swiper jest załadowany (defer gwarantuje kolejność z HTML).
// Wrapper $(document).ready() jest zbędny przy defer.

// ── Sticky nav — IntersectionObserver ─────────────────────────────────────────
// Dodaje klasę .sticky do <nav> gdy user przewinie poniżej 60px od góry sekcji oferty.
// Sentinel (0px wysokości) wstawiony tuż przed sekcją = punkt odniesienia do
// wykrycia przekroczenia linii, a nie zwykłego "widoczności" — sekcja oferty
// jest wyższa niż viewport, więc obserwowanie jej samej dawałoby błędny wynik
// (isIntersecting zostawałoby true przez cały czas przewijania sekcji).
const stickyOffset = 60;
const stickySentinel = document.createElement("div");
stickySentinel.className = "js--sticky-sentinel";
document
  .querySelector(".js--section-offert")
  .before(stickySentinel);

const nav = document.querySelector("header nav");

new IntersectionObserver(
  function ([entry]) {
    if (entry.isIntersecting) {
      nav.classList.remove("sticky");
    } else if (entry.boundingClientRect.top < stickyOffset) {
      // boundingClientRect.top liczony jest względem realnego viewportu (bez rootMargin),
      // więc próg porównania to stickyOffset — nie 0. Przy 0 callback potrafił przyjść
      // (async batching IntersectionObserver) z top jeszcze dodatnim, ale już poniżej
      // linii triggera, i sticky nigdy się nie włączał.
      nav.classList.add("sticky");
    }
  },
  { rootMargin: `-${stickyOffset}px 0px 0px 0px` },
).observe(stickySentinel);

// ── Mobile nav — zamykanie menu po kliknięciu linku ──────────────────────────
// Na mobile <details open> = menu widoczne. removeAttribute("open") = schowanie.
// MOBILE_BREAKPOINT musi być zsynchronizowany z $bp-md w resources/scss/_variables.scss

const MOBILE_BREAKPOINT = "(max-width: 767px)";
const mobileNavDetails = document.querySelector(".mobile-nav-details");

if (window.matchMedia(MOBILE_BREAKPOINT).matches) {
  mobileNavDetails.removeAttribute("open");
}

document.querySelectorAll(".mobile-nav-details .main-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    if (window.matchMedia(MOBILE_BREAKPOINT).matches) {
      mobileNavDetails.removeAttribute("open");
    }
  });
});

// ── Swiper — slider realizacji ────────────────────────────────────────────────
// prefers-reduced-motion: brak autoplay i płynnego transition gdy user wyłączył animacje w systemie

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

const swiper = new Swiper(".swiper-container", {
  loop: true,
  speed: prefersReducedMotion ? 0 : 700,
  autoplay: prefersReducedMotion
    ? false
    : {
        delay: 3200,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  a11y: {
    enabled: true,
  },
});
