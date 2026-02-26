let main=(n,callback)=>{
    callback(n);
}
function ageValidation(num){
    if(num>=18){
        console.log("eligible to vote");
        
    }else{
        console.log("not eligible");
    }
}
main(18,ageValidation);


