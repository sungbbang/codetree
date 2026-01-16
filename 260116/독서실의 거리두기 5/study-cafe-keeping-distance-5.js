const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seat = input[1].split('');

let ans = 0;
for (let i = 0; i < n; i++) {
    if (seat[i] === '0') continue;
    for (let j = i+1; j < n; j++) {
        if (seat[j] === '1') continue;
        let flag = false;
        for (let k = j+1; k < n; k++) {
            if (seat[k] === '1') {
                const diff = Math.min(Math.abs(i - j), (Math.abs(j - k)));
                ans = Math.max(ans, diff);
                flag = true;
                break;
            }
        }
        if (!flag) {
            ans = Math.max(ans, Math.abs(i - j));
        }
    }
}

console.log(ans);