// ${document }.ready(function () {
//     $('.slider').slick({
//         arrows: false,
//         dots: true,
//         appendDots: '.slider-dots',
//         dotsClass: 'dots'
//     });

// });

let hamberger = document.querySelector('.hamberger');
let close = document.querySelector('.close');
let mobile = document.querySelector('.mobile-nav');

let hhome = document.getElementById('hhome');
let habout = document.getElementById('habout');
let hservice = document.getElementById('hservice');
let hwork = document.getElementById('hwork');
let hblog = document.getElementById('hblog');

const closenav = () =>{
    mobile.classList.remove('open');
};
const opennav = () =>{
    mobile.classList.add('open');
};


hamberger.addEventListener('click', opennav);
close.addEventListener('click', closenav);

hhome.addEventListener('click',closenav);
habout.addEventListener('click',closenav);
hservice.addEventListener('click',closenav);
hwork.addEventListener('click',closenav);
hblog.addEventListener('click',closenav);
