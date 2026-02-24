let arr1=[{a:24},{b:25}];
let arr2=[...arr1]; // this is a shallow copy of arr1

arr2[0].a=100;
console.log(arr1[0].a); // this will print 100 because arr2 is a shallow copy of arr1 and both arr1 and arr2 are pointing to the same object in memory

arr2[0]={c:22};
console.log(arr2);
console.log(arr1);

let arr3=[12,3,4];
arr3[2]=100;
console.log(arr3); 

