(function () {
    const cookie = document.querySelector('.cookie');
    const button = document.querySelector('.cookie__button');

    if (!cookie || !button) {
        return null
    }

    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');

    if (hasAcceptedCookies) {
        cookie.classList.add('cookie--hidden');
    }

    button.addEventListener('click', () => {
        localStorage.setItem('cookiesAccepted', 'true');
        cookie.classList.add('cookie--hidden');
    });
})()