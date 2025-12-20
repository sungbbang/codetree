const fs = require('fs');
let [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let result = `${a} `;
while (true) {
    if (a % 2) {
        a *= 2;
    } else {
        a += 3;
    }

    if (a > b) {
        break;
    }

    result += a + ' ';
}

console.log(result);