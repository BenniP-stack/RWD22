const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text = intro.querySelector("h1");
const smallTxt = intro.querySelector("p");
const introImg = intro.querySelector("img");
const scrollInsentive = intro.querySelector("div");
const logo = document.getElementsByClassName(".logo")
    // const vid2Div = document.querySelector(".loop1");
    // const vid2 = vid2Div.querySelector("video");


//SCROLL
const controller = new ScrollMagic.Controller();

//---
let accelAmount = 0.1;
let scrollpos = 0;
let delay = 0.2;

//Scenes
let heroVideo = new ScrollMagic.Scene({
        duration: 2000,
        triggerElement: intro,
        triggerHook: 0
    })
    //.addIndicators({ name: 'VideoScroll', colorEnd: '#000000' })
    .setPin(intro)
    .addTo(controller);

//Vid Animation
heroVideo.on('update', e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
    delay += (scrollpos - delay) * accelAmount;
    video.currentTime = delay;
}, 25); //Framerate "Fix"

//------
//TODO fix the 2nd vid bro, alt: do a lil parallax ting w the render and ScrollTrigger (Airpods)

//Text animation
const textAnim = gsap.fromTo(text, 2, { opacity: 1 }, { opacity: 0 });
const textAnim2 = gsap.fromTo(smallTxt, 2, { opacity: 1 }, { opacity: 0 });
const imgAnim = gsap.fromTo(introImg, 2, { opacity: 1 }, { opacity: 0 });
const scrollInsAnim = gsap.fromTo(scrollInsentive, 2, { opacity: 1 }, { opacity: 0 });

let heroText = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnim)
    .addTo(controller);

let smallTxtScene = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(textAnim2)
    .addTo(controller);

let imgScene = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(imgAnim)
    .addTo(controller);

let scrollInsScene = new ScrollMagic.Scene({
        duration: 1000,
        triggerElement: intro,
        triggerHook: 0
    })
    .setTween(scrollInsAnim)
    .addTo(controller);

// scroll indicator
var animation = bodymovin.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./media/data.json"
})

//TODO ScrollTrigger statt ScrollMagic dafür benutzen? idk
//TODO Anpassung auf mobile endgeräte

//parallax timeline animation
const parallaxSection = document.getElementsByClassName("parallax-section");
let timeline = new TimelineMax();

timeline
    .to(".kubik", 10, { y: -50 })
    .fromto(".podest", { y: -50 }, { y: 150, duration: 10 }, "-=10")
    .fromTo(".bg1", { y: -50 }, { y: 0, duration: 10 }, "-=10")


let scene = new ScrollMagic.Scene({
        triggerElement: parallaxSection,
        duration: "250%",
        triggerHook: 0,
    })
    .addIndicators({ name: "ParaScroll", colorEnd: "#000000" })
    .setTween(timeline)
    .setPin(parallaxSection)
    .addTo(controller);