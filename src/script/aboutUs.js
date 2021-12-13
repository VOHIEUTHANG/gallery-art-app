// fade in numbers
// $(document).ready(function() {
//     $(".why_bg-dark").mouseenter(function() {
//         $(".reason").slideUp(1000);
//     })
// })

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

//slider profile
$(document).ready(function () {
    // const cards = $('.our-mems_cards');
    // const dotsctl = $(".our-mems_dot");
    var slideIndex = 0;
    let timerID;
    sliders();
    // cards.mouseover(function () {
    //     timerID && clearTimeout(timerID);
    // })
    // cards.mouseleave(function () {
    //     timerID = setInterval(() => {
    //         sliders();
    //     }, 4000);
    // })
    // dotsctl.click(function () {
    //     timerID && clearTimeout(timerID);
    //     sliders();
    //     timerID = setInterval(() => {
    //         sliders();
    //     }, 4000);
    // })
    function sliders() {
        var i;
        var slides = document.getElementsByClassName("our-mems_cards");
        var dots = document.getElementsByClassName("our-mems_dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            // dots[i].className = dots[i].className.replace(" our-mems_dotted", "");
            dots[i].classList.contains('our-mems_dotted') && dots[i].classList.remove('our-mems_dotted');
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].classList.add('our-mems_dotted');
    }
    timerID = setInterval(() => {
        sliders();
    }, 4000);
})
