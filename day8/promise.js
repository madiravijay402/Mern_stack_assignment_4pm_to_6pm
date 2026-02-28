const proniseMethod=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("setTimeout");
    },3000)
})

console.log(proniseMethod);
