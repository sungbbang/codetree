const fs = require("fs");
const [a, b, c] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let res1 = 0;
let res2 = 0;
if (a <= b && a <= c) {
    res1 = 1;
}

if (a == b && b == c) {
    res2 = 1;
}

console.log(res1, res2)