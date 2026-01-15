const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const n = Number(input[0]);
const points = input.slice(1, 1 + n).map(line => line.split(' ').map(Number));

const MAX = 10;
// 직선 후보: x=0~10, y=0~10 → 총 22개
const lines = [];
for (let i = 0; i <= MAX; i++) {
    lines.push(['x', i]);
    lines.push(['y', i]);
}

// 점이 직선 위에 있는지 체크
function isOnLine(point, line) {
    const [x, y] = point;
    const [type, value] = line;
    return type === 'x' ? x === value : y === value;
}

// 3개 직선이 모든 점을 커버하는지 체크
function coversAll(l1, l2, l3) {
    for (let p of points) {
        if (!isOnLine(p, l1) && !isOnLine(p, l2) && !isOnLine(p, l3)) {
            return false;
        }
    }
    return true;
}
    
// 모든 조합 시도
let flag = false;
for (let i = 0; i < lines.length; i++) {
    for (let j = i; j < lines.length; j++) {
        for (let k = j; k < lines.length; k++) {
            if (coversAll(lines[i], lines[j], lines[k])) {
                console.log(1);
                flag = true;
                break;
            }
        }
    }
}

if (!flag) {
    console.log(0);
}