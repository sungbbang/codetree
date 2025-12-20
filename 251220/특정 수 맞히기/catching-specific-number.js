const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

let idx = 0;
while (true) {
    const num = input[idx++];
    if (num === 25) {
        console.log('Good');
        break;
    }

    if (num < 25) {
        console.log('Higher');
    } else {
        console.log('Lower');
    }
}