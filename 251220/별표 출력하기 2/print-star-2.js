const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = n; i > 0; i--) {
    let line = '';
    for (let j = 0; j < i; j++) {
        line += '* ';
    }
    console.log(line);
}