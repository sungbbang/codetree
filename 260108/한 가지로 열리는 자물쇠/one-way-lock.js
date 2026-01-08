const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const [a, b, c] = input[1].split(' ').map(Number);

let total = 0;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        for (let k = 1; k <= n; k++) {
            if (i <= a + 2 || j <= b + 2 || k <= c + 2) {
                total++;
            }
        }
    }
}

console.log(total);