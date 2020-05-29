(function($) {
  "use strict";
  $(".center").slick({
    centerMode: true,
    centerPadding: "60px",
    speed: 300,
    slidesToShow: 3,
    autoplay: true,
    arrows: false,
    rtl: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: false,
          centerPadding: "20px",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          centerPadding: "20px",
          slidesToShow: 1
        }
      }
    ]
  });
})(jQuery);
