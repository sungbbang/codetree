const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(v => Number(v ** 2));
let result = '';
for (let i = 0; i < arr.length; i++) {
    result += arr[i] + ' ';
}

console.log(result);