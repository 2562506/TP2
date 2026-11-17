import './style.css'
import { gsap } from "gsap";


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