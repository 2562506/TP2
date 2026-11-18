/* Importation du CSS et des bibliothèques nécessaires */
import './style.css'
import { gsap } from "gsap";

import Swiper from 'swiper';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


/* Création d'une suite d'animations pour la première section */
const animationHero = gsap.timeline();

/* Fait apparaître le slogan */
animationHero.from("#slogan", {
    x: -60,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
});

/* Fait apparaître la description */
animationHero.from("#zoneHero .description", {
    x: -40,
    opacity: 0,
    duration: 1.1,
    ease: "power2.out"
}, "-=0.9");

/* Fait apparaître les boutons */
animationHero.from("#btnHero" , {
    y: 30,
    opacity: 0,
    duration: 1.2,
    ease: "power2.out"
}, "-=0.9");

/* Fait apparaître les informations de la potion */
animationHero.from("#infos", {
    x: 80,
    opacity: 0,
    duration: 1.3,
    ease: "power2.out"
}, "-=0.9");

/* Fait entrer l'image de la potion avec une rotation */
animationHero.from("#imgPotion", {
    x: 400,
    opacity: 0,
    duration: 1.4,
    rotate: 60,
    ease: "power2.out"
}, "-=0.9");


/* Création du carrousel pour présenter les potions populaires */
const carousel = new Swiper('#carrousel', {

    /* Active l'effet de profondeur et les points de navigation */
    modules: [EffectCoverflow, Pagination],

    /* Permet de déplacer les cartes et de faire défiler le carrousel en boucle */
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,

    /* Règle la rotation, la profondeur et l'apparence des cartes */
    coverflowEffect: {
        rotate: 25,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },

    /* Ajoute des points cliquables pour faciliter (enfin je l'espère) la naviguation entre les potions */
    pagination: {
        el: '#swiper-pagination',
        clickable: true
    },
});
