const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const blocks = input[1].trim().split(' ').map(Number);

let idx = n - 2;
while (idx >= 0 && blocks[idx] < blocks[idx + 1]) {
    idx -= 1;
}

console.log(idx + 1);
