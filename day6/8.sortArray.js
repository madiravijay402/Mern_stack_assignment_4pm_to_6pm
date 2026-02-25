let arr=[2,12,5,3,99,6,66];
let  sorted=arr.sort();// will shows mistake
console.log(sorted);

// correct method

let Ascending=arr.sort((a,b)=>a-b);
console.log("asacending order",Ascending);

let Descending=arr.sort((a,b)=>b-a);
console.log("descending order",Descending);
