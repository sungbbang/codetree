const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);

arr.sort((a, b) => a - b);
const gap1 = arr[1] - arr[0];
const gap2 = arr[2] - arr[1];

console.log(Math.max(gap1, gap2) - 1);