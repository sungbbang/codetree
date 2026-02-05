const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

for (let i = 1; i < n; i++) {
    let currentValue = arr[i];
    let j;
    for (j = i-1; j >= 0 && arr[j] > currentValue; j--) {
        arr[j+1] = arr[j];
    }
    arr[j+1] = currentValue;
}

console.log(arr.join(' '));