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
    const iframes = document.querySelectorAll('.about iframe');
    for (let i = 0; i < iframes.length; i++) {
        const iframe = iframes[i];
        const width = iframe.offsetWidth;
        const height = width * 0.5625;
        iframe.style.height = height + 'px';
    }
}

setIframeHeight();