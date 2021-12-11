// SECTION 1 - START ========================
$(function () {
    let path = $('.introduce-section').css('background-image')
    path = path.slice(5, path.length - 2);
    const backgroundsSRC = [
        path,
        path.replace('bg1', 'bg2'),
        path.replace('bg1', 'bg3')
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
    // const galleryItem = $(".gallery-item");
    // const galleryList = $(".exhibitions-gallery");
    // const galleryContainer = $('.exhibitions-container');
    // const nextBtn = $(".gallery-ct-next");
    // const prevBtn = $(".gallery-ct-prev");
    // galleryItem.click(function () {
    //     galleryContainer.css('opacity', '0');
    //     $(".gallery-item.active").removeClass("active");
    //     $(this).addClass("active")
    //     const imgActive = $(".gallery-item.active > img");
    //     newURL = `url('${imgActive.attr('src')}')`;
    //     $('.exhibitions-container').css({
    //         'background-image': newURL
    //     })
    //     galleryContainer.css('opacity', '1');
    // })
    // // SLIDE HANDLER
    // const galleryItemAmount = galleryItem.length;
    // const firstItem = galleryItem[0];
    // const lastItem = galleryItem[galleryItem.length - 1];
    // let galleryCount;
    // //Media loaded handle
    // $(window).on('load', function () {
    //     galleryCount = Math.round(galleryList.width() / galleryItem.width())
    //     const { right } = lastItem.getBoundingClientRect();
    //     const { left } = firstItem.getBoundingClientRect();
    // })
    // let translateValue = 0;
    // nextBtn.click(function () {
    //     translateValue -= 100 / galleryCount;
    //     galleryList.css({
    //         transform: `translateX(${translateValue}%)`
    //     })
    //     const { right } = lastItem.getBoundingClientRect();
    //     const { left } = firstItem.getBoundingClientRect();
    //     console.log("left", left);
    //     console.log("right", right);
    // })
    // prevBtn.click(function () {
    //     translateValue += 100 / galleryCount;
    //     galleryList.css({
    //         transform: `translateX(${translateValue}%)`
    //     })
    //     const { right } = lastItem.getBoundingClientRect();
    //     const { left } = firstItem.getBoundingClientRect();
    //     console.log("left", left);
    //     console.log("right", right);
    // })
    $(window).on('load', () => {
        const item = $('.visit-item');
        const artBlogItem = $(".artBlog-item");
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    !entry.target.classList.contains('show') && entry.target.classList.add('show')
                }
            })
        });
        [...item].forEach(item => {
            observer.observe(item)
        });
        [...artBlogItem].forEach(item => {
            observer.observe(item)
        })
    })
})
// SECTION 5 -  START  ========================
$(function () {
    $('.visit-img').click(function () {
        $(this).children('.visit-overlay').css('visibility', 'visible');
        $(this).find('.visit-overlay > img').css('transform', 'scale(1)')
    })
    $('.visit-overlay > img').click(function (e) {
        e.stopPropagation();
    })
    $('.visit-overlay').click(function (e) {
        e.stopPropagation();
        $(this).css('visibility', 'hidden');
        $(this).children('img').css('transform', 'scale(0)');
    })
})
