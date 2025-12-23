const fs = require('fs');
const arr = fs.readFileSync(0).toString().split(' ').map(Number);

let sum = 0;
arr.forEach(el => sum += el);
console.log(sum);