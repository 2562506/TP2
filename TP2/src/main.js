import './style.css'
import { gsap } from "gsap";

import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


const animationHero = gsap.timeline();

animationHero.from("#slogan", {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

animationHero.from("#zoneHero .description", {
    x: -40,
    opacity: 0,
    duration: 1.1,
    ease: "power2.out"
}, "-=0.95");

animationHero.from("#btnHero" , {
    y: 30,
    opacity: 0,
    duration: 1.2,
    stagger: 0.5,
    ease: "power2.out"
}, "-=0.95");

animationHero.from("#infos", {
    x: 80,
    opacity: 0,
    duration: 1.3,
    ease: "power2.out"
}, "-=0.95");

animationHero.from("#imgPotion", {
    x: 400,
    opacity: 0,
    duration: 1.4,
    rotate: 45,
    ease: "power2.out"
}, "-=0.95");



const carousel = new Swiper('#carrousel', {
    modules: [EffectCoverflow, Pagination],

    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    pagination: {
        el: '#swiper-pagination',
        clickable: true
    },
});