const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

function getDiff(nums) {
    let sum = 0;
    for (let i = 0; i < 2; i++) {
        sum += Math.abs(nums[i] - nums[i+1]);
    }
    return sum;
}

let minSum = Infinity;
let ans = 0;
for (let i = 2; i <= 100; i+=2) {
    for (let j = 2; j <= 100; j+=2) {
        const count = [0, 0, 0, 0];
        for (let [x, y] of points) {
            if (x < i && y < j) count[0]++;
            else if (x > i && y < j) count[1]++;
            else if (x > i && y > j) count[2]++;
            else if (x < i && y > j) count[3]++;
        }
        if (minSum > getDiff(count)) {
            ans = Math.max(...count);
        }
        minSum = Math.min(minSum, getDiff(count));
    }
}

console.log(ans);