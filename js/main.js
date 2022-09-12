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
    // appendArrows: $(".arrows-box"),
  });
  $(".hero__inner").on(
    "afterChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".counter .current").html(currentSlide + 1);
    }
  );

  $(".benefits__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    nextArrow:
      '<button type="button" class="slick-arrow slick-next"><img src="images/arrow-right2.svg" alt="next arrow"></button>',
    prevArrow:
      '<button type="button" class="slick-arrow slick-prev"><img src="images/arrow-left2.svg" alt="prev arrow"></button>',
  });
  $(".header__list-btn").click(function () {
    $(".header__list").toggleClass("header__list-active");
  });
  $(".header__menu-btn").click(function () {
    $(".header__menu").toggleClass("header__menu-active");
  });
});

/* document.querySelector(".header__list-btn").onclick = () => {
  document.querySelector(".header__list")
    .classList.toggle("header__list-active");
}; */
