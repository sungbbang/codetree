const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const MAX = Math.max(a, b, c, d)
const arr = Array(MAX+1).fill(0);

for (let i = a; i < b; i++) {
    arr[i]++;
}

for (let i = c; i < d; i++) {
    arr[i]++;
}

let ans = 0;
for (let num of arr) {
    if (num >= 1) ans++;
}

console.log(ans);