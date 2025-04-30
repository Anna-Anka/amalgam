(function() {
    const scrollTopButton = document.querySelector('.button-top');

    if (!scrollTopButton) {
        return
    }

    const toggleScrollTopButton = () => {
        if (window.scrollY > window.innerHeight) {
            // Проверяем, проскролили ли мы на высоту одного экрана
            scrollTopButton.classList.add('button-top--active');
        } else {
            scrollTopButton.classList.remove('button-top--active');
        }
    };

    window.addEventListener('scroll', toggleScrollTopButton);
})()
