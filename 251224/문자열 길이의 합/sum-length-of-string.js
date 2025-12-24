const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);

let sum = 0;
let cnt = 0;
for (let i = 1; i <= n; i++) {
    const s = input[i];
    if (s[0] === 'a') cnt++;
    sum += s.length;
}

console.log(sum, cnt);