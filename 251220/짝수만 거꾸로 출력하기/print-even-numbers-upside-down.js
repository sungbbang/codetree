const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const arr = input[1].split(' ').map(Number);
arr.reverse();

let result = '';
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        result += arr[i] + ' ';
    }
}

console.log(result);