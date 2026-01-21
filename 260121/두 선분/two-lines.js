const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [x1, x2, x3, x4] = input[0].split(' ').map(Number);

function isOverlap(x1, x2, x3, x4) {
    if (x2 < x3) {
        return false;
    }

    if (x4 < x1) {
        return false;
    }

    return true;
}

let ans = 'nonintersecting';
if (isOverlap(x1, x2, x3, x4)) ans = 'intersecting';

console.log(ans);
