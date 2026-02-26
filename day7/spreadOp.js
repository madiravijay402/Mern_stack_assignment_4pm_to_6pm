// copying numbers and adding numbers in array at last
let arr1=[12,3,4,0,99];
let copyarray=[...arr1,45,9];
console.log(copyarray);

// copying an object

const details={
    name:"vijay",
    address:{city:"chennai",pinCode:"600078"}
}
let copyObj={...details}
console.log("before copyObj",copyObj);

copyObj.address.city="hyderabad";

console.log("after copyObj",copyObj);
console.log("orginal obj",details);


const duplicate={info:details};
console.log("duplicate",duplicate);

