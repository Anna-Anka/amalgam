const changeState = (submenu, button) => {
    if (submenu.classList.contains('burger-menu__submenu--active')) {
        button.setAttribute('aria-expanded', false)
        button.setAttribute('aria-label', 'Открыть дополнительное меню')
        submenu.classList.remove('burger-menu__submenu--active')
        button.classList.remove('burger-menu__button--open')
    } else {
        button.setAttribute('aria-expanded', true)
        button.setAttribute('aria-label', 'Закрыть дополнительное меню')
        submenu.classList.add('burger-menu__submenu--active')
        button.classList.add('burger-menu__button--open')
    }
}

(function () {
    const mainButtons = document.querySelectorAll('.burger-menu__button--main')
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    const submenuContainers = document.querySelectorAll('[data-burger-submenu-container]')

    if (!mainButtons) {
        return
    }
    mainButtons.forEach((mainButton, index) => {
        const menu = mainButton.nextElementSibling
        const id = `header-burger-submenu-main-${index}`

        mainButton.setAttribute('aria-controls', id)
        menu.setAttribute('id', id)

        mainButton.addEventListener('click', () => {
            changeState(menu, mainButton)
        })

        document.addEventListener('click', (event) => {
            if (!mainButton.contains(event.target) && !menu.contains(event.target)) {
                changeState(menu, mainButton)
            }
        })
    })

    if (!submenuContainers) {
        return
    }

    submenuContainers.forEach((container, index) => {
        const button = container.querySelector('.burger-menu__button')
        const arrow = container.querySelector('.burger-menu__arrow')
        const submenu = container.querySelector('.burger-menu__submenu')

        const id = `header-burger-submenu-${index}`

        submenu.setAttribute('id', id)

        if (isTouchDevice) {
            // Если телефон
            button.removeAttribute('aria-controls')
            button.removeAttribute('aria-label')
            button.removeAttribute('aria-expanded')

            arrow.removeAttribute('aria-hidden')
            arrow.setAttribute('aria-controls', id)
            arrow.setAttribute('aria-label', 'Открыть дополнительное меню')
            arrow.setAttribute('aria-expanded', false)

            arrow.addEventListener('click', () => {
                changeState(submenu, arrow)
            })
        } else {
            arrow.removeAttribute('aria-controls')
            arrow.removeAttribute('aria-label')
            arrow.removeAttribute('aria-expanded')
            arrow.setAttribute('aria-hidden', true)

            button.setAttribute('aria-controls', id)
            button.setAttribute('aria-label', 'Открыть дополнительное меню')
            button.setAttribute('aria-expanded', false)

            container.addEventListener('mouseover', () => {
                changeState(submenu, button)
            })

            container.addEventListener('mouseout', () => {
                changeState(submenu, button)
            })
        }
    })
})()