  $('.local-slider__block').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    appendArrows: '.slick',
    prevArrow: '.slick-prev-local',
    nextArrow: '.slick-next-local',
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
          breakpoint: 480,
            settings: {
                slidesToShow: 1,
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
    arrows: true,
    appendArrows: '.types-attributes__arrows',
    prevArrow: '.slick-prev-types',
    nextArrow: '.slick-next-types',
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.decision-slider').slick({
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 800,
    arrows: true,
    appendArrows: '.decision-attributes__arrows',
    prevArrow: '.slick-prev-decision',
    nextArrow: '.slick-next-decision',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


 
