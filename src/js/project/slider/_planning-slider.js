import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.planning-slider__swiper')) {
    new Swiper('.planning-slider__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,

        navigation: {
            nextEl: '.planning-slider__button--next',
            prevEl: '.planning-slider__button--prev',
        },
    });
}
