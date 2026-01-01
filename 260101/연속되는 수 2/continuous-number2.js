const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, n+1).map(Number);

let max = 1;
let cnt = 0;
for (let i = 0; i < n; i++) {
    if (i == 0 || arr[i-1] === arr[i]) {
        cnt++;
    } else {
        cnt = 1
    }
    if (cnt >= max) max = cnt;
}

console.log(max);