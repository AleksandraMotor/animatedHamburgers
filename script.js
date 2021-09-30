const icon = document.querySelector('.burger1');
icon.addEventListener('click', function () {
    icon.classList.toggle('active'); // albo this.classList.toggle('active');
});

const icon2 = document.querySelector('.burger2');
icon2.addEventListener('click', function () {
    icon2.classList.toggle('active2');
});

const icon3 = document.querySelector('.burger3');
const arrowDown = document.querySelector('.fa-angle-down');
const arrowUp = document.querySelector('.fa-angle-up');
icon3.addEventListener('click', function () {
    arrowDown.classList.toggle('active3');
    arrowUp.classList.toggle('opacity3');
});

const icon4 = document.querySelector('.burger4');
icon4.addEventListener('click', function () {
    icon4.classList.toggle('active4'); 
});

const icon6 = document.querySelector('.burger6');
const bars6 = document.querySelector('.bars6');
const times6 = document.querySelector('.times6');
icon6.addEventListener('click', function () {
    icon6.classList.toggle('active6');
    bars6.classList.toggle('opacity6');
    times6.classList.toggle('opacity6');
});

const icon8 = document.querySelector('.burger8');
const meat = document.querySelector('.meat');
icon8.addEventListener('click', function () {
    meat.textContent === 'menu' ? meat.textContent = 'close' : meat.textContent = 'menu';
});

const icon9 = document.querySelector('.burger9');
icon9.addEventListener('click', function () {
    icon9.classList.toggle('active9'); 
});

const icon10 = document.querySelector('.burger10');
const text10 = document.querySelector('.text10');
const bars10 = document.querySelector('.bars10');
const times10 = document.querySelector('.times10');
icon10.addEventListener('click', function () {
    icon10.classList.toggle('active10');
    text10.classList.toggle('active10');
    bars10.classList.toggle('opacity10');
    times10.classList.toggle('opacity10');
});
// div.style.transform = "rotate(" + rotate + "deg)";