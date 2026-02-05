const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

for (let i = 0; i < n; i++) {
    let minIndex = i;
    for (let j = i+1; j < n; j++) {
        if (arr[minIndex] > arr[j]) {
            minIndex = j;
        }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
}

console.log(arr.join(' '));