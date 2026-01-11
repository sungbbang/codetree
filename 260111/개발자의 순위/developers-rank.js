const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);

const record = Array(k).fill(0).map(() => Array(n+1).fill(0));
for (let i = 1; i <= k; i++) {
    const match = input[i].split(' ').map(Number);
    for (let j = 1; j <= n; j++) {
        record[i-1][match[j-1]] = j;
    }
}

let ans = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j) continue;
        let always = true;
        for (let l = 0; l < k; l++) {
            if (record[l][i] >= record[l][j]) {
                always = false;
                break;
            }
        }
        if (always) ans++;
    }
}

console.log(ans);