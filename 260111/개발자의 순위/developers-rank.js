const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [k, n] = input[0].split(' ').map(Number);
const arr = input.slice(1).map(v => v.split(' ').map(Number));
let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) continue;
        let always = true;
        for (let l = 0; l < k; l++) {
            if (arr[l][i] <= arr[l][j]) {
                always = false;
                break
            }
        }
        if (always) ans++;
    }
}

console.log(ans);