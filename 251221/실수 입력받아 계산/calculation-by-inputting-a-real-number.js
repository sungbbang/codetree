const fs = require('fs');
const [a, b] = fs.readFileSync(0).toString().split('\n').map(Number);

console.log((a + b).toFixed(2));