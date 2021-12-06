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
    $('.visit-overlay').click(function (e) {
        e.stopPropagation();
        $(this).css('visibility', 'hidden');
        $(this).children('img').click(function (e) {
            e.stopPropagation();
        })
    })
})
