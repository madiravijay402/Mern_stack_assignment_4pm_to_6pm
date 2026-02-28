let  num=5;
for(let i=1;i<=num;i++){
    let str="";
    for(let j=num;j>=i;j--){
        str+=" ";
    }
    for(let k=1;k<=i;k++){
        str+="*"+" ";
    }
    console.log(str);
}