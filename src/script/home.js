// SECTION 4 - START ========================
$(function () {
    const galleryItem = $(".gallery-item");
    galleryItem.click(function () {
        $(".gallery-item.active").removeClass("active");
        $(this).addClass("active")
        const imgActive = $(".gallery-item.active > img");
        newURL = `url('${imgActive.attr('src')}')`;
        console.log(newURL);
        $('.exhibitions-container').css('background-image', newURL)
    })
})
// SECTION 4 -  END  ========================
