const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');

let sum = 0;
for (let el of input) {
    sum += el.length;   
}

console.log(sum);