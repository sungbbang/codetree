const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const blocks = input.slice(1).map(Number);

const avg = blocks.reduce((acc, curr) => acc + curr, 0) / n;

let ans = 0;
for (let i = 0; i < n; i++) {
    if (blocks[i] > avg) {
        ans += blocks[i] - avg;
    }
}

console.log(ans);