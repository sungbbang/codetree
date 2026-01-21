const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const segments = input.slice(1).map(v => v.trim().split(' ').map(Number));

const lines = Array(101).fill(0);

for (let [x1, x2] of segments) {
    for (let i = x1; i <= x2; i++) {
        lines[i] += 1;
    }
}

let flag = false;
for (let num of lines) {
    if (num === 3) {
        flag = true;
        break;
    }
}

flag ? console.log('Yes') : console.log('No');