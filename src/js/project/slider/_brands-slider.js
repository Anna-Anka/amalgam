import Swiper from 'swiper';
import { A11y, Navigation, Autoplay } from 'swiper/modules';

Swiper.use([A11y, Navigation, Autoplay]);

if (document.querySelector('.brands__swiper')) {
    new Swiper('.brands__swiper', {
        speed: 800,
        slidesPerGroup: 2,
        spaceBetween: 30,
        slidesPerView: 'auto',

        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
            stopOnlastSlide: false,
        },

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
