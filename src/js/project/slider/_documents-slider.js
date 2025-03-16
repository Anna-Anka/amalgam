import Swiper from 'swiper';
import { A11y, Navigation } from 'swiper/modules';

Swiper.use([A11y, Navigation]);

const buttons = document.querySelectorAll('.documents__name')

if (document.querySelector('.documents__swiper')) {
    const documentsSlider = new Swiper('.documents__swiper', {
       loop: true,
        speed: 800,
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
                slidesPerView: 1,
                spaceBetween: 10,
            }
        },
    });
    
    if (buttons) {
        documentsSlider.on('activeIndexChange', function(swiper){
            buttons.forEach((button, index) => {
                if (index === swiper.realIndex) {
                    button.classList.add('documents__name--active')
                } else {
                    button.classList.remove('documents__name--active')
                }
            })
        })

        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                documentsSlider.slideToLoop(index)
            })
        })
    }
}
