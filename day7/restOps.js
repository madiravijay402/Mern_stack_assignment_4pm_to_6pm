function map(callback,...num){
    return num.map(callback); // returns an array that contains the result
}
let square=(n)=>{
    return n*n;
}
console.log(map(square,1,2,3,4));


// 