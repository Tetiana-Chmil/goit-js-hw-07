function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777216)
        .toString(16)
        .padStart(6, 0)}`;
}

const changeButton = document.querySelector('.change-color');
const span = document.querySelector('.color');

changeButton.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    span.textContent = randomColor;
});
