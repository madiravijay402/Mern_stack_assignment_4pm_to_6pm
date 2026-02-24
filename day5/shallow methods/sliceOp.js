let arr1=[12,999,93,{a:24},{b:25}];
let arr2=arr1.slice();

console.log("before",arr2);

arr2[3].a="changed";
console.log("after",arr2);
