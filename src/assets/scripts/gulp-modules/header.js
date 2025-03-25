window.addEventListener('DOMContentLoaded', () => {
  const openMenu = document.querySelector('#header-right-button-menu'),
    openMenuMobile = document.querySelector('#header-mobile__menu'),
    menu = document.querySelector('.menu'),
    closeMenu = document.querySelector('#menu-top-right-button-menu'),
    closeMenuMobile = document.querySelector('#menu-top-360__menu');

  openMenu.addEventListener('click', () => {
    menu.classList.add('active');
  });
  openMenuMobile.addEventListener('click', () => {
    menu.classList.add('active');
  });

  closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
  });
  closeMenuMobile.addEventListener('click', () => {
    menu.classList.remove('active');
  });

  function mobPopupHandler() {
    function close(el) {
      // gsap.to(el, { autoAlpha: 0 });
      gsap.fromTo(el, { autoAlpha: 1, xPercent: 0 }, { autoAlpha: 0, xPercent: 100 });
    }
    function open(el) {
      gsap.fromTo(el, { autoAlpha: 0, xPercent: 100 }, { autoAlpha: 1, xPercent: 0 });
    }
    const popup = document.querySelector('[data-mobile-callback-popup]'),
      call = document.querySelectorAll('[data-call-mobile-callback-popup]'),
      closeEl = document.querySelector('[data-mobile-callback-close]');

    closeEl.addEventListener('click', () => close(popup));
    call.forEach(el => el.addEventListener('click', () => open(popup)));
    // call.forEach(el => el.addEventListener('touchstart', () => open(popup)));

    popup.addEventListener('click', evt => {
      if (evt.target.classList.contains('mobile-callback-popup')) {
        close(popup);
      }
    });
  }

  document.querySelector('[data-call-form-popup]').addEventListener('click', () => {
    popup.classList.add('active');
  });
  mobPopupHandler();
});

window.addEventListener('DOMContentLoaded', () => {
  const openPopup = document.querySelector('#header-popup'),
    openPopupMenu = document.querySelector('#menu-top-popup'),
    popup = document.querySelector('#popup'),
    closePopup = document.querySelector('#popup-close');

  openPopup.addEventListener('click', () => {
    popup.classList.add('active');
  });
  openPopupMenu.addEventListener('click', () => {
    popup.classList.add('active');
  });

  closePopup.addEventListener('click', () => {
    popup.classList.remove('active');
  });
});

//Плейсхолдер на телефоне попапа
const placeHolderPopup = document.querySelector('.popup__block .place-holder'),
  inputPopup = document.querySelector('.popup__block .input-tel');
placeHolderPopup.addEventListener('click', () => {
  placeHolderPopup.style.display = 'none';
  inputPopup.focus();
});
