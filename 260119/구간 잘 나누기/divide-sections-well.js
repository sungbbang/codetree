const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
const numbers = input[1].split(' ').map(Number);

let total = numbers.reduce((acc, curr) => acc + curr, 0);
let ans = 0;
// 가능한 합의 범위를 탐색(가장 큰 값 ~ 모든 값을 더한 값)
for (let i = Math.max(...numbers); i <= total; i++) {
    let cnt = 0;
    let sum = 0;
    let maxSum = 0;
    for (let j = 0; j < n; j++) {
        if (cnt > m-1) break;

        // 현재 숫자와 현재 합을 더한게 구간합보다 크다면
        if (sum + numbers[j] > i) {
            cnt++; // 구간 1 증가
            maxSum = Math.max(maxSum, sum);
            sum = numbers[j];
        } else {
            sum += numbers[j];
        }
    }
    maxSum = Math.max(maxSum, sum);
    if (cnt <= m-1) {
        ans = Math.max(ans, maxSum);
        break;
    }
}

console.log(ans);