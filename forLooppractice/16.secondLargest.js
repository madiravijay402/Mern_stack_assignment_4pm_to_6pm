let arr = [10, 25, 5, 40, 35];

let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (value > largest) {
        secondLargest = largest;
        largest = value;
    } else if (value > secondLargest && value < largest) {
        secondLargest = value;
    }
}

console.log("Second largest =", secondLargest);