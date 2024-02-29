// Свайпер
var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}

window.addEventListener('resize', setIframeHeight);

function setIframeHeight() {
    var iframes = document.querySelectorAll('.about iframe');
    for (var i = 0; i < iframes.length; i++) {
        var iframe = iframes[i];
        var width = iframe.offsetWidth;
        var height = width * 0.5625;
        iframe.style.height = height + 'px';
    }
}

setIframeHeight();