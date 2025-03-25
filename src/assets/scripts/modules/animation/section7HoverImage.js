import gsap from "gsap/all";
import { TweenMax } from "gsap/gsap-core";
export default async function section7HoverImage() {
    if (window.matchMedia('(max-width: 575px)').matches) return;
    const url = window.location.href.match(/verstka|localhost/) ?
        './static/screen1.json' :
        '/wp-admin/admin-ajax.php';
    const data = new FormData();
    data.append('action', 'getmenuimage');
    const queryData = { method: window.location.href.match(/verstka|localhost/) ? 'GET' : 'POST' };
    if (!window.location.href.match(/verstka|localhost/)) {
        queryData.body = data;
    }

    const request = await fetch(url, queryData);
    // let array = 
    // return  ;

    const images = await request.json();

    images.push({
        url: '/wp-content/themes/forest-home/assets/images/home/screen7/6.jpg'
    });
    const isProd = window.location.href.match(/localhost|verstka/) ? false : true;
    // const isProd = true;
    const section = document.querySelector('.section-7');
    if (section === null) return;
    const canvas = getSvgForFilter(images);
    document.body.insertAdjacentHTML('beforeend', canvas);
    const svg = document.querySelector('.distort');
    const svgYCorrectionValue = svg.getBoundingClientRect().height / 2;
    const svgXCorrectionValue = 30;
    const elements = document.querySelectorAll('.section-7__item a');
    section.addEventListener('mouseleave', () => {
        gsap.set(svg ,{ display: 'none' })
    })
    section.addEventListener('mouseenter', () => {
        gsap.set(svg ,{ display: 'initial' })
    })
    section.addEventListener('mousemove',function(evt){
        gsap.set(svg, {
            duration: 1 / 60,
            x: evt.clientX + svgXCorrectionValue,
            y: evt.clientY - svgYCorrectionValue
        })
    });
    elements.forEach((el, index) => {
        const imageToEdit = document.querySelectorAll('.distort image')[index];
        let isAnim = false;
        const lettersAmplitude = 40;
        el.innerHTML = el.textContent.split('').map(el => `<span style="display: inline-block;">${el.replace(' ', '&nbsp;')}</span>`).join('');
        const letters = el.querySelectorAll('span');
        el.addEventListener('mouseenter', () => {
            if (isAnim === true) return;
            gsap.to(imageToEdit, { opacity: 1 });
            gsap.to(el, { zIndex: 3 });
            gsap.timeline()
            .add(() => isAnim = true)
            .staggerTo( letters, 0.2, {
                ease: 'sine.easeInOut',
                y: -50,
                startAt: { opacity: 1, y: 0 },
                opacity: 0,
                yoyo: true,
                yoyoEase: 'back.easeOut',
                repeat: 1,
                stagger: {
                    grid: [1, letters.length - 1],
                    from: 'center',
                    amount: 0.12
                }
            })
            .add(() => isAnim = false)
            .set(letters, { opacity: 1, x: 0, y: 0 }, '<');
        })
        el.addEventListener('mouseleave', () => {
            gsap.to(imageToEdit, { opacity: 0 })
            gsap.to(el, { zIndex: 0 })
        })
    })
}

function getSvgForFilter(images){
    return `
        <svg xmlns="http://www.w3.org/2000/svg" class="distort" width="300" height="320" viewBox="0 0 300 320" style="transform: translateX(339.5px) translateY(103.2px);">
            <filter id="distortionFilter">
                <feTurbulence type="turbulence" baseFrequency="0.01 0.01" numOctaves="0" seed="0" stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="noise"></feTurbulence>
                <feDisplacementMap in="SourceGraphic" in2="noise" scale="5.13585e-13" xChannelSelector="R" yChannelSelector="B" x="0%" y="0%" width="100%" height="100%" filterUnits="userSpaceOnUse"></feDisplacementMap>
            </filter>
            <g filter="url(#distortionFilter)">
                ${(function(){
                    const acc = [];
                    images.forEach(el => {
                        acc.push(`<image y="50" class="distort__img" xlink:href="${el.url}" width="300" height="220" style="opacity: 0;"></image>`)
                    });
                    return acc.join('');
                })()}
            </g>
        </svg>
    `;
}