const hamburger = document.querySelector(".hamburger");
const lineOne = hamburger.querySelector(".line-one");
const lineTwo = hamburger.querySelector(".line-two");
const lineThree = hamburger.querySelector(".line-three");
const tlm = new TimelineMax({});
const lines = [lineOne, lineTwo, lineThree];
const toggleMenu = new TimelineMax({ paused: true, reversed: true });

toggleMenu
    .to(lineTwo, 0.125, { scaleX: 0 })
    .to(lineOne, 0.5, { y: 8 }, "slide")
    .to(lineThree, 0.5, { y: -8 }, "slide")
    .to(hamburger, 0.5, { rotation: 360, ease: Power4.easeInOut })
    .to(
        lineOne,
        0.25,
        {
            rotation: 45,
            transformOrigin: "50% 50%",
            ease: Power2.easeOut,
        },
        "cross" // this label in delay will trigger all corresponding labels at same time, optional "cross+=1"
    )
    .to(
        lineThree,
        0.25,
        {
            rotation: -45,
            transformOrigin: "50% 50%",
            ease: Power2.easeOut,
        },
        "cross"
    );

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("js-x");
    toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
});

hamburger.addEventListener("mouseenter", () => {
    if (hamburger.classList.contains("js-x")) {
        return;
    }
    tlm.staggerTo(
        lines,
        0.5,
        {
            scaleX: 1.5,
            repeat: 1,
            yoyo: true,
            ease: Power2.easeOut,
            svgOrigin: "50% 50%",
        },
        0.125
    );
});

// This is using delay
// toggleMenu
//     .to(lineTwo, 0.125, { scaleX: 0 }, 0) // last 0 is delay from start of timeline, if put in quotations then that delay is based off previous step in timeline "+=.5"
//     .to(
//         lineOne,
//         0.125,
//         { y: 8, rotation: 45, transformOrigin: "50% 50%" },
//         "+=.125"
//     )
//     .to(
//         lineThree,
//         0.125,
//         {
//             y: -8,
//             rotation: -45,
//             transformOrigin: "50% 50%",
//         },
//         0.125
//     );

// hamburger.addEventListener("mouseenter", () => {
//     tlm.to(lineOne, 0.25, { scaleX: 1.5 })
//         .to(lineOne, 0.25, { scaleX: 1 })
//         .to(lineTwo, 0.25, { scaleX: 1.5 })
//         .to(lineTwo, 0.25, { scaleX: 1 });
// });

// TweenMax.to(hamburger, 2, { x: 100 });

// TweenMax.from(hamburger, 2, {
//     x: 800,
//     y: 700,
//     scale: 3,
// });
