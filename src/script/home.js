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
        $('.exhibitions-container').css('background-image', newURL)
    })
    // SLIDE HANDLER
    const galleryItemAmount = galleryItem.length;
    let galleryCount;
    $(window).on('load', function () {
        galleryCount = Math.round(galleryContainer.width() / galleryItem.width())
    })
    let translateValue = 0;
    nextBtn.click(function () {
        translateValue -= 100 / galleryCount;
        galleryContainer.css({
            transform: `translateX(${translateValue}%)`
        })
    })
    prevBtn.click(function () {
        translateValue += 100 / galleryCount;
        galleryContainer.css({
            transform: `translateX(${translateValue}%)`
        })
    })

})

// SECTION 4 -  END  ========================
