console.log(document.querySelector('.buy-btn').textContent);

class BasketItem {
    constructor() {
        /*this.id = product.id_product;
        this.title = product.product_name;
        this.price = product.price;*/
        this.products();
    }

    products() {
        document.querySelector('.buy-btn').addEventListener('click', event => {
            const featuredItemEl = event.target.closest('.buy-btn');
            this.id = featuredItemEl.dataset.id;
            this.title = featuredItemEl.dataset.title;
            this.price = featuredItemEl.dataset.price;
        });
    }

    getHTMLString() {
        return `<div class="basketRow" data-id="${this.id}">
    <div>${this.title}</div>
    <div>${this.price} рублей</div>
    <div><p class="deleteItem">Удалить</p></div>
  </div>`;
    }
}

let x = new BasketItem()
console.log(x);

class Basket {
    constructor() {
        this.goods = [];
        this.render();
    }


}

let elBasket = document.querySelector(`.hidden`);
document.querySelector(`.btn-cart`).addEventListener(`click`, () => {
    elBasket.classList.toggle('hidden');
});