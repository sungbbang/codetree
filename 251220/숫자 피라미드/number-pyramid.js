const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += i + ' ';
    }
    console.log(line);
}