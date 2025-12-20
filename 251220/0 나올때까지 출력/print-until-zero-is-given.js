const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let idx = 0;
while (true) {
    num = Number(input[idx++]);
    if (num === 0) {
        break;
    }
    console.log(num);
}