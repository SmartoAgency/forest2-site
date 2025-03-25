window.addEventListener('DOMContentLoaded', () => {
  const year = function() {
    const date = new Date();
    const yyyy = date.getFullYear();
    return yyyy;
  };
  
  const footer = document.querySelector('.year');
    footer.innerHTML += '&copy; ' + year();

    const placeHolder = document.querySelector('.footer-contacts__left .place-holder'),
      input = document.querySelector('.footer-contacts__left .input-tel');
  
    placeHolder.addEventListener('click', () => {
    placeHolder.style.display = 'none';
    input.focus();
    });


});
