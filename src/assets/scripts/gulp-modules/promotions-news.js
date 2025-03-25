
const newsCards = document.querySelectorAll('.promotions-news__item');
const tabs = document.querySelectorAll('.promotions-news__tab');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        document
            .querySelector('.promotions-news__tab.promotions-news-active')
            .classList.remove('promotions-news-active');
        tab.classList.add('promotions-news-active');
    })
});


function hideEl(selector) {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    gsap.timeline()
        .to(selector, { autoAlpha: 0, stagger: 0.1 })
        .set(selector, { display: 'none' })
}
    
function showEl(selector) {
    const el = typeof selector === 'string' ? document.querySelector(selector) : selector;
    gsap.timeline()
        .set(selector, { display: '' })
        .to(selector, { autoAlpha: 1, stagger: 0.1 })

}