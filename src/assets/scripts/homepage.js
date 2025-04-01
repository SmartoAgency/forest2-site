import { BehaviorSubject } from "rxjs";
import Swiper, { Navigation } from "swiper";
import googleMap from "./modules/map/map";


window.addEventListener('DOMContentLoaded', () => {
    googleMap();
});


const observable = new BehaviorSubject(0); // 0 is the initial value


observable.subscribe((value) => {
    // console.log(value);
    document.querySelectorAll('[data-planning-tab]').forEach((tab) => {
        const tabValue = tab.getAttribute('data-planning-tab');
        tab.classList.toggle('active', tabValue === value);
    });
    document.querySelectorAll('[data-planning-tab-content]').forEach((content) => {
        content.style.display = content.getAttribute('data-planning-tab-content') === value ? 'block' : 'none';
    });
    document.querySelectorAll('[data-planning-tab-slider]').forEach((slider) => {
        if (slider.swiper) return;
        const index = slider.dataset.planningTabSlider;
        // console.log('nO return', slider.swiper);
        
        const swiper = new Swiper(slider, {
            modules: [Navigation],
            navigation: {
                nextEl: document.querySelector(`[data-planning-tab-slider-nav="${index}"] [data-next]`),
                prevEl: document.querySelector(`[data-planning-tab-slider-nav="${index}"] [data-prev]`),
            },
            on: {
                'init': (instance) => {
                    // document.querySelector(`[data-planning-tab-slider-nav="${index}"] [data-all]`).textContent = pad(instance.slides.length);
                },
            }
        });
        swiper.on('beforeResize', (instance) => {
            // document.querySelector(`[data-planning-tab-slider-nav="${index}"] [data-all]`).textContent = pad(instance.slides.length);
        });
        swiper.on('slideChange', (instance) => {
            document.querySelector(`[data-planning-tab-slider-nav="${index}"] [data-current]`).textContent = pad(instance.realIndex + 1);
            // document.querySelector(`[data-planning-tab-slider-nav="${index}"] [data-all]`).textContent = pad(instance.slides.length);
        });
    });
});

function pad(num) {
    return num.toString().padStart(2, '0');
}

observable.next('0');

document.body.addEventListener('click', (evt) => {
    const target = evt.target.closest('[data-planning-tab]');
    if (!target) return;
    const tabValue = target.getAttribute('data-planning-tab');
    observable.next(tabValue);
});


