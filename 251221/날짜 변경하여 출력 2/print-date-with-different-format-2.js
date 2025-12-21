const fs = require('fs');
const [m, d, y] = fs.readFileSync(0).toString().trim().split('-').map(Number);

console.log(`${y}.${m}.${d}`);