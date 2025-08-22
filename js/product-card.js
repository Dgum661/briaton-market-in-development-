export const catalogEl = document.querySelector('.catalog__list')

export default async function getProductCards() {
    try {
        const response = await fetch('./data/data.json')

        if (!response.ok) {
            throw new Error('Ошибка')
        }
        const cards = await response.json()
        return cards
    } catch (error) {
        console.error(error)
    }
}

function createCard(card) {
    const cardEl = document.createElement('li')
    cardEl.innerHTML = `   <div class="product-card">
                <div class="product-card__visual">
                  <img class="product-card__img" src="${card.image}" height="436" width="290"
                       alt="Изображение товара">
                  <div class="product-card__more">
                    <a href="#" class="product-card__link btn btn--icon">
                      <span class="btn__text">В корзину</span>
                      <svg width="24" height="24" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-basket"></use>
                      </svg>
                    </a>
                    <a href="#" class="product-card__link btn btn--secondary">
                      <span class="btn__text">Подробнее</span>
                    </a>
                  </div>
                </div>
                <div class="product-card__info">
                  <h2 class="product-card__title">${card.name}</h2>
                  <span class="product-card__old">
                  <span class="product-card__old-number">${card.price.old}</span>
                  <span class="product-card__old-add">₽</span>
                </span>
                  <span class="product-card__price">
                  <span class="product-card__price-number">${card.price.new}</span>
                  <span class="product-card__price-add">₽</span>
                </span>
                  <div class="product-card__tooltip tooltip">
                    <button class="tooltip__btn" aria-label="Показать подсказку">
                      <svg class="tooltip__icon" width="5" height="10" aria-hidden="true">
                        <use xlink:href="images/sprite.svg#icon-i"></use>
                      </svg>
                    </button>
                    <div class="tooltip__content">
                      <span class="tooltip__text">Наличие товара по городам:</span>
                      <ul class="tooltip__list">
                        <li class="tooltip__item">
                          <span class="tooltip__text">Москва: <span class="tooltip__count">454</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Оренбург: <span class="tooltip__count">381</span></span>
                        </li>
                        <li class="tooltip__item">
                          <span class="tooltip__text">Санкт-Петербург: <span class="tooltip__count">15</span></span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>`

    return cardEl
}

export function renderCards(cards, catalogEl) {
  catalogEl.innerHTML = ''
  
    cards.forEach(card => {
        const cardEl = createCard(card)
        catalogEl.appendChild(cardEl)
    });
}

export function initCards() {
    getProductCards().then(cards => {
        renderCards(cards, catalogEl)
    })
}