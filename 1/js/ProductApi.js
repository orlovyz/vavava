const getProducts = () => {
    return [
        {
            id : 1,
            title: "SPACE EYE",
            price: 100,
            url: './img/product/1.svg'
        },
        {
            id : 2,
            title: "FIZZY",
            price: 90,
            url: './img/product/2.svg'
        },
        {
            id : 3,
            title: "FEAR",
            price: 70,
            url: './img/product/3.svg'
        },
        {
            id : 4,
            title: "WEATHER",
            price: 85,
            url: './img/product/4.svg'
        
        },
        {
            id : 5,
            title: "FAKE LOVE",
            price: 90,
            url: './img/product/5.svg'
        },
        {
            id : 6,
            title: "WEATHER",
            price: 85,
            url: './img/product/6.svg'
        
        },
        {
            id : 7,
            title: "WEATHER",
            price: 85,
            url: './img/product/7.svg'
        
        },
        {
            id : 8,
            title: "WEATHER",
            price: 85,
            url: './img/product/8.svg'
        
        }
        ];
}


const loadProductsAsync = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(getProducts());
        }, 1000);
    });
}


export {loadProductsAsync}