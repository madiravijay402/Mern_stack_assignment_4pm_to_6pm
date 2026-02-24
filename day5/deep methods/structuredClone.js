let orginal={
    name:"john",
    address:{
        city:"chennai"
    }
}
let duplicate=structuredClone(orginal);
console.log("before",orginal);
duplicate.address.city="hyderabad";
console.log("after",orginal);

console.log("duplicate after changing", duplicate);

