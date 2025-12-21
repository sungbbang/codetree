const fs = require('fs');

const n = Number(fs.readFileSync(0).toString().trim());

console.log(`Your score is ${n} point.`);
