const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const [x1, y1, x2, y2] = input[0].split(' ').map(Number);
const [a1, b1, a2, b2] = input[1].split(' ').map(Number);

const minX = Math.min(x1, a1);
const minY = Math.min(y1, b1);
const maxX = Math.max(x2, a2);
const maxY = Math.max(y2, b2);

const width = maxX - minX;
const height = maxY - minY;

console.log(width * height);