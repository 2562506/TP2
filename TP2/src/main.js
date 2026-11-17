import './style.css'
import { gsap } from "gsap";


const animationHero = gsap.timeline();

animationHero.from("#slogan", {
    x: -60,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out"
});

animationHero.from("#zoneHero .description", {
    x: -40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
}, "-=0.4");

animationHero.from("#btnHero button", {
    y: 30,
    duration: 0.5,
    stagger: 0.15,
    ease: "power2.out"
}, "-=0.3");

animationHero.from("#produitVedette", {
    x: 80,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
}, "-=0.8");
