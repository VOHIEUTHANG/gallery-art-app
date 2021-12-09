// SECTION 1 - START ========================
$(function () {
    const backgroundsSRC = [
        './../../assets/images/HomePageIMG/Home-section1-bg1.jpg',
        './../../assets/images/HomePageIMG/Home-section1-bg2.jpg',
        './../../assets/images/HomePageIMG/Home-section1-bg3.jpg'
    ];
    let index = 0;
    const dots = $('.intro-dot');
    let intervalID;
    const autoSlideDuration = 5000;
    const slidehandler = () => {
        $('.introduce-section').css({
            'background-image': `url(${backgroundsSRC[index]})`,
            opacity: 1
        })
    };
    dots.click(function () {
        $('.introduce-section').css({
            'opacity': 0
        })
        dots.removeClass('active');
        $(this).addClass('active');
        clearInterval(intervalID);
        switch (this) {
            case dots[0]:
                if (index !== 0) {
                    index = 0;
                    slidehandler();
                }
                break;
            case dots[1]:
                if (index !== 1) {
                    index = 1;
                    slidehandler();
                }
                break;
            case dots[2]:
                if (index !== 2) {
                    index = 2;
                    slidehandler();
                }
                break;
            default:
                throw Error('Invalid Background Handle Section!')
        }
        autoSlide();
    })
    function autoSlide() {
        intervalID = setInterval(() => {
            index < 2 ? index++ : index = 0;
            slidehandler();
            $('.intro-dot.active') && $('.intro-dot.active').removeClass('active');
            $(dots[index]).addClass('active');
        }, autoSlideDuration)
    }
    autoSlide();

})
// SECTION 4 - START ========================
$(function () {
    const galleryItem = $(".gallery-item");
    const galleryContainer = $(".exhibitions-gallery");
    const nextBtn = $(".gallery-ct-next");
    const prevBtn = $(".gallery-ct-prev");
    galleryItem.click(function () {
        $(".gallery-item.active").removeClass("active");
        $(this).addClass("active")
        const imgActive = $(".gallery-item.active > img");
        newURL = `url('${imgActive.attr('src')}')`;
        $('.exhibitions-container').css({
            'background-image': newURL
        })
    })
    // SLIDE HANDLER
    const galleryItemAmount = galleryItem.length;
    const firstItem = galleryItem[0];
    const lastItem = galleryItem[galleryItem.length - 1];
    let galleryCount;
    //Media loaded handle
    $(window).on('load', function () {
        galleryCount = Math.round(galleryContainer.width() / galleryItem.width())
        const { right } = lastItem.getBoundingClientRect();
        const { left } = firstItem.getBoundingClientRect();
    })
    let translateValue = 0;
    nextBtn.click(function () {
        translateValue -= 100 / galleryCount;
        galleryContainer.css({
            transform: `translateX(${translateValue}%)`
        })
        const { right } = lastItem.getBoundingClientRect();
        const { left } = firstItem.getBoundingClientRect();
        console.log("left", left);
        console.log("right", right);
    })
    prevBtn.click(function () {
        translateValue += 100 / galleryCount;
        galleryContainer.css({
            transform: `translateX(${translateValue}%)`
        })
        const { right } = lastItem.getBoundingClientRect();
        const { left } = firstItem.getBoundingClientRect();
        console.log("left", left);
        console.log("right", right);
    })

})
// SECTION 5 -  START  ========================
$(function () {
    $('.visit-img').click(function () {
        $(this).children('.visit-overlay').css('visibility', 'visible');
    })
    $('.visit-overlay > img').click(function (e) {
        e.stopPropagation();
    })
    $('.visit-overlay').click(function (e) {
        e.stopPropagation();
        $(this).css('visibility', 'hidden');
    })
})
