window.addEventListener('DOMContentLoaded', () => {
    const wrapperFrame = document.querySelectorAll('.planning-2__img, .planning-3__img, .planning-4__img, .planning-5__img, .planning-6__img');
        
    wrapperFrame.forEach(el => {
        el.addEventListener('click', () => {
            const greenRound = el.querySelector('.green-round'),
                preview = el.querySelector('img'),
                frame = el.querySelector('.frame-class');

            greenRound.style.display = 'none';
            preview.style.display = 'none';
            frame.style.pointerEvents = 'auto';
        }); 
        // el.mouseleave = function(event) {
        //     const greenRoundDisplayBlock = el.querySelector('.green-round')
        //     greenRoundDisplayBlock.style.background = 'pink';
        // };
    });
});