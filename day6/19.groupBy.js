
let users = [
  { name: "Vijay", age: 22 },
  { name: "Ravi", age: 25 },
  { name: "Kumar", age: 22 },
  { name: "Suresh", age: 25 },
  { name: "Raju", age: 30 }
];

let groupByage = users.reduce((acc,cur)=>{
    if(!acc[cur.age]){
        acc[cur.age]=[];
    }
    acc[cur.age].push(cur);
    return acc;
},{});
console.log("groupByage",groupByage);
