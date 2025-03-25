const placeHolderContact = document.querySelector('.contact__left .place-holder'),
  inputContact = document.querySelector('.contact__left .input-tel');

placeHolderContact.addEventListener('click', () => {
  placeHolderContact.style.display = 'none';
  inputContact.focus();
});

/* eslint-disable no-undef */
// Google map start
function func() {
  const script = document.createElement('script');
  let key = '';
  if (window.location.href.match(/localhost/)) key = '';
  // const key = '';
  script.src = `https://maps.googleapis.com/maps/api/js?key=${key}&callback=initMap`;
  document.getElementsByTagName('head')[0].appendChild(script);
}
// setTimeout(func, 1000);
const maps = document.querySelectorAll('.map');
const options = {
  rootMargin: '0px',
  threshold: 0.1,
};

maps.forEach(image => {
  const callback = (entries, observer) => {
    /* Content excerpted, show below */
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const lazyImage = entry.target;
        lazyImage.src = lazyImage.dataset.src;
        observer.unobserve(image);
        func();
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  const target = image;
  observer.observe(target);
});

// eslint-disable-next-line no-unused-vars
function initMap() {
  const gmarkers1 = [];
  const center = {
    lat: 48.465315387607184,
    lng: 35.057751142925454,
  };
  /** Массив, куда записываются выбраные категории */
  const choosedCategories = new Set();
  choosedCategories.add('main');
  /** Елементы, при клике на который будет происходить фильтрация */
  const filterItems = document.querySelectorAll('[data-marker]');
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center,
    scrollwheel: false,
    navigationControl: false,
    mapTypeControl: false,
    scaleControl: false,
    draggable: true,
    language: 'en',
    styles: [
      {
        featureType: 'administrative.province',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.province',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
          {
            color: '#7fe7e7',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'geometry.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.text.stroke',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.locality',
        elementType: 'labels.icon',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.neighborhood',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'administrative.land_parcel',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'landscape',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.government',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'poi.park',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'simplified',
          },
          {
            color: '#8f8f8f',
          },
        ],
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'all',
        stylers: [
          {
            visibility: 'simplified',
          },
        ],
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'labels.text',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'poi.place_of_worship',
        elementType: 'labels.icon',
        stylers: [
          {
            color: '#c1c1c1',
          },
        ],
      },
      {
        featureType: 'road.highway.controlled_access',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit.line',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
          {
            color: '#aeaeae',
          },
        ],
      },
      {
        featureType: 'transit.line',
        elementType: 'labels.text',
        stylers: [
          {
            weight: '0.50',
          },
          {
            color: '#646464',
          },
        ],
      },
      {
        featureType: 'transit.station.bus',
        elementType: 'all',
        stylers: [
          {
            visibility: 'off',
          },
        ],
      },
      {
        featureType: 'transit.station.bus',
        elementType: 'labels.icon',
        stylers: [
          {
            hue: '#ff0000',
          },
        ],
      },
      {
        featureType: 'transit.station.rail',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'transit.station.rail',
        elementType: 'geometry',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'transit.station.rail',
        elementType: 'geometry.fill',
        stylers: [
          {
            weight: '1.00',
          },
        ],
      },
      {
        featureType: 'transit.station.rail',
        elementType: 'geometry.stroke',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'all',
        stylers: [
          {
            visibility: 'on',
          },
        ],
      },
      {
        featureType: 'water',
        elementType: 'labels.text',
        stylers: [
          {
            lightness: '0',
          },
          {
            color: '#c25050',
          },
          {
            visibility: 'off',
          },
        ],
      },
    ],
  });
  const filterMarkers = function(category, categoriesArray) {
    gmarkers1.forEach(el => {
      if (categoriesArray.has(el.category) || categoriesArray.size === 1) {
        el.setMap(map);
        el.setAnimation(google.maps.Animation.DROP);
      } else {
        el.setMap(null);
      }
    });
  };
  filterItems.forEach(item => {
    item.addEventListener('click', evt => {
      evt.stopImmediatePropagation();
      item.classList.toggle('active');
      if (item.classList.contains('active')) {
        choosedCategories.add(item.dataset.category);
      } else {
        choosedCategories.delete(item.dataset.category);
      }
      filterMarkers('main', choosedCategories);
    });
  });

  // var baseFolder = '/wp-content/themes/centower/assets/images/markers/';
  const baseFolder = './assets/images/markers/';
  let defaultMarkerSize = new google.maps.Size(131, 48);
  if (document.documentElement.clientWidth < 950) {
    // defaultMarkerSize = new google.maps.Size(40, 53);
  }
  const buildLogoSize = new google.maps.Size(125, 55);
  const markersAdresses = {
    main: `${baseFolder}main.svg`,
    sale: `${baseFolder}sale.svg`,
    cafe: `${baseFolder}marker-cafe.svg`,
    kinder: `${baseFolder}marker-kindergarten.svg`,
    shop: `${baseFolder}marker-shop.svg`,
    sport: `${baseFolder}marker-sport.svg`,
    education: `${baseFolder}marker-education.svg`,
    meal: `${baseFolder}marker-meal.svg`,
    med: `${baseFolder}marker-medicine.svg`,
    bank: `${baseFolder}marker-bank.svg`,
  };
  const markerPopupStyle = `
          style="
          background: #2D2D2D;
          color:#fff;
          padding:5px 10px;
          font-size: 18px;
          line-height: 22px;"
          `;

  /* beautify preserve:start */
  const markersData = [
    {
      content: `<div ${markerPopupStyle}>Apricot private kindergarten</div>`,
      type: 'education',
      icon: { url: markersAdresses.main, scaledSize: defaultMarkerSize },
      position: { lat: 48.465315387607184, lng: 35.057751142925454 },
    },
    {
      content: `<div ${markerPopupStyle}>Середня школа №21</div>`,
      type: 'education',
      icon: { url: markersAdresses.sale, scaledSize: defaultMarkerSize },
      position: { lat: 48.46599832746873, lng: 35.035520993734906 },
    },
  ];
  /* beautify preserve:end */
  const infowindow = new google.maps.InfoWindow({
    content: '',
    maxWidth: 200,
  });
  markersData.forEach(marker => {
    const category = marker.type;
    const mapMarker = new google.maps.Marker({
      map,
      category,
      zIndex: marker.zIndex || 1,
      icon: marker.icon,
      position: new google.maps.LatLng(marker.position.lat, marker.position.lng),
    });

    google.maps.event.addListener(mapMarker, 'click', function() {
      infowindow.setContent(marker.content);
      infowindow.open(map, mapMarker);
      map.panTo(this.getPosition());
    });
    mapMarker.name = marker.type;
    gmarkers1.push(mapMarker);
  });
}

window.addEventListener('load', () => {
  /** Выдвижная панель маркеров на мобильной версии */
  const legend = document.querySelector('[data-mob-accordeon]');
  if (legend === null) return;
  const legendTitle = legend.querySelector('.map__legend-title');
  legendTitle.addEventListener('click', () => {
    legend.classList.toggle('opened');
    // добавить плавность появление блока с маркерами
    // if (legend.classList.contains('opened')) {
    //   gsap.fromTo('.map__legend-markers-wrap', { height: 0 },
    //     { height: '50vh' });
    // } else {
    //   gsap.fromTo('.map__legend-markers-wrap', { height: '50vh' }, { height: 0 });
    // }
  });
  legend.addEventListener('mouseenter', () => {
    if (locoScroll !== undefined) locoScroll.stop();
  });
  legend.addEventListener('mouseleave', () => {
    if (locoScroll !== undefined) locoScroll.start();
  });
});
