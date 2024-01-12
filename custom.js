$(function () {
  $("section, .menu a").click(function () {
    $(".gnb").removeClass("active");
    $(".trigger").removeClass("active");
  });

  // Smooth Scrolling
  $(".menu a, .gotoTop").click(function (e) {
    $.scrollTo(this.hash || 0, 900);
  });

  // Change CSS with Scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header", "gotoTop").addClass("active");
    } else {
      $("header", "gotoTop").removeClassClass("active");
    }
  });

  // slick.js : history
  $(".history-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 2,
  });

  // Slick.js : project photo
  $(".project-photo").slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });
});
