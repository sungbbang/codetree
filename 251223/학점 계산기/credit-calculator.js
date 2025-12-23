const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const arr = input[1].split(' ').map(Number);

let sum = 0;
arr.forEach(el => sum += el);

const avg = (sum / n).toFixed(1);
console.log(avg);
if (avg >= 4.0) console.log('Perfect');
else if (avg >= 3.0) console.log('Good');
else console.log('Poor');