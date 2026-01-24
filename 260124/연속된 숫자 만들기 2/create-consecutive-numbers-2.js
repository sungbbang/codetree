const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arr = input[0].split(" ").map(Number);
arr.sort((a, b) => a - b);

const gap1 = Math.abs(arr[0] - arr[1]);
const gap2 = Math.abs(arr[1] - arr[2]);

if (gap1 === 1 && gap2 === 1) console.log(0);
else if (gap1 === 2 || gap2 === 2) console.log(1);
else console.log(2);

