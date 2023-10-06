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
