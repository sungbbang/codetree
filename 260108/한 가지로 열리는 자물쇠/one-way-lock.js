const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);

let total = n ** 3;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if (i - 2 > a && j - 2 > b && k - 2 > c) total--;
        }
    }
}

console.log(total);