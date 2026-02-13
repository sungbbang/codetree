const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const dq = Array.from({length: n}, (_, i) => i+1);

while (dq.length > 1) {
    dq.shift();
    dq.push(dq.shift());
}

console.log(dq[0]);