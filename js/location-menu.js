export function locationSelect() {
    const locationBtn = document.querySelector('.location__city')
    const cityButtons = document.querySelectorAll('.location__sublink')
    const cityNameEl = document.querySelector('.location__city-name')

    locationBtn.addEventListener('click', () => {
        locationBtn.classList.toggle('location__city--active')
    })

    cityButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const city = btn.dataset.city;
            cityNameEl.textContent = `${city}`
            locationBtn.classList.remove('location__city--active')
        })
    })
}