const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const MAX_NUM = 10000;

const [n, k] = input[0].split(' ').map(Number);
const arr = input.slice(1, 1 + n).map(Number);

function countNum(l, r) {
    let cnt = 0;
    arr.forEach(elem => {
        if (l <= elem && elem <= r) {
            cnt += 1;
        }
    });

    return cnt;
}

let ans = 0;
for (let i = 1; i <= MAX_NUM; i++) {
    ans = Math.max(ans, countNum(i, i + k));
}

console.log(ans);
