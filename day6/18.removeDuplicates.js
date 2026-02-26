let arr=[1,2,2,3,4,4,5];
let uniqueArr=[...new Set(arr)]; // using set to remove duplicates and  spread operator to copy values

console.log("wihout duplicates",uniqueArr);
console.log("orginal arr:",arr);

// not using set
let removeDuplicates=arr.filter((num,index)=>arr.indexOf(num)===index);
console.log("without duplicates",removeDuplicates);