const range = 100; // 원하는 값으로 설정

const cards = document.querySelector(".cards");
const images = document.querySelectorAll(".card__img");
const backgrounds = document.querySelectorAll(".card__bg");

const calcValue = (a, b) => (a/b*range-range/2).toFixed(1);

let timeout;
document.addEventListener('mousemove', ({x,y}) => {
    if (timeout) {
        window.cancelAnimationFrame(timeout);
    }

    timeout = window.requestAnimationFrame(() => {
        const xValue = calcValue(x, window.innerWidth);
        const yValue = calcValue(y, window.innerHeight);

        cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        [].forEach.call(images, (images) => {
            images.style.transform = `rotateX(${-xValue}deg) rotateY(${yValue}deg)`;
        });
        [].forEach.call(backgrounds, (backgrounds) => {
            backgrounds.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
        });

    });
}, false);
