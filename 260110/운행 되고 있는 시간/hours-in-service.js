const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const MAX = 1000;
let ans = -Number.MAX_SAFE_INTEGER;
for (let i = 0; i < n; i++) {
    const time = Array(MAX+1).fill(0);
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        const [a, b] = arr[j];
        for (let t = a; t < b; t++) {
            time[t] = 1;
        }
    }
    let sum = 0;
    for (let t of time) {
        if (t === 1) sum++;
    }

    ans = Math.max(ans, sum);
}

console.log(ans);