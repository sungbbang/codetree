const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const movements = input.slice(1, n + 1).map(line => line.split(' ').map(Number));

const arr = Array(11).fill(null).map(v => Array(2).fill(0));

for (let [birdNum, move] of movements) {
    arr[birdNum][move]++;
}

let ans = 0;
for (let el of arr) {
    const [l, r] = el;
    
    if (l === 0 || r === 0) continue;

    ans += Math.min(l, r);
}

console.log(ans);