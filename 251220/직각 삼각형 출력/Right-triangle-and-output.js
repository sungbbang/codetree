const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < 2 * i + 1; j++) {
        line += '*';
    }
    console.log(line);
}