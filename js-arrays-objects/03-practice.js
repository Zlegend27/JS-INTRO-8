const appleStore = [
    {
        productName: "iPhone 14 Pro",
        quantity: 50,
        price: 1099.99
    },
    {
        productName: "MacBook Pro 16-inch",
        quantity: 30,
        price: 2399.99
    },
    {
        productName: "iPad Air",
        quantity: 75,
        price: 599.99
    },
    {
        productName: "Apple Watch Series 7",
        quantity: 100,
        price: 399.99
    },
    {
        productName: "AirPods Pro",
        quantity: 200,
        price: 249.99
    }
];

// Find the most expensive product   -> MacBook Pro 16-inch
// Find the least expensive product   -> AirPods Pro
// Find the product with the biggest quantity   -> AirPods Pro
// Find the product with the smallest quantity  -> MacBook Pro 16-inch
// Find all the product names   -> [ 'iPhone 14 Pro', 'MacBook Pro 16-inch', 'iPad Air', 'Apple Watch Series 7', 'AirPods Pro' ]

let mostExpensive = 0;

for(const most of appleStore) {
    if(most.price > mostExpensive) mostExpensive = most.price;
}
 
for(const most of appleStore) {
    if(most.price === mostExpensive) {
        console.log(most.productName);
        break;
    }
};


let leastExpensive = mostExpensive;

for(const least of appleStore) {
    if(least.price < leastExpensive) leastExpensive = least.price;
} 

for(const least of appleStore) {
    if(least.price === leastExpensive) {
        console.log(least.productName);
        break;
    }
}


const bigQuantity = {
    productName: '' , 
    quantity: 0
};

for(const big of appleStore) {
    if(bigQuantity.quantity < big.quantity) {
        bigQuantity.quantity = big.quantity;
        bigQuantity.productName = big.productName;
    }
}

console.log(bigQuantity.productName);

















