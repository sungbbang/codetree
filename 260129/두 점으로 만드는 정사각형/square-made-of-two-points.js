const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

const minX = Math.min(x1, x2, a1, a2);
const maxX = Math.max(x1, x2, a1, a2);
const minY = Math.min(y1, b1, y2, b2); 
const maxY = Math.max(y1, b1, y2, b2);

const w = maxX - minX;
const h = maxY - minY;

console.log(Math.max(w, h) ** 2);
