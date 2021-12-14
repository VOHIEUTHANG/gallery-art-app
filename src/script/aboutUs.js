// countUp
$(document).ready(function () {
    const first = document.querySelector('.rea-1')
    const second = document.querySelector('.rea-2')
    const third = document.querySelector('.rea-3')
    const forth = document.querySelector('.rea-4')

    function countUp(rea, to) {
        let speed = 200
        let from = 0
        let step = to / speed
        const counter = setInterval(function () {
            from += step
            if (from > to) {
                clearInterval(counter)
                rea.innerText = to
            }
            else {
                rea.innerText = Math.ceil(from)
            }
        }, 1)
    }
    $(".why_bg-dark").mouseenter(function () {
        countUp(first, 20)
        countUp(second, 24)
        countUp(third, 12)
        countUp(forth, 4869)
    })
})

// Slider Profiles
$(document).ready(function () {
    var autoIndex = 0;
    var timeOut = setInterval(function () {
        autoSlides();
    }, 4000);
    sliders();
    autoSlides();
    clickSlide();
    hoverToStopSlider();

    function sliders() {
        var slides = document.getElementsByClassName("our-mems_cards");
        var dots = document.getElementsByClassName("our-mems_dot");
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" our-mems_dotted", "");
        }
        if (autoIndex >= slides.length) { autoIndex = 0 }
        slides[autoIndex].style.display = "flex";
        dots[autoIndex].className += " our-mems_dotted";
    }

    function autoSlides() {
        sliders();
        autoIndex++;
        timeOut;
    }

    function clickSlide() {
        $("#dot_1").click(function () {
            autoIndex = 0;
            sliders();
        })
        $("#dot_2").click(function () {
            autoIndex = 1;
            sliders();
        })
    }

    function hoverToStopSlider() {
        $("#slide-1 .our-mems_single-card").mouseenter(function () {
            autoIndex = 0;
            sliders();
            clearInterval(timeOut);
        })
        $("#slide-2 .our-mems_single-card").mouseenter(function () {
            autoIndex = 1;
            sliders();
            clearInterval(timeOut);
        })

        $("#slide-1 .our-mems_single-card").mouseleave(function () {
            sliders();
            autoIndex++;
            timeOut = setInterval(function () {
                autoSlides();
            }, 4000)
        })
        $("#slide-2 .our-mems_single-card").mouseleave(function () {
            sliders();
            autoIndex++;
            timeOut = setInterval(function () {
                autoSlides();
            }, 4000)
        })
    }
})
