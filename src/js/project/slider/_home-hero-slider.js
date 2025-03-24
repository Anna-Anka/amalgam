import Swiper from 'swiper';
import { A11y, Navigation} from 'swiper/modules';

Swiper.use([A11y, Navigation]);

if (document.querySelector('.home-hero__swiper')) {
    new Swiper('.home-hero__swiper', {
        loop: true,
        speed: 800,
        slidesPerGroup: 1,
        slidesPerView: 1,
        allowTouchMove: false,        

        navigation: {
            nextEl: '.home-hero__button--next',
            prevEl: '.home-hero__button--prev',
        },
    });
}
