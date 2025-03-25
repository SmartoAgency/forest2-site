export default function clipPathEntry(selector) {
    const $el = document.querySelectorAll(selector);
    $el.forEach(el => {
        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                once: true,
            }
        })
        .fromTo(el, 
            {
                clipPath: 'polygon(0% 0%, 0% 0%, 100% 0%, 100% 0%)'
            }, 
            {
                clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)',
                duration: 1.75,
                ease: 'power4.out'
            }
        )
    })
}