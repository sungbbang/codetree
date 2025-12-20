const fs = require('fs');
const n = Number(fs.readFileSync(0).toString().trim());

const arr = Array(n).fill(0).map(() => Array(n).fill(0));

for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i % 2 === 0) {
            arr[j][i] = j + 1;
        } else {
            arr[j][i] = n - j;
        }
    }
}

for (let row of arr) {
    let line = '';
    for (let el of row) {
        line += el;
    }
    console.log(line);
}