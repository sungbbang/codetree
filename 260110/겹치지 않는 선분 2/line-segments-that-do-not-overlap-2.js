const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let ans = n;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        const [s1, e1] = arr[i];
        const [s2, e2] = arr[j];

        if (s1 > s2 && e1 < e2 || s1 < s2 && e1 > e2) {
            ans--;
        }
    }
}

console.log(ans);