const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const rects = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const MAX = 100;
const checked = Array(2*MAX + 1).fill(0).map(() => Array(2*MAX + 1).fill(0));

for (let k = 0; k < n; k++) {
    const [x1, y1, x2, y2] = rects[k];
    for (let i = x1+MAX; i < x2+MAX; i++) {
        for (let j = y1+MAX; j < y2+MAX; j++) {
            if (k % 2 === 0) {
                checked[i][j] = 1;
            } else {
                checked[i][j] = 2;
            }
        }
    }
}

let ans = 0;
for (let i = 0; i < 2*MAX+1; i++) {
    for (let j = 0; j < 2*MAX+1; j++) {
        if (checked[i][j] === 2) {
            ans++;
        }
    }
}

console.log(ans);