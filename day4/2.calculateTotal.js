const calculateTotal=(price,qty)=>{
    const num=Number(price);
    const quantity=Number(qty);
    if(isNaN(num)|| isNaN(quantity)){
        return "invalid input";
    }
    return num*quantity;
}
    
console.log(calculateTotal("100","vanakam"));
 