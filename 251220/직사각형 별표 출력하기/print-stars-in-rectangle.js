const fs = require('fs');
const [n, m] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < m; j++) {
        line += '* ';
    }
    console.log(line);
}