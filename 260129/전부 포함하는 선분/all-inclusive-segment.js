const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const x1 = [];
const x2 = [];
for (let i = 1; i <= n; i++) {
    const [a, b] = input[i].split(' ').map(Number);
    x1.push(a);
    x2.push(b);
}

let ans = Infinity;
for (let i = 0; i < n; i++) {
    let min = 101;
    let max = 0;
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        min = Math.min(min, x1[j]);
        max = Math.max(max, x2[j]);
    }

    ans = Math.min(max - min, ans);
}

console.log(ans);