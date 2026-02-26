const num=5;
let a=0;
let b=1;
let temp=[a]
for(let i=1;i<=num;i++){
    temp.push(b);
    let add=a+b;
    a=b;
    b=add;
}
console.log(temp);
