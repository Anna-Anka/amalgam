import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.planning-block__swiper')) {
    new Swiper('.planning-block__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,

        navigation: {
            nextEl: '.planning-block__button--next',
            prevEl: '.planning-block__button--prev',
        },
    });
}
