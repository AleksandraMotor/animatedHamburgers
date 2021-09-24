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
icon6.addEventListener('click', function () {
    icon6.classList.toggle('active6');
});

const icon8 = document.querySelector('.burger8');
const meat = document.querySelector('.meat');
icon8.addEventListener('click', function () {
    meat.textContent === 'menu' ? meat.textContent = 'close' : meat.textContent = 'menu';
});
// div.style.transform = "rotate(" + rotate + "deg)";