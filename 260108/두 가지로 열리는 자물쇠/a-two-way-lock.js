const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a1, b1, c1] = input[1].split(' ').map(Number);
const [a2, b2, c2] = input[2].split(' ').map(Number);

function inRange(num, target) {
    return Math.abs(num - target) <= 2 || n - Math.abs(num - target) <= 2;
}

let count = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if (
                inRange(i, a1) && inRange(j, b1) && inRange(k, c1) ||
                inRange(i, a2) && inRange(j, b2) && inRange(k, c2)
            ) {
                count++;
            }
        }
    }
}

console.log(count);