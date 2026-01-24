const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seats = input[1].split("").map(Number);

let maxDiff = 0;
let minDiff = Infinity;
for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
        for (let j = i+1; j < n; j++) {
            if (seats[j] === 1) {
                if (j - i === 1) {
                    console.log(1);
                    process.exit();
                }
                minDiff = Math.min(minDiff, j - i);
                maxDiff = Math.max(maxDiff, j - i);
                break;
            }
        }
    }
}

minDiff = Math.min(minDiff, Math.floor(maxDiff/2));
console.log(minDiff);