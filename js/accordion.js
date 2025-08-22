export function getAnswer() {
    const accordionBtnEl = document.querySelectorAll('.accordion__btn')
    const accordionButtons = Array.from(accordionBtnEl)

    accordionButtons.forEach(btn => btn.addEventListener('click', () => {

        const isActive = btn.classList.contains('accordion__btn--active')

        accordionButtons.forEach(otherBtn => {
            otherBtn.classList.remove('accordion__btn--active')
        }) 

        if (!isActive) {
            btn.classList.add('accordion__btn--active')
        }
    }))
}