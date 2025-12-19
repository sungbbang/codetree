const fs = require('fs');

const [a, b, c] = fs.readFileSync(0).toString().trim().split('\n').map(v => Number(v).toFixed(3));

console.log(a);
console.log(b);
console.log(c);