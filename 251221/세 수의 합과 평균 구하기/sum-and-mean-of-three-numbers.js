const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const sum = a + b + c;

console.log(sum);
console.log(parseInt(sum / 3));