const fs = require('fs');
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

const sum = a + b + c;
const avg = sum / 3;

console.log(sum);
console.log(avg);
console.log(sum - avg);