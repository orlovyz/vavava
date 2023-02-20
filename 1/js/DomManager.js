import {sendEventAddToCart} from './product.js'

const getAddToCartButtonId = (id) => `button_${id}`

const appendProductCart = (productId, productHtml) => {
    const docwr =  document.getElementById('wrapper');
    docwr.insertAdjacentHTML('beforeend', productHtml);
    document.getElementById(getAddToCartButtonId(productId)).onclick = (e) => sendEventAddToCart(e)
}

const generateCartProduct = (img, title, price, id) => {
    return `
    <article class="product${id}">
        <img src="${img}" alt="${id}" class="product__img"  style="border-radius: 25%">
        <h4 class="product__title">${title}</h4>
        <div class="product__count">
        </div>
        <div class="product__price">
            <span class="product__price">
                ${price} Ξ
            </span>
        </div>
        <button class="product__btn" id="${getAddToCartButtonId(id)}" onclick="this.sendEventAddToCart(event)">Add to cart</button>
    </article>
    `;
}

export {appendProductCart, generateCartProduct}