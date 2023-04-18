const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slider = document.querySelector('.slider');

let counter = 0;
const size = slider.clientWidth / 3;

prevButton.addEventListener('click', () => {
    if (counter <= 0) return;
    counter--;
    slider.style.transform = `translateX(${-size * counter}px)`;
});

nextButton.addEventListener('click', () => {
    if (counter >= 2) return;
    counter++;
    slider.style.transform = `translateX(${-size * counter}px)`;
});
