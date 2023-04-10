import {getProducts} from './ProductApi.js';
import {generateProduct} from './DomManager.js'
const productsBtn = document.querySelectorAll('.product__btn');
const cartProductsList = document.querySelector('.cart-content__list');
const cart = document.querySelector('.cart');
const cartNumb = document.querySelector('.nav__cart-number');
const fullPrice = document.querySelector('.fullprice');

  const cartwrapper = document.getElementById('allcart');
  const cartcloser = document.getElementById('modalclose');
  const cartopener = document.getElementById('cartopenbtn');
  const modalbackground = document.getElementById('modal');
  const cartcontentelem = document.getElementById('cartcontent');

const getPlusFromCartButtonId = (id) => `plus_${id}`;

const getDelFromCartButtonId = (id) => `del_${id}`

const generateCart = (url, title, price, id, amount) => {
    return `
    <article class="product_cart_${id}">
        <img src="${url}" alt="${id}" class="product_cart_img"  style="border-radius: 25%">
        <h4 class="product_cart_title">${title}</h4>
        <div class="product_cart_price">
            <span class="product_cart_price">
                ${price} Ξ
            </span>
            <span class="product_cart_amount" id >
                x ${amount}
            </span>
        </div>
        <div class="plus" id="${getPlusFromCartButtonId(id)}"></div>
        <div class="minus" id="${getDelFromCartButtonId(id)}"></div>
    </article>
    `;
}

let cartdata = [] //объект с данными для корзины

let price = 0;


const plusFullPrice = (currentPrice) => {
    return price += currentPrice;
};



const printFullPrice = () => {
    fullPrice.textContent = `currentPrice Ξ`;
};

const printNum = () => {
    let length = cartProductsList.querySelector('.cart-content__list').children.lenth;
    cartNumb.textContent = length;
    length > 0 ? cart.classList.add('#') : cart.classList.add('#');
};


function sendEventToggleTheCart (e) {
    let event = new Event('toggle_the_cart', {bubbles:true});
    e.target.dispatchEvent(event);
}

function sendEventAddToCart (e) {
    let event = new Event('add_to_cart', {bubbles: true});
    e.target.dispatchEvent(event)
}

function sendEventDelFromCart (e) {
    let event = new Event('remove_from_cart', {bubbles: true});
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
        cartProductsList.querySelector('.cart-content__list').insertAdjacentHTML('afterbegin', generateProduct(img, title, priceNumber, id));
        //count & print num
        printNum();
        //disabled btn
        self.disabled = true;

    });
});

 
//   promise1.then((result) => {
//     const mapres = result.map((x) => generateProduct(x.url, x.title, x.price, x.id));
//     let productHtmls = []
//     for(let i = 0; i < result.length; i++) {
//         const elem = result[i]
//         const html = generateProduct(elem.url, elem.title, elem.price, elem.id);

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

const cartwr = document.getElementById('cart-wrapper');
const fullp = document.getElementById('fullprice-total');
    function drawCartObjectToCartHtml () {
        cartwr.innerHTML = null;
        cartdata.forEach((e) => {
            let string = generateCart(e.url, e.title, e.price, e.id, e.amount);
            cartwr.insertAdjacentHTML('beforeend', string);
            document.getElementById(getDelFromCartButtonId(e.id)).onclick = (e) => sendEventDelFromCart(e);
            document.getElementById(getPlusFromCartButtonId(e.id)).onclick = (e) => sendEventAddToCart(e);
        });
       totalplus(); 
    }

    function totalplus (){
        fullp.innerHTML = 0;
        let fullprice = cartdata.reduce((accumulator, currentValue) => {
           return accumulator + (currentValue.price * currentValue.amount)
         },0); 
        fullp.innerHTML = String(fullprice)+' Ξ '; 
    };


    function del (e) {
        console.log("cathed_for_delete",e);
        let id = e.target.id.split('_')[1];
        let idnum = Number(id);
        let prodindex = cartdata.findIndex((e) => {return e.id == idnum});
        if (cartdata[prodindex].amount > 1) {
            cartdata[prodindex].amount -=1;
        }
        else{
            cartdata.splice(prodindex, 1);
        }
        drawCartObjectToCartHtml();
    }

  const wrapper1 =  document.getElementById('wrapper');
 
  function addelementcart  (e) {
    console.log("catched add elem cart",e);
    let id = e.target.id.split('_')[1];
    let idnum = Number(id);
    let alldata = getProducts();
    let naidprod = alldata.find((e) => {return e.id == idnum});
    let productincart =  cartdata.find((e) => {return e.id == idnum})
    if (productincart) {
        productincart.amount += 1 ;
    }
    else {
        naidprod.amount = 1;
        cartdata.push(naidprod);
    } 
    drawCartObjectToCartHtml();
    totalplus();
  }

  function cartopenclose () {
    console.log("catched cartopenclose");
    let elem = document.getElementById('modal');
    elem.classList.toggle('active');
    let elem2 = document.getElementsByTagName('body')[0];
    elem2.classList.toggle('modal-open');
  }


  

  

  function togglecartmodal (e) {
    sendEventToggleTheCart(e);
  }





cartopener.onclick = togglecartmodal;
  cartcloser.onclick = togglecartmodal;
  modalbackground.onclick = togglecartmodal;
  cartcontentelem.onclick = ((e) => {e.stopPropagation()})

  cartwrapper.addEventListener("toggle_the_cart", cartopenclose)

  cartwr.addEventListener("add_to_cart", addelementcart);

  wrapper1.addEventListener("add_to_cart", addelementcart)

  cartwr.addEventListener("remove_from_cart", del)
 
export {sendEventAddToCart}

