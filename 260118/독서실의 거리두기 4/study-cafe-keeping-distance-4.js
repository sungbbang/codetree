const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seat = input[1].split('').map(Number);

function calcDiff() {
    let diff = Infinity;
    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (seat[i] === 1 && seat[j] === 1) {
                diff = Math.min(diff, j - i);
                break;
            }
        }
    }
    
    return diff;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    for (let j = i+1; j < n; j++) {
        if (seat[i] === 0 && seat[j] === 0) {
            seat[i] = 1;
            seat[j] = 1;
            ans = Math.max(ans, calcDiff());
            seat[i] = 0;
            seat[j] = 0;
        }
    }
}

console.log(ans);