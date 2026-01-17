const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const ranges = input.slice(1).map(v => v.split(' ').map(Number));

const MAX = 10000;

let ans = Number.MAX_SAFE_INTEGER;
for (let i = 1; i <= MAX; i++) {
    let num = i;
    let flag = true;
    for (let j = 0; j < n; j++) {
        const [a, b] = ranges[j];
        num *= 2;
        if (!(a <= num && num <= b)) {
            flag = false;
            break;
        }
    }
    if (flag) {
        ans = i;
        break
    }
}

console.log(ans);