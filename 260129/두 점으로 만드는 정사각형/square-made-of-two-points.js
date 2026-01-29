const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, y1, x2, y2] = input[0];
const [a1, b1, a2, b2] = input[1];

const minX = Math.min(x1, x2, a1, a2);
const maxX = Math.max(x1, x2, a1, a2);
const miny = Math.min(y1, b1, y2, b2); 
const maxy = Math.max(y1, b1, y2, b2);

const w = maxX - minX;
const h = maxy - miny;

console.log(Math.max(w, h) ** 2);