const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seat = input[1].split('');

let ans = 0;

for (let i = 0; i < n; i++) {
    if (seat[i] === '1') continue;  // 이미 사람 있으면 스킵
    
    // 왼쪽에서 가장 가까운 사람 찾기
    let leftDist = Infinity;
    for (let j = i - 1; j >= 0; j--) {
        if (seat[j] === '1') {
            leftDist = i - j;
            break;
        }
    }
    
    // 오른쪽에서 가장 가까운 사람 찾기
    let rightDist = Infinity;
    for (let k = i + 1; k < n; k++) {
        if (seat[k] === '1') {
            rightDist = k - i;
            break;
        }
    }
    
    // 양쪽 중 최솟값이 이 자리의 거리두기 점수
    const minDist = Math.min(leftDist, rightDist);
    ans = Math.max(ans, minDist);
}

console.log(ans);