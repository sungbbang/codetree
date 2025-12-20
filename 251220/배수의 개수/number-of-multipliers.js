const fs = require('fs');
const arr = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let count3 = 0;
let count5 = 0;
for (let i = 0; i < 10; i++) {
    if (arr[i] % 3 === 0) {
        count3++;
    } if (arr[i] % 5 === 0) {
        count5++;
    }
}

console.log(count3, count5);