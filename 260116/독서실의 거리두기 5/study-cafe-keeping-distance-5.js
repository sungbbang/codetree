const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seat = input[1].split('');

// 사람 있는 위치들 저장
const people = [];
for (let i = 0; i < n; i++) {
    if (seat[i] === '1') people.push(i);
}

let ans = 0;

// 각 빈 자리에 앉았을 때 최소 거리 계산
for (let i = 0; i < n; i++) {
    if (seat[i] === '1') continue;  // 이미 사람 있으면 스킵
    
    let minDist = Infinity;
    for (let p of people) {
        minDist = Math.min(minDist, Math.abs(i - p));
    }
    
    ans = Math.max(ans, minDist);
}

console.log(ans);
