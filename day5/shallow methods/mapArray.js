let arrOrg=[12,3,4,5,{a:24}];

let copy=arrOrg.map((num)=>num);
console.log(copy);
console.log("befoe changing :",arrOrg);
copy[4].a="changed";
console.log("after changing :",arrOrg);

