const fs = require('fs');
const n = Number(fs.readFileSync(0).toString());

for (let i = 1; i <= n; i++) {
    let line = '';
    for (let j = 1; j <= n; j++) {
        line += `${i} * ${j} = ${i * j}`;
        if (j < n) {
            line += ', ';
        }
    }
    console.log(line);
}