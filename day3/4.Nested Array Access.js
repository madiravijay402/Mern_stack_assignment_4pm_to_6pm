const data = [
  ["Arun", 22],
  ["Ravi", 25],
  ["Kumar", 28]
];

// ravi's age :
let age;
for(let i=0;i<data.length;i++){
    if(data[i][0]==="Ravi"){
        age=data[i][1];
        break;
    }
}
console.log("age of Ravi",age);

// username

let userName;
for(let i=0;i<data.length;i++){
    if(data[i][0]==="Kumar"){
        userName=data[i][0];
        break;
    }
}
console.log("user name:",userName);

