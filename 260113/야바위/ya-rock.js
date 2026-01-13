const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input.slice(1).map(v => v.split(' ').map(Number));

let ans = 0;
for (let i = 0; i < 3; i++) {
    const stone = [0, 0, 0];
    stone[i]++;
    let cnt = 0;
    for (let [a, b, c] of arr) {
        [stone[a-1], stone[b-1]] = [stone[b-1], stone[a-1]];

        if (stone[c-1] === 1) {
            cnt++;
        }
    }
    ans = Math.max(ans, cnt);
}

console.log(ans);