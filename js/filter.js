import getProductCards, { renderCards, catalogEl } from "./product-card.js"

function getSelectedTypes() {
    const checkboxes = document.querySelectorAll('.custom-checkbox__field')

    const checkedCheckboxes = Array.from(checkboxes).filter(checkbox => checkbox.checked)

    const selectedTypes = checkedCheckboxes.map(checkbox => checkbox.value)

    return selectedTypes
}

function filterCardsByType(cards, selectedTypes, selectedStatus) {
    return cards.filter(card => {
        const matchesStock = selectedStatus === 'all-item' || IsInStock(card)

        if (selectedTypes.length === 0) {
            return matchesStock
        }
        const matchesType = card.type.some(type => selectedTypes.includes(type))
        return matchesStock && matchesType
    })
}

function getSelectedStatus() {
    const selected = document.querySelector('.custom-radio__field:checked')

    const selectedStatus = selected ? selected.value : 'all-item'

    return selectedStatus
}

function IsInStock(card) {
    return Object.values(card.availability).some(count => count > 0)
}

function sortCards(cards, sortOption) {
    const sorted = [...cards]

    if (sortOption === 'price-min') {
        sorted.sort((a, b) => a.price.new - b.price.new)
    } else if (sortOption === 'price-max') {
        sorted.sort((a, b) => b.price.new - a.price.new)
    } else if (sortOption === 'rating-max') {
        sorted.sort((a, b) => b.rating - a.rating)
    }

    return sorted
}

export function initFilter() {
    getProductCards().then(cards => {
        const checkboxFilters = document.querySelectorAll('.custom-checkbox__field')
        const radioFilters = document.querySelectorAll('.custom-radio__field')
        const selectEl = document.querySelector('.catalog__sort-select')

        const selectedTypes = getSelectedTypes()
        const selectedStatus = getSelectedStatus()
        const sortOption = selectEl.value

        const filtered = filterCardsByType(cards, selectedTypes, selectedStatus)
        const sorted = sortCards(filtered, sortOption)
        renderCards(sorted, catalogEl)

        function update() {
            const selectedTypes = getSelectedTypes()
            const selectedStatus = getSelectedStatus()
            const sortOption = selectEl.value

            const filtered = filterCardsByType(cards, selectedTypes, selectedStatus)
            const sorted = sortCards(filtered, sortOption)
            renderCards(sorted, catalogEl)
        }

        [...checkboxFilters, ...radioFilters].forEach(filter => {
            filter.addEventListener('change', update)
        })

        selectEl.addEventListener('change', update)
    }

    )
}