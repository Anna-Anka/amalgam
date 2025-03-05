import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.brands__swiper')) {
    new Swiper('.brands__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 2,
        slidesPerView: 'auto',
        spaceBetween: 30,

        navigation: {
            nextEl: '.brands__button--next',
            prevEl: '.brands__button--prev',
        },

        breakpoints: {
            992: {
                spaceBetween: 30,
            },

            0: {
                spaceBetween: 10,
            }
        },
    });
}
