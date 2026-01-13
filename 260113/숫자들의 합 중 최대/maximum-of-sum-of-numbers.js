const fs = require('fs');
const [x, y] = fs.readFileSync(0).toString().split(' ').map(Number);

let ans = 0;
for (let i = x; i <= y; i++) {
    const num = String(i);

    let sum = 0;
    for (let n of num) {
        sum += parseInt(n);
    }

    ans = Math.max(ans, sum);
}

console.log(ans);