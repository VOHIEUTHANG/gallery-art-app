$(() => {
    const container = document.createElement('div');
    Object.assign(container.style, {
        position: 'fixed',
        bottom: '0px',
        right: '30px',
        backgroundColor: 'var(--primary-color)',
        borderRadius: '50%',
        cursor: 'pointer',
        display: 'flex',
        visibility: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        opacity: '0',
        zIndex: '999'
    })
    container.classList.add('gototop')
    container.innerHTML = `
    <a href="#" style="color: white;width:50px;height:50px;display:flex;justify-content:center;align-items:center">
    <i class="fas fa-chevron-up"></i>
    </a>
    `
    $('#main').append(container)
    $(this).scroll(function () {
        const condition = $(this).scrollTop() > 300;
        condition ? $('.gototop').addClass('show') : $('.gototop').removeClass('show')
    })
})