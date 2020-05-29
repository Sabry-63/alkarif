

(function ($) {
"use strict";


    // Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }


    // Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-top');
            if (windowpos >= 150) {
                siteHeader.addClass('fixed-header');
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();

    new WOW().init();

    // nice select
    if ($('select').length) {

        $('select').niceSelect();
    }


   /* Coming Soon CountDown Start */
    if($('.time-countdown').length !== 0){
            const second = 1000,
              minute = second * 60,
              hour = minute * 60,
              day = hour * 24;
            let countDown = new Date('Jun 10, 2020 19:00:00').getTime(),
        x = setInterval(function() {
          let now = new Date().getTime(),
              distance = countDown - now;
            document.getElementById('days').innerText = Math.floor(distance / (day)),
            document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
          //do something later when date is reached
          //if (distance < 0) {
          //  clearInterval(x);
          //  'IT'S MY BIRTHDAY!;
          //}
        }, second)
    };
    /* Coming Soon CountDown End */

    // magnificPopup
    $('.vedio-play').magnificPopup({
        type: 'video',
    });



    // Scroll to a Specific Div
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function () {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    /* ==========================================================================
       When document is scroll, do
       ========================================================================== */

    $(window).on('scroll', function () {
        headerStyle();
    });

    /* ==========================================================================
       When document is loaded, do
       ========================================================================== */

    $(window).on('load', function () {
        handlePreloader();

    });


})(jQuery);