const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [a, b] = input[0].split(' ').map(Number);
const [c, d] = input[1].split(' ').map(Number);

const start = Math.min(a, b, c, d);
const end = Math.max(a, b, c, d);

console.log(end - start);