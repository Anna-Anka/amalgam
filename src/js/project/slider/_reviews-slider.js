import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.reviews__swiper')) {
    new Swiper('.reviews__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 4,
        slidesPerView: 4,
        spaceBetween: 30,

        navigation: {
            nextEl: '.reviews__button--next',
            prevEl: '.reviews__button--prev',
        },

        breakpoints: {
            1200: {
                slidesPerGroup: 4,
                slidesPerView: 4,
                spaceBetween: 30,
            },

            992: {
                slidesPerGroup: 3,
                slidesPerView: 3,
            },

            768: {
                slidesPerGroup: 2,
                slidesPerView: 2,
            },

            0: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 20,
            }
        },
    });
}
