import Swiper from 'swiper';
import { A11y, Navigation, Autoplay } from 'swiper/modules';

Swiper.use([A11y, Navigation, Autoplay]);

if (document.querySelector('.home-hero__swiper')) {
    new Swiper('.home-hero__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,        

        autoplay: {
            delay: 10000,
            disableOnInteraction: false,
            stopOnlastSlide: false,
        },

        navigation: {
            nextEl: '.home-hero__button--next',
            prevEl: '.home-hero__button--prev',
        },
    });
}
