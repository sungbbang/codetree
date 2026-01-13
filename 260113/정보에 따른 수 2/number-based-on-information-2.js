const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [t, a, b] = input[0].split(' ').map(Number);
const MAX = 1000;
const arr = Array(MAX+1).fill('');
for (let i = 1; i <= t; i++) {
    const [c, num] = input[i].split(' ');
    arr[Number(num)] = c;
}

let ans = 0;
for (let i = a; i <= b; i++) {
    let d1 = Number.MAX_SAFE_INTEGER;
    let d2 = Number.MAX_SAFE_INTEGER;
    for (let j = 1; j <= MAX; j++) {
        for (let k = 1; k <= MAX; k++) {
            if (arr[j] === 'S') {
                d1 = Math.min(d1, Math.abs(j - i));
            }
            if (arr[j] === 'N') {
                d2 = Math.min(d2, Math.abs(j - i));
            }
        }
    }
    if (d1 <= d2) ans++;
}

console.log(ans);