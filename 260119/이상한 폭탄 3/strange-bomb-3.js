const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const bombs = input.slice(1).map(Number);
const MAX = 1000000;
const arr = Array(MAX+1).fill(0);

for (let i = 0; i < n; i++) {
    let prev = i;
    let num = bombs[i];
    let cnt = [prev];
    
    if (num === -1) continue;

    for (let j = i+1; j < n; j++) {
        // 다음 폭탄 거리가 k보다 크면 현재 폭탄 탐색 중지
        if (j - prev > k) break;

        // 이미 터진 폭탄이면 다음 폭탄 탐색
        if (bombs[j] === -1) continue;

        // 현재 폭탄과 같은 정수라면
        if (num === bombs[j]) {
            cnt.push(j)
            bombs[j] = -1; // 다른 탐색 때 체크되지 않게 하기
            prev = j;
        }
    }
    if (cnt.length >= 2) {
        arr[num] += cnt.length;
    }
}

let ans = 0;
for (let i = 0; i <= MAX; i++) {
    if (arr[i] > ans) {
        ans = Math.max(ans, i);
    }
}

console.log(ans);