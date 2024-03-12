import './index.html';
import './index.scss';
import 'animate.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import burgerMenu from './scripts/burgerMenu';
import accordion from './scripts/accordion';

window.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    burgerMenu('#menu-open__btn', '#menu-close__btn', '#header-nav');
    accordion('.about-list button', '.about-list p');
});
