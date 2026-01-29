const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split(' ').map(Number);

arr.sort((a, b) => a - b);
// a와 b는 가장 작은 숫자가 됨.
const a = arr[0];
const b = arr[1];
const abcd = arr[arr.length - 1];
const cd = abcd - a - b;

for (let i = 2; i < arr.length - 1; i++) {
    for (let j = i+1; j < arr.length - 1; j++) {
        if (arr[i] + arr[j] === cd) {
            console.log(a, b, arr[i], arr[j]);
            process.exit();
        }
    }
}