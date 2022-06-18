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
// var parallaxSection = document.getElementsByClassName("parallax-section");
// let timeline = new TimelineMax();

// timeline
//     .to(".kubik", 6, { y: -120 })
//     .to(".podest", 6, { y: -90 }, "-=4")
//     .fromTo(".bg1", { y: -50 }, { y: 0, duration: 6 }, "-=6")


// let scene = new ScrollMagic.Scene({
//         triggerElement: section,
//         duration: "350%",
//         triggerHook: 0.5,
//     })
//     .addIndicators({ name: "ParaScroll", colorEnd: "#000000" })
//     .setTween(timeline)
//     .addTo(controller);

gsap.utils.toArray(".sellPoint").forEach(section => {
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: "center center",
            end: () => "+=" + section.offsetWidth,
            scrub: true,
            pin: true,
            anticipatePin: 1
        },
        defaults: { ease: "none" }
    });
    tl
        .to(".podest", 4, { y: -50 })
        .to(".kubik", 4, { y: -75 }, "-=4")
        .to(".bg1", 4, { y: 5 }, "-=4")
        .fromTo(section.querySelector(".text1"), { xPercent: 70, y: 900, opacity: 0 }, { xPercent: 70, y: 325, opacity: 1, duration: 4 }, 0)
        .fromTo(section.querySelector(".text2"), { xPercent: 70, y: 900, opacity: 0 }, { xPercent: 70, y: 385, opacity: 1, duration: 4 })
        .fromTo(section.querySelector(".callToAction"), { xPercent: 408, y: 0, opacity: 0 }, { xPercent: 408, y: -598, opacity: 1, duration: 4 })

});