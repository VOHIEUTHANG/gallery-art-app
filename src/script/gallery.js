$(function () {
    const item = $('.gallery-item');
    const overlays = $('.overlay')
    const overlaysIMG = $('.overlay > img')
    overlaysIMG.click(function (e) {
        e.stopPropagation();
    })
    overlays.click(function (e) {
        e.stopPropagation();
        $(this).removeClass('show');
        $(this).css('transition', 'none')
    })
    console.log(overlays);
    item.click(function () {
        const overlay = $(this).children('.overlay')
        overlay.css('transition', 'all 0.4s ease')
        overlay.addClass('show');
    })

})
