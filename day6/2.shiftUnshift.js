let arr=[10,20,30,40];
console.log("before",arr);

arr.shift();
console.log("after",arr); // first element will be removed
console.log("before using unshift",arr);

arr.unshift(5);
console.log("after using unshift",arr);

