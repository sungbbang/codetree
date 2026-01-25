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
    let find = false;

    // 좌석에 사람이 없다면, 새로운 한명을 배치 가능
    if (!already[i]) {
        // console.log(`${i}번에 새로운 사람이 앉는 경우`);
        for (let j = 0; j < n; j++) {
            if (i === j) continue;

            // 이미 사람이 앉아있는 자리와의 거리 계산
            if (already[j]) {
                diff = Math.min(diff, Math.abs(j - i));
                find = true;
            }
        }
        // console.log(`${i}번에서 기존 사람들과 가장 가까운 거리: ${diff}`);
        if (find) {
            ans = Math.max(ans, diff);
        }
    }
}

console.log(ans);