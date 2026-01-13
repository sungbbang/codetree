const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const aCount = parseInt(c / a);
const bCount = parseInt(c / b);

let ans = -Infinity;
for (let i = 0; i < aCount; i++) {
    for (let j = 0; j < bCount; j++) {
        let sum = (a * i) + (b * j);
        if (sum <= c) {
            ans = Math.max(ans, sum);
        }
    }
}

console.log(ans);