const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

let minNum = 101;
let maxNum = 0;
const numbers = Array(101).fill(0);
for (let num of arr) {
    minNum = Math.min(minNum, num);
    maxNum = Math.max(maxNum, num);
    numbers[num]++;
}

for (let i = minNum+1; i <= maxNum; i++) {
    if (numbers[i]) {
        if (numbers[i] === 1) {
            console.log(arr.indexOf(i) + 1);
            process.exit();
        }
    }
}

console.log(-1);