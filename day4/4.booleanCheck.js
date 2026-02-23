let booleanCheck=(input)=>{
    const result = Boolean(input);
    if(result){
       return true
    }else{
       return false
    }
}

console.log(booleanCheck(""));
console.log(booleanCheck(5));
