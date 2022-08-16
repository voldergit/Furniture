$(function () {
  $(".hero__inner").on("init", function (event, slick) {
    $(this).append(
      '<div class="counter"><p><span class="current">1</span> / <span class="total">' +
        slick.slideCount +
        "</span></p></div>"
    );
  });
  $(".hero__inner").slick({
    slidesToShow: 1,
    dots: false,
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right.svg" alt="next arrow"></button>',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left.svg" alt="prev arrow"></button>',
  });
  $(".hero__inner").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".counter .current").html(currentSlide + 1);
    }
  );

  $(".benefits__inner").slick({
    slidesToShow: 3,
    centerMode: true,
    dots: false,
    variableWidth: true,
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right2.svg" alt="next arrow"></button>',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left2.svg" alt="prev arrow"></button>',
  });
});

/* $(function () {
  $(".hero__inner").on(`init reInit`, function (event, slick) {
    $(".counter").text(1 + " / " + slick.slideCount);
  });
  $(".hero__inner").on(
    `afterChange`,
    function (event, slick, currentSlide, nextSlide) {
      $(".counter").text(currentSlide + 1 + " / " + slick.slideCount);
    }
  );

  $(".hero__inner").slick({
    slidesToShow: 1,
    dots: false,
  });
}); */
