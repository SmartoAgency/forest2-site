export const eases = {
  ex: 'expo.inOut',
  exI: 'expo.in',
  exO: 'expo.out',
  p4: 'power4.inOut',
  p4I: 'power4.in',
  p4O: 'power4.out',
  p2: 'power2.inOut',
  p2I: 'power2.in',
  p2O: 'power2.out',
  circ: 'circ.inOut',
  circO: 'circ.out',
  circI: 'circ.in',
};

export const langDetect = () => {
  if (window.location.pathname.match(/\/ru\//)) {
    return 'ru';
  } if (window.location.pathname.match(/\/en\//)) {
    return 'en';
  }
  return 'uk';
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}

export const throttle = (func, ms) => {

  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}