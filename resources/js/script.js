$(document).ready(function() {
    
    $('.js--section-offert').waypoint(function(direction) {
        if(direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Navigation scroll */
    $(function() {
    $('a[href*="#"]')
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          if (target.length) {
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, 1500, function() {
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                return false;
              } else {
                $target.attr('tabindex','-1');
                $target.focus();
              }
            });
          }
        }
      })
    });
    
    /* Animations on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
    }, {
        offset: '50%'
    });

    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
    }, {
        offset: '50%'
    });
    
    
    /* Mobile nav */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var headerText = $('.hero-text-box');

        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            headerText.css('margin-top',"180px");
            
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
            headerText.css('margin-top',0);
        }
    });

        $('.js--main-nav').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        var headerText = $('.hero-text-box');
            
            
    if($('.mobile-nav-icon').css('display') != 'none'){
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
            headerText.css('margin-top',"180px");
            
        } else {
            icon.removeClass('ion-close-round');
            icon.addClass('ion-navicon-round');
            headerText.css('margin-top',0);
        }
    }
    });

    
    

    var swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 2000,
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });
    
});