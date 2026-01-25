const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seats = input[1].split('').map(Number);

let already = Array(n).fill(false);
for (let i = 0; i < n; i++) {
    if (seats[i] === 1) already[i] = true;
}

let ans = 0;
for (let i = 0; i < n; i++) {
    let diff = Infinity;

    if (!already[i]) {
        seats[i] = 1; // 새로운 사람 착석 처리

        // 배치했을 때, 가장 가까운 거리 계산
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (j === k) continue;
                if (seats[j] === 1 && seats[k] === 1) {
                    diff = Math.min(diff, Math.abs(j - k));
                }
            }
        }

        ans = Math.max(ans, diff);
        seats[i] = 0; // 다시 원래대로 돌리기
    }
}

console.log(ans);