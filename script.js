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
        duration: 1800,
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

//TODO Last slide mit info (tl maybe?) call to action button etc.
//TODO Anpassung auf mobile endgeräte

//parallax timeline animation
// let timeline = new TimelineMax();

// timeline.to(".rock", 5, { y: -300 })
//     .to(".girl1", 5, { y: -200 }, "-=5")
//     .fromTo(".bg1", { y: -65 }, { y: 0, duration: 5 }, "-=5")
//     .to(".content", 5, { top: "0%" }, "-=5")
//     .to(".bg1", { height: "100vh" })
//     .to(".girl1", { height: "100vh" })
//     .to(".rock", { height: "100vh" })
//     .fromTo(".content-images", { opacity: 0 }, { opacity: 1, duration: 3 })
//     .fromTo(".text", { opacity: 0 }, { opacity: 1, duration: 3 })


// // let scene = new ScrollMagic.Scene({
// //         triggerElement: "section",
// //         duration: "250%",
// //         triggerHook: 0,
// //     })
// //     // .addIndicators({ name: "ParaScroll", colorEnd: "#000000" })
// //     .setTween(timeline)
// //     .setPin("section")
// //     .addTo(controller);

// scroll indicator
var animation = bodymovin.loadAnimation({
    container: document.getElementById("bm"),
    renderer: "svg",
    loop: true,
    autoplay: true,
    path: "./media/data.json"
})