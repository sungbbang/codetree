const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const points = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

let ans = Infinity;
for (let i = 2; i <= 100; i+=2) {
    for (let j = 2; j <= 100; j+=2) {
        const count = [0, 0, 0, 0];
        for (let [x, y] of points) {
            if (x < i && y < j) count[0]++;
            else if (x > i && y < j) count[1]++;
            else if (x > i && y > j) count[2]++;
            else if (x < i && y > j) count[3]++;
        }
        const maxCount = Math.max(...count);
        ans = Math.min(ans, maxCount);
    }
}

console.log(ans);