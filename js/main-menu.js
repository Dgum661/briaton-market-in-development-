export function openMainMenu() {
    const catalogOpenBtn = document.querySelector('.header__catalog-btn')
    const MainMenuEl = document.querySelector('.main-menu')
    const catalogCloseBtn = document.querySelector('.main-menu__close')

    catalogOpenBtn.addEventListener('click', () => {
        MainMenuEl.classList.add('main-menu--active')
    })

    catalogCloseBtn.addEventListener('click', () => {
        MainMenuEl.classList.remove('main-menu--active')
    })
}