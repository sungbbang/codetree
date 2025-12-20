const fs = require('fs');

const input = fs.readFileSync(0).toString().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);

for (let i = 0; i < b; i++) {
    console.log(a + b * (i + 1));
}