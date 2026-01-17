const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const [n, k] = input[0].split(' ').map(Number);
const stones = input[1].split(' ').map(Number);

function isPossible(maxNum) {
    const stonePos = [];

    // 최댓값인 수보다 수가 작을 때만 돌의 위치를 기록
    stones.forEach((stone, idx) => {
        if (stone <= maxNum) {
            stonePos.push(idx);
        }
    })

    // 돌의 위치들이 k 이내의 거리를 갖는지 확인
    for (let i = 1; i < stonePos.length; i++) {
        if (stonePos[i] - stonePos[i-1] > k) {
            return false;
        }
    }

    return true;
}


let ans = Infinity;
// 최댓값부터 값을 작게 하면서 k 이내로 점프하는게 가능한지 체크
for (let i = n; i >= 1; i--) {
    if (isPossible(i)) {
        ans = Math.min(i, ans);
    } else {
        break;
    }
}

console.log(ans);