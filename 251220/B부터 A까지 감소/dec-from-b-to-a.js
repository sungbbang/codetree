const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

let result = '';
for (let i = b; i >= a; i--) {
    result += i + ' ';
}

console.log(result);