const fs = require('fs');

const [a, b] = fs.readFileSync(0).toString().split(' ').map(v => Number(v));

console.log(a < b ? 1 : 0, a === b ? 1 : 0);