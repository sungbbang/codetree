const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(input[0]);
const segments = input.slice(1).map(v => v.trim().split(' ').map(Number));
const arr = Array(101).fill(0);

let ans = false;

for (let skip = 0; skip < n; skip++) {
    let maxX1 = 0;
    let minX2 = Infinity;
    let possible = false;

    for (let i = 0; i < n; i++) {
        if (i === skip) continue;

        maxX1 = Math.max(maxX1, segments[i][0]);
        minX2 = Math.min(minX2, segments[i][1]);
    }

    if (minX2 >= maxX1) {
        possible = true;
    }

    if (possible) {
        ans = true;
        break;
    }
}

if (ans) {
    console.log('Yes');
} else {
    console.log('No');
}