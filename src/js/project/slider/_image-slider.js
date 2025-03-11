import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.image-slider__swiper')) {
    new Swiper('.image-slider__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        spaceBetween: 10,

        navigation: {
            nextEl: '.image-slider__button--next',
            prevEl: '.image-slider__button--prev',
        },
    });
}
