const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const seat = input[1].split('');

// 사람 위치 저장
const people = [];
for (let i = 0; i < n; i++) {
    if (seat[i] === '1') people.push(i);
}

let ans = 0;

for (let i = 0; i < n; i++) {
    if (seat[i] === '1') continue;
    
    // i에 새 사람 추가 후 정렬
    const newPeople = [...people, i].sort((a, b) => a - b);
    
    // 모든 인접 거리 중 최솟값 계산
    let minDist = Infinity;
    for (let j = 0; j < newPeople.length - 1; j++) {
        minDist = Math.min(minDist, newPeople[j + 1] - newPeople[j]);
    }
    
    ans = Math.max(ans, minDist);
}

console.log(ans);