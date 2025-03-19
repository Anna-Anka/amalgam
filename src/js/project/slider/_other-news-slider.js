import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.other-news__swiper')) {
    new Swiper('.other-news__swiper', {
        speed: 800,
        spaceBetween: 30,
        slidesPerGroup: 4,
        slidesPerView: 4,

        navigation: {
            nextEl: '.other-news__button--next',
            prevEl: '.other-news__button--prev',
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

            560: {
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
