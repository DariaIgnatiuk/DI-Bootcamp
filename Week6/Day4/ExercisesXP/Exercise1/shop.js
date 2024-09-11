const products = require("./products.js");

const productSearch = (product_name) => {
    let i = 0;
    for (i; i < products.length; i++){
        if (products[i].name === product_name){
            console.log(products[i]);
            break
        }
    }
    if (i === products.length) {
           console.log(`We don't have ${product_name}, sorry.`);
    }   
}

productSearch('IPhone')