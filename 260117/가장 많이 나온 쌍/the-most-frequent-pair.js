const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const pairs = input.slice(1).map(v => v.split(' ').map(Number));

let ans = 0;
for (let i = 1; i <= n; i++) {
    for (let j = i; j <= n; j++) {
        let cnt = 0;
        for (let [a, b] of pairs) {
            if ((i === a && j === b) || (i === b && j === a)) {
                cnt++;
            }
        }
        ans = Math.max(ans, cnt);
    }
}

console.log(ans);