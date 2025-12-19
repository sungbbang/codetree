const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().trim().split(' ').map(v => Number(v));

console.log(b, a);