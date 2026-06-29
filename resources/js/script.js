'use strict';

// Skrypty ładowane z atrybutem defer — DOM jest gotowy gdy ten plik się wykonuje,
// jQuery/Waypoints/Swiper są załadowane (defer gwarantuje kolejność z HTML).
// Wrapper $(document).ready() jest zbędny przy defer.

// ── Sticky nav — Waypoints ────────────────────────────────────────────────────
// Dodaje klasę .sticky do <nav> gdy user przewinie poza sekcję oferty

$(".js--section-offert").waypoint(
  function (direction) {
    if (direction === "down") {
      $("header nav").addClass("sticky");
    } else {
      $("header nav").removeClass("sticky");
    }
  },
  {
    offset: "60px",
  },
);

// ── Mobile nav — zamykanie menu po kliknięciu linku ──────────────────────────
// Na mobile <details open> = menu widoczne. removeAttribute("open") = schowanie.

if (window.matchMedia("(max-width: 767px)").matches) {
  document.querySelector(".mobile-nav-details").removeAttribute("open");
}

document.querySelectorAll(".mobile-nav-details .main-nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    document.querySelector(".mobile-nav-details").removeAttribute("open");
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
