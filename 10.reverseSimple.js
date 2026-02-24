let a=7;
for(let i=a;i>=1;i--){
    let str="";
    for(let j=i;j<=a;j++){
        str+=" ";
    }
    for(let k=i;k>=1;k--){
        str+=k+" ";
    }
    console.log(str);
    
}