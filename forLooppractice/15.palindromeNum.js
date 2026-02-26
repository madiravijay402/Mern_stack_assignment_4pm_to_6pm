let a="viiv";
let b=[];
for(let i=a.length-1;i>=0;i--){
    b.push(a[i])
}
b=b.join("")
if(a===b){
    console.log(`${a} is a palindrome`);
}else{
    console.log("not a palindrome");
    
}

