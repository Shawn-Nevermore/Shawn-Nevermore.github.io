!function () {
    var view = document.querySelector('.swiper-container')
    var mySwiper = new Swiper(view, {
        slidesPerView: 1,
        loop: true,
        centeredSlides: true,
        grabCursor: true,

        autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
        // Navigation arrows
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        effect: 'coverflow',

        coverflowEffect: {
            rotate: 45,
            slideShadows: false,
        },

    })
}.call()