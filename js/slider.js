  // $('.owl-carousel').owlCarousel({
  //   responsive: {
  //     480 : {
  //       items: 3
  //     },
  //     1024 : {
  //       items: 5
  //     }
  //   }
  // });

  $('.local-slider__block').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.slick',
    prevArrow: '.slick-prev-local',
    nextArrow: '.slick-next-local',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }
    ]
});

  $('.header-content__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    fade: true,
    cssEase: 'linear'
  })


  $('.types-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    appendDots: '.types-attributes__dots',
    dotsClass: '.types-attributes__dots',
    arrows: true,
    appendArrows: '.types-attributes__arrows',
    prevArrow: '.slick-prev-types',
    nextArrow: '.slick-next-types',
  });



  let slide = document.querySelectorAll('.types-attributes__dots li');
  slide.forEach(element => {
    element.innerHTML = "";
    element.classList.add('dots');
  });
