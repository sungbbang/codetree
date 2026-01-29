const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = Number(input[0]);
const arr = input[1].trim().split(' ').map(Number);

arr.sort((a, b) => a - b);

// 반으로 나누고 각 배열의 위치의 값과 묶을 때가 정답
let ans = Infinity;
for (let i = 0; i < n; i++) {
    ans = Math.min(ans, arr[i+n] - arr[i]);
}

console.log(ans);