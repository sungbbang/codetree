const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);
const MAX = 100;

let ans = 0;
for (let i = 1; i <= MAX; i++) {
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        for (let k = j+1; k < n; k++) {
            if (j === k) continue;

            if (arr[k] + arr[j] === 2*i) {
                cnt++;
            }
        }
    }
    ans = Math.max(cnt, ans);
}

console.log(ans);