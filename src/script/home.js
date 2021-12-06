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
    console.log('123');
    console.log(galleryItem.width());
    console.log(galleryContainer.width());
    const galleryItemAmount = galleryItem.length;
    const galleryCount = Math.round(galleryContainer.width() / galleryItem.width())
    let translateValue = 0;
    nextBtn.click(function () {
        translateValue -= 100 / galleryCount;
        console.log(translateValue);
        galleryContainer.css({
            transform: `translateX(${translateValue}%)`
        })
    })
    prevBtn.click(function () {
        translateValue += 100 / galleryCount;
        console.log(translateValue);
        galleryContainer.css({
            transform: `translateX(${translateValue}%)`
        })
        galleryContainer.css({

        })
    })

})

console.log($(window));


// SECTION 4 -  END  ========================
