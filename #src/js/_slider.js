new Swiper('.reviews-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        renderBullet: (index, className) => {
            return `<span class="${className}">${(index + 1)}</span>`;
        },
    },
    touchRatio: 2,
    grabCursor: true,
    autoHeight: true,
    // slidesPerView: 2,
    // spaceBetween: 30,
    // centerSlides: true,
    loop: true,
});
