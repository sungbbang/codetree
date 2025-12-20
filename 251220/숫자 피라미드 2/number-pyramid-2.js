const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

let num = 0;
for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j <= i; j++) {
        line += ++num + ' ';
    }
    console.log(line);
}