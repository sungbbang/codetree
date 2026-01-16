const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seat = input[1].split('');

function getMinDist() {
    let dist = n;

    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (seat[i] === '1' && seat[j] === '1') {
                dist = Math.min(dist, Math.abs(j - i));
            }
        }
    }

    return dist;
}


let ans = 0;
for (let i = 0; i < n; i++) {
    if (seat[i] === '0') {
        seat[i] = '1';
        ans = Math.max(ans, getMinDist());
        seat[i] = '0';
    }
}

console.log(ans);