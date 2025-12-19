const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split(' ');

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

const sum = a + b + c;
const avg = sum / 3;

console.log(sum);
console.log(avg);
console.log(sum - avg);