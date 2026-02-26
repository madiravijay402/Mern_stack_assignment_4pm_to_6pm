let arr=[[1,2], [3,4], [5]];

let singlArray=arr.reduce((acc,cur)=>
    acc.concat(cur),[])

console.log("singlArray :",singlArray);
