const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let [n, b] = input[0].split(' ').map(Number);
const arr = [];

while (n > 0) {
    arr.push(n % b);
    n = Math.floor(n / b);
}

console.log(arr.reverse().join(''));