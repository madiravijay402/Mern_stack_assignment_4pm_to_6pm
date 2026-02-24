let obj1={
    name:"vijay",
    address:{
        city:"chennai"
    }
}

let obj2=Object.assign({},obj1);
console.log("copied object",obj2);

console.log("before",obj1);

obj2.address.city="hyderabad";
console.log("after",obj1);

