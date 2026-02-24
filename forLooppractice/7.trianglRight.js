let a = 5;
for (let i = 1; i <= a; i++) {
    let str = "";
    // add leading spaces so the numbers start from right
    for (let k = i; k < a; k++) {
        str += " "; // two spaces to match digit width
    }
    for (let j = 1; j <= i; j++) {
        str += j; // append number without extra space
    }
    console.log(str);
}