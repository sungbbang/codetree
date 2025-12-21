const fs = require('fs');
const [s, t] = fs.readFileSync(0).toString().trim().split('\n');

console.log(t);
console.log(s);