const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, l] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);

arr.sort((a, b) => a - b);

let ans = 0;
// 가능한 h 점수 탐색
for (let h = 1; h <= 101; h++) {
    let canAdd = l;
    let count = 0;
    let candidates = 0;
    for (let num of arr) {
        if (num >= h) count++;
        if (num === h - 1) {
            if (canAdd > 0) {
                canAdd--;
                candidates++;
            }
        }
    }

    if (count + candidates >= h) ans = Math.max(ans, h);
}

console.log(ans);