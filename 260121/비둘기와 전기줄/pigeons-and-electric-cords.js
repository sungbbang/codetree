const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const arr = Array(11).fill(null);

let ans = 0;
for (let [bird, move] of movements) {
    if (arr[bird] === null) {
        arr[bird] = move;
        continue;
    }

    if (move === 0 ) {
        if (arr[bird] === 1) {
            arr[bird] = 0;
            ans++;
        }
    } else {
        if (arr[bird] === 0) {
            arr[bird] = 1;
            ans++;
        }
    }
}

console.log(ans);