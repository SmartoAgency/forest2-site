$(document).ready(() => {
  $('.slider').on('init', function(event, slick) {
    $(this).append(
      '<div class="slider-count"> <span id="current">1</span><svg width="21" height="42" viewBox="0 0 21 42" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 41.5L18 0H21L3 41.5H0Z" fill="white"/></svg><span id="total">' +
        slick.slideCount +
      '</span></div>');

  });
  $('.slider').slick({
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // draggable: true,

    // autoplay: true,
    // variableWidth: true,
    nextArrow:
      '<button type="button" class="slick-next"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 8L1 15" stroke="white" stroke-width="2"/></svg></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 8L10 15" stroke="white" stroke-width="2"/></svg></button>',
    // responsive: [
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 1.2,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  });
  $('.slider').on('afterChange', function(event, slick, currentSlide, nextSlide) {
    // finally let do this after changing slides
    $('.slider-count #current').html(currentSlide + 1);
    
  });
});