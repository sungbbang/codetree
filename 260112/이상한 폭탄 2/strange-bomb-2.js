const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const bombs = input.slice(1).map(Number);

let ans = -1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i === j) continue;

        const bomb1 = bombs[i];
        const bomb2 = bombs[j];
        if (bomb1 === bomb2 && Math.abs(i-j) <= k) {
            ans = Math.max(ans, bomb1);
        }
    }
}

console.log(ans);