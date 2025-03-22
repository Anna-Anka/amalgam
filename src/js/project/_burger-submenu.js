import { globalVars } from '../utils/index.js';

const allMainSubmenu = []
const allSubmenu = {}

const focusCatch = (e) => {
    allMainSubmenu.forEach((menu) => {
        const nodes = menu.querySelectorAll(globalVars.focusEl);
        const nodesArray = Array.prototype.slice.call(nodes);
        const focusedItemIndex = nodesArray.indexOf(document.activeElement)
        if (e.shiftKey && focusedItemIndex === 0) {
            nodesArray[nodesArray.length - 1].focus();
            e.preventDefault();
        }
        if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {
            nodesArray[0].focus();
            e.preventDefault();
        }
    })
}

const closeMenu = (menu, button) => {
    button.setAttribute('aria-expanded', false)
    button.setAttribute('aria-label', 'Открыть дополнительное меню')
    menu.classList.remove('burger-menu__submenu--active')
    button.classList.remove('burger-menu__button--open')
}

const openMenu = (menu, button) => {
    button.setAttribute('aria-expanded', true)
    button.setAttribute('aria-label', 'Закрыть дополнительное меню')
    menu.classList.add('burger-menu__submenu--active')
    button.classList.add('burger-menu__button--open')
}

const closeAllSubmenu = () => {
    for (let key in allSubmenu) {
        const menu = allSubmenu[key].menu
        const button = allSubmenu[key].button

        closeMenu(menu, button)
    }
}

const changeState = (menu, button) => {
    if (menu.classList.contains('burger-menu__submenu--active')) {
        closeMenu(menu, button)
    } else {
        openMenu(menu, button)
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

        allMainSubmenu.push(menu)

        mainButton.addEventListener('click', () => {
            changeState(menu, mainButton)
        })

        document.addEventListener('click', (event) => {
            const target = event.target

            if (menu.classList.contains('burger-menu__submenu--active')) {
                if (!mainButton.contains(target) && !menu.contains(target)) {
                    closeMenu(menu, mainButton)
                    closeAllSubmenu()
                }
            }
        })

        document.addEventListener('keydown', (event) => {
            if (menu.classList.contains('burger-menu__submenu--active')) {
                if (event.key === 'Escape') {
                    closeMenu(menu, mainButton)
                    closeAllSubmenu()
                }

                if (event.which) {
                    focusCatch(event);
                }
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

        allSubmenu[index] = {
            parent: container,
            button: button,
            arrow: arrow,
            menu: submenu
        }

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
                openMenu(submenu, button)
            })

            button.addEventListener('keydown', (event) => {
                const target = event.target
                const targetMenu = target.closest('[data-burger-submenu-container]').querySelector('.burger-menu__submenu')

                if (event.key === 'Enter') {
                    closeAllSubmenu()
                    if (button.contains(target)) {
                        openMenu(targetMenu, target)
                    }
                }
            })

            container.addEventListener('mouseout', () => {
                closeMenu(submenu, button)
            })
        }
    })
})()