const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split(' ').map(Number);

let total = 0;
for (let i = a; i <= b; i++) {
    if (i % 2 === 0) {
        total += i;
    }
}

console.log(total);