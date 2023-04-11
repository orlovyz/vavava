import {sendEventAddToCart} from './product.js'

const getAddToCartButtonId = (id) => `button_${id}`

const appendProductCart = (productId, productHtml) => {
    const docwr =  document.getElementById('wrapper');
    docwr.insertAdjacentHTML('beforeend', productHtml);
    document.getElementById(getAddToCartButtonId(productId)).onclick = (e) => sendEventAddToCart(e) // Мы кликаем на кнопку, и в обратку получаем событие с этого клика. В этом событии есть инфа куда мы кликнули, и это событие мы передаем в функцию sendEventAddToCart
}

const generateProduct = (img, title, price, id) => {
    return `
    <article class="product${id} prodd">
        <img src="${img}" alt="${id}" class="product__img"  style="border-radius: 25%">
        <h4 class="product__title">${title}</h4>
        <div class="product__price">
            <span class="product__price">
                ${price} Ξ
            </span>
            
        </div>
        <button class="product__btn" id="${getAddToCartButtonId(id)}">Add to cart</button>
    </article>
    `;
}

export {appendProductCart, generateProduct}
