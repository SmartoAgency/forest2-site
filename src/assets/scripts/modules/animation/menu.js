import gsap from "gsap/all";

export default async function menuLinksEffect() {
    if (window.matchMedia('(max-width: 575px)').matches) return;
    const url = window.location.href.match(/verstka|localhost/) ?
        './static/menu-images.json' :
        '/wp-admin/admin-ajax.php';
    const data = new FormData();
    data.append('action', 'getmenuimage');

    const request = await fetch(url, { method: 'POST', body: data });
    // let array = 
    // return  ;

    const images = await request.json();

    const menu = document.querySelector('.menu');
    // canvas.src = images[0];
    
    const links = document.querySelectorAll('.menu-main__left-list:nth-child(-n+5) .menu-main__left-link');
    // console.log(links);
    links.forEach((link, index) => {
        const canvas = document.createElement('img');
        canvas.setAttribute('data-menu-canvas', '');
        gsap.set(canvas, {xPercent: 100,});
        menu.append(canvas);
        canvas.src = images[index].url ? images[index].url : images[index];
        link.addEventListener('mouseenter',function(evt){
            gsap.set(link.parentElement, { overflow: 'visible' });
            gsap.to(link, { x: 20 });
            gsap.to(canvas, { duration: 1.65, xPercent: 0, ease: 'power4.out' });
            gsap.to('.menu-main__right', { autoAlpha: 0, ease: 'power4.out' });
            gsap.to(menu.querySelectorAll(`.menu-main__left-list:not(:nth-child(${index+1}))`), { opacity: 0.5 })
        });
        link.addEventListener('mouseleave',function(evt){
            gsap.to(link, { x: 0, onComplete: () => {
                gsap.set(link.parentElement, { overflow: 'hidden' });
            } })
            gsap.to(canvas, { duration: 1.65, xPercent: 100, ease: 'power4.out' });
            gsap.to('.menu-main__right', { autoAlpha: 1, ease: 'power4.out' })
            gsap.to(menu.querySelectorAll(`.menu-main__left-list:not(:nth-child(${index+1}))`), { opacity: 1 })
            
        });
    })
}