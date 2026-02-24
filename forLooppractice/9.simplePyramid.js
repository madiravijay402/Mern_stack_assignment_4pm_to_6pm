let rowsNum=5;
for(let i=1;i<=rowsNum;i++){
    let str="";
    for(let j=i;j<=rowsNum;j++){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        str+=k+" ";
    }
    console.log(str);
    
}