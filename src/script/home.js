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
            'background-image': `url(${backgroundsSRC[index]})`
        })
    };
    dots.click(function () {
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
    const section1 = $('.artists-section');
    const section2 = $('.exhibitions-section');
    const section3 = $('.visit-section');
    const section4 = $('.artBlog-section');
    const section5 = $('.contact-section');

    const mainTitle = $(".main-title");
    const galleryItem = $(".gallery-item");
    const galleryList = $(".exhibitions-gallery");
    const galleryContainer = $('.exhibitions-container');
    const gallerySection = $('.exhibitions-section')
    const header = $('.hea_nav');
    // GL VARIABLES ===================
    function main() {
        return {
            hoverHandle() {
                galleryContainer.mouseenter(function () {
                    header.removeClass('show');
                    header.addClass('hide');
                    // window.scroll({
                    //     top: galleryContainer[0].offsetTop,
                    //     behavior: 'smooth'
                    // });
                })
                galleryContainer.mouseleave(function () {
                    header.removeClass('hide');
                    header.addClass('show');
                })
            },
            scrollHandle() {
                galleryContainer.addClass('show');
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            switch (entry.target) {
                                case section1[0]:
                                    mainTitle[0].classList.add("show");
                                    break;
                                case section2[0]:
                                    mainTitle[1].classList.add("show");
                                    break;
                                case section3[0]:
                                    mainTitle[2].classList.add("show");
                                    break;
                                case section4[0]:
                                    mainTitle[3].classList.add("show");
                                    break;
                                case section5[0]:
                                    mainTitle[4].classList.add("show");
                                    break;
                                default:
                                    throw new Error('Invalid title observer')
                            }
                        }
                    })
                }, {
                    threshold: 0.6
                })
                observer.observe(section1[0]);
                observer.observe(section2[0]);
                observer.observe(section3[0]);
                observer.observe(section4[0]);
                observer.observe(section5[0]);
                const galleryObserver = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            window.scroll({
                                top: entry.target.offsetTop,
                                behavior: 'smooth'
                            })
                            header.removeClass('show');
                            header.addClass('hide')
                        }
                    })
                }, {
                    threshold: 0.9
                })
                galleryObserver.observe(galleryContainer[0]);

            },
            handleSlide() {
                $(window).on('load', function () {
                    const slideContainer = $('.exhibitions-gallery-container')
                    let slideItems = $(".gallery-item")
                    const prevbtn = $('.exhibition-controls-prev');
                    const nextbtn = $('.exhibition-controls-next');
                    let index = 1;
                    let intervalID;
                    const intervalDuration = 5000;
                    const firstClone = slideItems[0].cloneNode(true);
                    const lastClone = slideItems[slideItems.length - 1].cloneNode(true);
                    firstClone.id = 'firstClone';
                    lastClone.id = 'lastClone';
                    slideContainer.append(firstClone);
                    slideContainer.prepend(lastClone);
                    const slideWidth = slideItems[0].clientWidth;
                    function slide(isTransition = true) {
                        slideContainer.css({
                            transform: `translateX(-${slideWidth * index}px)`,
                            transition: `${isTransition ? 'all 0.6s ease-out' : 'none'}`
                        })
                    }
                    slide();
                    function autoSlide() {
                        intervalID = setInterval(() => {
                            moveToNextSlide();
                        }, intervalDuration);
                    }
                    autoSlide();
                    const updateSlides = () => { slideItems = $(".gallery-item") }
                    slideContainer[0].addEventListener('transitionend', () => {
                        updateSlides();
                        const lastItem = slideItems.length - 1;
                        if (index >= lastItem || slideItems[index].id === firstClone.id) {
                            index = 1;
                            slideContainer.css('transition', 'none')
                            slide(false);
                        }
                        if (index < 0 || slideItems[index].id === lastClone.id) {
                            index = slideItems.length - 2;
                            slideContainer.css('transition', 'none')
                            slide(false);
                        }
                    })
                    function moveToNextSlide() {
                        if (index >= slideItems.length - 1) return;
                        updateSlides();
                        index++;
                        slide();
                    }
                    function moveToPreviousSlide() {
                        if (index <= 0) return;
                        updateSlides();
                        index--;
                        slide();
                    }
                    // Handle click
                    nextbtn.click(function () {
                        $(this).addClass('clicked')
                        moveToNextSlide();
                        clearInterval(intervalID);
                        autoSlide();
                        $('.cursor').addClass('expand');
                        setTimeout(() => {
                            $('.cursor').removeClass('expand');
                            nextbtn.removeClass('clicked');
                        }, 400);
                    })
                    prevbtn.click(function () {
                        $(this).addClass('clicked')
                        moveToPreviousSlide();
                        clearInterval(intervalID);
                        autoSlide();
                        $('.cursor').addClass('expand');
                        setTimeout(() => {
                            $('.cursor').removeClass('expand');
                            prevbtn.removeClass('clicked');
                        }, 500);
                    })

                })
            },
            customCursor() {
                const cursor = $('.cursor');
                const monitorWidth = $(window).width();
                $('.exhibitions-container').mousemove(function (e) {
                    cursor.hasClass('show') || cursor.addClass('show');
                    if (e.pageX > monitorWidth / 2) {
                        if (cursor.hasClass('left')) {
                            cursor.removeClass('left');
                            cursor.addClass('right')
                        }
                    } else {
                        if (cursor.hasClass('right')) {
                            cursor.removeClass('right');
                            cursor.addClass('left')
                        }
                    }
                    cursor.css({
                        top: e.pageY - 70,
                        left: e.pageX - 70
                    })
                })
                $('.exhibitions-container').mouseleave(function () {
                    cursor.hasClass('show') && cursor.removeClass('show');
                })
            },
            run() {
                this.hoverHandle();
                this.scrollHandle();
                this.handleSlide();
                this.customCursor();
            }
        }
    }
    main().run();
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


// CUSTOMIZE CURSOR
$(function () {
    document.addEventListener('click', () => {

    })
})