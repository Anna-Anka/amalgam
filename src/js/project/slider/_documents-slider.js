import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.documents__swiper')) {
    new Swiper('.documents__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 3,
        spaceBetween: 20,

        navigation: {
            nextEl: '.documents__button--next',
            prevEl: '.documents__button--prev',
        },

        breakpoints: {
            768: {
                slidesPerView: 3, 
                spaceBetween: 20,
            },

            560: {
                slidesPerView: 2,
            },

            0: {
                slidesPerGroup: 1,
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },
    });
}
