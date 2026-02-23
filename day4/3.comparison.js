// first example  difference berween == and ===
let a=5;
let b="5";
console.log(a==b);// it will be true because it will convert string "5" into number 5 and compare it with a and give true as output

console.log(a===b);// it will be false because it will not convert string "5" into number 5 and 
                // compare it with a and give false as output

// second example 

let c=24;
let d=false;
console.log(c==d); // it will be false because it will convert false into 0 and compare it with c and give false as output

let e=0;
console.log(e===false);// false beacuse have different data types

// thirde example 

console.log(null==undefined);

console.log(null===undefined);

// fourth example 
console.log("fourth example :");

console.log(""==false);
console.log(""===false);

// fifth example 

console.log("fifth example ");

console.log([]==0); // it will be true because it will convert empty array into 0 and compare it with 0 and give true as output
let ar=[];
let f=0;
console.log(ar===f);// it will be false because it will not convert empty array into 0 and compare it with 0 and give false as output










