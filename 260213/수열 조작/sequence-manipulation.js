const fs = require("fs");
const n = Number(fs.readFileSync(0).toString());
const dq = Array.from({length: n}, (_, i) => i + 1);

let head = 0;
while (dq.length - head > 1) {
    head++;
    dq.push(dq[head]);
    head++;
}

console.log(dq[head]);