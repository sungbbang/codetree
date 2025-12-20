const fs = require('fs');

const n = Number(fs.readFileSync(0).toString());

console.log(n >= 80 ? 'pass' : `${80 - n} more score`);