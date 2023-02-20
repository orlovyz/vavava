


const productsBtn = document.querySelectorAll('.product__btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartNumb = document.querySelector('.nav__cart-number');
const fullPrice = document.querySelector('.fullprice');


let price = 0;


const randID = () => {
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
};
//random id for products


const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};

const minusFullPrice = (currentPrice) => {
    return price -= currentPrice;
};

const printFullPrice = () => {
    fullPrice.textContent = `currentPrice Ξ`;
};

const printNum = () => {
    let length = cartProductsList.querySelector('.cart-content__list').children.lenth;
    cartNumb.textContent = length;
    length > 0 ? cart.classList.add('#') : cart.classList.add('#');
};

function sendEventAddToCart (e) {
    let event = new Event('add_to_cart', {bubbles: true});
    e.target.dispatchEvent(event)
}


productsBtn.forEach(el => {
    el.addEventListener('click', (e) => {
        let self = e.currentTarget;
        let parent = self.closest('.product1');
        let id = parent.dataset.id;
        let img = parent.querySelector('.product__img').getAttribute('src');
        let title = parent.querySelector('.product__title').textContent;
        let priceNumber = parseInt(parent.querySelector('.product__price').textContent);
        
        //summ 
        plusFullPrice(priceNumber);
        console.log(price);
        //print fp
        printFullPrice();
        //add to cart
        cartProductsList.querySelector('.cart-content__list').insertAdjacentHTML('afterbegin', generateCartProduct(img, title, priceNumber, id));
        //count & print num
        printNum();
        //disabled btn
        self.disabled = true;

    });
});

 
//   promise1.then((result) => {
//     const mapres = result.map((x) => generateCartProduct(x.url, x.title, x.price, x.id));
//     let productHtmls = []
//     for(let i = 0; i < result.length; i++) {
//         const elem = result[i]
//         const html = generateCartProduct(elem.url, elem.title, elem.price, elem.id);

//         productHtmls.push(html)

//     }
//     const docwr =  document.getElementById('wrapper');
    
//     for (let x of mapres){
//         docwr.insertAdjacentHTML('beforeend', x);
//     }
//     result.map(x => {
//         document.getElementById(IdProvider.getAddToCartButtonId(x.id)).onclick = (e) => sendEventAddToCart(e)
//     })
//   });


  const wrapper1 =  document.getElementById('wrapper');
  function func  (e) {
    console.log("catched",e);
  }
  wrapper1.addEventListener("add_to_cart", func)


export {sendEventAddToCart}