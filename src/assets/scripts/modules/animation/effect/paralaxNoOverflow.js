export default function paralaxNoOverflow(selector, amplitude = -150) {
    const selectors = document.querySelectorAll(selector);
    selectors.forEach(el => {
        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: true
            }
        })
        .fromTo(el, { y: amplitude }, { y: 0 })
    })
}