'use strict';
window.addEventListener('load', () => {

    AOS.init();
    // Nav toggle
    const burgerEl = document.getElementById('burger');
    const navEl = document.getElementById('nav');

    burgerEl.addEventListener('click', (evt) => {
        evt.preventDefault();
        burgerEl.classList.toggle('active');
        navEl.classList.toggle('show')
    });

    // Fixed header
    const headerEl = document.querySelector('#header');
    const introEl = document.querySelector('#intro');
    const aboutEl = document.querySelector('.about');
    let introH = introEl.clientHeight;
    let scrollPos = window.scrollY;

    checkScroll(scrollPos, introH);
    window.addEventListener('scroll', changeScrollPos);
    window.addEventListener('resize', changeScrollPos);

    function changeScrollPos() {
        introH = introEl.clientHeight;
        scrollPos = window.scrollY;

        checkScroll(scrollPos, introH);
    }

    function checkScroll(scrollPos, introH) {
        if (scrollPos > introH) {
            headerEl.classList.add('fixed');
            aboutEl.setAttribute('style', 'margin-top: 12rem;');
            return;
        }
        headerEl.classList.remove('fixed');
        aboutEl.removeAttribute('style');
    }
});