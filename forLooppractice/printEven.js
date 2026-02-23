let a=20;
let b=100;
let c=[];
let d=[];
for(let i=a;i<=b;i++){
   
    if(i%2===0){
        c+=i+" ";
    }
    else{
        d+=i+" ";
        
    }
}
console.log("Even numbers:",c);
console.log("Odd numbers:",d);
