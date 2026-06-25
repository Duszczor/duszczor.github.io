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

  /* Animations on scroll */
  $(".js--wp-1").waypoint(
    function (direction) {
      $(".js--wp-1").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    },
  );

  $(".js--wp-2").waypoint(
    function (direction) {
      $(".js--wp-2").addClass("animated fadeInUp");
    },
    {
      offset: "50%",
    },
  );

  $(".js--wp-3").waypoint(
    function (direction) {
      $(".js--wp-3").addClass("animated fadeIn");
    },
    {
      offset: "50%",
    },
  );

  $(".js--wp-4").waypoint(
    function (direction) {
      $(".js--wp-4").addClass("animated pulse");
    },
    {
      offset: "50%",
    },
  );

  /* Mobile nav */
  $(".js--nav-icon").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    var navButton = $(".js--nav-icon");
    var headerText = $(".hero-text-box");

    nav.slideToggle(200);
    if (icon.hasClass("ion-navicon-round")) {
      icon.addClass("ion-close-round");
      icon.removeClass("ion-navicon-round");
      navButton.attr("aria-expanded", "true");
      headerText.css("margin-top", "180px");
    } else {
      icon.removeClass("ion-close-round");
      icon.addClass("ion-navicon-round");
      navButton.attr("aria-expanded", "false");
      headerText.css("margin-top", 0);
    }
  });

  $(".js--main-nav").click(function () {
    var nav = $(".js--main-nav");
    var icon = $(".js--nav-icon i");
    var navButton = $(".js--nav-icon");
    var headerText = $(".hero-text-box");

    if ($(".mobile-nav-icon").css("display") != "none") {
      nav.slideToggle(200);
      if (icon.hasClass("ion-navicon-round")) {
        icon.addClass("ion-close-round");
        icon.removeClass("ion-navicon-round");
        navButton.attr("aria-expanded", "true");
        headerText.css("margin-top", "180px");
      } else {
        icon.removeClass("ion-close-round");
        icon.addClass("ion-navicon-round");
        navButton.attr("aria-expanded", "false");
        headerText.css("margin-top", 0);
      }
    }
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
