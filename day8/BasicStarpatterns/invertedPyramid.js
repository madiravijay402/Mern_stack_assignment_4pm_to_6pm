let num=5;
for(let i=1;i<=num;i++){
    let str="";
    for(let j=1;j<i;j++){
        str+=" ";
    }
    for(let k=num;k>=i;k--){
        str+="*"+" ";
    }
    console.log(str);
    
}