const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seats = input[1].split("").map(Number);

let ans = 0;
for (let i = 0; i < n; i++) {
    if (seats[i] === 1) {
        for (let j = i+1; j < n; j++) {
            if (seats[j] === 1) {
                ans = Math.max(ans, j - i);
                break;
            }
        }
    }
}

console.log(Math.floor(ans / 2));