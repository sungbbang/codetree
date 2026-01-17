const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const stones = input[1].split(' ').map(Number);

function isPossible(maxVal) {
    const stonePos = [];
    stones.forEach((stone, i) => {
        if (stone <= maxVal) {
            stonePos.push(i);
        }
    })

    for (let i = 1; i < stonePos.length; i++) {
        if (stonePos[i] - stonePos[i-1] > k) {
            return false;
        }
    }

    return true;
}


let ans = Infinity;
// 1번과 n번 돌은 무조건 밟기 때문에 초기값은 둘중 가장 큰 값으로 설정
for (let i = Math.max(stones[0], stones[n-1]); i <= n; i++) {
    if (isPossible(i)) {
        ans = Math.min(ans, i);
    }
}

console.log(ans);
