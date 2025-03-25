export default function socialIconsParalax(selector, scroller) {
    let scrollerOffset = 0;
    if (scroller) {
        scroller.on('scroll', (e) => {
            scrollerOffset = e.scroll.y;
        })
    }
    const $links = document.querySelectorAll(selector);
    $links.forEach(link => {
        const {width, height} =  link.getBoundingClientRect();
        link.addEventListener('mousemove',function(evt){
            const linkPosY = link.getBoundingClientRect().top;
            const linkPosX = link.getBoundingClientRect().left;
            const fromCenterOfEl = ((linkPosX - evt.clientX) + (width / 2)) * 0.25;
            const fromCenterOfElY =((linkPosY - evt.clientY) + (height / 2)) * 0.25;

            console.log(fromCenterOfEl, fromCenterOfElY);
            gsap.to(link.querySelector('svg'), { y: fromCenterOfElY, x: fromCenterOfEl, duration: 1/25 })
        });
        link.addEventListener('mouseleave',function(evt){
            gsap.to(link.querySelector('svg'), {
                x: 0, y: 0
            })
        });
    })
}