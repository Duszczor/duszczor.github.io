$(document).ready(function () {
  $(".js--section-offert").waypoint(
    function (direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px",
    },
  );

  document.querySelectorAll(".mobile-nav-details .main-nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      document.querySelector(".mobile-nav-details").removeAttribute("open");
    });
  });

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  var swiper = new Swiper(".swiper-container", {
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
});
