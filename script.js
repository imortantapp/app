const button = document.querySelector('.block');
const container = document.querySelector('.container');
const text = document.querySelector('.text-text');

const CLASS_OPEN = 'open';
const CLASS_BLOCK = 'block';


button.addEventListener('click', onButtonClick);
button.addEventListener('mouseover', onButtonClick);

function onButtonClick() {
        text.classList.add(CLASS_OPEN)
}