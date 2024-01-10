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
});
