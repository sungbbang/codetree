const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < 4; i++) {
    let sum = 0;
    const line = input[i].split(' ').map(Number);
    for (let j = 0; j < 4; j++) {
        sum += line[j];
    }
    console.log(sum);
}