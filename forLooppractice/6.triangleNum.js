let a=5;
for(let i=1;i<=a;i++){
    let str=""; // initialize an empty string for each row
    for(let j=1;j<=i;j++){
        str+=j+" "; // starts with the current row number and adds the next numbers up to a
    }
    console.log(str);
}