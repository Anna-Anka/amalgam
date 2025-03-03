import Swiper from 'swiper';
import { A11y, Navigation, Autoplay } from 'swiper/modules';

Swiper.use([A11y, Navigation, Autoplay]);

if (document.querySelector('.realized-projects__swiper')) {
    const allSwipers = document.querySelectorAll('.realized-projects__swiper')
    allSwipers.forEach(swiper => {
        new Swiper(swiper, {
            speed: 800,
            spaceBetween: 30,
            slidesPerGroup: 4,
            slidesPerView: 4,

            navigation: {
                nextEl: swiper.querySelector('.realized-projects__button--next'),
                prevEl: swiper.querySelector('.realized-projects__button--prev'),
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
    })
}
