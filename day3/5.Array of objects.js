const users = [
  { id: 1, name: "Arun" },
  { id: 2, name: "Ravi" }
];

// userName

let userName;
for(let i=0;i<users.length;i++){
    if(users[i].id===1){
        userName=users[i].name;
        break;
    }
}
console.log(userName);

// second usrer's id

console.log(users[1].id);
