// fade in numbers
// $(document).ready(function() {
//     $(".why_bg-dark").mouseenter(function() {
//         $(".reason").(1000);
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
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var i;
        var slides = document.getElementsByClassName("our-mems_cards");
        var dots = document.getElementsByClassName("our-mems_dot");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1 }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" our-mems_dotted", "");
        }
        slides[slideIndex - 1].style.display = "flex";
        dots[slideIndex - 1].className += " our-mems_dotted";
        setTimeout(showSlides, 5000);
    }
})