const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);

const arr1 = Array(n).fill(0).map(() => Array(m).fill(0));
const arr2 = Array(n).fill(0).map(() => Array(m).fill(0));

for (let i = 0; i < n; i++) {
    arr1[i] = input[i+1].split(' ').map(Number);
}

for (let i = 0; i < n; i++) {
    arr2[i] = input[i+n+1].split(' ').map(Number);
}

for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < m; j++) {
        if (arr1[i][j] === arr2[i][j]) {
            line += 0 + ' ';
        } else {
            line += 1 + ' ';
        }
    }
    console.log(line);
}