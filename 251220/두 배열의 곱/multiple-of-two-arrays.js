const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr1 = Array(3).fill(0).map(() => Array(3).fill(0));
const arr2 = Array(3).fill(0).map(() => Array(3).fill(0));

for (let i = 0; i < 3; i++) {
    arr1[i] = input[i].split(' ').map(Number);
}

for (let i = 0; i < 3; i++) {
    arr2[i] = input[i+4].split(' ').map(Number);
}

for (let i = 0; i < 3; i++) {
    let line = '';
    for (let j = 0; j < 3; j++) {
        line += arr1[i][j] * arr2[i][j] + ' ';
    }
    console.log(line);
}