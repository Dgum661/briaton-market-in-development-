import getProductCards from "./product-card.js";

function getTypeCount(cards) {
    let pendantCount = 0
    let nightlightsCount = 0
    let ceilingCount = 0
    let overheadCount = 0
    let pointCount = 0

    cards.forEach(card => {
        if (card.type.includes('pendant')) {
            pendantCount++
        } if (card.type.includes('nightlights')) {
            nightlightsCount++
        } if (card.type.includes('ceiling')) {
            ceilingCount++
        } if (card.type.includes('overhead')) {
            overheadCount++
        } if (card.type.includes('point')) {
            pointCount++
        }

    })

    const counts = {
        pendant: pendantCount,
        nightlights: nightlightsCount,
        ceiling: ceilingCount,
        overhead: overheadCount,
        point: pointCount
    }

    return counts;
}

function renderCounts(counts) {
    const counters = document.querySelectorAll('.custom-checkbox__count')

    counters.forEach(counter => {
        const type = counter.dataset.type
        counter.textContent = counts[type]
    })
}

getProductCards().then(cards => {
    const counts = getTypeCount(cards)
    renderCounts(counts)
});
