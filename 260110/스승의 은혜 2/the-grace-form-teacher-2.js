const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, b] = input[0].split(' ').map(Number);
const p = input.slice(1, 1 + n).map(Number);

p.sort((a, b) => a - b);

let ans = 0;
for (let i = 0; i < n; i++) {
    let total = 0;
    let cnt = 0;
    for (let j = 0; j < n; j++) {
        if (i === j) {
            total += p[j] / 2;
            cnt++;
        } else {
            total += p[j];
            cnt++;
        }

        if (total > b) {
            ans = Math.max(ans, cnt-1);
            break;
        }

        if (total === b) {
            ans = Math.max(ans, cnt);
            break
        }
    }
}

console.log(ans);