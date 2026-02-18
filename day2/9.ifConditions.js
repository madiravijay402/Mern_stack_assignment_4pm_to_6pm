let userAge=22;
let hasId=true;
if(userAge>18 && hasId){
    console.log("you are eligible for voting");
}
else if(userAge>18 && !hasId){
    console.log("you are not eligible to vote");
}
else if(userAge<18 && hasId){
    console.log("you are not eligible to vote");
}
else if(userAge<18 && !hasId){
    console.log("you are not eligible to vote");
}