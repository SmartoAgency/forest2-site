$(document).ready(() => {
  function setProgress(index) {
    const calc = ((index + 1) / $slider.slick('getSlick').slideCount) * 100;

    $progressBar.css('background-size', `${calc}% 100%`).attr('aria-valuenow', calc);

    $progressBarLabel.text(`${calc.toFixed(2)}% completed`);
  }

  const $slider = $('.section-2__right-slider');
  const $progressBar = $('.section-2__right .progress');
  const $progressBarLabel = $('.section-2__right .slider__label');

  $slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    setProgress(nextSlide);
  });

  $('.section-2__right-slider').on('init', (slick, slick1) => {
    if (document.documentElement.clientWidth > 992) {
      slick1.$slideTrack[0].style.cssText += `
      position:relative;
      right: ${slick1.slideWidth - slick1.slideWidth * 1.2}px;
    `;
    }
  });

  $('.section-2__right-slider').on('init', (slick, slick1) => {
    if (document.documentElement.clientWidth < 991) {
      slick1.$slideTrack[0].style.cssText += `
      position:relative;
      right: ${slick1.slideWidth - slick1.slideWidth * 1.2}px;
    `;
    }
  });
  $('.section-2__right-slider').slick({
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    nextArrow:
      '<button type="button" class="slick-next"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L9 8L1 15" stroke="white" stroke-width="2"/></svg></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="11" height="16" viewBox="0 0 11 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 1L2 8L10 15" stroke="white" stroke-width="2"/></svg></button>',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });

  setProgress(0);

  $('.section-5__right-slider').slick({
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:
      '<button type="button" class="slick-next"><svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 2L24 22L2 42" stroke="white" stroke-width="5"/></svg></button>',
    prevArrow:
      '<button type="button" class="slick-prev"><svg width="28" height="44" viewBox="0 0 28 44" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M26 2L4 22L26 42" stroke="white" stroke-width="5"/></svg></button>',
  });
});

//  const placeHolderPopup = document.querySelector('.popup__block .place-holder'),
//    inputPopup = document.querySelector('.popup__block .input-tel');

//  placeHolderPopup.addEventListener('click', () => {
//    placeHolderPopup.style.display = 'none';
//    inputPopup.focus();
//  });

window.addEventListener('DOMContentLoaded', () => {
  const wrapperFrameSlider = document.querySelectorAll(
    '.section-5__right-slider-item, .section-5__right .green-round',
  );

  wrapperFrameSlider.forEach(el => {
    el.addEventListener('click', () => {
      const greenRoundSlider = document.querySelector('.section-5__right .green-round'),
        frameSlider = el.querySelector('.frame-class');

      greenRoundSlider.style.display = 'none';
      frameSlider.style.pointerEvents = 'auto';
    });
  });

  const btnVideo = document.querySelector('.section-6__center-link'),
    video = document.querySelector('.section-6__center video');

  btnVideo.addEventListener('click', function() {
    video.play();
    btnVideo.style.display = 'none';
    video.controls = 'controls';
  });
});
