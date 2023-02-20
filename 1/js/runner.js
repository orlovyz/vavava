import { loadProductsAsync } from "./ProductApi.js"
import {appendProductCart, generateCartProduct} from './DomManager.js'

window.onload = () => {
    loadProductsAsync().then(products => {
        products.forEach(x => {
            const html = generateCartProduct(x.url, x.title, x.price, x.id)
            appendProductCart(x.id, html)
        });
    })
}