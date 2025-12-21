const fs = require('fs');
const [front, mid, back] = fs.readFileSync(0).toString().trim().split('-');

console.log(front + '-' + back + '-' + mid);