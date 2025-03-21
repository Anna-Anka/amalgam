(function () {
    const images = document.querySelectorAll('.frame-features .block-info__image')

    if (!images) {
        return null
    }

    const removeClass = () => {
        images.forEach((image) => {
            image.classList.remove('block-info__image--large')
        })
    }

    images.forEach(image => {
        image.addEventListener('mouseover', () => {
            removeClass()
            image.classList.add('block-info__image--large')
        })
    });
})()