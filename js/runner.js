import { loadProductsAsync } from "./ProductApi.js"
import {appendProductCart, generateProduct} from './DomManager.js'

window.onload = () => {
    loadProductsAsync().then(products => {
        products.forEach(x => {
            const html = generateProduct(x.url, x.title, x.price, x.id)
            appendProductCart(x.id, html)
        });
    })
}