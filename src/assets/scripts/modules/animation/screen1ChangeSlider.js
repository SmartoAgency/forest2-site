import {ScrollTrigger} from 'gsap/ScrollTrigger';
async function getImages() {
    const url = window.location.href.match(/verstka|localhost/) ?
        './static/screen1.json' :
        '/wp-admin/admin-ajax.php';

    const data = new FormData();
    data.append('action', 'getmainslider');

    const request = await fetch(url, { method: 'POST', body: data });
    let array = await request.json();
    return  array;
}
export default async function screen1ChangeSlider() {
    const isMobile = window.matchMedia('(max-width: 575px)').matches;
    let images = await getImages();
    images = isMobile ? images.mobile : images.desktop;
    // console.log(images);
    const section1 = document.querySelector('.section-1');
    if (section1 === null) return;
    const sec1Canvases = {
        prev: document.createElement('img'),
        next: document.createElement('img'),
        active: undefined,
        innactive: undefined,
    };
    section1.style.background = 'none';
    sec1Canvases.prev.setAttribute('data-screen-canvas', '');
    sec1Canvases.next.setAttribute('data-screen-canvas', '');
    sec1Canvases.active = sec1Canvases.prev;
    sec1Canvases.innactive = sec1Canvases.next;
    sec1Canvases.prev.src = images[1];
    sec1Canvases.next.src = images[0];
    section1.append(sec1Canvases.prev);
    section1.append(sec1Canvases.next);
    const frameDurationScreen1 = 7 ;
    function screen1Transition(index){
        const elToAnim = sec1Canvases.active;
        const innactiveEl = sec1Canvases.innactive;
        window.screen1Tl = gsap.timeline()
            .add(() => {
                elToAnim.onload = () => {
                    gsap.timeline()
                        .fromTo(elToAnim, 
                                { autoAlpha: 0 },
                            {scale: 1, autoAlpha: 1, duration: 1.5 }
                        )
                        .fromTo(innactiveEl, 
                            { autoAlpha: 1 },
                            { autoAlpha: 0, duration: 1.5 }, 
                            '<')
                        .fromTo(elToAnim, { scale: 1 }, { scale: 1.1, duration: frameDurationScreen1 },'<')
                        .fromTo(elToAnim, { scale: 1.1 }, { scale: 1, duration: frameDurationScreen1 })
                        .add(() => {
                            const nextIndex = index === images.length - 1 ? 0 : index+1;
                            screen1Transition(nextIndex);
                            sec1Canvases.active = sec1Canvases.active === sec1Canvases.next ? sec1Canvases.prev : sec1Canvases.next;
                            sec1Canvases.innactive = sec1Canvases.active === sec1Canvases.next ? sec1Canvases.prev : sec1Canvases.next;
                            // section1.classList.remove('switching')
                        })
                }
                elToAnim.src = images[index];
            })
            
    }
    screen1Transition(0);
    ScrollTrigger.create({
        trigger: '.section-1',
        onToggle: ({isActive}) => {
            // console.log(window.screen1Tl);
            (isActive) ? 
            window.screen1Tl !== undefined && window.screen1Tl.play() :
            window.screen1Tl !== undefined && window.screen1Tl.pause();
        }
    })
}