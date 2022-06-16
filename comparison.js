gsap.utils.toArray(".comparisonSection").forEach(section => {
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
    tl.fromTo(section.querySelector(".afterImage"), { xPercent: 100, x: 0 }, { xPercent: 0 })
        .fromTo(section.querySelector(".afterImage img"), { xPercent: -100, x: 0 }, { xPercent: 0 }, 0);
});