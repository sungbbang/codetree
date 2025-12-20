const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n').map(v => v.split(' ').map(Number));

for (let i = 0; i < 3; i++) {
    let line = '';
    for (let j = 0; j < 3; j++) {
        line += input[i][j] * 3 + ' ';
    }
    console.log(line);
}