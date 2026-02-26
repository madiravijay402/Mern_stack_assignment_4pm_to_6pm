let a = 10;
let b = 48;
let d = [];

for (let i = a; i <= b; i++) {
    let isPrime = true;  
    
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }
    
    if (isPrime) {
        d.push(i);
    }
}

console.log(d);
