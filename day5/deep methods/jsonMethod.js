let og={
    name:"tanoj",
    address:{
        city:"hyderabad"
    }
}

let copy=JSON.parse(JSON.stringify(og));
console.log("before",og);
copy.address.city="nellore"
console.log("after",og);
console.log("copy",copy);