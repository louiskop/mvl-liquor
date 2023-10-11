// define observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // disable animations on mobile
        if (screen.width < 700) {
            return;
        }

        if (entry.isIntersecting) {
            // add animation class when in view
            if (entry.target.classList.contains("left-enter")) {
                entry.target.classList.add("left-enter-animation");
            } else if (entry.target.classList.contains("right-enter")) {
                entry.target.classList.add("right-enter-animation");
            }
        } else {
            // reset animations when out of view
            entry.target.classList.remove("left-enter-animation");
            entry.target.classList.remove("right-enter-animation");
        }
    });
});

// track elements
document.querySelectorAll(".left-enter").forEach((el) => {
    observer.observe(el);
});
document.querySelectorAll(".right-enter").forEach((el) => {
    observer.observe(el);
});

// === convert rems to viewport units ===
var viewHeight = window.innerHeight;
var viewWidth = window.innerWidth;

// Assume default font-size is 16px
console.log(
    `text-xl: ${((1.25 * 16) / viewHeight) * 100}vh, lineHeight: ${
        ((1.75 * 16) / viewHeight) * 100
    } vh`
);
console.log(
    `text-lg: ${((1.125 * 16) / viewHeight) * 100} vh, lineHeight: ${
        ((1.75 * 16) / viewHeight) * 100
    }vh`
);
console.log(`text-7xl: ${((4.5 * 16) / viewHeight) * 100}vh , lineHeight:1`);

console.log(
    `[-4] text-base: ${(16 / viewHeight) * 100}vh , lineHeight:${
        ((1.5 * 16) / viewHeight) * 100
    }`
);

console.log(
    `text-2xl: ${((16 * 1.5) / viewHeight) * 100}vh , lineHeight: ${
        ((16 * 2) / viewHeight) * 100
    }vh`
);

console.log(
    `[pt-12] text-5xl: ${((16 * 3) / viewHeight) * 100}vh, lineheight:1`
);
console.log(`h-128: ${((16 * 32) / viewHeight) * 100}vh`);

console.log(
    `text-sm: ${((16 * 0.875) / viewHeight) * 100}vh lineHeight:${
        ((16 * 1.25) / viewHeight) * 100
    }`
);

console.log(`[double for px-24]px-12: ${(16 * 3) / viewWidth}vw - nb vw`);
