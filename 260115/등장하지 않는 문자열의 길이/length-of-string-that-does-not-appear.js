const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const str = input[1];

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        const curr = str.slice(i, j+1);
        const remain = str.slice(j)
        console.log(curr, remain)
    }
}