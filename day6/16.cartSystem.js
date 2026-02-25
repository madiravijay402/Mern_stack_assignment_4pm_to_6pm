let productDetails=[
 { name: "Mobile", price: 10000 },
 { name: "Laptop", price: 50000 },
 { name: "Headset", price: 2000 }
]
// product names
let names=productDetails.map((product)=>product.name);
console.log("names :",names);

// filter products
let list=productDetails.filter((product)=>product.price>5000);
console.log("Filter products :",list);

// 
let totalPrice=productDetails.reduce((acc,cur)=>acc+cur.price,0);
console.log("Total price :",totalPrice);