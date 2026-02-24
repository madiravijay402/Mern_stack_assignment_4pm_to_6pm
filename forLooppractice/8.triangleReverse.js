let a = 5;
for(let i=5;i>=1;i--){
    let str=""; // we are creating rows with th help of str variable
    for(let k=i;k<=a;k++){
        str+=" "; // we are creating spaces at the begining of the rows 
    }
    for(let j=i;j>=1;j--){
        str+=j; // we are creating numbers in reverse order at the end of the rows
    }
    console.log(str);
}

for(let i=1;i<=a;i++){
    let str="";
    for(let j=a;j>=i;j--){
        str+=j;
    }
    console.log(str);
    
}